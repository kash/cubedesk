import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SmartDeviceCreateWithoutUserInputObjectSchema as SmartDeviceCreateWithoutUserInputObjectSchema } from './SmartDeviceCreateWithoutUserInput.schema';
import { SmartDeviceUncheckedCreateWithoutUserInputObjectSchema as SmartDeviceUncheckedCreateWithoutUserInputObjectSchema } from './SmartDeviceUncheckedCreateWithoutUserInput.schema';
import { SmartDeviceCreateOrConnectWithoutUserInputObjectSchema as SmartDeviceCreateOrConnectWithoutUserInputObjectSchema } from './SmartDeviceCreateOrConnectWithoutUserInput.schema';
import { SmartDeviceUpsertWithWhereUniqueWithoutUserInputObjectSchema as SmartDeviceUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './SmartDeviceUpsertWithWhereUniqueWithoutUserInput.schema';
import { SmartDeviceCreateManyUserInputEnvelopeObjectSchema as SmartDeviceCreateManyUserInputEnvelopeObjectSchema } from './SmartDeviceCreateManyUserInputEnvelope.schema';
import { SmartDeviceWhereUniqueInputObjectSchema as SmartDeviceWhereUniqueInputObjectSchema } from './SmartDeviceWhereUniqueInput.schema';
import { SmartDeviceUpdateWithWhereUniqueWithoutUserInputObjectSchema as SmartDeviceUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './SmartDeviceUpdateWithWhereUniqueWithoutUserInput.schema';
import { SmartDeviceUpdateManyWithWhereWithoutUserInputObjectSchema as SmartDeviceUpdateManyWithWhereWithoutUserInputObjectSchema } from './SmartDeviceUpdateManyWithWhereWithoutUserInput.schema';
import { SmartDeviceScalarWhereInputObjectSchema as SmartDeviceScalarWhereInputObjectSchema } from './SmartDeviceScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SmartDeviceCreateWithoutUserInputObjectSchema), z.lazy(() => SmartDeviceCreateWithoutUserInputObjectSchema).array(), z.lazy(() => SmartDeviceUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => SmartDeviceUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SmartDeviceCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => SmartDeviceCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SmartDeviceUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => SmartDeviceUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SmartDeviceCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SmartDeviceWhereUniqueInputObjectSchema), z.lazy(() => SmartDeviceWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SmartDeviceWhereUniqueInputObjectSchema), z.lazy(() => SmartDeviceWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SmartDeviceWhereUniqueInputObjectSchema), z.lazy(() => SmartDeviceWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SmartDeviceWhereUniqueInputObjectSchema), z.lazy(() => SmartDeviceWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SmartDeviceUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => SmartDeviceUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SmartDeviceUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => SmartDeviceUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SmartDeviceScalarWhereInputObjectSchema), z.lazy(() => SmartDeviceScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SmartDeviceUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.SmartDeviceUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SmartDeviceUpdateManyWithoutUserNestedInput>;
export const SmartDeviceUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
