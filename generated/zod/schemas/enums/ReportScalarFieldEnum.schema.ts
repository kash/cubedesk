import * as z from 'zod';

export const ReportScalarFieldEnumSchema = z.enum(['id', 'created_at', 'reason', 'created_by_id', 'reported_user_id', 'resolved_at'])

export type ReportScalarFieldEnum = z.infer<typeof ReportScalarFieldEnumSchema>;