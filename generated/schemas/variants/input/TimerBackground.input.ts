import * as z from 'zod';
// prettier-ignore
export const TimerBackgroundInputSchema = z.object({
    id: z.string(),
    url: z.string().optional().nullable(),
    storage_path: z.string().optional().nullable(),
    user_id: z.string(),
    hex: z.string().optional().nullable(),
    created_at: z.date(),
    user: z.unknown()
}).strict();

export type TimerBackgroundInputType = z.infer<typeof TimerBackgroundInputSchema>;
