import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SmartDeviceWhereUniqueInputObjectSchema as SmartDeviceWhereUniqueInputObjectSchema } from './SmartDeviceWhereUniqueInput.schema';
import { SmartDeviceCreateWithoutSolvesInputObjectSchema as SmartDeviceCreateWithoutSolvesInputObjectSchema } from './SmartDeviceCreateWithoutSolvesInput.schema';
import { SmartDeviceUncheckedCreateWithoutSolvesInputObjectSchema as SmartDeviceUncheckedCreateWithoutSolvesInputObjectSchema } from './SmartDeviceUncheckedCreateWithoutSolvesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SmartDeviceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SmartDeviceCreateWithoutSolvesInputObjectSchema), z.lazy(() => SmartDeviceUncheckedCreateWithoutSolvesInputObjectSchema)])
}).strict();
export const SmartDeviceCreateOrConnectWithoutSolvesInputObjectSchema: z.ZodType<Prisma.SmartDeviceCreateOrConnectWithoutSolvesInput> = makeSchema() as unknown as z.ZodType<Prisma.SmartDeviceCreateOrConnectWithoutSolvesInput>;
export const SmartDeviceCreateOrConnectWithoutSolvesInputObjectZodSchema = makeSchema();
