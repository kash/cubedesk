import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  url: z.boolean().optional(),
  storage_path: z.boolean().optional(),
  user_id: z.boolean().optional(),
  hex: z.boolean().optional(),
  created_at: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const TimerBackgroundSelectObjectSchema: z.ZodType<Prisma.TimerBackgroundSelect> = makeSchema() as unknown as z.ZodType<Prisma.TimerBackgroundSelect>;
export const TimerBackgroundSelectObjectZodSchema = makeSchema();
