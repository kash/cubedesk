import {createSolveMethodSteps} from '@/server/models/solve_method_step';
import {getSolveSteps} from '@/server/util/solve/solve_method';
import type {PrismaClient} from '@/generated/prisma/client';
import {TRPCError} from '@trpc/server';
import {z} from 'zod';
import {randomUUID} from 'crypto';

const timestamp = z.number().int().nonnegative().max(Number.MAX_SAFE_INTEGER).nullable();
export const demoImportInput = z
	.object({
		solves: z
			.array(
				z.object({
					id: z.uuid(),
					raw_time: z.number().nonnegative(),
					cube_type: z.string().min(1),
					scramble: z.string(),
					started_at: timestamp,
					ended_at: timestamp,
					dnf: z.boolean(),
					plus_two: z.boolean(),
					notes: z.string().nullable(),
					inspection_time: z.number().nonnegative().nullable(),
					is_smart_cube: z.boolean(),
					smart_turns: z.string().nullable(),
					smart_turn_count: z.number().int().nonnegative().nullable(),
					smart_put_down_time: z.number().nonnegative().nullable(),
				}),
			)
			.min(1)
			.max(10000),
		destination: z.discriminatedUnion('kind', [
			z.object({kind: z.literal('existing'), sessionId: z.string().min(1)}),
			z.object({kind: z.literal('new'), name: z.string().trim().min(1).max(100)}),
		]),
	})
	.refine(({solves}) => new Set(solves.map((solve) => solve.id)).size === solves.length, {
		message: 'Duplicate solve IDs',
	});

export async function importDemoSolves(
	db: PrismaClient,
	userId: string,
	input: z.infer<typeof demoImportInput>,
) {
	return db.$transaction(async (tx) => {
		// Serialize imports for this account, including simultaneous retries.
		await tx.userAccount.update({
			where: {id: userId},
			// Force the signed-in reload (and other browsers) to fetch the imported data.
			data: {last_solve_at: new Date(), offline_hash: randomUUID()},
		});
		const existing = await tx.solve.findMany({
			where: {id: {in: input.solves.map((solve) => solve.id)}},
			select: {id: true, user_id: true, session_id: true},
		});
		if (existing.length) {
			const sessionId = existing[0].session_id;
			if (
				existing.length !== input.solves.length ||
				!sessionId ||
				existing.some((solve) => solve.user_id !== userId || solve.session_id !== sessionId)
			) {
				throw new TRPCError({
					code: 'CONFLICT',
					message: 'These solves could not be imported. Please try again.',
				});
			}
			return {sessionId, count: existing.length};
		}

		let sessionId: string;
		if (input.destination.kind === 'existing') {
			const session = await tx.session.findFirst({
				where: {id: input.destination.sessionId, user_id: userId},
			});
			if (!session)
				throw new TRPCError({
					code: 'NOT_FOUND',
					message: 'That session is no longer available. Choose another session.',
				});
			sessionId = session.id;
		} else {
			await tx.session.updateMany({where: {user_id: userId}, data: {order: {increment: 1}}});
			const session = await tx.session.create({
				data: {user_id: userId, name: input.destination.name, order: 0},
			});
			sessionId = session.id;
		}
		await tx.solve.createMany({
			data: input.solves.map((solve) => ({
				...solve,
				user_id: userId,
				session_id: sessionId,
				time: solve.dnf ? -1 : solve.raw_time + (solve.plus_two ? 2 : 0),
				from_timer: true,
				bulk: false,
			})),
		});
		for (const solve of input.solves) {
			if (!solve.is_smart_cube) continue;
			let steps: ReturnType<typeof getSolveSteps>;
			try {
				steps = getSolveSteps(JSON.parse(solve.smart_turns ?? ''));
			} catch {
				// Match ordinary solve creation when smart-cube reconstruction fails.
				await tx.solve.update({where: {id: solve.id}, data: {is_smart_cube: false}});
				continue;
			}
			await createSolveMethodSteps(solve, steps, tx);
		}
		await tx.setting.update({where: {user_id: userId}, data: {session_id: sessionId}});
		return {sessionId, count: input.solves.length};
	});
}
