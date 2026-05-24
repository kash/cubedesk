import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateNestedManyWithoutSmart_deviceInputObjectSchema as SolveCreateNestedManyWithoutSmart_deviceInputObjectSchema } from './SolveCreateNestedManyWithoutSmart_deviceInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  internal_name: z.string(),
  created_at: z.coerce.date().optional(),
  device_id: z.string(),
  solves: z.lazy(() => SolveCreateNestedManyWithoutSmart_deviceInputObjectSchema).optional()
}).strict();
export const SmartDeviceCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.SmartDeviceCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SmartDeviceCreateWithoutUserInput>;
export const SmartDeviceCreateWithoutUserInputObjectZodSchema = makeSchema();
