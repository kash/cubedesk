import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  rotate: z.literal(true).optional(),
  cube_key: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  solution: z.literal(true).optional(),
  name: z.literal(true).optional(),
  scrambles: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const AlgorithmOverrideCountAggregateInputObjectSchema: z.ZodType<Prisma.AlgorithmOverrideCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AlgorithmOverrideCountAggregateInputType>;
export const AlgorithmOverrideCountAggregateInputObjectZodSchema = makeSchema();
