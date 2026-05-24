import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  friend_request: z.boolean().optional(),
  friend_request_accept: z.boolean().optional(),
  created_at: z.boolean().optional(),
  marketing_emails: z.boolean().optional(),
  elo_refund: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const NotificationPreferenceSelectObjectSchema: z.ZodType<Prisma.NotificationPreferenceSelect> = makeSchema() as unknown as z.ZodType<Prisma.NotificationPreferenceSelect>;
export const NotificationPreferenceSelectObjectZodSchema = makeSchema();
