import * as z from 'zod';
// prettier-ignore
export const CustomTrainerResultSchema = z.object({
    id: z.string(),
    colors: z.string().nullable(),
    cube_type: z.string(),
    key: z.string(),
    user_id: z.string(),
    created_at: z.date(),
    name: z.string(),
    like_count: z.number().int(),
    private: z.boolean(),
    copy_of_id: z.string().nullable(),
    description: z.string().nullable(),
    downloaded: z.boolean(),
    group_name: z.string().nullable(),
    scrambles: z.string().nullable(),
    solution: z.string().nullable(),
    alt_solutions: z.string().nullable(),
    three_d: z.boolean(),
    algo_type: z.string(),
    copy_of: z.unknown().nullable(),
    copies: z.array(z.unknown()),
    user: z.unknown(),
    download_of: z.array(z.unknown()),
    downloads: z.array(z.unknown()),
    likes: z.array(z.unknown())
}).strict();

export type CustomTrainerResultType = z.infer<typeof CustomTrainerResultSchema>;
