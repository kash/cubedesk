import * as z from 'zod';
// prettier-ignore
export const MatchSessionInputSchema = z.object({
    id: z.string(),
    min_players: z.number().int(),
    max_players: z.number().int(),
    match_type: z.string(),
    custom_match: z.boolean(),
    created_at: z.date(),
    created_by_id: z.string().optional().nullable(),
    rated: z.boolean().optional().nullable(),
    chat_messages: z.array(z.unknown()),
    game_options: z.unknown().optional().nullable(),
    matches: z.array(z.unknown()),
    created_by: z.unknown().optional().nullable()
}).strict();

export type MatchSessionInputType = z.infer<typeof MatchSessionInputSchema>;
