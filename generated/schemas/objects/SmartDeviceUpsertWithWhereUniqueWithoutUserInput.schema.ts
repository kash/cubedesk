import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SmartDeviceWhereUniqueInputObjectSchema as SmartDeviceWhereUniqueInputObjectSchema } from './SmartDeviceWhereUniqueInput.schema';
import { SmartDeviceUpdateWithoutUserInputObjectSchema as SmartDeviceUpdateWithoutUserInputObjectSchema } from './SmartDeviceUpdateWithoutUserInput.schema';
import { SmartDeviceUncheckedUpdateWithoutUserInputObjectSchema as SmartDeviceUncheckedUpdateWithoutUserInputObjectSchema } from './SmartDeviceUncheckedUpdateWithoutUserInput.schema';
import { SmartDeviceCreateWithoutUserInputObjectSchema as SmartDeviceCreateWithoutUserInputObjectSchema } from './SmartDeviceCreateWithoutUserInput.schema';
import { SmartDeviceUncheckedCreateWithoutUserInputObjectSchema as SmartDeviceUncheckedCreateWithoutUserInputObjectSchema } from './SmartDeviceUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SmartDeviceWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SmartDeviceUpdateWithoutUserInputObjectSchema), z.lazy(() => SmartDeviceUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => SmartDeviceCreateWithoutUserInputObjectSchema), z.lazy(() => SmartDeviceUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const SmartDeviceUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.SmartDeviceUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SmartDeviceUpsertWithWhereUniqueWithoutUserInput>;
export const SmartDeviceUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
