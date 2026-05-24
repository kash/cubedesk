import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  time: z.literal(true).optional()
}).strict();
export const TopSolveSumAggregateInputObjectSchema: z.ZodType<Prisma.TopSolveSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TopSolveSumAggregateInputType>;
export const TopSolveSumAggregateInputObjectZodSchema = makeSchema();
