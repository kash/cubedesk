import * as z from 'zod';

export const ActionLogOrderByRelevanceFieldEnumSchema = z.enum(['id', 'user_email', 'action_type', 'action_details'])

export type ActionLogOrderByRelevanceFieldEnum = z.infer<typeof ActionLogOrderByRelevanceFieldEnumSchema>;