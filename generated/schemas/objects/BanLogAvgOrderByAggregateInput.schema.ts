import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  minutes: SortOrderSchema.optional()
}).strict();
export const BanLogAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BanLogAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BanLogAvgOrderByAggregateInput>;
export const BanLogAvgOrderByAggregateInputObjectZodSchema = makeSchema();
