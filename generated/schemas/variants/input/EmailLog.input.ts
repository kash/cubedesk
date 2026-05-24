import * as z from 'zod';
// prettier-ignore
export const EmailLogInputSchema = z.object({
    id: z.string(),
    user_id: z.string().optional().nullable(),
    subject: z.string(),
    template: z.string(),
    vars: z.string(),
    created_at: z.date(),
    email: z.string(),
    user: z.unknown().optional().nullable()
}).strict();

export type EmailLogInputType = z.infer<typeof EmailLogInputSchema>;
