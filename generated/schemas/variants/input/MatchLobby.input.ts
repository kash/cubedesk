import * as z from 'zod';
import { GameTypeSchema } from '../../enums/GameType.schema';
// prettier-ignore
export const MatchLobbyInputSchema = z.object({
    id: z.string(),
    user_id: z.string(),
    cube_type: z.string(),
    game_type: GameTypeSchema,
    player_count: z.number().int(),
    elo: z.number().int(),
    created_at: z.date(),
    client_id: z.string(),
    user: z.unknown()
}).strict();

export type MatchLobbyInputType = z.infer<typeof MatchLobbyInputSchema>;
