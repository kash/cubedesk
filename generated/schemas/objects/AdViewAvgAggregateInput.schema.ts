import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  view_time_seconds: z.literal(true).optional()
}).strict();
export const AdViewAvgAggregateInputObjectSchema: z.ZodType<Prisma.AdViewAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AdViewAvgAggregateInputType>;
export const AdViewAvgAggregateInputObjectZodSchema = makeSchema();
