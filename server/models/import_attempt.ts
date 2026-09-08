import type {ImportAttempt} from '@/generated/prisma/client';
import type {SessionInput} from '@/types/session';
import type {SolveInput} from '@/types/solve';
import {getPrisma} from '@/server/database';
import {prepareImportedSolves} from '@/server/models/solve';
import {logger} from '@/server/services/logger';
import {TRPCError} from '@trpc/server';
import {createHash} from 'node:crypto';

export interface ImportInput {
	attemptId: string;
	source: 'cstimer' | 'cubedesk';
	sessions: SessionInput[];
	solves: SolveInput[];
}

function outcome(attempt: ImportAttempt) {
	return {
		attemptId: attempt.id,
		status: attempt.status,
		savedSessions: attempt.saved_sessions,
		savedSolves: attempt.saved_solves,
		failureCode: attempt.failure_code,
	};
}

/** The unique attempt ID is claimed before any data is written; only its creator executes. */
export async function runImport(userId: string, input: ImportInput, db = getPrisma()) {
	const requestHash = createHash('sha256')
		.update(
			JSON.stringify({source: input.source, sessions: input.sessions, solves: input.solves}),
		)
		.digest('hex');
	try {
		await db.importAttempt.create({
			data: {
				id: input.attemptId,
				user_id: userId,
				source: input.source,
				request_hash: requestHash,
				requested_sessions: input.sessions.length,
				requested_solves: input.solves.length,
			},
		});
	} catch (error) {
		if ((error as {code?: string}).code === 'P2002') {
			const existing = await db.importAttempt.findUniqueOrThrow({
				where: {id: input.attemptId},
			});
			if (existing.user_id !== userId || existing.request_hash !== requestHash) {
				throw new TRPCError({
					code: 'CONFLICT',
					message:
						'This import ID is already in use. Reload the import file to start a new attempt.',
				});
			}
			return outcome(existing);
		}
		logger.error('Could not record import attempt', {
			userId,
			errorMessage: error instanceof Error ? error.message : String(error),
		});
		throw new TRPCError({
			code: 'INTERNAL_SERVER_ERROR',
			message: 'Unable to start import. Please try again.',
		});
	}

	try {
		const result = await db.$transaction(
			async (tx) => {
				const newIds = input.sessions
					.map((session) => session.id)
					.filter((id): id is string => Boolean(id));
				if (new Set(newIds).size !== newIds.length)
					throw new TRPCError({code: 'BAD_REQUEST', message: 'Duplicate session IDs'});
				const references = [
					...new Set(
						input.solves
							.map((solve) => solve.session_id)
							.filter((id): id is string => Boolean(id)),
					),
				];
				const externalIds = references.filter((id) => !newIds.includes(id));
				const owned = externalIds.length
					? await tx.session.count({where: {id: {in: externalIds}, user_id: userId}})
					: 0;
				if (owned !== externalIds.length)
					throw new TRPCError({
						code: 'BAD_REQUEST',
						message: 'Invalid session reference',
					});
				const sessions = await tx.session.createMany({
					data: input.sessions.map((session) => ({...session, user_id: userId})),
				});
				const solves = await tx.solve.createMany({
					data: prepareImportedSolves(userId, input.solves),
				});
				const ordered = await tx.session.findMany({
					where: {user_id: userId},
					orderBy: [{order: 'asc'}, {created_at: 'desc'}, {id: 'asc'}],
					select: {id: true},
				});
				for (const [order, session] of ordered.entries()) {
					await tx.session.update({where: {id: session.id}, data: {order}});
				}
				if (solves.count > 0)
					await tx.userFeatureState.upsert({
						where: {user_id: userId},
						create: {user_id: userId, import_prompt_hidden: true},
						update: {import_prompt_hidden: true},
					});
				return tx.importAttempt.update({
					where: {id: input.attemptId},
					data: {
						status: 'succeeded',
						saved_sessions: sessions.count,
						saved_solves: solves.count,
						completed_at: new Date(),
					},
				});
			},
			{timeout: 120_000, maxWait: 5_000},
		);
		return outcome(result);
	} catch (error) {
		const failureCode =
			error instanceof TRPCError && error.code === 'BAD_REQUEST'
				? 'INVALID_SESSION_REFERENCE'
				: 'IMPORT_FAILED';
		logger.error('Import failed', {
			attemptId: input.attemptId,
			userId,
			failureCode,
			errorMessage: error instanceof Error ? error.message : String(error),
		});
		// Conditional update preserves success if the transaction committed but its response was lost.
		await db.importAttempt.updateMany({
			where: {id: input.attemptId, status: 'pending'},
			data: {status: 'failed', failure_code: failureCode, completed_at: new Date()},
		});
		return outcome(await db.importAttempt.findUniqueOrThrow({where: {id: input.attemptId}}));
	}
}
