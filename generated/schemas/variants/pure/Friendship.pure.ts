import * as z from 'zod';
// prettier-ignore
export const FriendshipModelSchema = z.object({
    id: z.string(),
    user_id: z.string(),
    other_user_id: z.string(),
    friendship_request_id: z.string(),
    created_at: z.date(),
    friendship_request: z.unknown(),
    other_user: z.unknown(),
    user: z.unknown()
}).strict();

export type FriendshipPureType = z.infer<typeof FriendshipModelSchema>;
