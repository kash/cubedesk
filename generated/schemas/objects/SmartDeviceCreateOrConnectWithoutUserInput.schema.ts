import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SmartDeviceWhereUniqueInputObjectSchema as SmartDeviceWhereUniqueInputObjectSchema } from './SmartDeviceWhereUniqueInput.schema';
import { SmartDeviceCreateWithoutUserInputObjectSchema as SmartDeviceCreateWithoutUserInputObjectSchema } from './SmartDeviceCreateWithoutUserInput.schema';
import { SmartDeviceUncheckedCreateWithoutUserInputObjectSchema as SmartDeviceUncheckedCreateWithoutUserInputObjectSchema } from './SmartDeviceUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SmartDeviceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SmartDeviceCreateWithoutUserInputObjectSchema), z.lazy(() => SmartDeviceUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const SmartDeviceCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.SmartDeviceCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SmartDeviceCreateOrConnectWithoutUserInput>;
export const SmartDeviceCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
