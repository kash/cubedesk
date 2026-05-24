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
  badges: z.lazy(() => BadgeUncheckedCreateNestedManyWithoutBadge_typeInputObjectSchema).optional()
}).strict();
export const BadgeTypeUncheckedCreateWithoutCreated_byInputObjectSchema: z.ZodType<Prisma.BadgeTypeUncheckedCreateWithoutCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeTypeUncheckedCreateWithoutCreated_byInput>;
export const BadgeTypeUncheckedCreateWithoutCreated_byInputObjectZodSchema = makeSchema();
