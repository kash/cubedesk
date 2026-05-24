import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  banned_user_id: z.string(),
  reason: z.string(),
  active: z.boolean().optional(),
  banned_until: z.coerce.date().optional().nullable(),
  minutes: z.number().int().optional().nullable(),
  forever: z.boolean().optional(),
  created_at: z.coerce.date().optional()
}).strict();
export const BanLogCreateManyCreated_byInputObjectSchema: z.ZodType<Prisma.BanLogCreateManyCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.BanLogCreateManyCreated_byInput>;
export const BanLogCreateManyCreated_byInputObjectZodSchema = makeSchema();
