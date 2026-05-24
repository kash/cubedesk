import * as z from 'zod';
export const NotificationPreferenceFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  user_id: z.string(),
  friend_request: z.boolean(),
  friend_request_accept: z.boolean(),
  created_at: z.date(),
  marketing_emails: z.boolean(),
  elo_refund: z.boolean(),
  user: z.unknown()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});