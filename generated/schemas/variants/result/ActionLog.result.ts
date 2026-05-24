import * as z from 'zod';
// prettier-ignore
export const ActionLogResultSchema = z.object({
    id: z.string(),
    user_email: z.string().nullable(),
    action_type: z.string(),
    action_details: z.string().nullable(),
    created_at: z.date(),
    user: z.unknown().nullable()
}).strict();

export type ActionLogResultType = z.infer<typeof ActionLogResultSchema>;
