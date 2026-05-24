import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeTypeWhereUniqueInputObjectSchema as BadgeTypeWhereUniqueInputObjectSchema } from './BadgeTypeWhereUniqueInput.schema';
import { BadgeTypeCreateWithoutBadgesInputObjectSchema as BadgeTypeCreateWithoutBadgesInputObjectSchema } from './BadgeTypeCreateWithoutBadgesInput.schema';
import { BadgeTypeUncheckedCreateWithoutBadgesInputObjectSchema as BadgeTypeUncheckedCreateWithoutBadgesInputObjectSchema } from './BadgeTypeUncheckedCreateWithoutBadgesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BadgeTypeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BadgeTypeCreateWithoutBadgesInputObjectSchema), z.lazy(() => BadgeTypeUncheckedCreateWithoutBadgesInputObjectSchema)])
}).strict();
export const BadgeTypeCreateOrConnectWithoutBadgesInputObjectSchema: z.ZodType<Prisma.BadgeTypeCreateOrConnectWithoutBadgesInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeTypeCreateOrConnectWithoutBadgesInput>;
export const BadgeTypeCreateOrConnectWithoutBadgesInputObjectZodSchema = makeSchema();
