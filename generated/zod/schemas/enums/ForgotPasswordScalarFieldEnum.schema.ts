import * as z from 'zod';

export const ForgotPasswordScalarFieldEnumSchema = z.enum(['id', 'user_id', 'code', 'claimed', 'created_at'])

export type ForgotPasswordScalarFieldEnum = z.infer<typeof ForgotPasswordScalarFieldEnumSchema>;