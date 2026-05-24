import * as z from 'zod';
// prettier-ignore
export const BanLogModelSchema = z.object({
    id: z.string(),
    created_by_id: z.string(),
    banned_user_id: z.string(),
    reason: z.string(),
    active: z.boolean(),
    banned_until: z.date().nullable(),
    minutes: z.number().int().nullable(),
    forever: z.boolean(),
    created_at: z.date(),
    banned_user: z.unknown(),
    created_by: z.unknown()
}).strict();

export type BanLogPureType = z.infer<typeof BanLogModelSchema>;
