import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeTypeCreateWithoutCreated_byInputObjectSchema as BadgeTypeCreateWithoutCreated_byInputObjectSchema } from './BadgeTypeCreateWithoutCreated_byInput.schema';
import { BadgeTypeUncheckedCreateWithoutCreated_byInputObjectSchema as BadgeTypeUncheckedCreateWithoutCreated_byInputObjectSchema } from './BadgeTypeUncheckedCreateWithoutCreated_byInput.schema';
import { BadgeTypeCreateOrConnectWithoutCreated_byInputObjectSchema as BadgeTypeCreateOrConnectWithoutCreated_byInputObjectSchema } from './BadgeTypeCreateOrConnectWithoutCreated_byInput.schema';
import { BadgeTypeUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema as BadgeTypeUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema } from './BadgeTypeUpsertWithWhereUniqueWithoutCreated_byInput.schema';
import { BadgeTypeCreateManyCreated_byInputEnvelopeObjectSchema as BadgeTypeCreateManyCreated_byInputEnvelopeObjectSchema } from './BadgeTypeCreateManyCreated_byInputEnvelope.schema';
import { BadgeTypeWhereUniqueInputObjectSchema as BadgeTypeWhereUniqueInputObjectSchema } from './BadgeTypeWhereUniqueInput.schema';
import { BadgeTypeUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema as BadgeTypeUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema } from './BadgeTypeUpdateWithWhereUniqueWithoutCreated_byInput.schema';
import { BadgeTypeUpdateManyWithWhereWithoutCreated_byInputObjectSchema as BadgeTypeUpdateManyWithWhereWithoutCreated_byInputObjectSchema } from './BadgeTypeUpdateManyWithWhereWithoutCreated_byInput.schema';
import { BadgeTypeScalarWhereInputObjectSchema as BadgeTypeScalarWhereInputObjectSchema } from './BadgeTypeScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BadgeTypeCreateWithoutCreated_byInputObjectSchema), z.lazy(() => BadgeTypeCreateWithoutCreated_byInputObjectSchema).array(), z.lazy(() => BadgeTypeUncheckedCreateWithoutCreated_byInputObjectSchema), z.lazy(() => BadgeTypeUncheckedCreateWithoutCreated_byInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BadgeTypeCreateOrConnectWithoutCreated_byInputObjectSchema), z.lazy(() => BadgeTypeCreateOrConnectWithoutCreated_byInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => BadgeTypeUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema), z.lazy(() => BadgeTypeUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BadgeTypeCreateManyCreated_byInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => BadgeTypeWhereUniqueInputObjectSchema), z.lazy(() => BadgeTypeWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => BadgeTypeWhereUniqueInputObjectSchema), z.lazy(() => BadgeTypeWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => BadgeTypeWhereUniqueInputObjectSchema), z.lazy(() => BadgeTypeWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => BadgeTypeWhereUniqueInputObjectSchema), z.lazy(() => BadgeTypeWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => BadgeTypeUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema), z.lazy(() => BadgeTypeUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => BadgeTypeUpdateManyWithWhereWithoutCreated_byInputObjectSchema), z.lazy(() => BadgeTypeUpdateManyWithWhereWithoutCreated_byInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => BadgeTypeScalarWhereInputObjectSchema), z.lazy(() => BadgeTypeScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const BadgeTypeUpdateManyWithoutCreated_byNestedInputObjectSchema: z.ZodType<Prisma.BadgeTypeUpdateManyWithoutCreated_byNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeTypeUpdateManyWithoutCreated_byNestedInput>;
export const BadgeTypeUpdateManyWithoutCreated_byNestedInputObjectZodSchema = makeSchema();
