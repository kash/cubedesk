import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  elo_222_rating: SortOrderSchema.optional(),
  elo_333_rating: SortOrderSchema.optional(),
  elo_444_rating: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  elo_overall_rating: SortOrderSchema.optional(),
  profile_id: SortOrderSchema.optional(),
  games_222_count: SortOrderSchema.optional(),
  games_333_count: SortOrderSchema.optional(),
  games_444_count: SortOrderSchema.optional(),
  games_overall_count: SortOrderSchema.optional()
}).strict();
export const EloRatingCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EloRatingCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EloRatingCountOrderByAggregateInput>;
export const EloRatingCountOrderByAggregateInputObjectZodSchema = makeSchema();
