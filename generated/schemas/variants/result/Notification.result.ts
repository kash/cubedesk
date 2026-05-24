import * as z from 'zod';
// prettier-ignore
export const NotificationResultSchema = z.object({
    id: z.string(),
    user_id: z.string(),
    notification_type: z.string(),
    triggering_user_id: z.string().nullable(),
    read_at: z.date().nullable(),
    message: z.string(),
    icon: z.string(),
    link: z.string(),
    created_at: z.date(),
    notification_category_name: z.string(),
    link_text: z.string(),
    subject: z.string(),
    in_app_message: z.string().nullable(),
    triggering_user: z.unknown().nullable(),
    user: z.unknown()
}).strict();

export type NotificationResultType = z.infer<typeof NotificationResultSchema>;
