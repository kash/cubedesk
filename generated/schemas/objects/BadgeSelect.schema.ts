import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeTypeArgsObjectSchema as BadgeTypeArgsObjectSchema } from './BadgeTypeArgs.schema';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  badge_type_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  badge_type: z.union([z.boolean(), z.lazy(() => BadgeTypeArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const BadgeSelectObjectSchema: z.ZodType<Prisma.BadgeSelect> = makeSchema() as unknown as z.ZodType<Prisma.BadgeSelect>;
export const BadgeSelectObjectZodSchema = makeSchema();
