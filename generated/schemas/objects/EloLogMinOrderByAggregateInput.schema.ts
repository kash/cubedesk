import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  opponent_id: SortOrderSchema.optional(),
  cube_type: SortOrderSchema.optional(),
  elo_change: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  match_id: SortOrderSchema.optional(),
  player_id: SortOrderSchema.optional(),
  opponent_new_elo_rating: SortOrderSchema.optional(),
  opponent_new_game_count: SortOrderSchema.optional(),
  player_new_elo_rating: SortOrderSchema.optional(),
  player_new_game_count: SortOrderSchema.optional(),
  refunded_at: SortOrderSchema.optional()
}).strict();
export const EloLogMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EloLogMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EloLogMinOrderByAggregateInput>;
export const EloLogMinOrderByAggregateInputObjectZodSchema = makeSchema();
