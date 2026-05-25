import * as z from 'zod';

export const TimerBackgroundOrderByRelevanceFieldEnumSchema = z.enum(['id', 'url', 'storage_path', 'user_id', 'hex'])

export type TimerBackgroundOrderByRelevanceFieldEnum = z.infer<typeof TimerBackgroundOrderByRelevanceFieldEnumSchema>;