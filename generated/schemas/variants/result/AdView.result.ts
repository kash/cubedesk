import * as z from 'zod';
// prettier-ignore
export const AdViewResultSchema = z.object({
    id: z.string(),
    user_id: z.string().nullable(),
    ip_address: z.string().nullable(),
    ad_key: z.string(),
    view_time_seconds: z.number().int(),
    browser_session_id: z.string(),
    clicked_at: z.date().nullable(),
    updated_at: z.date(),
    created_at: z.date(),
    pathname: z.string(),
    last_session_started_at: z.date(),
    user: z.unknown().nullable()
}).strict();

export type AdViewResultType = z.infer<typeof AdViewResultSchema>;
