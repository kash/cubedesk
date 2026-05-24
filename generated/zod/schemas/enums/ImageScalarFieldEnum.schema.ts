import * as z from 'zod';

export const ImageScalarFieldEnumSchema = z.enum(['id', 'user_id', 'url', 'storage_path', 'created_at'])

export type ImageScalarFieldEnum = z.infer<typeof ImageScalarFieldEnumSchema>;