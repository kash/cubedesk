import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string(),
  time: z.number(),
  cube_type: z.string(),
  solve_1_id: z.string(),
  solve_2_id: z.string(),
  solve_3_id: z.string(),
  solve_5_id: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const TopAverageCreateManySolve_4InputObjectSchema: z.ZodType<Prisma.TopAverageCreateManySolve_4Input> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageCreateManySolve_4Input>;
export const TopAverageCreateManySolve_4InputObjectZodSchema = makeSchema();
