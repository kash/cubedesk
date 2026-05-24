import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  like_count: z.literal(true).optional()
}).strict();
export const CustomTrainerSumAggregateInputObjectSchema: z.ZodType<Prisma.CustomTrainerSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerSumAggregateInputType>;
export const CustomTrainerSumAggregateInputObjectZodSchema = makeSchema();
