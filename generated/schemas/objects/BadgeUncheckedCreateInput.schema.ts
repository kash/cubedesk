import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string(),
  badge_type_id: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const BadgeUncheckedCreateInputObjectSchema: z.ZodType<Prisma.BadgeUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeUncheckedCreateInput>;
export const BadgeUncheckedCreateInputObjectZodSchema = makeSchema();
