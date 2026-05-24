import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveUncheckedCreateNestedManyWithoutSmart_deviceInputObjectSchema as SolveUncheckedCreateNestedManyWithoutSmart_deviceInputObjectSchema } from './SolveUncheckedCreateNestedManyWithoutSmart_deviceInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  internal_name: z.string(),
  created_at: z.coerce.date().optional(),
  device_id: z.string(),
  user_id: z.string(),
  solves: z.lazy(() => SolveUncheckedCreateNestedManyWithoutSmart_deviceInputObjectSchema).optional()
}).strict();
export const SmartDeviceUncheckedCreateInputObjectSchema: z.ZodType<Prisma.SmartDeviceUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.SmartDeviceUncheckedCreateInput>;
export const SmartDeviceUncheckedCreateInputObjectZodSchema = makeSchema();
