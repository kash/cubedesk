import * as z from 'zod';
export const NotificationPreferenceGroupByResultSchema = z.array(z.object({
  id: z.string(),
  user_id: z.string(),
  friend_request: z.boolean(),
  friend_request_accept: z.boolean(),
  created_at: z.date(),
  marketing_emails: z.boolean(),
  elo_refund: z.boolean(),
  _count: z.object({
    id: z.number(),
    user_id: z.number(),
    friend_request: z.number(),
    friend_request_accept: z.number(),
    created_at: z.number(),
    marketing_emails: z.number(),
    elo_refund: z.number(),
    user: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    user_id: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional()
}));