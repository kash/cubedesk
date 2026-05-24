import * as z from 'zod';
// prettier-ignore
export const CustomTrainerLikeInputSchema = z.object({
    id: z.string(),
    custom_trainer_id: z.string(),
    user_id: z.string(),
    created_at: z.date(),
    creator_id: z.string(),
    creator: z.unknown(),
    custom_trainer: z.unknown(),
    user: z.unknown()
}).strict();

export type CustomTrainerLikeInputType = z.infer<typeof CustomTrainerLikeInputSchema>;
