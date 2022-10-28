import {Arg, Authorized, Ctx, Mutation, Query, Resolver} from 'type-graphql';
import {GraphQLContext} from '../@types/interfaces/server.interface';
import {Role} from '../middlewares/auth';
import GraphQLError from '../util/graphql_error';
import {ErrorCode} from '../constants/errors';
import {CustomTrainer, CustomTrainerCreateInput} from '../schemas/CustomTrainer.schema';
import {CustomTrainerDownload} from '../schemas/CustomTrainerDownload.schema';
import {getCustomTrainerById} from './CustomTrainer.resolver';
import {generateUUID} from '../../shared/code';

export async function isCustomTrainerDownloaded({prisma, user}: GraphQLContext, id: string): Promise<boolean> {
	const count = await prisma.customTrainer.count({
		where: {
			copy_of_id: id,
			user_id: user.id,
		},
	});

	return count > 0;
}

@Resolver()
export class CustomTrainerDownloadResolver {
	@Authorized([Role.LOGGED_IN])
	@Query(() => [CustomTrainerDownload])
	async customTrainerDownloads(@Ctx() context: GraphQLContext) {
		const {prisma, user} = context;
		return prisma.customTrainerDownload.findMany({
			where: {
				user_id: user.id,
			},
		});
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => CustomTrainer)
	async downloadCustomTrainer(
		@Ctx() context: GraphQLContext,
		@Arg('sourceId') sourceId: string
	): Promise<CustomTrainer> {
		const {prisma, user} = context;
		const source = await getCustomTrainerById(context, sourceId);

		if (!source) {
			throw new GraphQLError(ErrorCode.NOT_FOUND);
		}

		if (source.private || source.copy_of_id || source.downloaded) {
			throw new GraphQLError(ErrorCode.FORBIDDEN, 'This trainer cannot be copied');
		}

		if (source.user_id === user.id) {
			throw new GraphQLError(ErrorCode.FORBIDDEN, 'You cannot download your own trainer');
		}

		const downloaded = await isCustomTrainerDownloaded(context, sourceId);
		if (downloaded) {
			throw new GraphQLError(ErrorCode.FORBIDDEN, 'You have already downloaded this trainer');
		}

		const id = generateUUID();

		const newTrainer = await prisma.customTrainer.create({
			data: {
				...(source as CustomTrainerCreateInput),
				id,
				private: true,
				key: id,
				downloaded: true,
				copy_of_id: sourceId,
				user_id: user.id,
			},
		});

		await prisma.customTrainerDownload.create({
			data: {
				source_trainer_id: source.id,
				new_trainer_id: newTrainer.id,
				user_id: user.id,
				creator_id: source.user_id,
			},
		});

		return newTrainer;
	}
}
