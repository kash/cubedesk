import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const MetricLogOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.MetricLogOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MetricLogOrderByRelationAggregateInput>;
export const MetricLogOrderByRelationAggregateInputObjectZodSchema = makeSchema();
