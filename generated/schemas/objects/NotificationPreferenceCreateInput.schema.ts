import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutNotification_preferencesInputObjectSchema as UserAccountCreateNestedOneWithoutNotification_preferencesInputObjectSchema } from './UserAccountCreateNestedOneWithoutNotification_preferencesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  friend_request: z.boolean().optional(),
  friend_request_accept: z.boolean().optional(),
  created_at: z.coerce.date().optional(),
  marketing_emails: z.boolean().optional(),
  elo_refund: z.boolean().optional(),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutNotification_preferencesInputObjectSchema)
}).strict();
export const NotificationPreferenceCreateInputObjectSchema: z.ZodType<Prisma.NotificationPreferenceCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationPreferenceCreateInput>;
export const NotificationPreferenceCreateInputObjectZodSchema = makeSchema();
