import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AlgorithmOverrideCountOrderByAggregateInputObjectSchema as AlgorithmOverrideCountOrderByAggregateInputObjectSchema } from './AlgorithmOverrideCountOrderByAggregateInput.schema';
import { AlgorithmOverrideAvgOrderByAggregateInputObjectSchema as AlgorithmOverrideAvgOrderByAggregateInputObjectSchema } from './AlgorithmOverrideAvgOrderByAggregateInput.schema';
import { AlgorithmOverrideMaxOrderByAggregateInputObjectSchema as AlgorithmOverrideMaxOrderByAggregateInputObjectSchema } from './AlgorithmOverrideMaxOrderByAggregateInput.schema';
import { AlgorithmOverrideMinOrderByAggregateInputObjectSchema as AlgorithmOverrideMinOrderByAggregateInputObjectSchema } from './AlgorithmOverrideMinOrderByAggregateInput.schema';
import { AlgorithmOverrideSumOrderByAggregateInputObjectSchema as AlgorithmOverrideSumOrderByAggregateInputObjectSchema } from './AlgorithmOverrideSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  rotate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  cube_key: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  solution: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  scrambles: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => AlgorithmOverrideCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => AlgorithmOverrideAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AlgorithmOverrideMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AlgorithmOverrideMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => AlgorithmOverrideSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AlgorithmOverrideOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AlgorithmOverrideOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AlgorithmOverrideOrderByWithAggregationInput>;
export const AlgorithmOverrideOrderByWithAggregationInputObjectZodSchema = makeSchema();
