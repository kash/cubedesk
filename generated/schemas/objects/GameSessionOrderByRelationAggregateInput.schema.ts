import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const GameSessionOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.GameSessionOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionOrderByRelationAggregateInput>;
export const GameSessionOrderByRelationAggregateInputObjectZodSchema = makeSchema();
