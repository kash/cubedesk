import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SmartDeviceCountOutputTypeSelectObjectSchema as SmartDeviceCountOutputTypeSelectObjectSchema } from './SmartDeviceCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SmartDeviceCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const SmartDeviceCountOutputTypeArgsObjectSchema = makeSchema();
export const SmartDeviceCountOutputTypeArgsObjectZodSchema = makeSchema();
