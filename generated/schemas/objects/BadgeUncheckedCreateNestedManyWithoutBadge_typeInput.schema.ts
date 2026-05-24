import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeCreateWithoutBadge_typeInputObjectSchema as BadgeCreateWithoutBadge_typeInputObjectSchema } from './BadgeCreateWithoutBadge_typeInput.schema';
import { BadgeUncheckedCreateWithoutBadge_typeInputObjectSchema as BadgeUncheckedCreateWithoutBadge_typeInputObjectSchema } from './BadgeUncheckedCreateWithoutBadge_typeInput.schema';
import { BadgeCreateOrConnectWithoutBadge_typeInputObjectSchema as BadgeCreateOrConnectWithoutBadge_typeInputObjectSchema } from './BadgeCreateOrConnectWithoutBadge_typeInput.schema';
import { BadgeCreateManyBadge_typeInputEnvelopeObjectSchema as BadgeCreateManyBadge_typeInputEnvelopeObjectSchema } from './BadgeCreateManyBadge_typeInputEnvelope.schema';
import { BadgeWhereUniqueInputObjectSchema as BadgeWhereUniqueInputObjectSchema } from './BadgeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BadgeCreateWithoutBadge_typeInputObjectSchema), z.lazy(() => BadgeCreateWithoutBadge_typeInputObjectSchema).array(), z.lazy(() => BadgeUncheckedCreateWithoutBadge_typeInputObjectSchema), z.lazy(() => BadgeUncheckedCreateWithoutBadge_typeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BadgeCreateOrConnectWithoutBadge_typeInputObjectSchema), z.lazy(() => BadgeCreateOrConnectWithoutBadge_typeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BadgeCreateManyBadge_typeInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => BadgeWhereUniqueInputObjectSchema), z.lazy(() => BadgeWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const BadgeUncheckedCreateNestedManyWithoutBadge_typeInputObjectSchema: z.ZodType<Prisma.BadgeUncheckedCreateNestedManyWithoutBadge_typeInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeUncheckedCreateNestedManyWithoutBadge_typeInput>;
export const BadgeUncheckedCreateNestedManyWithoutBadge_typeInputObjectZodSchema = makeSchema();
