import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  freeze_time: z.literal(true).optional(),
  inspection_delay: z.literal(true).optional(),
  timer_decimal_points: z.literal(true).optional()
}).strict();
export const SettingSumAggregateInputObjectSchema: z.ZodType<Prisma.SettingSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SettingSumAggregateInputType>;
export const SettingSumAggregateInputObjectZodSchema = makeSchema();
