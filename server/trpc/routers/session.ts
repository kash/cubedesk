import {TRPCError} from '@trpc/server';
import {z} from 'zod';
import {
	bulkCreateSessions,
	createSession,
	deleteSession,
	getSessionById,
	getSessionsByIds,
	getSessionsByUserId,
	moveSolvesBetweenSessions,
	updateOrderOfSessions,
	updateOrderOfSessionsForUser,
	updateSession,
} from '@/server/models/session';
import {protectedProcedure, router} from '@/server/trpc/trpc';

const sessionInputSchema = z.object({
	id: z.string().optional(),
	name: z.string(),
	order: z.number().int().optional(),
});

async function getOwnedSessionById(userId: string, id: string) {
	const session = await getSessionById(id);

	if (!session || session.user_id !== userId) {
		throw new TRPCError({
			code: 'NOT_FOUND',
			message: 'Invalid session ID',
		});
	}

	return session;
}

export const sessionRouter = router({
	list: protectedProcedure.query(({ctx}) => getSessionsByUserId(ctx.user.id)),

	create: protectedProcedure
		.input(
			z.object({
				name: z.string().optional(),
			})
		)
		.mutation(async ({ctx, input}) => {
			const newSession = await createSession(ctx.user.id, {
				name: input.name || 'New Session',
			});
			await updateOrderOfSessionsForUser(ctx.user.id);

			return newSession;
		}),

	update: protectedProcedure
		.input(
			z.object({
				id: z.string(),
				data: z.object({
					name: z.string().optional(),
					order: z.number().int().optional(),
				}),
			})
		)
		.mutation(async ({ctx, input}) => {
			await getOwnedSessionById(ctx.user.id, input.id);

			return updateSession(input.id, input.data);
		}),

	reorder: protectedProcedure
		.input(
			z.object({
				ids: z.array(z.string()),
			})
		)
		.mutation(async ({ctx, input}) => {
			const sessions = await getSessionsByIds(ctx.user.id, input.ids);
			if (sessions.length !== input.ids.length) {
				throw new TRPCError({
					code: 'NOT_FOUND',
					message: 'Invalid session ID list',
				});
			}

			const sessionsById = new Map(sessions.map((session) => [session.id, session]));
			await updateOrderOfSessions(input.ids.map((id) => sessionsById.get(id)).filter((session) => !!session));
		}),

	delete: protectedProcedure
		.input(
			z.object({
				id: z.string(),
			})
		)
		.mutation(async ({ctx, input}) => {
			const session = await getOwnedSessionById(ctx.user.id, input.id);

			await deleteSession(session.id);
			await updateOrderOfSessionsForUser(ctx.user.id);

			return session;
		}),

	merge: protectedProcedure
		.input(
			z.object({
				oldSessionId: z.string(),
				newSessionId: z.string(),
			})
		)
		.mutation(async ({ctx, input}) => {
			const oldSession = await getOwnedSessionById(ctx.user.id, input.oldSessionId);
			const newSession = await getOwnedSessionById(ctx.user.id, input.newSessionId);

			await moveSolvesBetweenSessions(ctx.user.id, oldSession.id, newSession.id);
			await deleteSession(oldSession.id);
			await updateOrderOfSessionsForUser(ctx.user.id);

			return newSession;
		}),

	bulkCreate: protectedProcedure
		.input(
			z.object({
				sessions: z
					.array(sessionInputSchema)
					.min(1, 'Must include at least one session')
					.max(1000, 'You cannot import that many sessions'),
			})
		)
		.mutation(async ({ctx, input}) => {
			await bulkCreateSessions(ctx.user.id, input.sessions);
			await updateOrderOfSessionsForUser(ctx.user.id);
		}),
});
