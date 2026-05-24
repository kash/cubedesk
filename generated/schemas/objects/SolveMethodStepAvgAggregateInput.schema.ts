import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  turn_count: z.literal(true).optional(),
  step_index: z.literal(true).optional(),
  total_time: z.literal(true).optional(),
  tps: z.literal(true).optional(),
  recognition_time: z.literal(true).optional()
}).strict();
export const SolveMethodStepAvgAggregateInputObjectSchema: z.ZodType<Prisma.SolveMethodStepAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SolveMethodStepAvgAggregateInputType>;
export const SolveMethodStepAvgAggregateInputObjectZodSchema = makeSchema();
