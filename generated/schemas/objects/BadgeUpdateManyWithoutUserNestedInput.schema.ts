import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeCreateWithoutUserInputObjectSchema as BadgeCreateWithoutUserInputObjectSchema } from './BadgeCreateWithoutUserInput.schema';
import { BadgeUncheckedCreateWithoutUserInputObjectSchema as BadgeUncheckedCreateWithoutUserInputObjectSchema } from './BadgeUncheckedCreateWithoutUserInput.schema';
import { BadgeCreateOrConnectWithoutUserInputObjectSchema as BadgeCreateOrConnectWithoutUserInputObjectSchema } from './BadgeCreateOrConnectWithoutUserInput.schema';
import { BadgeUpsertWithWhereUniqueWithoutUserInputObjectSchema as BadgeUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './BadgeUpsertWithWhereUniqueWithoutUserInput.schema';
import { BadgeCreateManyUserInputEnvelopeObjectSchema as BadgeCreateManyUserInputEnvelopeObjectSchema } from './BadgeCreateManyUserInputEnvelope.schema';
import { BadgeWhereUniqueInputObjectSchema as BadgeWhereUniqueInputObjectSchema } from './BadgeWhereUniqueInput.schema';
import { BadgeUpdateWithWhereUniqueWithoutUserInputObjectSchema as BadgeUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './BadgeUpdateWithWhereUniqueWithoutUserInput.schema';
import { BadgeUpdateManyWithWhereWithoutUserInputObjectSchema as BadgeUpdateManyWithWhereWithoutUserInputObjectSchema } from './BadgeUpdateManyWithWhereWithoutUserInput.schema';
import { BadgeScalarWhereInputObjectSchema as BadgeScalarWhereInputObjectSchema } from './BadgeScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BadgeCreateWithoutUserInputObjectSchema), z.lazy(() => BadgeCreateWithoutUserInputObjectSchema).array(), z.lazy(() => BadgeUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => BadgeUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BadgeCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => BadgeCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => BadgeUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => BadgeUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BadgeCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => BadgeWhereUniqueInputObjectSchema), z.lazy(() => BadgeWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => BadgeWhereUniqueInputObjectSchema), z.lazy(() => BadgeWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => BadgeWhereUniqueInputObjectSchema), z.lazy(() => BadgeWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => BadgeWhereUniqueInputObjectSchema), z.lazy(() => BadgeWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => BadgeUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => BadgeUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => BadgeUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => BadgeUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => BadgeScalarWhereInputObjectSchema), z.lazy(() => BadgeScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const BadgeUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.BadgeUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeUpdateManyWithoutUserNestedInput>;
export const BadgeUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
