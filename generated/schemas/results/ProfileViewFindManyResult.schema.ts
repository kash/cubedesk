import * as z from 'zod';
export const ProfileViewFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  viewer_id: z.string().optional(),
  profile_id: z.string(),
  created_at: z.date(),
  profile_user_id: z.string(),
  profile: z.unknown(),
  profile_user: z.unknown(),
  viewer: z.unknown().optional()
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