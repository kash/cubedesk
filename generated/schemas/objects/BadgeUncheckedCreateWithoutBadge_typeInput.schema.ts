import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const BadgeUncheckedCreateWithoutBadge_typeInputObjectSchema: z.ZodType<Prisma.BadgeUncheckedCreateWithoutBadge_typeInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeUncheckedCreateWithoutBadge_typeInput>;
export const BadgeUncheckedCreateWithoutBadge_typeInputObjectZodSchema = makeSchema();
