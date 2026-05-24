import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  rotate: z.literal(true).optional()
}).strict();
export const AlgorithmOverrideAvgAggregateInputObjectSchema: z.ZodType<Prisma.AlgorithmOverrideAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AlgorithmOverrideAvgAggregateInputType>;
export const AlgorithmOverrideAvgAggregateInputObjectZodSchema = makeSchema();
