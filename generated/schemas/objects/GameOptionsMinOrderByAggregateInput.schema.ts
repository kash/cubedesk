import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  game_session_id: SortOrderSchema.optional(),
  match_session_id: SortOrderSchema.optional(),
  game_type: SortOrderSchema.optional(),
  cube_type: SortOrderSchema.optional(),
  elimination_starting_time_seconds: SortOrderSchema.optional(),
  elimination_percent_change_rate: SortOrderSchema.optional(),
  head_to_head_target_win_count: SortOrderSchema.optional(),
  gauntlet_time_multiplier: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const GameOptionsMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GameOptionsMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GameOptionsMinOrderByAggregateInput>;
export const GameOptionsMinOrderByAggregateInputObjectZodSchema = makeSchema();
