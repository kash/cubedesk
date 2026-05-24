import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeTypeArgsObjectSchema as BadgeTypeArgsObjectSchema } from './BadgeTypeArgs.schema';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema'

const makeSchema = () => z.object({
  badge_type: z.union([z.boolean(), z.lazy(() => BadgeTypeArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const BadgeIncludeObjectSchema: z.ZodType<Prisma.BadgeInclude> = makeSchema() as unknown as z.ZodType<Prisma.BadgeInclude>;
export const BadgeIncludeObjectZodSchema = makeSchema();
