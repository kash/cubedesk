import * as z from 'zod';
// prettier-ignore
export const DemoSolveModelSchema = z.object({
    id: z.string(),
    demo_session_id: z.string(),
    ip_address: z.string().nullable(),
    raw_time: z.number().nullable(),
    cube_type: z.string().nullable(),
    scramble: z.string().nullable(),
    started_at: z.bigint().nullable(),
    ended_at: z.bigint().nullable(),
    updated_at: z.date(),
    created_at: z.date()
}).strict();

export type DemoSolvePureType = z.infer<typeof DemoSolveModelSchema>;
