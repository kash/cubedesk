import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const TopAverageOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.TopAverageOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageOrderByRelationAggregateInput>;
export const TopAverageOrderByRelationAggregateInputObjectZodSchema = makeSchema();
