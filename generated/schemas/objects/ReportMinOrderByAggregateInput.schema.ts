import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  reason: SortOrderSchema.optional(),
  created_by_id: SortOrderSchema.optional(),
  reported_user_id: SortOrderSchema.optional(),
  resolved_at: SortOrderSchema.optional()
}).strict();
export const ReportMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReportMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportMinOrderByAggregateInput>;
export const ReportMinOrderByAggregateInputObjectZodSchema = makeSchema();
