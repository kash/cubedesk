import * as z from 'zod';
export const ActionLogFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  user_email: z.string().optional(),
  action_type: z.string(),
  action_details: z.string().optional(),
  created_at: z.date(),
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