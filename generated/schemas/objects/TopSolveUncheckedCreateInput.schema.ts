import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string(),
  time: z.number(),
  solve_id: z.string(),
  cube_type: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const TopSolveUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TopSolveUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TopSolveUncheckedCreateInput>;
export const TopSolveUncheckedCreateInputObjectZodSchema = makeSchema();
