import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  order: z.literal(true).optional()
}).strict();
export const SessionAvgAggregateInputObjectSchema: z.ZodType<Prisma.SessionAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SessionAvgAggregateInputType>;
export const SessionAvgAggregateInputObjectZodSchema = makeSchema();
