import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const TimerBackgroundIncludeObjectSchema: z.ZodType<Prisma.TimerBackgroundInclude> = makeSchema() as unknown as z.ZodType<Prisma.TimerBackgroundInclude>;
export const TimerBackgroundIncludeObjectZodSchema = makeSchema();
