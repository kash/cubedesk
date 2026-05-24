import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeTypeWhereInputObjectSchema as BadgeTypeWhereInputObjectSchema } from './BadgeTypeWhereInput.schema';
import { BadgeTypeUpdateWithoutBadgesInputObjectSchema as BadgeTypeUpdateWithoutBadgesInputObjectSchema } from './BadgeTypeUpdateWithoutBadgesInput.schema';
import { BadgeTypeUncheckedUpdateWithoutBadgesInputObjectSchema as BadgeTypeUncheckedUpdateWithoutBadgesInputObjectSchema } from './BadgeTypeUncheckedUpdateWithoutBadgesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BadgeTypeWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => BadgeTypeUpdateWithoutBadgesInputObjectSchema), z.lazy(() => BadgeTypeUncheckedUpdateWithoutBadgesInputObjectSchema)])
}).strict();
export const BadgeTypeUpdateToOneWithWhereWithoutBadgesInputObjectSchema: z.ZodType<Prisma.BadgeTypeUpdateToOneWithWhereWithoutBadgesInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeTypeUpdateToOneWithWhereWithoutBadgesInput>;
export const BadgeTypeUpdateToOneWithWhereWithoutBadgesInputObjectZodSchema = makeSchema();
