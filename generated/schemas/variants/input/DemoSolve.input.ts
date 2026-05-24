import * as z from 'zod';
// prettier-ignore
export const DemoSolveInputSchema = z.object({
    id: z.string(),
    demo_session_id: z.string(),
    ip_address: z.string().optional().nullable(),
    raw_time: z.number().optional().nullable(),
    cube_type: z.string().optional().nullable(),
    scramble: z.string().optional().nullable(),
    started_at: z.bigint().optional().nullable(),
    ended_at: z.bigint().optional().nullable(),
    updated_at: z.date(),
    created_at: z.date()
}).strict();

export type DemoSolveInputType = z.infer<typeof DemoSolveInputSchema>;
