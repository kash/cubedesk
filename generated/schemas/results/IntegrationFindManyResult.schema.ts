import * as z from 'zod';
export const IntegrationFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  user_id: z.string(),
  service_name: z.string(),
  auth_token: z.string(),
  refresh_token: z.string(),
  auth_expires_at: z.bigint(),
  created_at: z.date(),
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