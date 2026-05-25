import * as z from 'zod';

export const EmailLogScalarFieldEnumSchema = z.enum(['id', 'user_id', 'subject', 'template', 'vars', 'created_at', 'email'])

export type EmailLogScalarFieldEnum = z.infer<typeof EmailLogScalarFieldEnumSchema>;