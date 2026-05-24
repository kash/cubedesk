import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeTypeWhereUniqueInputObjectSchema as BadgeTypeWhereUniqueInputObjectSchema } from './BadgeTypeWhereUniqueInput.schema';
import { BadgeTypeUpdateWithoutCreated_byInputObjectSchema as BadgeTypeUpdateWithoutCreated_byInputObjectSchema } from './BadgeTypeUpdateWithoutCreated_byInput.schema';
import { BadgeTypeUncheckedUpdateWithoutCreated_byInputObjectSchema as BadgeTypeUncheckedUpdateWithoutCreated_byInputObjectSchema } from './BadgeTypeUncheckedUpdateWithoutCreated_byInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BadgeTypeWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => BadgeTypeUpdateWithoutCreated_byInputObjectSchema), z.lazy(() => BadgeTypeUncheckedUpdateWithoutCreated_byInputObjectSchema)])
}).strict();
export const BadgeTypeUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema: z.ZodType<Prisma.BadgeTypeUpdateWithWhereUniqueWithoutCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeTypeUpdateWithWhereUniqueWithoutCreated_byInput>;
export const BadgeTypeUpdateWithWhereUniqueWithoutCreated_byInputObjectZodSchema = makeSchema();
