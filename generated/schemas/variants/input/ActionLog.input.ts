import * as z from 'zod';
// prettier-ignore
export const ActionLogInputSchema = z.object({
    id: z.string(),
    user_email: z.string().optional().nullable(),
    action_type: z.string(),
    action_details: z.string().optional().nullable(),
    created_at: z.date(),
    user: z.unknown().optional().nullable()
}).strict();

export type ActionLogInputType = z.infer<typeof ActionLogInputSchema>;
