import {FullMatch, Match} from '@/types/match';
import {PublicUserAccount} from '@/types/user';

export enum PlayerStatus {
	None = 'NONE',
	Disconnected = 'DISCONNECTED',
	Waiting = 'WAITING',
	Playing = 'PLAYING',
	Inactive = 'INACTIVE',
	Lost = 'LOST',
	Tie = 'TIE',
	Won = 'WON',
}

export enum MatchEndedBy {
	ABORT = 'ABORT',
	FORFEITURE = 'FORFEITURE',
	RESIGNATION = 'RESIGNATION',
	LOSS = 'LOSS',
}

export interface MatchPlayerCache {
	userId: string;
	lastSolveAt: Date;
	solveStartedAt: Date | null;
	solving: boolean;
	solveCount: number;
	forfeitWarningSent: boolean;
	user: PublicUserAccount;
}

export interface MatchCache {
	matchId: string;
	basicMatch: Match;
	players: MatchPlayerCache[];
}

export interface MatchStanding {
	username: string | null;
	participantId: string;
	inRoom: boolean;
	userId: string;
	user: PublicUserAccount;
	solveCount: number;
	points: number;
	status: PlayerStatus;
	position?: number;
}

export interface MatchInputChatMessage {
	matchId: string;
	matchSessionId: string;
	message: string;
	rawMessage: string;
	badWords: boolean;
}

export interface MatchUpdate {
	match: FullMatch;
	standings: MatchStanding[];
	spectatorCount: number;
	playersInRoomCount: number;
	rematchRoomSize: number;
	playersInRoom: PublicUserAccount[];
	playersInRematchRoom: PublicUserAccount[];
}

export interface UpdateRoomInfo {
	totalPlaying: number;
	totalSpectating: number;
	totalInLobby: number;
}

export interface MatchUpdateChat {
	user: PublicUserAccount;
	message: string;
	id: string;
}
