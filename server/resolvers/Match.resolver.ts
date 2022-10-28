import {Arg, Authorized, Ctx, Mutation, Query, Resolver} from 'type-graphql';
import {GraphQLContext} from '../@types/interfaces/server.interface';
import {Role} from '../middlewares/auth';
import {Match} from '../schemas/Match.schema';
import {createMatch, getMatchById, getMatchByLinkCode, getMatchBySpectateCode} from '../models/match';
import {MatchSessionInput} from '../schemas/MatchSession.schema';
import {createMatchSession} from '../models/match_session';
import {createGameOptions} from '../models/game_options';
import GraphQLError from '../util/graphql_error';
import {ErrorCode} from '../constants/errors';
import {getCubeTypeInfoById} from '../../client/util/cubes/util';

@Resolver()
export class MatchResolver {
	@Authorized([Role.LOGGED_IN])
	@Query(() => Match)
	async match(@Ctx() context: GraphQLContext, @Arg('id') id: string) {
		return getMatchById(id, true);
	}

	@Authorized([Role.LOGGED_IN])
	@Query(() => Match)
	async matchBySpectateCode(@Ctx() context: GraphQLContext, @Arg('code') code: string) {
		return getMatchBySpectateCode(code, true);
	}

	@Authorized([Role.LOGGED_IN])
	@Query(() => Match)
	async matchByLinkCode(@Ctx() context: GraphQLContext, @Arg('code') code: string) {
		return getMatchByLinkCode(code, true);
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => Match)
	async createMatchWithNewSession(
		@Ctx() context: GraphQLContext,
		@Arg('input', () => MatchSessionInput) input: MatchSessionInput
	) {
		// TODO check for pro if user is trying to change the cube type or min/max player count
		const {user} = context;

		// Only Pro users can change the cube type
		if (input.cube_type && input.cube_type !== '333' && !user.is_pro) {
			throw new GraphQLError(ErrorCode.FORBIDDEN, 'Only Pro users can set the cube type for custom matches');
		}

		if ((input.min_players !== 2 || input.max_players !== 2) && !user.is_pro) {
			throw new GraphQLError(ErrorCode.FORBIDDEN, 'Only Pro users can set the player count for custom matches');
		}

		const cubeType = getCubeTypeInfoById(input.cube_type);
		if (!cubeType) {
			throw new GraphQLError(ErrorCode.BAD_INPUT, 'Invalid cube type');
		}

		const h2hTargetWin = input.head_to_head_target_win_count;
		if (h2hTargetWin && !user.is_pro) {
			throw new GraphQLError(ErrorCode.FORBIDDEN, 'Only Pro users can set the head to head target win count');
		}

		if (h2hTargetWin && (h2hTargetWin < 3 || h2hTargetWin > 100)) {
			throw new GraphQLError(ErrorCode.BAD_INPUT, 'Head to head target win count must be between 3 and 100');
		}

		const sesh = await createMatchSession(input, user, true);

		await createGameOptions({
			match_session_id: sesh.id,
			game_type: input.match_type,
			cube_type: input.cube_type || '333',
			head_to_head_target_win_count: h2hTargetWin || 5,
		});

		return await createMatch(sesh, false);
	}
}
