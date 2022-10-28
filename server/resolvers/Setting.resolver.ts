import {Arg, Authorized, Ctx, Mutation, Query, Resolver} from 'type-graphql';
import {GraphQLContext} from '../@types/interfaces/server.interface';
import {Setting} from '@prisma/client';
import {Role} from '../middlewares/auth';
import {Setting as SettingSchema, SettingInput} from '../schemas/Setting.schema';
import GraphQLError from '../util/graphql_error';
import {ErrorCode} from '../constants/errors';
import {v4 as uuid} from 'uuid';
import {UserAccount} from '../schemas/UserAccount.schema';
import {getPrisma} from '../database';

export async function getSettingsByUserId(userId: string) {
	return getPrisma().setting.findUnique({
		where: {
			user_id: userId,
		},
		include: {
			custom_cube_types: true,
		},
	});
}

export function getSetting(context: GraphQLContext, user: UserAccount) {
	const {prisma} = context;

	return prisma.setting.findUnique({
		where: {
			user_id: user.id,
		},
	});
}

export function createSetting(context: GraphQLContext, user: UserAccount) {
	const {prisma} = context;

	return prisma.setting.create({
		data: {
			id: uuid(),
			user_id: user.id,
		},
	});
}

export function setSetting<T extends keyof Setting>(userId: string, key: T, value: any) {
	return getPrisma().setting.update({
		where: {
			user_id: userId,
		},
		data: {
			[key]: value,
		},
	});
}

@Resolver()
export class SettingResolver {
	@Authorized([Role.LOGGED_IN])
	@Query(() => SettingSchema)
	async settings(@Ctx() context: GraphQLContext) {
		return getSettingsByUserId(context.user.id);
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => SettingSchema)
	async setSetting(@Ctx() context: GraphQLContext, @Arg('input') input: SettingInput) {
		const {user} = context;

		const keys = Object.keys(input || {}) as [keyof Setting];

		if (!input || !keys.length) {
			throw new GraphQLError(ErrorCode.BAD_INPUT, 'Please provide a key and a value');
		}

		let setting;

		for (const key of keys) {
			// Need to check for Pro settings
			if (key === 'beta_tester' && !user.is_pro) {
				continue;
			}

			setting = await setSetting(user.id, key, input[key]);
		}

		return setting;
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => SettingSchema)
	async resetSettings(@Ctx() context: GraphQLContext) {
		return getSettingsByUserId(context.user.id);
	}
}
