import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  subject: SortOrderSchema.optional(),
  template: SortOrderSchema.optional(),
  vars: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  email: SortOrderSchema.optional()
}).strict();
export const EmailLogMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EmailLogMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EmailLogMaxOrderByAggregateInput>;
export const EmailLogMaxOrderByAggregateInputObjectZodSchema = makeSchema();
