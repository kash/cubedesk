import * as z from 'zod';
export const ImageFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  user_id: z.string(),
  url: z.string().optional(),
  storage_path: z.string().optional(),
  created_at: z.date(),
  user: z.unknown(),
  profile_header_image: z.unknown().optional(),
  profile_pfp_image: z.unknown().optional()
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