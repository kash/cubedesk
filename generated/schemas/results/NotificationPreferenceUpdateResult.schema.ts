import * as z from 'zod';
export const NotificationPreferenceUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  user_id: z.string(),
  friend_request: z.boolean(),
  friend_request_accept: z.boolean(),
  created_at: z.date(),
  marketing_emails: z.boolean(),
  elo_refund: z.boolean(),
  user: z.unknown()
}));