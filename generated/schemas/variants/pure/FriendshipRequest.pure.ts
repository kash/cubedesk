import * as z from 'zod';
// prettier-ignore
export const FriendshipRequestModelSchema = z.object({
    id: z.string(),
    from_id: z.string(),
    to_id: z.string(),
    created_at: z.date(),
    accepted_at: z.date().nullable(),
    friendship: z.array(z.unknown()),
    from_user: z.unknown(),
    to_user: z.unknown()
}).strict();

export type FriendshipRequestPureType = z.infer<typeof FriendshipRequestModelSchema>;
