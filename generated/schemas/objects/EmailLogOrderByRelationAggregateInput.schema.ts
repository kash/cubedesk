import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const EmailLogOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.EmailLogOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EmailLogOrderByRelationAggregateInput>;
export const EmailLogOrderByRelationAggregateInputObjectZodSchema = makeSchema();
