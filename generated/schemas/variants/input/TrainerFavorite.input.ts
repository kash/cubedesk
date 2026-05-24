import * as z from 'zod';
// prettier-ignore
export const TrainerFavoriteInputSchema = z.object({
    id: z.string(),
    cube_key: z.string(),
    user_id: z.string(),
    created_at: z.date(),
    user: z.unknown()
}).strict();

export type TrainerFavoriteInputType = z.infer<typeof TrainerFavoriteInputSchema>;
