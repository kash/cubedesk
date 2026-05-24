import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  created_by_id: z.boolean().optional(),
  banned_user_id: z.boolean().optional(),
  reason: z.boolean().optional(),
  active: z.boolean().optional(),
  banned_until: z.boolean().optional(),
  minutes: z.boolean().optional(),
  forever: z.boolean().optional(),
  created_at: z.boolean().optional(),
  banned_user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  created_by: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const BanLogSelectObjectSchema: z.ZodType<Prisma.BanLogSelect> = makeSchema() as unknown as z.ZodType<Prisma.BanLogSelect>;
export const BanLogSelectObjectZodSchema = makeSchema();
