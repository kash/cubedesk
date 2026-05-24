import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  elo_change: SortOrderSchema.optional(),
  opponent_new_elo_rating: SortOrderSchema.optional(),
  opponent_new_game_count: SortOrderSchema.optional(),
  player_new_elo_rating: SortOrderSchema.optional(),
  player_new_game_count: SortOrderSchema.optional()
}).strict();
export const EloLogSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EloLogSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EloLogSumOrderByAggregateInput>;
export const EloLogSumOrderByAggregateInputObjectZodSchema = makeSchema();
