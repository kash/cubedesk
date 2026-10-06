import * as z from 'zod';

export const CustomEventTypeScalarFieldEnumSchema = z.enum(['id', 'user_id', 'name', 'created_at', 'scramble', 'private'])

export type CustomEventTypeScalarFieldEnum = z.infer<typeof CustomEventTypeScalarFieldEnumSchema>;