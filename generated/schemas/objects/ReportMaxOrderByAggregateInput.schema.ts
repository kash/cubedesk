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
export const ReportMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReportMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportMaxOrderByAggregateInput>;
export const ReportMaxOrderByAggregateInputObjectZodSchema = makeSchema();
