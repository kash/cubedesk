import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchCreateNestedOneWithoutElo_logInputObjectSchema as MatchCreateNestedOneWithoutElo_logInputObjectSchema } from './MatchCreateNestedOneWithoutElo_logInput.schema';
import { UserAccountCreateNestedOneWithoutElo_log_opponentInputObjectSchema as UserAccountCreateNestedOneWithoutElo_log_opponentInputObjectSchema } from './UserAccountCreateNestedOneWithoutElo_log_opponentInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  cube_type: z.string(),
  elo_change: z.number().int().optional(),
  updated_at: z.coerce.date().optional(),
  created_at: z.coerce.date().optional(),
  opponent_new_elo_rating: z.number().int(),
  opponent_new_game_count: z.number().int().optional().nullable(),
  player_new_elo_rating: z.number().int(),
  player_new_game_count: z.number().int(),
  refunded_at: z.coerce.date().optional().nullable(),
  match: z.lazy(() => MatchCreateNestedOneWithoutElo_logInputObjectSchema).optional(),
  opponent: z.lazy(() => UserAccountCreateNestedOneWithoutElo_log_opponentInputObjectSchema).optional()
}).strict();
export const EloLogCreateWithoutPlayerInputObjectSchema: z.ZodType<Prisma.EloLogCreateWithoutPlayerInput> = makeSchema() as unknown as z.ZodType<Prisma.EloLogCreateWithoutPlayerInput>;
export const EloLogCreateWithoutPlayerInputObjectZodSchema = makeSchema();
