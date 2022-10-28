import {SocketReservedEventsMap} from 'socket.io/dist/socket';
import {GameOptionsInput} from '../../server/schemas/GameOptions.schema';
import {PublicUserAccount} from '../../server/schemas/UserAccount.schema';
import {Solve} from '../../server/schemas/Solve.schema';
import {MatchInputChatMessage, MatchUpdate, MatchUpdateChat, UpdateRoomInfo} from '../../client/shared/match/types';

export interface ServerToClientEvents extends SocketReservedEventsMap {
	opponentStartedSolve: (opponent: PublicUserAccount, startedAtUnix: number) => void;
	opponentEndedSolve: (opponent: PublicUserAccount, endedAtUnix: number, finalTimeMillis: number) => void;
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
	inactivityBeforeSolveStartsWarning: (opponent: PublicUserAccount, secondsToStart: number) => void;
	solveTakingTooLongWarning: (opponent: PublicUserAccount, secondsToFinish: number) => void;
}

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
