import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DemoSolveCountOrderByAggregateInputObjectSchema as DemoSolveCountOrderByAggregateInputObjectSchema } from './DemoSolveCountOrderByAggregateInput.schema';
import { DemoSolveAvgOrderByAggregateInputObjectSchema as DemoSolveAvgOrderByAggregateInputObjectSchema } from './DemoSolveAvgOrderByAggregateInput.schema';
import { DemoSolveMaxOrderByAggregateInputObjectSchema as DemoSolveMaxOrderByAggregateInputObjectSchema } from './DemoSolveMaxOrderByAggregateInput.schema';
import { DemoSolveMinOrderByAggregateInputObjectSchema as DemoSolveMinOrderByAggregateInputObjectSchema } from './DemoSolveMinOrderByAggregateInput.schema';
import { DemoSolveSumOrderByAggregateInputObjectSchema as DemoSolveSumOrderByAggregateInputObjectSchema } from './DemoSolveSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  demo_session_id: SortOrderSchema.optional(),
  ip_address: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  raw_time: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  cube_type: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  scramble: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  started_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ended_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  _count: z.lazy(() => DemoSolveCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => DemoSolveAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => DemoSolveMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => DemoSolveMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => DemoSolveSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const DemoSolveOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.DemoSolveOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.DemoSolveOrderByWithAggregationInput>;
export const DemoSolveOrderByWithAggregationInputObjectZodSchema = makeSchema();
