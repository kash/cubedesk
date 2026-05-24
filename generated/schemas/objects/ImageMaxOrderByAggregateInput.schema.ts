import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  storage_path: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const ImageMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ImageMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageMaxOrderByAggregateInput>;
export const ImageMaxOrderByAggregateInputObjectZodSchema = makeSchema();
