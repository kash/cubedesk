import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  priority: z.number().int().optional(),
  color: z.string(),
  created_at: z.coerce.date().optional(),
  description: z.string(),
  created_by_id: z.string().optional().nullable()
}).strict();
export const BadgeTypeUncheckedCreateWithoutBadgesInputObjectSchema: z.ZodType<Prisma.BadgeTypeUncheckedCreateWithoutBadgesInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeTypeUncheckedCreateWithoutBadgesInput>;
export const BadgeTypeUncheckedCreateWithoutBadgesInputObjectZodSchema = makeSchema();
