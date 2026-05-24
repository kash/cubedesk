import * as z from 'zod';

export const NotificationPreferenceScalarFieldEnumSchema = z.enum(['id', 'user_id', 'friend_request', 'friend_request_accept', 'created_at', 'marketing_emails', 'elo_refund'])

export type NotificationPreferenceScalarFieldEnum = z.infer<typeof NotificationPreferenceScalarFieldEnumSchema>;