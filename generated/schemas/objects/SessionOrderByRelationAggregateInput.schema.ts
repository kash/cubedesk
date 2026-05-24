import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const SessionOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.SessionOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionOrderByRelationAggregateInput>;
export const SessionOrderByRelationAggregateInputObjectZodSchema = makeSchema();
