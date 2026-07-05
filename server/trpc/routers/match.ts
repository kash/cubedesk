import {createGameOptions} from '@/server/models/game_options';
import {createMatch, getMatchById, getMatchByLinkCode, getMatchBySpectateCode} from '@/server/models/match';
import {createMatchSession} from '@/server/models/match_session';
import {protectedProcedure, router} from '@/server/trpc/trpc';
import {GameType} from '@/shared/match/consts';
import {getCubeTypeInfoById} from '@/util/cubes/util';
import {TRPCError} from '@trpc/server';
import {z} from 'zod';

export const matchRouter = router({
	get: protectedProcedure
		.input(
			z.object({
				id: z.string(),
			})
		)
		.query(({input}) => getMatchById(input.id, true)),

	byLinkCode: protectedProcedure
		.input(
			z.object({
				code: z.string(),
			})
		)
		.query(({input}) => getMatchByLinkCode(input.code, true)),

	bySpectateCode: protectedProcedure
		.input(
			z.object({
				code: z.string(),
			})
		)
		.query(({input}) => getMatchBySpectateCode(input.code, true)),

	createWithNewSession: protectedProcedure
		.input(
			z.object({
				min_players: z.number().int(),
				max_players: z.number().int(),
				match_type: z.enum(GameType),
				cube_type: z.string(),
				head_to_head_target_win_count: z.number().int().optional(),
			})
		)
		.mutation(async ({ctx, input}) => {
			const {user} = ctx;

			const cubeType = getCubeTypeInfoById(input.cube_type);
			if (!cubeType) {
				throw new TRPCError({code: 'BAD_REQUEST', message: 'Invalid cube type'});
			}

			const h2hTargetWin = input.head_to_head_target_win_count;
			if (h2hTargetWin && (h2hTargetWin < 3 || h2hTargetWin > 100)) {
				throw new TRPCError({
					code: 'BAD_REQUEST',
					message: 'Head to head target win count must be between 3 and 100',
				});
			}

			const sesh = await createMatchSession(input, user, true);

			await createGameOptions({
				match_session_id: sesh.id,
				game_type: input.match_type,
				cube_type: input.cube_type || '333',
				head_to_head_target_win_count: h2hTargetWin || 5,
			});

			return createMatch(sesh, false);
		}),
});
