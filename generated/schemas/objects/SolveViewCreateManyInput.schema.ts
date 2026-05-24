import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  solve_id: z.string(),
  viewer_id: z.string().optional().nullable(),
  user_id: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const SolveViewCreateManyInputObjectSchema: z.ZodType<Prisma.SolveViewCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewCreateManyInput>;
export const SolveViewCreateManyInputObjectZodSchema = makeSchema();
