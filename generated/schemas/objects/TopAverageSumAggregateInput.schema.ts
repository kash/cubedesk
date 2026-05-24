import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  time: z.literal(true).optional()
}).strict();
export const TopAverageSumAggregateInputObjectSchema: z.ZodType<Prisma.TopAverageSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageSumAggregateInputType>;
export const TopAverageSumAggregateInputObjectZodSchema = makeSchema();
