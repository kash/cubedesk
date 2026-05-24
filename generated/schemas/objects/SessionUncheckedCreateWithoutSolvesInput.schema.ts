import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  user_id: z.string(),
  created_at: z.coerce.date().optional(),
  order: z.number().int().optional()
}).strict();
export const SessionUncheckedCreateWithoutSolvesInputObjectSchema: z.ZodType<Prisma.SessionUncheckedCreateWithoutSolvesInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionUncheckedCreateWithoutSolvesInput>;
export const SessionUncheckedCreateWithoutSolvesInputObjectZodSchema = makeSchema();
