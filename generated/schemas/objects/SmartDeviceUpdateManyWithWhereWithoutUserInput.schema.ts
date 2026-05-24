import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SmartDeviceScalarWhereInputObjectSchema as SmartDeviceScalarWhereInputObjectSchema } from './SmartDeviceScalarWhereInput.schema';
import { SmartDeviceUpdateManyMutationInputObjectSchema as SmartDeviceUpdateManyMutationInputObjectSchema } from './SmartDeviceUpdateManyMutationInput.schema';
import { SmartDeviceUncheckedUpdateManyWithoutUserInputObjectSchema as SmartDeviceUncheckedUpdateManyWithoutUserInputObjectSchema } from './SmartDeviceUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SmartDeviceScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SmartDeviceUpdateManyMutationInputObjectSchema), z.lazy(() => SmartDeviceUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const SmartDeviceUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.SmartDeviceUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SmartDeviceUpdateManyWithWhereWithoutUserInput>;
export const SmartDeviceUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
