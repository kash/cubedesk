import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MatchSessionCountOrderByAggregateInputObjectSchema as MatchSessionCountOrderByAggregateInputObjectSchema } from './MatchSessionCountOrderByAggregateInput.schema';
import { MatchSessionAvgOrderByAggregateInputObjectSchema as MatchSessionAvgOrderByAggregateInputObjectSchema } from './MatchSessionAvgOrderByAggregateInput.schema';
import { MatchSessionMaxOrderByAggregateInputObjectSchema as MatchSessionMaxOrderByAggregateInputObjectSchema } from './MatchSessionMaxOrderByAggregateInput.schema';
import { MatchSessionMinOrderByAggregateInputObjectSchema as MatchSessionMinOrderByAggregateInputObjectSchema } from './MatchSessionMinOrderByAggregateInput.schema';
import { MatchSessionSumOrderByAggregateInputObjectSchema as MatchSessionSumOrderByAggregateInputObjectSchema } from './MatchSessionSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  min_players: SortOrderSchema.optional(),
  max_players: SortOrderSchema.optional(),
  match_type: SortOrderSchema.optional(),
  custom_match: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  created_by_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  rated: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => MatchSessionCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => MatchSessionAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => MatchSessionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => MatchSessionMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => MatchSessionSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const MatchSessionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.MatchSessionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionOrderByWithAggregationInput>;
export const MatchSessionOrderByWithAggregationInputObjectZodSchema = makeSchema();
