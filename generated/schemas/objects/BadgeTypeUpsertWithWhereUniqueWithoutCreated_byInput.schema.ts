import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeTypeWhereUniqueInputObjectSchema as BadgeTypeWhereUniqueInputObjectSchema } from './BadgeTypeWhereUniqueInput.schema';
import { BadgeTypeUpdateWithoutCreated_byInputObjectSchema as BadgeTypeUpdateWithoutCreated_byInputObjectSchema } from './BadgeTypeUpdateWithoutCreated_byInput.schema';
import { BadgeTypeUncheckedUpdateWithoutCreated_byInputObjectSchema as BadgeTypeUncheckedUpdateWithoutCreated_byInputObjectSchema } from './BadgeTypeUncheckedUpdateWithoutCreated_byInput.schema';
import { BadgeTypeCreateWithoutCreated_byInputObjectSchema as BadgeTypeCreateWithoutCreated_byInputObjectSchema } from './BadgeTypeCreateWithoutCreated_byInput.schema';
import { BadgeTypeUncheckedCreateWithoutCreated_byInputObjectSchema as BadgeTypeUncheckedCreateWithoutCreated_byInputObjectSchema } from './BadgeTypeUncheckedCreateWithoutCreated_byInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BadgeTypeWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => BadgeTypeUpdateWithoutCreated_byInputObjectSchema), z.lazy(() => BadgeTypeUncheckedUpdateWithoutCreated_byInputObjectSchema)]),
  create: z.union([z.lazy(() => BadgeTypeCreateWithoutCreated_byInputObjectSchema), z.lazy(() => BadgeTypeUncheckedCreateWithoutCreated_byInputObjectSchema)])
}).strict();
export const BadgeTypeUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema: z.ZodType<Prisma.BadgeTypeUpsertWithWhereUniqueWithoutCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeTypeUpsertWithWhereUniqueWithoutCreated_byInput>;
export const BadgeTypeUpsertWithWhereUniqueWithoutCreated_byInputObjectZodSchema = makeSchema();
