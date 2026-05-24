import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const MatchOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.MatchOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchOrderByRelationAggregateInput>;
export const MatchOrderByRelationAggregateInputObjectZodSchema = makeSchema();
