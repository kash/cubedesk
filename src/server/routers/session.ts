import {z} from 'zod';
import {createTRPCRouter, userProcedure} from '@/server/trpc';
import {TRPCError} from '@trpc/server';
import uniqid from 'uniqid';
import {getPrismaClient} from '@/server/services/database';

// Zod schemas matching the GraphQL types
const SessionSchema = z.object({
	id: z.string(),
	name: z.string(),
	user_id: z.string(),
	order: z.number(),
	demo_mode: z.boolean().optional(),
	created_at: z.date(),
});

const SessionInputSchema = z.object({
	id: z.string().optional(),
	name: z.string(),
	order: z.number(),
});

type Session = z.infer<typeof SessionSchema>;
type SessionInput = z.infer<typeof SessionInputSchema>;

async function createSession(userId: string, input: SessionInput) {
	const prisma = getPrismaClient();

	return prisma.session.create({
		data: {
			id: uniqid('se-'),
			...input,
			user_id: userId,
			order: 0,
		},
	});
}

async function bulkCreateSessions(userId: string, input: SessionInput[]) {
	const prisma = getPrismaClient();

	const data = [];
	for (const ses of input) {
		data.push({
			...ses,
			user_id: userId,
		});
	}

	return prisma.session.createMany({
		data,
	});
}

export async function getSessionById(id: string) {
	return getPrismaClient().session.findUnique({
		where: {
			id,
		},
	});
}

async function updateSession(session: Session, input: SessionInput) {
	const prisma = getPrismaClient();

	return prisma.session.update({
		where: {
			id: session.id,
		},
		data: input,
	});
}

async function deleteSession(session: Session) {
	const prisma = getPrismaClient();

	return prisma.session.delete({
		where: {
			id: session.id,
		},
	});
}

async function getSessionsByUser(userId: string) {
	return getPrismaClient().session.findMany({
		where: {
			user_id: userId,
		},
		orderBy: [
			{
				order: 'asc',
			},
			{
				created_at: 'desc',
			},
		],
	});
}

async function mergeSessions(oldSession: Session, newSession: Session, userId: string) {
	const prisma = getPrismaClient();

	return prisma.solve.updateMany({
		where: {
			user_id: userId,
			session_id: oldSession.id,
		},
		data: {
			session_id: newSession.id,
		},
	});
}

async function getSessionsByIds(userId: string, ids: string[]) {
	return getPrismaClient().session.findMany({
		where: {
			user_id: userId,
			id: {
				in: ids,
			},
		},
	});
}

async function updateOrderOfSessionsForUser(userId: string) {
	const sessions = await getSessionsByUser(userId);
	return updateOrderOfSessions(sessions);
}

async function updateOrderOfSessions(sessions: Session[]): Promise<Session[]> {
	const txs = [];
	const prisma = getPrismaClient();

	for (let i = 0; i < sessions.length; i += 1) {
		const session = sessions[i];

		const updateTx = prisma.session.update({
			where: {
				id: session.id,
			},
			data: {
				order: i,
			},
		});

		txs.push(updateTx);
	}

	return prisma.$transaction(txs);
}

export const sessionRouter = createTRPCRouter({
	sessions: userProcedure
		.output(z.array(SessionSchema))
		.query(async ({ctx}) => {
			return getSessionsByUser(ctx.me.id);
		}),

	createSession: userProcedure
		.input(SessionInputSchema)
		.output(SessionSchema)
		.mutation(async ({ctx, input}) => {
			const sessions = await getSessionsByUser(ctx.me.id);
			input.order = sessions.length;

			if (!input.name) {
				input.name = 'New Session';
			}

			const newSession = await createSession(ctx.me.id, input);
			await updateOrderOfSessionsForUser(ctx.me.id);

			return newSession as any;
		}),

	updateSession: userProcedure
		.input(z.object({
			id: z.string(),
			input: SessionInputSchema,
		}))
		.output(SessionSchema)
		.mutation(async ({ctx, input}) => {
			const session = await getSessionById(input.id);

			if (!session || session.user_id !== ctx.me.id) {
				throw new TRPCError({code: 'NOT_FOUND', message: 'Invalid session ID'});
			}

			return updateSession(session as any, input.input) as any;
		}),

	reorderSessions: userProcedure
		.input(z.object({
			ids: z.array(z.string()),
		}))
		.output(z.void())
		.mutation(async ({ctx, input}) => {
			const sessions = await getSessionsByIds(ctx.me.id, input.ids);
			if (sessions.length !== input.ids.length) {
				throw new TRPCError({code: 'NOT_FOUND', message: 'Invalid session ID list'});
			}

			const sessionsMap: Record<string, any> = {};
			for (const session of sessions) {
				sessionsMap[session.id] = session;
			}

			const orderedSessions = [];
			for (const id of input.ids) {
				orderedSessions.push(sessionsMap[id]);
			}

			await updateOrderOfSessions(orderedSessions);
		}),

	deleteSession: userProcedure
		.input(z.object({
			id: z.string(),
		}))
		.output(SessionSchema)
		.mutation(async ({ctx, input}) => {
			const session = await getSessionById(input.id);

			if (!session || session.user_id !== ctx.me.id) {
				throw new TRPCError({code: 'NOT_FOUND', message: 'Invalid session ID'});
			}

			await deleteSession(session as any);
			await updateOrderOfSessionsForUser(ctx.me.id);

			return session as any;
		}),

	mergeSessions: userProcedure
		.input(z.object({
			oldSessionId: z.string(),
			newSessionId: z.string(),
		}))
		.output(SessionSchema)
		.mutation(async ({ctx, input}) => {
			const oldSession = await getSessionById(input.oldSessionId);
			const newSession = await getSessionById(input.newSessionId);

			if (!oldSession || !newSession || oldSession.user_id !== ctx.me.id || newSession.user_id !== ctx.me.id) {
				throw new TRPCError({code: 'NOT_FOUND', message: 'Invalid session IDs'});
			}

			await mergeSessions(oldSession as any, newSession as any, ctx.me.id);
			await deleteSession(oldSession as any);
			await updateOrderOfSessionsForUser(ctx.me.id);

			return newSession as any;
		}),

	bulkCreateSessions: userProcedure
		.input(z.object({
			sessions: z.array(SessionInputSchema),
		}))
		.output(z.void())
		.mutation(async ({ctx, input}) => {
			if (!input.sessions || !input.sessions.length) {
				throw new TRPCError({code: 'BAD_REQUEST', message: 'Must include at least one session'});
			}

			if (input.sessions.length > 1000) {
				throw new TRPCError({code: 'BAD_REQUEST', message: 'You cannot import that many sessions'});
			}

			await bulkCreateSessions(ctx.me.id, input.sessions);
			await updateOrderOfSessionsForUser(ctx.me.id);
		}),
});