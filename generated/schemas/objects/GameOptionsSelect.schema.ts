import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameSessionArgsObjectSchema as GameSessionArgsObjectSchema } from './GameSessionArgs.schema';
import { MatchSessionArgsObjectSchema as MatchSessionArgsObjectSchema } from './MatchSessionArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  game_session_id: z.boolean().optional(),
  match_session_id: z.boolean().optional(),
  game_type: z.boolean().optional(),
  cube_type: z.boolean().optional(),
  elimination_starting_time_seconds: z.boolean().optional(),
  elimination_percent_change_rate: z.boolean().optional(),
  head_to_head_target_win_count: z.boolean().optional(),
  gauntlet_time_multiplier: z.boolean().optional(),
  created_at: z.boolean().optional(),
  game_session: z.union([z.boolean(), z.lazy(() => GameSessionArgsObjectSchema)]).optional(),
  match_session: z.union([z.boolean(), z.lazy(() => MatchSessionArgsObjectSchema)]).optional()
}).strict();
export const GameOptionsSelectObjectSchema: z.ZodType<Prisma.GameOptionsSelect> = makeSchema() as unknown as z.ZodType<Prisma.GameOptionsSelect>;
export const GameOptionsSelectObjectZodSchema = makeSchema();
