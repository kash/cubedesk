import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutSmart_deviceInputObjectSchema as UserAccountCreateNestedOneWithoutSmart_deviceInputObjectSchema } from './UserAccountCreateNestedOneWithoutSmart_deviceInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  internal_name: z.string(),
  created_at: z.coerce.date().optional(),
  device_id: z.string(),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutSmart_deviceInputObjectSchema)
}).strict();
export const SmartDeviceCreateWithoutSolvesInputObjectSchema: z.ZodType<Prisma.SmartDeviceCreateWithoutSolvesInput> = makeSchema() as unknown as z.ZodType<Prisma.SmartDeviceCreateWithoutSolvesInput>;
export const SmartDeviceCreateWithoutSolvesInputObjectZodSchema = makeSchema();
