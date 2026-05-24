import * as z from 'zod';

export const SessionOrderByRelevanceFieldEnumSchema = z.enum(['id', 'name', 'user_id'])

export type SessionOrderByRelevanceFieldEnum = z.infer<typeof SessionOrderByRelevanceFieldEnumSchema>;