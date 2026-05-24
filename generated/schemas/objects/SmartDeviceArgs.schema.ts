import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SmartDeviceSelectObjectSchema as SmartDeviceSelectObjectSchema } from './SmartDeviceSelect.schema';
import { SmartDeviceIncludeObjectSchema as SmartDeviceIncludeObjectSchema } from './SmartDeviceInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SmartDeviceSelectObjectSchema).optional(),
  include: z.lazy(() => SmartDeviceIncludeObjectSchema).optional()
}).strict();
export const SmartDeviceArgsObjectSchema = makeSchema();
export const SmartDeviceArgsObjectZodSchema = makeSchema();
