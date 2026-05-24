import * as z from 'zod';
// prettier-ignore
export const SolveViewModelSchema = z.object({
    id: z.string(),
    solve_id: z.string(),
    viewer_id: z.string().nullable(),
    user_id: z.string(),
    created_at: z.date(),
    solve: z.unknown(),
    user: z.unknown(),
    viewer: z.unknown().nullable()
}).strict();

export type SolveViewPureType = z.infer<typeof SolveViewModelSchema>;
