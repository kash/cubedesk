import * as z from 'zod';

export const NotificationSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  notification_type: z.string(),
  triggering_user_id: z.string().nullable(),
  read_at: z.date().nullable(),
  message: z.string(),
  icon: z.string(),
  link: z.string(),
  created_at: z.date(),
  notification_category_name: z.string(),
  link_text: z.string(),
  subject: z.string(),
  in_app_message: z.string().nullable(),
});

export type Notification = z.infer<typeof NotificationSchema>;
