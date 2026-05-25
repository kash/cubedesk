import * as z from 'zod';

export const TimerBackgroundScalarFieldEnumSchema = z.enum(['id', 'url', 'storage_path', 'user_id', 'hex', 'created_at'])

export type TimerBackgroundScalarFieldEnum = z.infer<typeof TimerBackgroundScalarFieldEnumSchema>;