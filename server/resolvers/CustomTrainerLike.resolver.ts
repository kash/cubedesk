import {Arg, Authorized, Ctx, Mutation, Query, Resolver} from 'type-graphql';
import {GraphQLContext} from '../@types/interfaces/server.interface';
import {Role} from '../middlewares/auth';
import GraphQLError from '../util/graphql_error';
import {ErrorCode} from '../constants/errors';
import {getCustomTrainerById} from './CustomTrainer.resolver';
import {CustomTrainerLike} from '../schemas/CustomTrainerLike.schema';
import {CustomTrainer} from '../schemas/CustomTrainer.schema';

async function getLikedCustomTrainer(context: GraphQLContext, id: string) {
	const {prisma, user} = context;

	const target = await getCustomTrainerById(context, id);
	if (!target) {
		throw new GraphQLError(ErrorCode.NOT_FOUND);
	}

	if (target.private) {
		throw new GraphQLError(ErrorCode.FORBIDDEN, 'This trainer cannot be liked/unliked');
	}

	const liked = await prisma.customTrainerLike.findMany({
		where: {
			custom_trainer_id: id,
			user_id: user.id,
		},
	});

	return {
		target,
		liked: liked && liked.length ? liked[0] : null,
	};
}

async function updateLikeCount({prisma}: GraphQLContext, trainer: CustomTrainer) {
	const likes = await prisma.customTrainerLike.count({
		where: {
			custom_trainer_id: trainer.id,
		},
	});

	await prisma.customTrainer.update({
		data: {
			like_count: Math.max(likes, 0),
		},
		where: {
			id: trainer.id,
		},
	});
}

@Resolver()
export class CustomTrainerLikeResolver {
	@Authorized([Role.LOGGED_IN])
	@Query(() => [CustomTrainerLike])
	async customTrainerLikes(@Ctx() context: GraphQLContext) {
		const {prisma, user} = context;
		return prisma.customTrainerLike.findMany({
			where: {
				user_id: user.id,
			},
		});
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => CustomTrainerLike)
	async likeCustomTrainer(@Arg('customTrainerId') customTrainerId: string, @Ctx() context: GraphQLContext) {
		const {prisma, user} = context;
		const {liked, target} = await getLikedCustomTrainer(context, customTrainerId);

		if (liked) {
			throw new GraphQLError(ErrorCode.FORBIDDEN, 'You have already liked this trainer');
		}

		const like = await prisma.customTrainerLike.create({
			data: {
				custom_trainer_id: customTrainerId,
				creator_id: target.user_id,
				user_id: user.id,
			},
		});

		await updateLikeCount(context, target);

		return like;
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => CustomTrainerLike)
	async unlikeCustomTrainer(@Arg('customTrainerId') customTrainerId: string, @Ctx() context: GraphQLContext) {
		const {prisma} = context;
		const {liked, target} = await getLikedCustomTrainer(context, customTrainerId);

		if (!liked) {
			throw new GraphQLError(ErrorCode.FORBIDDEN, 'You have not liked this trainer');
		}

		const like = await prisma.customTrainerLike.delete({
			where: {
				id: liked.id,
			},
		});

		await updateLikeCount(context, target);

		return like;
	}
}
