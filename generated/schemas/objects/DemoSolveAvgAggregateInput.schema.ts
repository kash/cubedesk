import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  raw_time: z.literal(true).optional(),
  started_at: z.literal(true).optional(),
  ended_at: z.literal(true).optional()
}).strict();
export const DemoSolveAvgAggregateInputObjectSchema: z.ZodType<Prisma.DemoSolveAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DemoSolveAvgAggregateInputType>;
export const DemoSolveAvgAggregateInputObjectZodSchema = makeSchema();
