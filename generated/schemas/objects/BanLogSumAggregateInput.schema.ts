import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  minutes: z.literal(true).optional()
}).strict();
export const BanLogSumAggregateInputObjectSchema: z.ZodType<Prisma.BanLogSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BanLogSumAggregateInputType>;
export const BanLogSumAggregateInputObjectZodSchema = makeSchema();
