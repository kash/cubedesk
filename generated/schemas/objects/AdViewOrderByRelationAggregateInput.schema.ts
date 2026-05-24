import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const AdViewOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.AdViewOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AdViewOrderByRelationAggregateInput>;
export const AdViewOrderByRelationAggregateInputObjectZodSchema = makeSchema();
