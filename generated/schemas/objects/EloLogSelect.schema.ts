import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchArgsObjectSchema as MatchArgsObjectSchema } from './MatchArgs.schema';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  opponent_id: z.boolean().optional(),
  cube_type: z.boolean().optional(),
  elo_change: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  created_at: z.boolean().optional(),
  match_id: z.boolean().optional(),
  player_id: z.boolean().optional(),
  opponent_new_elo_rating: z.boolean().optional(),
  opponent_new_game_count: z.boolean().optional(),
  player_new_elo_rating: z.boolean().optional(),
  player_new_game_count: z.boolean().optional(),
  refunded_at: z.boolean().optional(),
  match: z.union([z.boolean(), z.lazy(() => MatchArgsObjectSchema)]).optional(),
  opponent: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  player: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const EloLogSelectObjectSchema: z.ZodType<Prisma.EloLogSelect> = makeSchema() as unknown as z.ZodType<Prisma.EloLogSelect>;
export const EloLogSelectObjectZodSchema = makeSchema();
