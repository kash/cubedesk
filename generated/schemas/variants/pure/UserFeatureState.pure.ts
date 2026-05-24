import * as z from 'zod';
// prettier-ignore
export const UserFeatureStateModelSchema = z.object({
    id: z.string(),
    user_id: z.string(),
    received_welcome_screen: z.boolean(),
    updated_at: z.date(),
    created_at: z.date(),
    user: z.unknown()
}).strict();

export type UserFeatureStatePureType = z.infer<typeof UserFeatureStateModelSchema>;
