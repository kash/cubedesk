import * as z from 'zod';
// prettier-ignore
export const MatchSessionResultSchema = z.object({
    id: z.string(),
    min_players: z.number().int(),
    max_players: z.number().int(),
    match_type: z.string(),
    custom_match: z.boolean(),
    created_at: z.date(),
    created_by_id: z.string().nullable(),
    rated: z.boolean().nullable(),
    chat_messages: z.array(z.unknown()),
    game_options: z.unknown().nullable(),
    matches: z.array(z.unknown()),
    created_by: z.unknown().nullable()
}).strict();

export type MatchSessionResultType = z.infer<typeof MatchSessionResultSchema>;
