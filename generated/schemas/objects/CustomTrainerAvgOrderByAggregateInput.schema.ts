import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  like_count: SortOrderSchema.optional()
}).strict();
export const CustomTrainerAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CustomTrainerAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerAvgOrderByAggregateInput>;
export const CustomTrainerAvgOrderByAggregateInputObjectZodSchema = makeSchema();
