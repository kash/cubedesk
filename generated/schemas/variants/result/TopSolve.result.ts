import * as z from 'zod';
// prettier-ignore
export const TopSolveResultSchema = z.object({
    id: z.string(),
    user_id: z.string(),
    time: z.number(),
    solve_id: z.string(),
    cube_type: z.string(),
    created_at: z.date(),
    solve: z.unknown(),
    user: z.unknown()
}).strict();

export type TopSolveResultType = z.infer<typeof TopSolveResultSchema>;
