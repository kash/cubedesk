import * as z from 'zod';
// prettier-ignore
export const BadgeTypeResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    priority: z.number().int(),
    color: z.string(),
    created_at: z.date(),
    description: z.string(),
    created_by_id: z.string().nullable(),
    badges: z.array(z.unknown()),
    created_by: z.unknown().nullable()
}).strict();

export type BadgeTypeResultType = z.infer<typeof BadgeTypeResultSchema>;
