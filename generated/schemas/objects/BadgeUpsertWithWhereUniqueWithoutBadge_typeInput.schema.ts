import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeWhereUniqueInputObjectSchema as BadgeWhereUniqueInputObjectSchema } from './BadgeWhereUniqueInput.schema';
import { BadgeUpdateWithoutBadge_typeInputObjectSchema as BadgeUpdateWithoutBadge_typeInputObjectSchema } from './BadgeUpdateWithoutBadge_typeInput.schema';
import { BadgeUncheckedUpdateWithoutBadge_typeInputObjectSchema as BadgeUncheckedUpdateWithoutBadge_typeInputObjectSchema } from './BadgeUncheckedUpdateWithoutBadge_typeInput.schema';
import { BadgeCreateWithoutBadge_typeInputObjectSchema as BadgeCreateWithoutBadge_typeInputObjectSchema } from './BadgeCreateWithoutBadge_typeInput.schema';
import { BadgeUncheckedCreateWithoutBadge_typeInputObjectSchema as BadgeUncheckedCreateWithoutBadge_typeInputObjectSchema } from './BadgeUncheckedCreateWithoutBadge_typeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BadgeWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => BadgeUpdateWithoutBadge_typeInputObjectSchema), z.lazy(() => BadgeUncheckedUpdateWithoutBadge_typeInputObjectSchema)]),
  create: z.union([z.lazy(() => BadgeCreateWithoutBadge_typeInputObjectSchema), z.lazy(() => BadgeUncheckedCreateWithoutBadge_typeInputObjectSchema)])
}).strict();
export const BadgeUpsertWithWhereUniqueWithoutBadge_typeInputObjectSchema: z.ZodType<Prisma.BadgeUpsertWithWhereUniqueWithoutBadge_typeInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeUpsertWithWhereUniqueWithoutBadge_typeInput>;
export const BadgeUpsertWithWhereUniqueWithoutBadge_typeInputObjectZodSchema = makeSchema();
