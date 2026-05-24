import * as z from 'zod';
// prettier-ignore
export const TrainerFavoriteModelSchema = z.object({
    id: z.string(),
    cube_key: z.string(),
    user_id: z.string(),
    created_at: z.date(),
    user: z.unknown()
}).strict();

export type TrainerFavoritePureType = z.infer<typeof TrainerFavoriteModelSchema>;
