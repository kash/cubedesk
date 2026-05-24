import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ActionLogOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ActionLogOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ActionLogOrderByRelationAggregateInput>;
export const ActionLogOrderByRelationAggregateInputObjectZodSchema = makeSchema();
