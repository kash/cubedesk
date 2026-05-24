import * as z from 'zod';
// prettier-ignore
export const CustomTrainerDownloadModelSchema = z.object({
    id: z.string(),
    user_id: z.string(),
    creator_id: z.string(),
    created_at: z.date(),
    new_trainer_id: z.string().nullable(),
    source_trainer_id: z.string(),
    creator: z.unknown(),
    new_trainer: z.unknown().nullable(),
    source_trainer: z.unknown(),
    user: z.unknown()
}).strict();

export type CustomTrainerDownloadPureType = z.infer<typeof CustomTrainerDownloadModelSchema>;
