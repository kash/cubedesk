import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  solve_id: z.string(),
  user_id: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const SolveViewCreateManyViewerInputObjectSchema: z.ZodType<Prisma.SolveViewCreateManyViewerInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewCreateManyViewerInput>;
export const SolveViewCreateManyViewerInputObjectZodSchema = makeSchema();
