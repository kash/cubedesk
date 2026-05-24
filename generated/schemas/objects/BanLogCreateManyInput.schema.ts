import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  created_by_id: z.string(),
  banned_user_id: z.string(),
  reason: z.string(),
  active: z.boolean().optional(),
  banned_until: z.coerce.date().optional().nullable(),
  minutes: z.number().int().optional().nullable(),
  forever: z.boolean().optional(),
  created_at: z.coerce.date().optional()
}).strict();
export const BanLogCreateManyInputObjectSchema: z.ZodType<Prisma.BanLogCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.BanLogCreateManyInput>;
export const BanLogCreateManyInputObjectZodSchema = makeSchema();
