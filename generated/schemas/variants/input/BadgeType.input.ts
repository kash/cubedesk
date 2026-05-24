import * as z from 'zod';
// prettier-ignore
export const BadgeTypeInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    priority: z.number().int(),
    color: z.string(),
    created_at: z.date(),
    description: z.string(),
    created_by_id: z.string().optional().nullable(),
    badges: z.array(z.unknown()),
    created_by: z.unknown().optional().nullable()
}).strict();

export type BadgeTypeInputType = z.infer<typeof BadgeTypeInputSchema>;
