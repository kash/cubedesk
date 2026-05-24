import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeCreateWithoutBadge_typeInputObjectSchema as BadgeCreateWithoutBadge_typeInputObjectSchema } from './BadgeCreateWithoutBadge_typeInput.schema';
import { BadgeUncheckedCreateWithoutBadge_typeInputObjectSchema as BadgeUncheckedCreateWithoutBadge_typeInputObjectSchema } from './BadgeUncheckedCreateWithoutBadge_typeInput.schema';
import { BadgeCreateOrConnectWithoutBadge_typeInputObjectSchema as BadgeCreateOrConnectWithoutBadge_typeInputObjectSchema } from './BadgeCreateOrConnectWithoutBadge_typeInput.schema';
import { BadgeUpsertWithWhereUniqueWithoutBadge_typeInputObjectSchema as BadgeUpsertWithWhereUniqueWithoutBadge_typeInputObjectSchema } from './BadgeUpsertWithWhereUniqueWithoutBadge_typeInput.schema';
import { BadgeCreateManyBadge_typeInputEnvelopeObjectSchema as BadgeCreateManyBadge_typeInputEnvelopeObjectSchema } from './BadgeCreateManyBadge_typeInputEnvelope.schema';
import { BadgeWhereUniqueInputObjectSchema as BadgeWhereUniqueInputObjectSchema } from './BadgeWhereUniqueInput.schema';
import { BadgeUpdateWithWhereUniqueWithoutBadge_typeInputObjectSchema as BadgeUpdateWithWhereUniqueWithoutBadge_typeInputObjectSchema } from './BadgeUpdateWithWhereUniqueWithoutBadge_typeInput.schema';
import { BadgeUpdateManyWithWhereWithoutBadge_typeInputObjectSchema as BadgeUpdateManyWithWhereWithoutBadge_typeInputObjectSchema } from './BadgeUpdateManyWithWhereWithoutBadge_typeInput.schema';
import { BadgeScalarWhereInputObjectSchema as BadgeScalarWhereInputObjectSchema } from './BadgeScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BadgeCreateWithoutBadge_typeInputObjectSchema), z.lazy(() => BadgeCreateWithoutBadge_typeInputObjectSchema).array(), z.lazy(() => BadgeUncheckedCreateWithoutBadge_typeInputObjectSchema), z.lazy(() => BadgeUncheckedCreateWithoutBadge_typeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BadgeCreateOrConnectWithoutBadge_typeInputObjectSchema), z.lazy(() => BadgeCreateOrConnectWithoutBadge_typeInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => BadgeUpsertWithWhereUniqueWithoutBadge_typeInputObjectSchema), z.lazy(() => BadgeUpsertWithWhereUniqueWithoutBadge_typeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BadgeCreateManyBadge_typeInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => BadgeWhereUniqueInputObjectSchema), z.lazy(() => BadgeWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => BadgeWhereUniqueInputObjectSchema), z.lazy(() => BadgeWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => BadgeWhereUniqueInputObjectSchema), z.lazy(() => BadgeWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => BadgeWhereUniqueInputObjectSchema), z.lazy(() => BadgeWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => BadgeUpdateWithWhereUniqueWithoutBadge_typeInputObjectSchema), z.lazy(() => BadgeUpdateWithWhereUniqueWithoutBadge_typeInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => BadgeUpdateManyWithWhereWithoutBadge_typeInputObjectSchema), z.lazy(() => BadgeUpdateManyWithWhereWithoutBadge_typeInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => BadgeScalarWhereInputObjectSchema), z.lazy(() => BadgeScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const BadgeUncheckedUpdateManyWithoutBadge_typeNestedInputObjectSchema: z.ZodType<Prisma.BadgeUncheckedUpdateManyWithoutBadge_typeNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeUncheckedUpdateManyWithoutBadge_typeNestedInput>;
export const BadgeUncheckedUpdateManyWithoutBadge_typeNestedInputObjectZodSchema = makeSchema();
