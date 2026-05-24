import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SmartDeviceCountOutputTypeCountSolvesArgsObjectSchema as SmartDeviceCountOutputTypeCountSolvesArgsObjectSchema } from './SmartDeviceCountOutputTypeCountSolvesArgs.schema'

const makeSchema = () => z.object({
  solves: z.union([z.boolean(), z.lazy(() => SmartDeviceCountOutputTypeCountSolvesArgsObjectSchema)]).optional()
}).strict();
export const SmartDeviceCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.SmartDeviceCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.SmartDeviceCountOutputTypeSelect>;
export const SmartDeviceCountOutputTypeSelectObjectZodSchema = makeSchema();
