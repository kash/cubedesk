import * as z from 'zod';

export const NotificationOrderByRelevanceFieldEnumSchema = z.enum(['id', 'user_id', 'notification_type', 'triggering_user_id', 'message', 'icon', 'link', 'notification_category_name', 'link_text', 'subject', 'in_app_message'])

export type NotificationOrderByRelevanceFieldEnum = z.infer<typeof NotificationOrderByRelevanceFieldEnumSchema>;