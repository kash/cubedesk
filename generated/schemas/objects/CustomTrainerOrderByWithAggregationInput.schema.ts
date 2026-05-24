import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CustomTrainerCountOrderByAggregateInputObjectSchema as CustomTrainerCountOrderByAggregateInputObjectSchema } from './CustomTrainerCountOrderByAggregateInput.schema';
import { CustomTrainerAvgOrderByAggregateInputObjectSchema as CustomTrainerAvgOrderByAggregateInputObjectSchema } from './CustomTrainerAvgOrderByAggregateInput.schema';
import { CustomTrainerMaxOrderByAggregateInputObjectSchema as CustomTrainerMaxOrderByAggregateInputObjectSchema } from './CustomTrainerMaxOrderByAggregateInput.schema';
import { CustomTrainerMinOrderByAggregateInputObjectSchema as CustomTrainerMinOrderByAggregateInputObjectSchema } from './CustomTrainerMinOrderByAggregateInput.schema';
import { CustomTrainerSumOrderByAggregateInputObjectSchema as CustomTrainerSumOrderByAggregateInputObjectSchema } from './CustomTrainerSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  colors: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  cube_type: SortOrderSchema.optional(),
  key: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  like_count: SortOrderSchema.optional(),
  private: SortOrderSchema.optional(),
  copy_of_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  downloaded: SortOrderSchema.optional(),
  group_name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  scrambles: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  solution: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  alt_solutions: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  three_d: SortOrderSchema.optional(),
  algo_type: SortOrderSchema.optional(),
  _count: z.lazy(() => CustomTrainerCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => CustomTrainerAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CustomTrainerMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CustomTrainerMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => CustomTrainerSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CustomTrainerOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CustomTrainerOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerOrderByWithAggregationInput>;
export const CustomTrainerOrderByWithAggregationInputObjectZodSchema = makeSchema();
