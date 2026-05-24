import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  solve_id: z.string(),
  viewer_id: z.string().optional().nullable(),
  created_at: z.coerce.date().optional()
}).strict();
export const SolveViewCreateManyUserInputObjectSchema: z.ZodType<Prisma.SolveViewCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewCreateManyUserInput>;
export const SolveViewCreateManyUserInputObjectZodSchema = makeSchema();
