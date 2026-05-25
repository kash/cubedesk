import * as z from 'zod';

export const ImageOrderByRelevanceFieldEnumSchema = z.enum(['id', 'user_id', 'url', 'storage_path'])

export type ImageOrderByRelevanceFieldEnum = z.infer<typeof ImageOrderByRelevanceFieldEnumSchema>;