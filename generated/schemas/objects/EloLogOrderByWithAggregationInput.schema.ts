import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EloLogCountOrderByAggregateInputObjectSchema as EloLogCountOrderByAggregateInputObjectSchema } from './EloLogCountOrderByAggregateInput.schema';
import { EloLogAvgOrderByAggregateInputObjectSchema as EloLogAvgOrderByAggregateInputObjectSchema } from './EloLogAvgOrderByAggregateInput.schema';
import { EloLogMaxOrderByAggregateInputObjectSchema as EloLogMaxOrderByAggregateInputObjectSchema } from './EloLogMaxOrderByAggregateInput.schema';
import { EloLogMinOrderByAggregateInputObjectSchema as EloLogMinOrderByAggregateInputObjectSchema } from './EloLogMinOrderByAggregateInput.schema';
import { EloLogSumOrderByAggregateInputObjectSchema as EloLogSumOrderByAggregateInputObjectSchema } from './EloLogSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  opponent_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  cube_type: SortOrderSchema.optional(),
  elo_change: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  match_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  player_id: SortOrderSchema.optional(),
  opponent_new_elo_rating: SortOrderSchema.optional(),
  opponent_new_game_count: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  player_new_elo_rating: SortOrderSchema.optional(),
  player_new_game_count: SortOrderSchema.optional(),
  refunded_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => EloLogCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => EloLogAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => EloLogMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => EloLogMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => EloLogSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const EloLogOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.EloLogOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.EloLogOrderByWithAggregationInput>;
export const EloLogOrderByWithAggregationInputObjectZodSchema = makeSchema();
