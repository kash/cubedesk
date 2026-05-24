import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_email: SortOrderSchema.optional(),
  action_type: SortOrderSchema.optional(),
  action_details: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const ActionLogMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ActionLogMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ActionLogMinOrderByAggregateInput>;
export const ActionLogMinOrderByAggregateInputObjectZodSchema = makeSchema();
