import * as z from 'zod';
// prettier-ignore
export const SolveMethodStepInputSchema = z.object({
    id: z.string(),
    solve_id: z.string(),
    turn_count: z.number().int(),
    turns: z.string().optional().nullable(),
    method_name: z.string(),
    step_index: z.number().int(),
    step_name: z.string(),
    created_at: z.date(),
    total_time: z.number().optional().nullable(),
    tps: z.number().optional().nullable(),
    parent_name: z.string().optional().nullable(),
    recognition_time: z.number(),
    skipped: z.boolean(),
    oll_case_key: z.string().optional().nullable(),
    pll_case_key: z.string().optional().nullable(),
    solve: z.unknown()
}).strict();

export type SolveMethodStepInputType = z.infer<typeof SolveMethodStepInputSchema>;
