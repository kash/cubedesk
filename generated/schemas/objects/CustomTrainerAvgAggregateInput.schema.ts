import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  like_count: z.literal(true).optional()
}).strict();
export const CustomTrainerAvgAggregateInputObjectSchema: z.ZodType<Prisma.CustomTrainerAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerAvgAggregateInputType>;
export const CustomTrainerAvgAggregateInputObjectZodSchema = makeSchema();
