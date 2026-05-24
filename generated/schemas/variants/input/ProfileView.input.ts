import * as z from 'zod';
// prettier-ignore
export const ProfileViewInputSchema = z.object({
    id: z.string(),
    viewer_id: z.string().optional().nullable(),
    profile_id: z.string(),
    created_at: z.date(),
    profile_user_id: z.string(),
    profile: z.unknown(),
    profile_user: z.unknown(),
    viewer: z.unknown().optional().nullable()
}).strict();

export type ProfileViewInputType = z.infer<typeof ProfileViewInputSchema>;
