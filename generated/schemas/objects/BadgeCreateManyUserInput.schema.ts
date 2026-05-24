import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  badge_type_id: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const BadgeCreateManyUserInputObjectSchema: z.ZodType<Prisma.BadgeCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeCreateManyUserInput>;
export const BadgeCreateManyUserInputObjectZodSchema = makeSchema();
