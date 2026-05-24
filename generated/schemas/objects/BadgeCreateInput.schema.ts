import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeTypeCreateNestedOneWithoutBadgesInputObjectSchema as BadgeTypeCreateNestedOneWithoutBadgesInputObjectSchema } from './BadgeTypeCreateNestedOneWithoutBadgesInput.schema';
import { UserAccountCreateNestedOneWithoutBadgesInputObjectSchema as UserAccountCreateNestedOneWithoutBadgesInputObjectSchema } from './UserAccountCreateNestedOneWithoutBadgesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  badge_type: z.lazy(() => BadgeTypeCreateNestedOneWithoutBadgesInputObjectSchema),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutBadgesInputObjectSchema)
}).strict();
export const BadgeCreateInputObjectSchema: z.ZodType<Prisma.BadgeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeCreateInput>;
export const BadgeCreateInputObjectZodSchema = makeSchema();
