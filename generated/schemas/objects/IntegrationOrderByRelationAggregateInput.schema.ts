import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const IntegrationOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.IntegrationOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.IntegrationOrderByRelationAggregateInput>;
export const IntegrationOrderByRelationAggregateInputObjectZodSchema = makeSchema();
