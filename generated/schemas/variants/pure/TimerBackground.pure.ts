import * as z from 'zod';
// prettier-ignore
export const TimerBackgroundModelSchema = z.object({
    id: z.string(),
    url: z.string().nullable(),
    storage_path: z.string().nullable(),
    user_id: z.string(),
    hex: z.string().nullable(),
    created_at: z.date(),
    user: z.unknown()
}).strict();

export type TimerBackgroundPureType = z.infer<typeof TimerBackgroundModelSchema>;
