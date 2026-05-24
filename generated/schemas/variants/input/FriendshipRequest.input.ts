import * as z from 'zod';
// prettier-ignore
export const FriendshipRequestInputSchema = z.object({
    id: z.string(),
    from_id: z.string(),
    to_id: z.string(),
    created_at: z.date(),
    accepted_at: z.date().optional().nullable(),
    friendship: z.array(z.unknown()),
    from_user: z.unknown(),
    to_user: z.unknown()
}).strict();

export type FriendshipRequestInputType = z.infer<typeof FriendshipRequestInputSchema>;
