import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  scramble: z.literal(true).optional(),
  private: z.literal(true).optional()
}).strict();
export const CustomCubeTypeMaxAggregateInputObjectSchema: z.ZodType<Prisma.CustomCubeTypeMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CustomCubeTypeMaxAggregateInputType>;
export const CustomCubeTypeMaxAggregateInputObjectZodSchema = makeSchema();
