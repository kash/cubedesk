import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  freeze_time: SortOrderSchema.optional(),
  inspection_delay: SortOrderSchema.optional(),
  timer_decimal_points: SortOrderSchema.optional()
}).strict();
export const SettingSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SettingSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SettingSumOrderByAggregateInput>;
export const SettingSumOrderByAggregateInputObjectZodSchema = makeSchema();
