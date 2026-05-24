import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TopAverageCountOrderByAggregateInputObjectSchema as TopAverageCountOrderByAggregateInputObjectSchema } from './TopAverageCountOrderByAggregateInput.schema';
import { TopAverageAvgOrderByAggregateInputObjectSchema as TopAverageAvgOrderByAggregateInputObjectSchema } from './TopAverageAvgOrderByAggregateInput.schema';
import { TopAverageMaxOrderByAggregateInputObjectSchema as TopAverageMaxOrderByAggregateInputObjectSchema } from './TopAverageMaxOrderByAggregateInput.schema';
import { TopAverageMinOrderByAggregateInputObjectSchema as TopAverageMinOrderByAggregateInputObjectSchema } from './TopAverageMinOrderByAggregateInput.schema';
import { TopAverageSumOrderByAggregateInputObjectSchema as TopAverageSumOrderByAggregateInputObjectSchema } from './TopAverageSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  time: SortOrderSchema.optional(),
  cube_type: SortOrderSchema.optional(),
  solve_1_id: SortOrderSchema.optional(),
  solve_2_id: SortOrderSchema.optional(),
  solve_3_id: SortOrderSchema.optional(),
  solve_4_id: SortOrderSchema.optional(),
  solve_5_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  _count: z.lazy(() => TopAverageCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => TopAverageAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TopAverageMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TopAverageMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => TopAverageSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TopAverageOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TopAverageOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageOrderByWithAggregationInput>;
export const TopAverageOrderByWithAggregationInputObjectZodSchema = makeSchema();
