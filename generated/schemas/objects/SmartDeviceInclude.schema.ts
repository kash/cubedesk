import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema';
import { SolveFindManySchema as SolveFindManySchema } from '../findManySolve.schema';
import { SmartDeviceCountOutputTypeArgsObjectSchema as SmartDeviceCountOutputTypeArgsObjectSchema } from './SmartDeviceCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  solves: z.union([z.boolean(), z.lazy(() => SolveFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => SmartDeviceCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const SmartDeviceIncludeObjectSchema: z.ZodType<Prisma.SmartDeviceInclude> = makeSchema() as unknown as z.ZodType<Prisma.SmartDeviceInclude>;
export const SmartDeviceIncludeObjectZodSchema = makeSchema();
