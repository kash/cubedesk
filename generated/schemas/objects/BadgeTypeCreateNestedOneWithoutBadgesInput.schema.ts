import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeTypeCreateWithoutBadgesInputObjectSchema as BadgeTypeCreateWithoutBadgesInputObjectSchema } from './BadgeTypeCreateWithoutBadgesInput.schema';
import { BadgeTypeUncheckedCreateWithoutBadgesInputObjectSchema as BadgeTypeUncheckedCreateWithoutBadgesInputObjectSchema } from './BadgeTypeUncheckedCreateWithoutBadgesInput.schema';
import { BadgeTypeCreateOrConnectWithoutBadgesInputObjectSchema as BadgeTypeCreateOrConnectWithoutBadgesInputObjectSchema } from './BadgeTypeCreateOrConnectWithoutBadgesInput.schema';
import { BadgeTypeWhereUniqueInputObjectSchema as BadgeTypeWhereUniqueInputObjectSchema } from './BadgeTypeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BadgeTypeCreateWithoutBadgesInputObjectSchema), z.lazy(() => BadgeTypeUncheckedCreateWithoutBadgesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => BadgeTypeCreateOrConnectWithoutBadgesInputObjectSchema).optional(),
  connect: z.lazy(() => BadgeTypeWhereUniqueInputObjectSchema).optional()
}).strict();
export const BadgeTypeCreateNestedOneWithoutBadgesInputObjectSchema: z.ZodType<Prisma.BadgeTypeCreateNestedOneWithoutBadgesInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeTypeCreateNestedOneWithoutBadgesInput>;
export const BadgeTypeCreateNestedOneWithoutBadgesInputObjectZodSchema = makeSchema();
