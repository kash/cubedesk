import * as z from 'zod';

export const FriendshipSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  other_user_id: z.string(),
  friendship_request_id: z.string(),
  created_at: z.date(),
});

export type Friendship = z.infer<typeof FriendshipSchema>;
