import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SmartDeviceCreateWithoutSolvesInputObjectSchema as SmartDeviceCreateWithoutSolvesInputObjectSchema } from './SmartDeviceCreateWithoutSolvesInput.schema';
import { SmartDeviceUncheckedCreateWithoutSolvesInputObjectSchema as SmartDeviceUncheckedCreateWithoutSolvesInputObjectSchema } from './SmartDeviceUncheckedCreateWithoutSolvesInput.schema';
import { SmartDeviceCreateOrConnectWithoutSolvesInputObjectSchema as SmartDeviceCreateOrConnectWithoutSolvesInputObjectSchema } from './SmartDeviceCreateOrConnectWithoutSolvesInput.schema';
import { SmartDeviceUpsertWithoutSolvesInputObjectSchema as SmartDeviceUpsertWithoutSolvesInputObjectSchema } from './SmartDeviceUpsertWithoutSolvesInput.schema';
import { SmartDeviceWhereInputObjectSchema as SmartDeviceWhereInputObjectSchema } from './SmartDeviceWhereInput.schema';
import { SmartDeviceWhereUniqueInputObjectSchema as SmartDeviceWhereUniqueInputObjectSchema } from './SmartDeviceWhereUniqueInput.schema';
import { SmartDeviceUpdateToOneWithWhereWithoutSolvesInputObjectSchema as SmartDeviceUpdateToOneWithWhereWithoutSolvesInputObjectSchema } from './SmartDeviceUpdateToOneWithWhereWithoutSolvesInput.schema';
import { SmartDeviceUpdateWithoutSolvesInputObjectSchema as SmartDeviceUpdateWithoutSolvesInputObjectSchema } from './SmartDeviceUpdateWithoutSolvesInput.schema';
import { SmartDeviceUncheckedUpdateWithoutSolvesInputObjectSchema as SmartDeviceUncheckedUpdateWithoutSolvesInputObjectSchema } from './SmartDeviceUncheckedUpdateWithoutSolvesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SmartDeviceCreateWithoutSolvesInputObjectSchema), z.lazy(() => SmartDeviceUncheckedCreateWithoutSolvesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SmartDeviceCreateOrConnectWithoutSolvesInputObjectSchema).optional(),
  upsert: z.lazy(() => SmartDeviceUpsertWithoutSolvesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => SmartDeviceWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => SmartDeviceWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => SmartDeviceWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => SmartDeviceUpdateToOneWithWhereWithoutSolvesInputObjectSchema), z.lazy(() => SmartDeviceUpdateWithoutSolvesInputObjectSchema), z.lazy(() => SmartDeviceUncheckedUpdateWithoutSolvesInputObjectSchema)]).optional()
}).strict();
export const SmartDeviceUpdateOneWithoutSolvesNestedInputObjectSchema: z.ZodType<Prisma.SmartDeviceUpdateOneWithoutSolvesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SmartDeviceUpdateOneWithoutSolvesNestedInput>;
export const SmartDeviceUpdateOneWithoutSolvesNestedInputObjectZodSchema = makeSchema();
