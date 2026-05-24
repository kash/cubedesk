import * as z from 'zod';
export const FriendshipRequestFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  from_id: z.string(),
  to_id: z.string(),
  created_at: z.date(),
  accepted_at: z.date().optional(),
  friendship: z.array(z.unknown()),
  from_user: z.unknown(),
  to_user: z.unknown()
}));