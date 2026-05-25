import * as z from 'zod';

export const ForgotPasswordOrderByRelevanceFieldEnumSchema = z.enum(['id', 'user_id', 'code'])

export type ForgotPasswordOrderByRelevanceFieldEnum = z.infer<typeof ForgotPasswordOrderByRelevanceFieldEnumSchema>;