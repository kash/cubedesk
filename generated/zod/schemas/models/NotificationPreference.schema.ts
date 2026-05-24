import * as z from 'zod';

export const NotificationPreferenceSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  friend_request: z.boolean().default(true),
  friend_request_accept: z.boolean().default(true),
  created_at: z.date(),
  marketing_emails: z.boolean().default(true),
  elo_refund: z.boolean().default(true),
});

export type NotificationPreference = z.infer<typeof NotificationPreferenceSchema>;
