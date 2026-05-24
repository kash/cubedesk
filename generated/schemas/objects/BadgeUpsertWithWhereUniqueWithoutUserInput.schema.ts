import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeWhereUniqueInputObjectSchema as BadgeWhereUniqueInputObjectSchema } from './BadgeWhereUniqueInput.schema';
import { BadgeUpdateWithoutUserInputObjectSchema as BadgeUpdateWithoutUserInputObjectSchema } from './BadgeUpdateWithoutUserInput.schema';
import { BadgeUncheckedUpdateWithoutUserInputObjectSchema as BadgeUncheckedUpdateWithoutUserInputObjectSchema } from './BadgeUncheckedUpdateWithoutUserInput.schema';
import { BadgeCreateWithoutUserInputObjectSchema as BadgeCreateWithoutUserInputObjectSchema } from './BadgeCreateWithoutUserInput.schema';
import { BadgeUncheckedCreateWithoutUserInputObjectSchema as BadgeUncheckedCreateWithoutUserInputObjectSchema } from './BadgeUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BadgeWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => BadgeUpdateWithoutUserInputObjectSchema), z.lazy(() => BadgeUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => BadgeCreateWithoutUserInputObjectSchema), z.lazy(() => BadgeUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const BadgeUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.BadgeUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeUpsertWithWhereUniqueWithoutUserInput>;
export const BadgeUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
