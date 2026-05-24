import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SmartDeviceWhereUniqueInputObjectSchema as SmartDeviceWhereUniqueInputObjectSchema } from './SmartDeviceWhereUniqueInput.schema';
import { SmartDeviceUpdateWithoutUserInputObjectSchema as SmartDeviceUpdateWithoutUserInputObjectSchema } from './SmartDeviceUpdateWithoutUserInput.schema';
import { SmartDeviceUncheckedUpdateWithoutUserInputObjectSchema as SmartDeviceUncheckedUpdateWithoutUserInputObjectSchema } from './SmartDeviceUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SmartDeviceWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SmartDeviceUpdateWithoutUserInputObjectSchema), z.lazy(() => SmartDeviceUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const SmartDeviceUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.SmartDeviceUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SmartDeviceUpdateWithWhereUniqueWithoutUserInput>;
export const SmartDeviceUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
