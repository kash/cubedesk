import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  time: z.literal(true).optional()
}).strict();
export const TopAverageAvgAggregateInputObjectSchema: z.ZodType<Prisma.TopAverageAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageAvgAggregateInputType>;
export const TopAverageAvgAggregateInputObjectZodSchema = makeSchema();
