import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeWhereUniqueInputObjectSchema as BadgeWhereUniqueInputObjectSchema } from './BadgeWhereUniqueInput.schema';
import { BadgeUpdateWithoutBadge_typeInputObjectSchema as BadgeUpdateWithoutBadge_typeInputObjectSchema } from './BadgeUpdateWithoutBadge_typeInput.schema';
import { BadgeUncheckedUpdateWithoutBadge_typeInputObjectSchema as BadgeUncheckedUpdateWithoutBadge_typeInputObjectSchema } from './BadgeUncheckedUpdateWithoutBadge_typeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BadgeWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => BadgeUpdateWithoutBadge_typeInputObjectSchema), z.lazy(() => BadgeUncheckedUpdateWithoutBadge_typeInputObjectSchema)])
}).strict();
export const BadgeUpdateWithWhereUniqueWithoutBadge_typeInputObjectSchema: z.ZodType<Prisma.BadgeUpdateWithWhereUniqueWithoutBadge_typeInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeUpdateWithWhereUniqueWithoutBadge_typeInput>;
export const BadgeUpdateWithWhereUniqueWithoutBadge_typeInputObjectZodSchema = makeSchema();
