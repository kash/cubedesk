import * as z from 'zod';
// prettier-ignore
export const EmailLogResultSchema = z.object({
    id: z.string(),
    user_id: z.string().nullable(),
    subject: z.string(),
    template: z.string(),
    vars: z.string(),
    created_at: z.date(),
    email: z.string(),
    user: z.unknown().nullable()
}).strict();

export type EmailLogResultType = z.infer<typeof EmailLogResultSchema>;
