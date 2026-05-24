import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  order: SortOrderSchema.optional()
}).strict();
export const SessionAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SessionAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionAvgOrderByAggregateInput>;
export const SessionAvgOrderByAggregateInputObjectZodSchema = makeSchema();
