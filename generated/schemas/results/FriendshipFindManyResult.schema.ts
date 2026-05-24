import * as z from 'zod';
export const FriendshipFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  user_id: z.string(),
  other_user_id: z.string(),
  friendship_request_id: z.string(),
  created_at: z.date(),
  friendship_request: z.unknown(),
  other_user: z.unknown(),
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