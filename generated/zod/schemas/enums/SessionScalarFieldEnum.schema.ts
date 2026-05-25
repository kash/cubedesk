import * as z from 'zod';

export const SessionScalarFieldEnumSchema = z.enum(['id', 'name', 'user_id', 'created_at', 'order'])

export type SessionScalarFieldEnum = z.infer<typeof SessionScalarFieldEnumSchema>;