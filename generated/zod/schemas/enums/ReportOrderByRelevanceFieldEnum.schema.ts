import * as z from 'zod';

export const ReportOrderByRelevanceFieldEnumSchema = z.enum(['id', 'reason', 'created_by_id', 'reported_user_id'])

export type ReportOrderByRelevanceFieldEnum = z.infer<typeof ReportOrderByRelevanceFieldEnumSchema>;