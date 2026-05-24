import * as z from 'zod';
// prettier-ignore
export const ProfileViewModelSchema = z.object({
    id: z.string(),
    viewer_id: z.string().nullable(),
    profile_id: z.string(),
    created_at: z.date(),
    profile_user_id: z.string(),
    profile: z.unknown(),
    profile_user: z.unknown(),
    viewer: z.unknown().nullable()
}).strict();

export type ProfileViewPureType = z.infer<typeof ProfileViewModelSchema>;
