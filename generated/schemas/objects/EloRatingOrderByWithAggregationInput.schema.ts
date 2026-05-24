import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { EloRatingCountOrderByAggregateInputObjectSchema as EloRatingCountOrderByAggregateInputObjectSchema } from './EloRatingCountOrderByAggregateInput.schema';
import { EloRatingAvgOrderByAggregateInputObjectSchema as EloRatingAvgOrderByAggregateInputObjectSchema } from './EloRatingAvgOrderByAggregateInput.schema';
import { EloRatingMaxOrderByAggregateInputObjectSchema as EloRatingMaxOrderByAggregateInputObjectSchema } from './EloRatingMaxOrderByAggregateInput.schema';
import { EloRatingMinOrderByAggregateInputObjectSchema as EloRatingMinOrderByAggregateInputObjectSchema } from './EloRatingMinOrderByAggregateInput.schema';
import { EloRatingSumOrderByAggregateInputObjectSchema as EloRatingSumOrderByAggregateInputObjectSchema } from './EloRatingSumOrderByAggregateInput.schema'

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
  games_overall_count: SortOrderSchema.optional(),
  _count: z.lazy(() => EloRatingCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => EloRatingAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => EloRatingMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => EloRatingMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => EloRatingSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const EloRatingOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.EloRatingOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.EloRatingOrderByWithAggregationInput>;
export const EloRatingOrderByWithAggregationInputObjectZodSchema = makeSchema();
