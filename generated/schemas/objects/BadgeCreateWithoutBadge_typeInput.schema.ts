import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutBadgesInputObjectSchema as UserAccountCreateNestedOneWithoutBadgesInputObjectSchema } from './UserAccountCreateNestedOneWithoutBadgesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutBadgesInputObjectSchema)
}).strict();
export const BadgeCreateWithoutBadge_typeInputObjectSchema: z.ZodType<Prisma.BadgeCreateWithoutBadge_typeInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeCreateWithoutBadge_typeInput>;
export const BadgeCreateWithoutBadge_typeInputObjectZodSchema = makeSchema();
