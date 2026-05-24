import * as z from 'zod';
// prettier-ignore
export const AdViewInputSchema = z.object({
    id: z.string(),
    user_id: z.string().optional().nullable(),
    ip_address: z.string().optional().nullable(),
    ad_key: z.string(),
    view_time_seconds: z.number().int(),
    browser_session_id: z.string(),
    clicked_at: z.date().optional().nullable(),
    updated_at: z.date(),
    created_at: z.date(),
    pathname: z.string(),
    last_session_started_at: z.date(),
    user: z.unknown().optional().nullable()
}).strict();

export type AdViewInputType = z.infer<typeof AdViewInputSchema>;
