import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SmartDeviceCreateWithoutUserInputObjectSchema as SmartDeviceCreateWithoutUserInputObjectSchema } from './SmartDeviceCreateWithoutUserInput.schema';
import { SmartDeviceUncheckedCreateWithoutUserInputObjectSchema as SmartDeviceUncheckedCreateWithoutUserInputObjectSchema } from './SmartDeviceUncheckedCreateWithoutUserInput.schema';
import { SmartDeviceCreateOrConnectWithoutUserInputObjectSchema as SmartDeviceCreateOrConnectWithoutUserInputObjectSchema } from './SmartDeviceCreateOrConnectWithoutUserInput.schema';
import { SmartDeviceCreateManyUserInputEnvelopeObjectSchema as SmartDeviceCreateManyUserInputEnvelopeObjectSchema } from './SmartDeviceCreateManyUserInputEnvelope.schema';
import { SmartDeviceWhereUniqueInputObjectSchema as SmartDeviceWhereUniqueInputObjectSchema } from './SmartDeviceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SmartDeviceCreateWithoutUserInputObjectSchema), z.lazy(() => SmartDeviceCreateWithoutUserInputObjectSchema).array(), z.lazy(() => SmartDeviceUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => SmartDeviceUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SmartDeviceCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => SmartDeviceCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SmartDeviceCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SmartDeviceWhereUniqueInputObjectSchema), z.lazy(() => SmartDeviceWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SmartDeviceCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.SmartDeviceCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SmartDeviceCreateNestedManyWithoutUserInput>;
export const SmartDeviceCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
