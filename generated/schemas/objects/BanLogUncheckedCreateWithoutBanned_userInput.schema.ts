import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  created_by_id: z.string(),
  reason: z.string(),
  active: z.boolean().optional(),
  banned_until: z.coerce.date().optional().nullable(),
  minutes: z.number().int().optional().nullable(),
  forever: z.boolean().optional(),
  created_at: z.coerce.date().optional()
}).strict();
export const BanLogUncheckedCreateWithoutBanned_userInputObjectSchema: z.ZodType<Prisma.BanLogUncheckedCreateWithoutBanned_userInput> = makeSchema() as unknown as z.ZodType<Prisma.BanLogUncheckedCreateWithoutBanned_userInput>;
export const BanLogUncheckedCreateWithoutBanned_userInputObjectZodSchema = makeSchema();
