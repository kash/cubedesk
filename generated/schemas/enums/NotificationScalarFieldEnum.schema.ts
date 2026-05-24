import * as z from 'zod';

export const NotificationScalarFieldEnumSchema = z.enum(['id', 'user_id', 'notification_type', 'triggering_user_id', 'read_at', 'message', 'icon', 'link', 'created_at', 'notification_category_name', 'link_text', 'subject', 'in_app_message'])

export type NotificationScalarFieldEnum = z.infer<typeof NotificationScalarFieldEnumSchema>;