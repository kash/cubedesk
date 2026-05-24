import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string(),
  rotate: z.number().int().optional().nullable(),
  cube_key: z.string(),
  created_at: z.coerce.date().optional(),
  solution: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  scrambles: z.string().optional().nullable()
}).strict();
export const AlgorithmOverrideUncheckedCreateInputObjectSchema: z.ZodType<Prisma.AlgorithmOverrideUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AlgorithmOverrideUncheckedCreateInput>;
export const AlgorithmOverrideUncheckedCreateInputObjectZodSchema = makeSchema();
