import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TopSolveCountOrderByAggregateInputObjectSchema as TopSolveCountOrderByAggregateInputObjectSchema } from './TopSolveCountOrderByAggregateInput.schema';
import { TopSolveAvgOrderByAggregateInputObjectSchema as TopSolveAvgOrderByAggregateInputObjectSchema } from './TopSolveAvgOrderByAggregateInput.schema';
import { TopSolveMaxOrderByAggregateInputObjectSchema as TopSolveMaxOrderByAggregateInputObjectSchema } from './TopSolveMaxOrderByAggregateInput.schema';
import { TopSolveMinOrderByAggregateInputObjectSchema as TopSolveMinOrderByAggregateInputObjectSchema } from './TopSolveMinOrderByAggregateInput.schema';
import { TopSolveSumOrderByAggregateInputObjectSchema as TopSolveSumOrderByAggregateInputObjectSchema } from './TopSolveSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  time: SortOrderSchema.optional(),
  solve_id: SortOrderSchema.optional(),
  cube_type: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  _count: z.lazy(() => TopSolveCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => TopSolveAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TopSolveMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TopSolveMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => TopSolveSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TopSolveOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TopSolveOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TopSolveOrderByWithAggregationInput>;
export const TopSolveOrderByWithAggregationInputObjectZodSchema = makeSchema();
