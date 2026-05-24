import * as z from 'zod';
export const EmailLogFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  user_id: z.string().optional(),
  subject: z.string(),
  template: z.string(),
  vars: z.string(),
  created_at: z.date(),
  email: z.string(),
  user: z.unknown().optional()
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