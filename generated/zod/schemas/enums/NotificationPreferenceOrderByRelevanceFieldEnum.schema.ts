import * as z from 'zod';

export const NotificationPreferenceOrderByRelevanceFieldEnumSchema = z.enum(['id', 'user_id'])

export type NotificationPreferenceOrderByRelevanceFieldEnum = z.infer<typeof NotificationPreferenceOrderByRelevanceFieldEnumSchema>;