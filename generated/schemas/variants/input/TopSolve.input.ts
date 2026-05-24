import * as z from 'zod';
// prettier-ignore
export const TopSolveInputSchema = z.object({
    id: z.string(),
    user_id: z.string(),
    time: z.number(),
    solve_id: z.string(),
    cube_type: z.string(),
    created_at: z.date(),
    solve: z.unknown(),
    user: z.unknown()
}).strict();

export type TopSolveInputType = z.infer<typeof TopSolveInputSchema>;
