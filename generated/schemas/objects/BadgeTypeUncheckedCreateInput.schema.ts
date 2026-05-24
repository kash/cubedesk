import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeUncheckedCreateNestedManyWithoutBadge_typeInputObjectSchema as BadgeUncheckedCreateNestedManyWithoutBadge_typeInputObjectSchema } from './BadgeUncheckedCreateNestedManyWithoutBadge_typeInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  priority: z.number().int().optional(),
  color: z.string(),
  created_at: z.coerce.date().optional(),
  description: z.string(),
  created_by_id: z.string().optional().nullable(),
  badges: z.lazy(() => BadgeUncheckedCreateNestedManyWithoutBadge_typeInputObjectSchema).optional()
}).strict();
export const BadgeTypeUncheckedCreateInputObjectSchema: z.ZodType<Prisma.BadgeTypeUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeTypeUncheckedCreateInput>;
export const BadgeTypeUncheckedCreateInputObjectZodSchema = makeSchema();
