import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutNotificationsInputObjectSchema as UserAccountCreateNestedOneWithoutNotificationsInputObjectSchema } from './UserAccountCreateNestedOneWithoutNotificationsInput.schema'

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
  user: z.lazy(() => UserAccountCreateNestedOneWithoutNotificationsInputObjectSchema)
}).strict();
export const NotificationCreateWithoutTriggering_userInputObjectSchema: z.ZodType<Prisma.NotificationCreateWithoutTriggering_userInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationCreateWithoutTriggering_userInput>;
export const NotificationCreateWithoutTriggering_userInputObjectZodSchema = makeSchema();
