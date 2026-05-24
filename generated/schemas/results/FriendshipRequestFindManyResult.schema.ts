import * as z from 'zod';
export const FriendshipRequestFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  from_id: z.string(),
  to_id: z.string(),
  created_at: z.date(),
  accepted_at: z.date().optional(),
  friendship: z.array(z.unknown()),
  from_user: z.unknown(),
  to_user: z.unknown()
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