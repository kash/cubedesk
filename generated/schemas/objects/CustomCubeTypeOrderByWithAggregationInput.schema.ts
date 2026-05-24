import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CustomCubeTypeCountOrderByAggregateInputObjectSchema as CustomCubeTypeCountOrderByAggregateInputObjectSchema } from './CustomCubeTypeCountOrderByAggregateInput.schema';
import { CustomCubeTypeMaxOrderByAggregateInputObjectSchema as CustomCubeTypeMaxOrderByAggregateInputObjectSchema } from './CustomCubeTypeMaxOrderByAggregateInput.schema';
import { CustomCubeTypeMinOrderByAggregateInputObjectSchema as CustomCubeTypeMinOrderByAggregateInputObjectSchema } from './CustomCubeTypeMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  scramble: SortOrderSchema.optional(),
  private: SortOrderSchema.optional(),
  _count: z.lazy(() => CustomCubeTypeCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CustomCubeTypeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CustomCubeTypeMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CustomCubeTypeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CustomCubeTypeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomCubeTypeOrderByWithAggregationInput>;
export const CustomCubeTypeOrderByWithAggregationInputObjectZodSchema = makeSchema();
