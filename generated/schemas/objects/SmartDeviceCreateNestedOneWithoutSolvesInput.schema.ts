import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SmartDeviceCreateWithoutSolvesInputObjectSchema as SmartDeviceCreateWithoutSolvesInputObjectSchema } from './SmartDeviceCreateWithoutSolvesInput.schema';
import { SmartDeviceUncheckedCreateWithoutSolvesInputObjectSchema as SmartDeviceUncheckedCreateWithoutSolvesInputObjectSchema } from './SmartDeviceUncheckedCreateWithoutSolvesInput.schema';
import { SmartDeviceCreateOrConnectWithoutSolvesInputObjectSchema as SmartDeviceCreateOrConnectWithoutSolvesInputObjectSchema } from './SmartDeviceCreateOrConnectWithoutSolvesInput.schema';
import { SmartDeviceWhereUniqueInputObjectSchema as SmartDeviceWhereUniqueInputObjectSchema } from './SmartDeviceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SmartDeviceCreateWithoutSolvesInputObjectSchema), z.lazy(() => SmartDeviceUncheckedCreateWithoutSolvesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SmartDeviceCreateOrConnectWithoutSolvesInputObjectSchema).optional(),
  connect: z.lazy(() => SmartDeviceWhereUniqueInputObjectSchema).optional()
}).strict();
export const SmartDeviceCreateNestedOneWithoutSolvesInputObjectSchema: z.ZodType<Prisma.SmartDeviceCreateNestedOneWithoutSolvesInput> = makeSchema() as unknown as z.ZodType<Prisma.SmartDeviceCreateNestedOneWithoutSolvesInput>;
export const SmartDeviceCreateNestedOneWithoutSolvesInputObjectZodSchema = makeSchema();
