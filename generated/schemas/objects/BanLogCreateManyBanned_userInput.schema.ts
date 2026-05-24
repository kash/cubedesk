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
export const BanLogCreateManyBanned_userInputObjectSchema: z.ZodType<Prisma.BanLogCreateManyBanned_userInput> = makeSchema() as unknown as z.ZodType<Prisma.BanLogCreateManyBanned_userInput>;
export const BanLogCreateManyBanned_userInputObjectZodSchema = makeSchema();
