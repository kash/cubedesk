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
export const ImageCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ImageCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageCountOrderByAggregateInput>;
export const ImageCountOrderByAggregateInputObjectZodSchema = makeSchema();
