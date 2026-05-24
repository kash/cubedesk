import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ReportOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ReportOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportOrderByRelationAggregateInput>;
export const ReportOrderByRelationAggregateInputObjectZodSchema = makeSchema();
