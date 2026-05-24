import * as z from 'zod';
// prettier-ignore
export const ImageInputSchema = z.object({
    id: z.string(),
    user_id: z.string(),
    url: z.string().optional().nullable(),
    storage_path: z.string().optional().nullable(),
    created_at: z.date(),
    user: z.unknown(),
    profile_header_image: z.unknown().optional().nullable(),
    profile_pfp_image: z.unknown().optional().nullable()
}).strict();

export type ImageInputType = z.infer<typeof ImageInputSchema>;
