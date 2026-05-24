import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeTypeCreateNestedOneWithoutBadgesInputObjectSchema as BadgeTypeCreateNestedOneWithoutBadgesInputObjectSchema } from './BadgeTypeCreateNestedOneWithoutBadgesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  badge_type: z.lazy(() => BadgeTypeCreateNestedOneWithoutBadgesInputObjectSchema)
}).strict();
export const BadgeCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.BadgeCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeCreateWithoutUserInput>;
export const BadgeCreateWithoutUserInputObjectZodSchema = makeSchema();
