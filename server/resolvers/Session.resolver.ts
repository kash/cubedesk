import {Arg, Authorized, Ctx, Mutation, Query, Resolver} from 'type-graphql';
import {GraphQLContext} from '../@types/interfaces/server.interface';
import {Role} from '../middlewares/auth';
import {Session, SessionInput} from '../schemas/Session.schema';
import GraphQLError from '../util/graphql_error';
import {ErrorCode} from '../constants/errors';
import uniqid from 'uniqid';
import {GraphQLVoid} from 'graphql-scalars';
import {getPrisma} from '../database';
import {UserAccount} from '../schemas/UserAccount.schema';

async function createSession(context: GraphQLContext, input: SessionInput) {
	const {prisma} = context;

	return prisma.session.create({
		data: {
			id: uniqid('se-'),
			...input,
			user_id: context.user.id,
			order: 0,
		},
	});
}

async function bulkCreateSessions(context: GraphQLContext, input: SessionInput[]) {
	const {prisma} = context;

	const data = [];
	for (const ses of input) {
		data.push({
			...ses,
			user_id: context.user.id,
		});
	}

	return prisma.session.createMany({
		data,
	});
}

export async function getSessionById(id: string) {
	return getPrisma().session.findUnique({
		where: {
			id,
		},
	});
}

async function updateSession(context: GraphQLContext, session: Session, input: SessionInput) {
	const {prisma} = context;

	return prisma.session.update({
		where: {
			id: session.id,
		},
		data: input,
	});
}

async function deleteSession(context: GraphQLContext, session: Session) {
	const {prisma} = context;

	return prisma.session.delete({
		where: {
			id: session.id,
		},
	});
}

async function getSessionsByUser(user: UserAccount) {
	return getPrisma().session.findMany({
		where: {
			user_id: user.id,
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

async function mergeSessions(context: GraphQLContext, oldSession: Session, newSession: Session) {
	const {prisma} = context;

	return prisma.solve.updateMany({
		where: {
			user_id: context.user.id,
			session_id: oldSession.id,
		},
		data: {
			session_id: newSession.id,
		},
	});
}

async function getSessionsByIds(user: UserAccount, ids: string[]) {
	return getPrisma().session.findMany({
		where: {
			user_id: user.id,
			id: {
				in: ids,
			},
		},
	});
}

async function updateOrderOfSessionsForUser(user: UserAccount) {
	const sessions = await getSessionsByUser(user);
	return updateOrderOfSessions(sessions);
}

async function updateOrderOfSessions(sessions: Session[]): Promise<Session[]> {
	const txs = [];

	for (let i = 0; i < sessions.length; i += 1) {
		const session = sessions[i];

		const updateTx = getPrisma().session.update({
			where: {
				id: session.id,
			},
			data: {
				order: i,
			},
		});

		txs.push(updateTx);
	}

	return getPrisma().$transaction(txs);
}

@Resolver()
export class SessionResolver {
	@Authorized([Role.LOGGED_IN])
	@Query(() => [Session])
	async sessions(@Ctx() context: GraphQLContext) {
		return getSessionsByUser(context.user);
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => Session)
	async createSession(@Ctx() context: GraphQLContext, @Arg('input', () => SessionInput) input: SessionInput) {
		const sessions = await getSessionsByUser(context.user);
		input.order = sessions.length;

		if (!input.name) {
			input.name = 'New Session';
		}

		const newSession = await createSession(context, input);
		await updateOrderOfSessionsForUser(context.user);

		return newSession;
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => Session)
	async updateSession(
		@Ctx() context: GraphQLContext,
		@Arg('id') id: string,
		@Arg('input', () => SessionInput) input: SessionInput
	) {
		const session = await getSessionById(id);

		if (!session || session.user_id !== context.user.id) {
			throw new GraphQLError(ErrorCode.NOT_FOUND, 'Invalid session ID');
		}

		return updateSession(context, session, input);
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => GraphQLVoid)
	async reorderSessions(@Ctx() context: GraphQLContext, @Arg('ids', () => [String]) ids: string[]) {
		const sessions = await getSessionsByIds(context.user, ids);
		if (sessions.length !== ids.length) {
			throw new GraphQLError(ErrorCode.NOT_FOUND, 'Invalid session ID list');
		}

		const sessionsMap = {};
		for (const session of sessions) {
			sessionsMap[session.id] = session;
		}

		const orderedSessions = [];
		for (const id of ids) {
			orderedSessions.push(sessionsMap[id]);
		}

		await updateOrderOfSessions(orderedSessions);
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => Session)
	async deleteSession(@Ctx() context: GraphQLContext, @Arg('id') id: string) {
		const session = await getSessionById(id);

		if (!session || session.user_id !== context.user.id) {
			throw new GraphQLError(ErrorCode.NOT_FOUND, 'Invalid session ID');
		}

		await deleteSession(context, session);
		await updateOrderOfSessionsForUser(context.user);

		return session;
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => Session)
	async mergeSessions(
		@Ctx() context: GraphQLContext,
		@Arg('oldSessionId') oldSessionId: string,
		@Arg('newSessionId') newSessionId: string
	) {
		const {user} = context;

		const oldSession = await getSessionById(oldSessionId);
		const newSession = await getSessionById(newSessionId);

		if (!oldSession || !newSession || oldSession.user_id !== user.id || newSession.user_id !== user.id) {
			throw new GraphQLError(ErrorCode.NOT_FOUND, 'Invalid session IDs');
		}

		await mergeSessions(context, oldSession, newSession);
		await deleteSession(context, oldSession);
		await updateOrderOfSessionsForUser(user);

		return newSession;
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => GraphQLVoid)
	async bulkCreateSessions(
		@Ctx() context: GraphQLContext,
		@Arg('sessions', () => [SessionInput]) sessions: SessionInput[]
	) {
		if (!sessions || !sessions.length) {
			throw new GraphQLError(ErrorCode.BAD_INPUT, 'Must include at least one session');
		}

		if (sessions.length > 1000) {
			throw new GraphQLError(ErrorCode.BAD_INPUT, 'You cannot import that many sessions');
		}

		await bulkCreateSessions(context, sessions);
		await updateOrderOfSessionsForUser(context.user);
	}
}
