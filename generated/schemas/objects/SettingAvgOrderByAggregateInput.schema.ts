import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  freeze_time: SortOrderSchema.optional(),
  inspection_delay: SortOrderSchema.optional(),
  timer_decimal_points: SortOrderSchema.optional()
}).strict();
export const SettingAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SettingAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SettingAvgOrderByAggregateInput>;
export const SettingAvgOrderByAggregateInputObjectZodSchema = makeSchema();
