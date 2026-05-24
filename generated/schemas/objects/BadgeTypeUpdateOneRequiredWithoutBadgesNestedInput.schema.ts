import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeTypeCreateWithoutBadgesInputObjectSchema as BadgeTypeCreateWithoutBadgesInputObjectSchema } from './BadgeTypeCreateWithoutBadgesInput.schema';
import { BadgeTypeUncheckedCreateWithoutBadgesInputObjectSchema as BadgeTypeUncheckedCreateWithoutBadgesInputObjectSchema } from './BadgeTypeUncheckedCreateWithoutBadgesInput.schema';
import { BadgeTypeCreateOrConnectWithoutBadgesInputObjectSchema as BadgeTypeCreateOrConnectWithoutBadgesInputObjectSchema } from './BadgeTypeCreateOrConnectWithoutBadgesInput.schema';
import { BadgeTypeUpsertWithoutBadgesInputObjectSchema as BadgeTypeUpsertWithoutBadgesInputObjectSchema } from './BadgeTypeUpsertWithoutBadgesInput.schema';
import { BadgeTypeWhereUniqueInputObjectSchema as BadgeTypeWhereUniqueInputObjectSchema } from './BadgeTypeWhereUniqueInput.schema';
import { BadgeTypeUpdateToOneWithWhereWithoutBadgesInputObjectSchema as BadgeTypeUpdateToOneWithWhereWithoutBadgesInputObjectSchema } from './BadgeTypeUpdateToOneWithWhereWithoutBadgesInput.schema';
import { BadgeTypeUpdateWithoutBadgesInputObjectSchema as BadgeTypeUpdateWithoutBadgesInputObjectSchema } from './BadgeTypeUpdateWithoutBadgesInput.schema';
import { BadgeTypeUncheckedUpdateWithoutBadgesInputObjectSchema as BadgeTypeUncheckedUpdateWithoutBadgesInputObjectSchema } from './BadgeTypeUncheckedUpdateWithoutBadgesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BadgeTypeCreateWithoutBadgesInputObjectSchema), z.lazy(() => BadgeTypeUncheckedCreateWithoutBadgesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => BadgeTypeCreateOrConnectWithoutBadgesInputObjectSchema).optional(),
  upsert: z.lazy(() => BadgeTypeUpsertWithoutBadgesInputObjectSchema).optional(),
  connect: z.lazy(() => BadgeTypeWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => BadgeTypeUpdateToOneWithWhereWithoutBadgesInputObjectSchema), z.lazy(() => BadgeTypeUpdateWithoutBadgesInputObjectSchema), z.lazy(() => BadgeTypeUncheckedUpdateWithoutBadgesInputObjectSchema)]).optional()
}).strict();
export const BadgeTypeUpdateOneRequiredWithoutBadgesNestedInputObjectSchema: z.ZodType<Prisma.BadgeTypeUpdateOneRequiredWithoutBadgesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeTypeUpdateOneRequiredWithoutBadgesNestedInput>;
export const BadgeTypeUpdateOneRequiredWithoutBadgesNestedInputObjectZodSchema = makeSchema();
