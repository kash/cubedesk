import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutBadge_typeInputObjectSchema as UserAccountCreateNestedOneWithoutBadge_typeInputObjectSchema } from './UserAccountCreateNestedOneWithoutBadge_typeInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  priority: z.number().int().optional(),
  color: z.string(),
  created_at: z.coerce.date().optional(),
  description: z.string(),
  created_by: z.lazy(() => UserAccountCreateNestedOneWithoutBadge_typeInputObjectSchema).optional()
}).strict();
export const BadgeTypeCreateWithoutBadgesInputObjectSchema: z.ZodType<Prisma.BadgeTypeCreateWithoutBadgesInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeTypeCreateWithoutBadgesInput>;
export const BadgeTypeCreateWithoutBadgesInputObjectZodSchema = makeSchema();
