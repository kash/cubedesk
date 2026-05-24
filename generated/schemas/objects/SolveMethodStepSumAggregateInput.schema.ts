import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  turn_count: z.literal(true).optional(),
  step_index: z.literal(true).optional(),
  total_time: z.literal(true).optional(),
  tps: z.literal(true).optional(),
  recognition_time: z.literal(true).optional()
}).strict();
export const SolveMethodStepSumAggregateInputObjectSchema: z.ZodType<Prisma.SolveMethodStepSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SolveMethodStepSumAggregateInputType>;
export const SolveMethodStepSumAggregateInputObjectZodSchema = makeSchema();
