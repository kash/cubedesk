import * as z from 'zod';

export const UserFeatureStateOrderByRelevanceFieldEnumSchema = z.enum(['id', 'user_id'])

export type UserFeatureStateOrderByRelevanceFieldEnum = z.infer<typeof UserFeatureStateOrderByRelevanceFieldEnumSchema>;