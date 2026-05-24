import * as z from 'zod';
// prettier-ignore
export const AlgorithmOverrideInputSchema = z.object({
    id: z.string(),
    user_id: z.string(),
    rotate: z.number().int().optional().nullable(),
    cube_key: z.string(),
    created_at: z.date(),
    solution: z.string().optional().nullable(),
    name: z.string().optional().nullable(),
    scrambles: z.string().optional().nullable(),
    user: z.unknown()
}).strict();

export type AlgorithmOverrideInputType = z.infer<typeof AlgorithmOverrideInputSchema>;
