import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SmartDeviceUpdateWithoutSolvesInputObjectSchema as SmartDeviceUpdateWithoutSolvesInputObjectSchema } from './SmartDeviceUpdateWithoutSolvesInput.schema';
import { SmartDeviceUncheckedUpdateWithoutSolvesInputObjectSchema as SmartDeviceUncheckedUpdateWithoutSolvesInputObjectSchema } from './SmartDeviceUncheckedUpdateWithoutSolvesInput.schema';
import { SmartDeviceCreateWithoutSolvesInputObjectSchema as SmartDeviceCreateWithoutSolvesInputObjectSchema } from './SmartDeviceCreateWithoutSolvesInput.schema';
import { SmartDeviceUncheckedCreateWithoutSolvesInputObjectSchema as SmartDeviceUncheckedCreateWithoutSolvesInputObjectSchema } from './SmartDeviceUncheckedCreateWithoutSolvesInput.schema';
import { SmartDeviceWhereInputObjectSchema as SmartDeviceWhereInputObjectSchema } from './SmartDeviceWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => SmartDeviceUpdateWithoutSolvesInputObjectSchema), z.lazy(() => SmartDeviceUncheckedUpdateWithoutSolvesInputObjectSchema)]),
  create: z.union([z.lazy(() => SmartDeviceCreateWithoutSolvesInputObjectSchema), z.lazy(() => SmartDeviceUncheckedCreateWithoutSolvesInputObjectSchema)]),
  where: z.lazy(() => SmartDeviceWhereInputObjectSchema).optional()
}).strict();
export const SmartDeviceUpsertWithoutSolvesInputObjectSchema: z.ZodType<Prisma.SmartDeviceUpsertWithoutSolvesInput> = makeSchema() as unknown as z.ZodType<Prisma.SmartDeviceUpsertWithoutSolvesInput>;
export const SmartDeviceUpsertWithoutSolvesInputObjectZodSchema = makeSchema();
