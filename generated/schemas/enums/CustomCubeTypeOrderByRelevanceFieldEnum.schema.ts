import * as z from 'zod';

export const CustomCubeTypeOrderByRelevanceFieldEnumSchema = z.enum(['id', 'user_id', 'name', 'scramble'])

export type CustomCubeTypeOrderByRelevanceFieldEnum = z.infer<typeof CustomCubeTypeOrderByRelevanceFieldEnumSchema>;