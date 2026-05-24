import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeWhereUniqueInputObjectSchema as BadgeWhereUniqueInputObjectSchema } from './BadgeWhereUniqueInput.schema';
import { BadgeUpdateWithoutUserInputObjectSchema as BadgeUpdateWithoutUserInputObjectSchema } from './BadgeUpdateWithoutUserInput.schema';
import { BadgeUncheckedUpdateWithoutUserInputObjectSchema as BadgeUncheckedUpdateWithoutUserInputObjectSchema } from './BadgeUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BadgeWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => BadgeUpdateWithoutUserInputObjectSchema), z.lazy(() => BadgeUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const BadgeUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.BadgeUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeUpdateWithWhereUniqueWithoutUserInput>;
export const BadgeUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
