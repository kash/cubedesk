import * as z from 'zod';
// prettier-ignore
export const ReportInputSchema = z.object({
    id: z.string(),
    created_at: z.date(),
    reason: z.string().optional().nullable(),
    created_by_id: z.string(),
    reported_user_id: z.string(),
    resolved_at: z.date().optional().nullable(),
    created_by: z.unknown(),
    reported_user: z.unknown()
}).strict();

export type ReportInputType = z.infer<typeof ReportInputSchema>;
