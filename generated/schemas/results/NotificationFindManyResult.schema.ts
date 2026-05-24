import * as z from 'zod';
export const NotificationFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  user_id: z.string(),
  notification_type: z.string(),
  triggering_user_id: z.string().optional(),
  read_at: z.date().optional(),
  message: z.string(),
  icon: z.string(),
  link: z.string(),
  created_at: z.date(),
  notification_category_name: z.string(),
  link_text: z.string(),
  subject: z.string(),
  in_app_message: z.string().optional(),
  triggering_user: z.unknown().optional(),
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