import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  scramble: SortOrderSchema.optional(),
  private: SortOrderSchema.optional()
}).strict();
export const CustomCubeTypeMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CustomCubeTypeMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomCubeTypeMinOrderByAggregateInput>;
export const CustomCubeTypeMinOrderByAggregateInputObjectZodSchema = makeSchema();
