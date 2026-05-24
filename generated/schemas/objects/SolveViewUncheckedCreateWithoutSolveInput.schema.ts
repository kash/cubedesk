import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  viewer_id: z.string().optional().nullable(),
  user_id: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const SolveViewUncheckedCreateWithoutSolveInputObjectSchema: z.ZodType<Prisma.SolveViewUncheckedCreateWithoutSolveInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewUncheckedCreateWithoutSolveInput>;
export const SolveViewUncheckedCreateWithoutSolveInputObjectZodSchema = makeSchema();
