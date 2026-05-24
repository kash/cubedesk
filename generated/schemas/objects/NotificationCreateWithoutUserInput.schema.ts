import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutNotifications_triggeredInputObjectSchema as UserAccountCreateNestedOneWithoutNotifications_triggeredInputObjectSchema } from './UserAccountCreateNestedOneWithoutNotifications_triggeredInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  notification_type: z.string(),
  read_at: z.coerce.date().optional().nullable(),
  message: z.string(),
  icon: z.string(),
  link: z.string(),
  created_at: z.coerce.date().optional(),
  notification_category_name: z.string(),
  link_text: z.string(),
  subject: z.string(),
  in_app_message: z.string().optional().nullable(),
  triggering_user: z.lazy(() => UserAccountCreateNestedOneWithoutNotifications_triggeredInputObjectSchema).optional()
}).strict();
export const NotificationCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.NotificationCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationCreateWithoutUserInput>;
export const NotificationCreateWithoutUserInputObjectZodSchema = makeSchema();
