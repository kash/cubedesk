import * as z from 'zod';
// prettier-ignore
export const TrainerFavoriteResultSchema = z.object({
    id: z.string(),
    cube_key: z.string(),
    user_id: z.string(),
    created_at: z.date(),
    user: z.unknown()
}).strict();

export type TrainerFavoriteResultType = z.infer<typeof TrainerFavoriteResultSchema>;
