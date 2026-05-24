import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SolveViewCountOrderByAggregateInputObjectSchema as SolveViewCountOrderByAggregateInputObjectSchema } from './SolveViewCountOrderByAggregateInput.schema';
import { SolveViewMaxOrderByAggregateInputObjectSchema as SolveViewMaxOrderByAggregateInputObjectSchema } from './SolveViewMaxOrderByAggregateInput.schema';
import { SolveViewMinOrderByAggregateInputObjectSchema as SolveViewMinOrderByAggregateInputObjectSchema } from './SolveViewMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  solve_id: SortOrderSchema.optional(),
  viewer_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  user_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  _count: z.lazy(() => SolveViewCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => SolveViewMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => SolveViewMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const SolveViewOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SolveViewOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewOrderByWithAggregationInput>;
export const SolveViewOrderByWithAggregationInputObjectZodSchema = makeSchema();
