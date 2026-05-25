import * as z from 'zod';

export const AlgorithmOverrideOrderByRelevanceFieldEnumSchema = z.enum(['id', 'user_id', 'cube_key', 'solution', 'name', 'scrambles'])

export type AlgorithmOverrideOrderByRelevanceFieldEnum = z.infer<typeof AlgorithmOverrideOrderByRelevanceFieldEnumSchema>;