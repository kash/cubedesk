import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeCreateNestedManyWithoutBadge_typeInputObjectSchema as BadgeCreateNestedManyWithoutBadge_typeInputObjectSchema } from './BadgeCreateNestedManyWithoutBadge_typeInput.schema';
import { UserAccountCreateNestedOneWithoutBadge_typeInputObjectSchema as UserAccountCreateNestedOneWithoutBadge_typeInputObjectSchema } from './UserAccountCreateNestedOneWithoutBadge_typeInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  priority: z.number().int().optional(),
  color: z.string(),
  created_at: z.coerce.date().optional(),
  description: z.string(),
  badges: z.lazy(() => BadgeCreateNestedManyWithoutBadge_typeInputObjectSchema).optional(),
  created_by: z.lazy(() => UserAccountCreateNestedOneWithoutBadge_typeInputObjectSchema).optional()
}).strict();
export const BadgeTypeCreateInputObjectSchema: z.ZodType<Prisma.BadgeTypeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeTypeCreateInput>;
export const BadgeTypeCreateInputObjectZodSchema = makeSchema();
