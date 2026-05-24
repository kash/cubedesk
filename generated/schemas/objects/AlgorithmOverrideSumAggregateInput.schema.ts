import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  rotate: z.literal(true).optional()
}).strict();
export const AlgorithmOverrideSumAggregateInputObjectSchema: z.ZodType<Prisma.AlgorithmOverrideSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AlgorithmOverrideSumAggregateInputType>;
export const AlgorithmOverrideSumAggregateInputObjectZodSchema = makeSchema();
