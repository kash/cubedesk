import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  colors: z.literal(true).optional(),
  cube_type: z.literal(true).optional(),
  key: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  name: z.literal(true).optional(),
  like_count: z.literal(true).optional(),
  private: z.literal(true).optional(),
  copy_of_id: z.literal(true).optional(),
  description: z.literal(true).optional(),
  downloaded: z.literal(true).optional(),
  group_name: z.literal(true).optional(),
  scrambles: z.literal(true).optional(),
  solution: z.literal(true).optional(),
  alt_solutions: z.literal(true).optional(),
  three_d: z.literal(true).optional(),
  algo_type: z.literal(true).optional()
}).strict();
export const CustomTrainerMinAggregateInputObjectSchema: z.ZodType<Prisma.CustomTrainerMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerMinAggregateInputType>;
export const CustomTrainerMinAggregateInputObjectZodSchema = makeSchema();
