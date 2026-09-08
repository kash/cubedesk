import * as z from 'zod';

export const ImportAttemptOrderByRelevanceFieldEnumSchema = z.enum(['id', 'user_id', 'request_hash', 'failure_code'])

export type ImportAttemptOrderByRelevanceFieldEnum = z.infer<typeof ImportAttemptOrderByRelevanceFieldEnumSchema>;