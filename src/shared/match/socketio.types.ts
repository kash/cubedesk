import {GameOptions} from '@/generated/zod';
import {UserAccount} from '@/generated/zod';
import {Solve} from '@/generated/zod';
import {
	MatchInputChatMessage,
	MatchUpdate,
	MatchUpdateChat,
	UpdateRoomInfo,
} from '@/lib/shared/match/types';
import {SocketReservedEventsMap} from 'socket.io/dist/socket';

// Type for public user data (without password)
type PublicUserAccount = Omit<UserAccount, 'password'>;

export interface ServerToClientEvents extends SocketReservedEventsMap {
	opponentStartedSolve: (opponent: PublicUserAccount, startedAtUnix: number) => void;
	opponentEndedSolve: (
		opponent: PublicUserAccount,
		endedAtUnix: number,
		finalTimeMillis: number,
	) => void;
	newMatchChatMessage: (data: MatchUpdateChat) => void;
	opponentLeftMatch: (opponent: PublicUserAccount, secondsToReturn: number) => void;
	opponentSolveUpdated: (opponent: PublicUserAccount, solve: Solve) => void;
	opponentSolveSaved: (opponent: PublicUserAccount, solve: Solve) => void;
	opponentResignedMatch: (opponent: PublicUserAccount) => void;
	opponentForfeitedMatch: (opponent: PublicUserAccount) => void;
	opponentAbortedMatch: (opponent: PublicUserAccount) => void;
	matchUpdated: (data: MatchUpdate) => void;
	matchStarted: (data: MatchUpdate) => void;
	myRoomsUpdated: (rooms: string[]) => void;
	lobbyInfoUpdated: (data: UpdateRoomInfo) => void;
	inactivityBeforeSolveStartsWarning: (
		opponent: PublicUserAccount,
		secondsToStart: number,
	) => void;
	solveTakingTooLongWarning: (opponent: PublicUserAccount, secondsToFinish: number) => void;
}

// Type for game options input (partial GameOptions for creation)
type GameOptionsInput = Pick<
	GameOptions,
	| 'game_type'
	| 'cube_type'
	| 'elimination_starting_time_seconds'
	| 'elimination_percent_change_rate'
	| 'head_to_head_target_win_count'
	| 'gauntlet_time_multiplier'
>;

export interface ClientToServerEvents extends SocketReservedEventsMap {
	playerJoinedLobby: (gameOptions: GameOptionsInput) => void;
	playerLeftLobby: () => void;
	playerEnteredMatch: (matchId: string) => void;
	playerStartedSolve: (matchId: string, startedAtUnix: number) => void;
	playerEndedSolve: (matchId: string, endedAtUnix: number, finalTimeMillis: number) => void;
	playerResignedMatch: (matchId: string) => void;
	playerAbortedMatch: (matchId: string) => void;
	playerSolveSaved: (matchId: string, solve: Solve) => void;
	playedDnfSolve: (matchId: string, solve: Solve) => void;
	playerPlusTwoSolve: (matchId: string, solve: Solve) => void;
	playerLeftGame: (matchId: string) => void;
	matchHeartbeat: (matchId: string) => void;
	playerSentChatMessage: (data: MatchInputChatMessage) => void;
	playerJoinedRematchQueue: (matchId: string) => void;
	playerJoinedMatchByLinkCode: (linkCode: string) => void;
	playerJoinedSpectateMode: (spectateCode: string) => void;
	rejoinMyRooms: (rooms: string[]) => void;
}
