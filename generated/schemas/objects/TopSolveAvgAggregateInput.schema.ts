import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  time: z.literal(true).optional()
}).strict();
export const TopSolveAvgAggregateInputObjectSchema: z.ZodType<Prisma.TopSolveAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TopSolveAvgAggregateInputType>;
export const TopSolveAvgAggregateInputObjectZodSchema = makeSchema();
