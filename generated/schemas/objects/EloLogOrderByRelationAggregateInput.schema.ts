import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const EloLogOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.EloLogOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EloLogOrderByRelationAggregateInput>;
export const EloLogOrderByRelationAggregateInputObjectZodSchema = makeSchema();
