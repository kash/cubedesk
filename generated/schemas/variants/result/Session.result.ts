import * as z from 'zod';
// prettier-ignore
export const SessionResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    user_id: z.string(),
    created_at: z.date(),
    order: z.number().int(),
    user: z.unknown(),
    solves: z.array(z.unknown())
}).strict();

export type SessionResultType = z.infer<typeof SessionResultSchema>;
