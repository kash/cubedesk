import * as z from 'zod';

export const FriendshipRequestSchema = z.object({
  id: z.string(),
  from_id: z.string(),
  to_id: z.string(),
  created_at: z.date(),
  accepted_at: z.date().nullable(),
});

export type FriendshipRequest = z.infer<typeof FriendshipRequestSchema>;
