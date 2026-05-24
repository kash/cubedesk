import * as z from 'zod';
// prettier-ignore
export const SessionModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    user_id: z.string(),
    created_at: z.date(),
    order: z.number().int(),
    user: z.unknown(),
    solves: z.array(z.unknown())
}).strict();

export type SessionPureType = z.infer<typeof SessionModelSchema>;
