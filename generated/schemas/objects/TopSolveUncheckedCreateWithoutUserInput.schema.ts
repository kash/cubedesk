import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  time: z.number(),
  solve_id: z.string(),
  cube_type: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const TopSolveUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.TopSolveUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TopSolveUncheckedCreateWithoutUserInput>;
export const TopSolveUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
