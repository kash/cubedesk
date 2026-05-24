import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SmartDeviceWhereInputObjectSchema as SmartDeviceWhereInputObjectSchema } from './SmartDeviceWhereInput.schema';
import { SmartDeviceUpdateWithoutSolvesInputObjectSchema as SmartDeviceUpdateWithoutSolvesInputObjectSchema } from './SmartDeviceUpdateWithoutSolvesInput.schema';
import { SmartDeviceUncheckedUpdateWithoutSolvesInputObjectSchema as SmartDeviceUncheckedUpdateWithoutSolvesInputObjectSchema } from './SmartDeviceUncheckedUpdateWithoutSolvesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SmartDeviceWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => SmartDeviceUpdateWithoutSolvesInputObjectSchema), z.lazy(() => SmartDeviceUncheckedUpdateWithoutSolvesInputObjectSchema)])
}).strict();
export const SmartDeviceUpdateToOneWithWhereWithoutSolvesInputObjectSchema: z.ZodType<Prisma.SmartDeviceUpdateToOneWithWhereWithoutSolvesInput> = makeSchema() as unknown as z.ZodType<Prisma.SmartDeviceUpdateToOneWithWhereWithoutSolvesInput>;
export const SmartDeviceUpdateToOneWithWhereWithoutSolvesInputObjectZodSchema = makeSchema();
