import { z } from 'zod';
import { createTRPCRouter, userProcedure } from '@/server/trpc';
import { TRPCError } from '@trpc/server';
import { ErrorCode } from '@/server/constants/errors';
import { createMatch, getMatchById, getMatchByLinkCode, getMatchBySpectateCode } from '@/server/models/match';
import { createMatchSession } from '@/server/models/match_session';
import { createGameOptions } from '@/server/models/game_options';
import { getCubeTypeInfoById } from '@/lib/util/cubes/util';
import { GameType } from '@/shared/match/consts';

// Input schemas
const matchIdInput = z.object({
  id: z.string(),
});

const matchCodeInput = z.object({
  code: z.string(),
});

const matchSessionInput = z.object({
  min_players: z.number().int(),
  max_players: z.number().int(),
  match_type: z.nativeEnum(GameType),
  cube_type: z.string().optional(),
  head_to_head_target_win_count: z.number().optional(),
});

export const matchRouter = createTRPCRouter({
  // Get a match by ID
  match: userProcedure
    .input(matchIdInput)
    .query(async ({ input }) => {
      return getMatchById(input.id, true);
    }),

  // Get a match by spectate code
  matchBySpectateCode: userProcedure
    .input(matchCodeInput)
    .query(async ({ input }) => {
      return getMatchBySpectateCode(input.code, true);
    }),

  // Get a match by link code
  matchByLinkCode: userProcedure
    .input(matchCodeInput)
    .query(async ({ input }) => {
      return getMatchByLinkCode(input.code, true);
    }),

  // Create a match with a new session
  createMatchWithNewSession: userProcedure
    .input(matchSessionInput)
    .mutation(async ({ ctx, input }) => {
      const user = ctx.me;

      // Only Pro users can change the cube type from default
      if (input.cube_type && input.cube_type !== '333' && !user.is_pro) {
        throw new TRPCError({
          code: 'FORBIDDEN',
          message: 'Only Pro users can set the cube type for custom matches'
        });
      }

      // Only Pro users can change player count from default 2v2
      if ((input.min_players !== 2 || input.max_players !== 2) && !user.is_pro) {
        throw new TRPCError({
          code: 'FORBIDDEN',
          message: 'Only Pro users can set the player count for custom matches'
        });
      }

      const cubeType = getCubeTypeInfoById(input.cube_type);
      if (!cubeType) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Invalid cube type'
        });
      }

      const h2hTargetWin = input.head_to_head_target_win_count;
      if (h2hTargetWin && !user.is_pro) {
        throw new TRPCError({
          code: 'FORBIDDEN',
          message: 'Only Pro users can set the head to head target win count'
        });
      }

      if (h2hTargetWin && (h2hTargetWin < 3 || h2hTargetWin > 100)) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Head to head target win count must be between 3 and 100'
        });
      }

      const session = await createMatchSession(input, user, true);

      await createGameOptions({
        match_session_id: session.id,
        game_type: input.match_type,
        cube_type: input.cube_type || '333',
        head_to_head_target_win_count: h2hTargetWin || 5,
      });

      return createMatch(session, false);
    }),
});