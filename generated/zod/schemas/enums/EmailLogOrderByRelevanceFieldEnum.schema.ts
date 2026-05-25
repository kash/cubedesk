import * as z from 'zod';

export const EmailLogOrderByRelevanceFieldEnumSchema = z.enum(['id', 'user_id', 'subject', 'template', 'vars', 'email'])

export type EmailLogOrderByRelevanceFieldEnum = z.infer<typeof EmailLogOrderByRelevanceFieldEnumSchema>;