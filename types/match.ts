import type {GameType} from '@/generated/prisma/client';
import type {EloLog} from '@/types/elo';
import type {Solve} from '@/types/solve';
import type {PublicUserAccount} from '@/types/user';

export interface Match {
	id: string;
	winner_id?: string | null;
	link_code: string;
	spectate_code?: string | null;
	match_session_id: string;
	aborted: boolean;
	ended_at?: Date | null;
	started_at?: Date | null;
	created_at: Date;
	winner?: PublicUserAccount;
	match_session?: MatchSession;
	participants?: MatchParticipant[];
	elo_log?: EloLog[];
}

export interface MatchSessionInput {
	min_players: number;
	max_players: number;
	match_type: GameType;
	cube_type?: string;
	head_to_head_target_win_count?: number;
}

export interface MatchSession {
	id: string;
	created_by_id: string | null;
	custom_match: boolean;
	match_type: string;
	rated: boolean | null;
	min_players: number;
	max_players: number;
	created_at: Date;
	game_options?: GameOptions;
	winner?: PublicUserAccount;
	created_by?: PublicUserAccount;
	participants?: MatchParticipant[];
	chat_messages?: ChatMessage[];
}

export interface MatchParticipant {
	id: string;
	match_id: string;
	user_id: string;
	position: number;
	resigned: boolean;
	forfeited: boolean;
	won: boolean;
	lost: boolean;
	created_at: Date;
	match?: Match;
	user?: PublicUserAccount;
	solves?: Solve[];
}

/**
 * A match as returned by the server's match queries (see matchInclude in
 * server/models/match.ts), which always load participants (with user and
 * solves), the match session (with game options), and the elo log. The match
 * engine and game logic operate on this shape; use Match for bare rows.
 */
export interface FullMatch extends Match {
	match_session: FullMatchSession;
	participants: FullMatchParticipant[];
	elo_log: EloLog[];
}

export interface FullMatchSession extends MatchSession {
	// Every session-creation path creates game options alongside the session
	game_options: GameOptions;
}

export interface FullMatchParticipant extends MatchParticipant {
	user: PublicUserAccount;
	solves: Solve[];
}

export interface MatchLobby {
	id: string;
	user_id: string;
	client_id: string;
	cube_type: string;
	player_count: number;
	elo: number;
	created_at: Date;
}

export interface GameOptions {
	id: string;
	game_session_id?: string | null;
	match_session_id?: string | null;
	game_type?: GameType;
	cube_type: string;
	elimination_starting_time_seconds: number;
	elimination_percent_change_rate: number;
	head_to_head_target_win_count: number;
	gauntlet_time_multiplier: number;
}

export interface GameOptionsInput {
	cube_type: string;
	game_type: GameType;
	elimination_starting_time_seconds?: number;
	elimination_percent_change_rate?: number;
	head_to_head_target_win_count?: number;
	gauntlet_time_multiplier?: number;
}

export interface ChatMessage {
	id: string;
	user_id: string;
	match_session_id: string;
	message: string;
	created_at: Date;
	match_session?: MatchSession;
	user?: PublicUserAccount;
}
