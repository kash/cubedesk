import * as z from 'zod';

export const CustomEventTypeOrderByRelevanceFieldEnumSchema = z.enum(['id', 'user_id', 'name', 'scramble'])

export type CustomEventTypeOrderByRelevanceFieldEnum = z.infer<typeof CustomEventTypeOrderByRelevanceFieldEnumSchema>;