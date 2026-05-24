import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const MatchSessionOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.MatchSessionOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionOrderByRelationAggregateInput>;
export const MatchSessionOrderByRelationAggregateInputObjectZodSchema = makeSchema();
