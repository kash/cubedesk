import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  minutes: SortOrderSchema.optional()
}).strict();
export const BanLogSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BanLogSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BanLogSumOrderByAggregateInput>;
export const BanLogSumOrderByAggregateInputObjectZodSchema = makeSchema();
