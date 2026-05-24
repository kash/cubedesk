import * as z from 'zod';
// prettier-ignore
export const SolveViewInputSchema = z.object({
    id: z.string(),
    solve_id: z.string(),
    viewer_id: z.string().optional().nullable(),
    user_id: z.string(),
    created_at: z.date(),
    solve: z.unknown(),
    user: z.unknown(),
    viewer: z.unknown().optional().nullable()
}).strict();

export type SolveViewInputType = z.infer<typeof SolveViewInputSchema>;
