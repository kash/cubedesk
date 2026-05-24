import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  solve_id: z.string(),
  user_id: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const SolveViewUncheckedCreateWithoutViewerInputObjectSchema: z.ZodType<Prisma.SolveViewUncheckedCreateWithoutViewerInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewUncheckedCreateWithoutViewerInput>;
export const SolveViewUncheckedCreateWithoutViewerInputObjectZodSchema = makeSchema();
