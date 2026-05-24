import * as z from 'zod';
// prettier-ignore
export const AlgorithmOverrideResultSchema = z.object({
    id: z.string(),
    user_id: z.string(),
    rotate: z.number().int().nullable(),
    cube_key: z.string(),
    created_at: z.date(),
    solution: z.string().nullable(),
    name: z.string().nullable(),
    scrambles: z.string().nullable(),
    user: z.unknown()
}).strict();

export type AlgorithmOverrideResultType = z.infer<typeof AlgorithmOverrideResultSchema>;
