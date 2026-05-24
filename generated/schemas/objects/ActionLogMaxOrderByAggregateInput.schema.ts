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
export const ActionLogMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ActionLogMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ActionLogMaxOrderByAggregateInput>;
export const ActionLogMaxOrderByAggregateInputObjectZodSchema = makeSchema();
