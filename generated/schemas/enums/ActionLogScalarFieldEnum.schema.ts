import * as z from 'zod';

export const ActionLogScalarFieldEnumSchema = z.enum(['id', 'user_email', 'action_type', 'action_details', 'created_at'])

export type ActionLogScalarFieldEnum = z.infer<typeof ActionLogScalarFieldEnumSchema>;