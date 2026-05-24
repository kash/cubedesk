import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  freeze_time: z.literal(true).optional(),
  inspection_delay: z.literal(true).optional(),
  timer_decimal_points: z.literal(true).optional()
}).strict();
export const SettingAvgAggregateInputObjectSchema: z.ZodType<Prisma.SettingAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SettingAvgAggregateInputType>;
export const SettingAvgAggregateInputObjectZodSchema = makeSchema();
