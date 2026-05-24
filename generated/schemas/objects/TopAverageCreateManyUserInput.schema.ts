import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  time: z.number(),
  cube_type: z.string(),
  solve_1_id: z.string(),
  solve_2_id: z.string(),
  solve_3_id: z.string(),
  solve_4_id: z.string(),
  solve_5_id: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const TopAverageCreateManyUserInputObjectSchema: z.ZodType<Prisma.TopAverageCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageCreateManyUserInput>;
export const TopAverageCreateManyUserInputObjectZodSchema = makeSchema();
