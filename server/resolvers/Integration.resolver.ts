import {Arg, Authorized, Ctx, Mutation, Query, Resolver} from 'type-graphql';
import {GraphQLContext} from '../@types/interfaces/server.interface';
import {Role} from '../middlewares/auth';
import {Integration, IntegrationTypeSchema} from '../schemas/Integration.schema';
import GraphQLError from '../util/graphql_error';
import {ErrorCode} from '../constants/errors';
import {IntegrationType} from '../../shared/integration';
import {getIntegrationGetMe, linkOAuthAccount, revokeIntegration} from '../integrations/oauth';
import {WcaAccount} from '../schemas/WcaAccount.schema';
import {getIntegration} from '../models/integration';

function getIntegrationsByUserId(context: GraphQLContext, userId: string) {
	const {prisma} = context;

	return prisma.integration.findMany({
		where: {
			user_id: userId,
		},
	});
}

function getIntegrationMe(context: GraphQLContext, intType: IntegrationType) {
	const {user} = context;
	return getIntegrationGetMe(intType, user);
}

function deleteIntegrationById(context: GraphQLContext, id: string) {
	const {prisma} = context;

	return prisma.integration.delete({
		where: {
			id,
		},
	});
}

@Resolver()
export class IntegrationResolver {
	@Authorized([Role.LOGGED_IN])
	@Query(() => Integration)
	async integration(
		@Ctx() context: GraphQLContext,
		@Arg('integrationType', () => IntegrationTypeSchema) integrationType: IntegrationType
	) {
		return getIntegration(context.user, integrationType);
	}

	@Authorized([Role.LOGGED_IN])
	@Query(() => WcaAccount)
	async wcaMe(@Ctx() context: GraphQLContext) {
		return getIntegrationMe(context, 'wca');
	}

	@Authorized([Role.LOGGED_IN])
	@Query(() => WcaAccount)
	async discordMe(@Ctx() context: GraphQLContext) {
		return getIntegrationMe(context, 'discord');
	}

	@Authorized([Role.LOGGED_IN])
	@Query(() => [Integration])
	async integrations(@Ctx() context: GraphQLContext) {
		return getIntegrationsByUserId(context, context.user.id);
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => Integration)
	async createIntegration(
		@Ctx() context: GraphQLContext,
		@Arg('integrationType', () => IntegrationTypeSchema) integrationType: IntegrationType,
		@Arg('code') code: string
	) {
		const {user} = context;
		const integration = await getIntegration(user, integrationType);
		if (integration) {
			throw new GraphQLError(ErrorCode.FORBIDDEN, 'This account is already linked');
		}

		try {
			return linkOAuthAccount(integrationType, user, code);
		} catch (e) {
			return null;
		}
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => Integration)
	async deleteIntegration(
		@Ctx() context: GraphQLContext,
		@Arg('integrationType', () => IntegrationTypeSchema) integrationType: IntegrationType
	) {
		const {user} = context;
		const integration = await getIntegration(user, integrationType);
		if (!integration) {
			throw new GraphQLError(ErrorCode.FORBIDDEN, 'This account is not linked');
		}

		await revokeIntegration(integrationType, user);
		return deleteIntegrationById(context, integration.id);
	}
}
