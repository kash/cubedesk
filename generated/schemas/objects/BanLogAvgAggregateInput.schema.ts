import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  minutes: z.literal(true).optional()
}).strict();
export const BanLogAvgAggregateInputObjectSchema: z.ZodType<Prisma.BanLogAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BanLogAvgAggregateInputType>;
export const BanLogAvgAggregateInputObjectZodSchema = makeSchema();
