import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  like_count: SortOrderSchema.optional()
}).strict();
export const CustomTrainerSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CustomTrainerSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerSumOrderByAggregateInput>;
export const CustomTrainerSumOrderByAggregateInputObjectZodSchema = makeSchema();
