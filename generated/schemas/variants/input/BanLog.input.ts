import * as z from 'zod';
// prettier-ignore
export const BanLogInputSchema = z.object({
    id: z.string(),
    created_by_id: z.string(),
    banned_user_id: z.string(),
    reason: z.string(),
    active: z.boolean(),
    banned_until: z.date().optional().nullable(),
    minutes: z.number().int().optional().nullable(),
    forever: z.boolean(),
    created_at: z.date(),
    banned_user: z.unknown(),
    created_by: z.unknown()
}).strict();

export type BanLogInputType = z.infer<typeof BanLogInputSchema>;
