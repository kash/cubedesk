import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  internal_name: z.string(),
  created_at: z.coerce.date().optional(),
  device_id: z.string(),
  user_id: z.string()
}).strict();
export const SmartDeviceUncheckedCreateWithoutSolvesInputObjectSchema: z.ZodType<Prisma.SmartDeviceUncheckedCreateWithoutSolvesInput> = makeSchema() as unknown as z.ZodType<Prisma.SmartDeviceUncheckedCreateWithoutSolvesInput>;
export const SmartDeviceUncheckedCreateWithoutSolvesInputObjectZodSchema = makeSchema();
