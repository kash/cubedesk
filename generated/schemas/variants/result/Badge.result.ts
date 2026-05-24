import * as z from 'zod';
// prettier-ignore
export const BadgeResultSchema = z.object({
    id: z.string(),
    user_id: z.string(),
    badge_type_id: z.string(),
    created_at: z.date(),
    badge_type: z.unknown(),
    user: z.unknown()
}).strict();

export type BadgeResultType = z.infer<typeof BadgeResultSchema>;
