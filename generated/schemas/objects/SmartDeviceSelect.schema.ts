import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema';
import { SolveFindManySchema as SolveFindManySchema } from '../findManySolve.schema';
import { SmartDeviceCountOutputTypeArgsObjectSchema as SmartDeviceCountOutputTypeArgsObjectSchema } from './SmartDeviceCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  internal_name: z.boolean().optional(),
  created_at: z.boolean().optional(),
  device_id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  solves: z.union([z.boolean(), z.lazy(() => SolveFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => SmartDeviceCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const SmartDeviceSelectObjectSchema: z.ZodType<Prisma.SmartDeviceSelect> = makeSchema() as unknown as z.ZodType<Prisma.SmartDeviceSelect>;
export const SmartDeviceSelectObjectZodSchema = makeSchema();
