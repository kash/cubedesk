import * as z from 'zod';
// prettier-ignore
export const ForgotPasswordInputSchema = z.object({
    id: z.string(),
    user_id: z.string(),
    code: z.string(),
    claimed: z.boolean(),
    created_at: z.date(),
    user: z.unknown()
}).strict();

export type ForgotPasswordInputType = z.infer<typeof ForgotPasswordInputSchema>;
