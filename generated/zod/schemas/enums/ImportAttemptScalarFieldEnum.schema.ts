import * as z from 'zod';

export const ImportAttemptScalarFieldEnumSchema = z.enum(['id', 'user_id', 'source', 'status', 'request_hash', 'requested_sessions', 'requested_solves', 'saved_sessions', 'saved_solves', 'started_at', 'completed_at', 'failure_code'])

export type ImportAttemptScalarFieldEnum = z.infer<typeof ImportAttemptScalarFieldEnumSchema>;