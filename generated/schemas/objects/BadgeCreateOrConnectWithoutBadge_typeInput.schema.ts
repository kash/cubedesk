import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeWhereUniqueInputObjectSchema as BadgeWhereUniqueInputObjectSchema } from './BadgeWhereUniqueInput.schema';
import { BadgeCreateWithoutBadge_typeInputObjectSchema as BadgeCreateWithoutBadge_typeInputObjectSchema } from './BadgeCreateWithoutBadge_typeInput.schema';
import { BadgeUncheckedCreateWithoutBadge_typeInputObjectSchema as BadgeUncheckedCreateWithoutBadge_typeInputObjectSchema } from './BadgeUncheckedCreateWithoutBadge_typeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BadgeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BadgeCreateWithoutBadge_typeInputObjectSchema), z.lazy(() => BadgeUncheckedCreateWithoutBadge_typeInputObjectSchema)])
}).strict();
export const BadgeCreateOrConnectWithoutBadge_typeInputObjectSchema: z.ZodType<Prisma.BadgeCreateOrConnectWithoutBadge_typeInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeCreateOrConnectWithoutBadge_typeInput>;
export const BadgeCreateOrConnectWithoutBadge_typeInputObjectZodSchema = makeSchema();
