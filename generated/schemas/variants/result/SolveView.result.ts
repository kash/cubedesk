import * as z from 'zod';
// prettier-ignore
export const SolveViewResultSchema = z.object({
    id: z.string(),
    solve_id: z.string(),
    viewer_id: z.string().nullable(),
    user_id: z.string(),
    created_at: z.date(),
    solve: z.unknown(),
    user: z.unknown(),
    viewer: z.unknown().nullable()
}).strict();

export type SolveViewResultType = z.infer<typeof SolveViewResultSchema>;
