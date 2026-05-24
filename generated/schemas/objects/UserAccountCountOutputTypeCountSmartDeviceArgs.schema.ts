import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SmartDeviceWhereInputObjectSchema as SmartDeviceWhereInputObjectSchema } from './SmartDeviceWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SmartDeviceWhereInputObjectSchema).optional()
}).strict();
export const UserAccountCountOutputTypeCountSmartDeviceArgsObjectSchema = makeSchema();
export const UserAccountCountOutputTypeCountSmartDeviceArgsObjectZodSchema = makeSchema();
