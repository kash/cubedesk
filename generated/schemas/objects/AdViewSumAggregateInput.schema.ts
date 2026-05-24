import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  view_time_seconds: z.literal(true).optional()
}).strict();
export const AdViewSumAggregateInputObjectSchema: z.ZodType<Prisma.AdViewSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AdViewSumAggregateInputType>;
export const AdViewSumAggregateInputObjectZodSchema = makeSchema();
