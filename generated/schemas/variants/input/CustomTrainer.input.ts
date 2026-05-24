import * as z from 'zod';
// prettier-ignore
export const CustomTrainerInputSchema = z.object({
    id: z.string(),
    colors: z.string().optional().nullable(),
    cube_type: z.string(),
    key: z.string(),
    user_id: z.string(),
    created_at: z.date(),
    name: z.string(),
    like_count: z.number().int(),
    private: z.boolean(),
    copy_of_id: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    downloaded: z.boolean(),
    group_name: z.string().optional().nullable(),
    scrambles: z.string().optional().nullable(),
    solution: z.string().optional().nullable(),
    alt_solutions: z.string().optional().nullable(),
    three_d: z.boolean(),
    algo_type: z.string(),
    copy_of: z.unknown().optional().nullable(),
    copies: z.array(z.unknown()),
    user: z.unknown(),
    download_of: z.array(z.unknown()),
    downloads: z.array(z.unknown()),
    likes: z.array(z.unknown())
}).strict();

export type CustomTrainerInputType = z.infer<typeof CustomTrainerInputSchema>;
