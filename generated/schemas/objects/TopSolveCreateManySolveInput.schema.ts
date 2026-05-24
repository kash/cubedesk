import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string(),
  time: z.number(),
  cube_type: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const TopSolveCreateManySolveInputObjectSchema: z.ZodType<Prisma.TopSolveCreateManySolveInput> = makeSchema() as unknown as z.ZodType<Prisma.TopSolveCreateManySolveInput>;
export const TopSolveCreateManySolveInputObjectZodSchema = makeSchema();
