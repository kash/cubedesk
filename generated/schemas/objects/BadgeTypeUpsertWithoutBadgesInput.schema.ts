import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeTypeUpdateWithoutBadgesInputObjectSchema as BadgeTypeUpdateWithoutBadgesInputObjectSchema } from './BadgeTypeUpdateWithoutBadgesInput.schema';
import { BadgeTypeUncheckedUpdateWithoutBadgesInputObjectSchema as BadgeTypeUncheckedUpdateWithoutBadgesInputObjectSchema } from './BadgeTypeUncheckedUpdateWithoutBadgesInput.schema';
import { BadgeTypeCreateWithoutBadgesInputObjectSchema as BadgeTypeCreateWithoutBadgesInputObjectSchema } from './BadgeTypeCreateWithoutBadgesInput.schema';
import { BadgeTypeUncheckedCreateWithoutBadgesInputObjectSchema as BadgeTypeUncheckedCreateWithoutBadgesInputObjectSchema } from './BadgeTypeUncheckedCreateWithoutBadgesInput.schema';
import { BadgeTypeWhereInputObjectSchema as BadgeTypeWhereInputObjectSchema } from './BadgeTypeWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => BadgeTypeUpdateWithoutBadgesInputObjectSchema), z.lazy(() => BadgeTypeUncheckedUpdateWithoutBadgesInputObjectSchema)]),
  create: z.union([z.lazy(() => BadgeTypeCreateWithoutBadgesInputObjectSchema), z.lazy(() => BadgeTypeUncheckedCreateWithoutBadgesInputObjectSchema)]),
  where: z.lazy(() => BadgeTypeWhereInputObjectSchema).optional()
}).strict();
export const BadgeTypeUpsertWithoutBadgesInputObjectSchema: z.ZodType<Prisma.BadgeTypeUpsertWithoutBadgesInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeTypeUpsertWithoutBadgesInput>;
export const BadgeTypeUpsertWithoutBadgesInputObjectZodSchema = makeSchema();
