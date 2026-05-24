import * as z from 'zod';
// prettier-ignore
export const SolveMethodStepModelSchema = z.object({
    id: z.string(),
    solve_id: z.string(),
    turn_count: z.number().int(),
    turns: z.string().nullable(),
    method_name: z.string(),
    step_index: z.number().int(),
    step_name: z.string(),
    created_at: z.date(),
    total_time: z.number().nullable(),
    tps: z.number().nullable(),
    parent_name: z.string().nullable(),
    recognition_time: z.number(),
    skipped: z.boolean(),
    oll_case_key: z.string().nullable(),
    pll_case_key: z.string().nullable(),
    solve: z.unknown()
}).strict();

export type SolveMethodStepPureType = z.infer<typeof SolveMethodStepModelSchema>;
