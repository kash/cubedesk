import * as z from 'zod';
// prettier-ignore
export const ImageResultSchema = z.object({
    id: z.string(),
    user_id: z.string(),
    url: z.string().nullable(),
    storage_path: z.string().nullable(),
    created_at: z.date(),
    user: z.unknown(),
    profile_header_image: z.unknown().nullable(),
    profile_pfp_image: z.unknown().nullable()
}).strict();

export type ImageResultType = z.infer<typeof ImageResultSchema>;
