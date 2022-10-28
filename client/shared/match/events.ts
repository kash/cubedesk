export enum MatchServerEvent {
	// Client Events
	JOIN_LOBBY = 'JoinLobby',
	ENTER_MATCH = 'RequestStandings',
	LEAVE_LOBBY = 'LeaveLobby',
	JOIN_SPECTATE = 'JoinSpectate',
	JOIN_MATCH = 'JoinCustomMatch',
	JOIN_REMATCH_QUEUE = 'JoinRematchQueue',
	CHAT_MESSAGE_SENT = 'ChatMessageSent',
	LEAVE = 'Leave',
	START_TIME = 'StartTime',
	END_TIME = 'EndTime',
	RESIGN_MATCH = 'ResignMatch',
	ABORT_MATCH = 'AbortMatch',
	TIME_ADDED_TO_HISTORY = 'TimeAddedToHistory',
	DNF_SOLVE = 'DnfSolve',
	PLUS_TWO_SOLVE = 'PlusTwoSolve',

	// Server Events
	OPPONENT_START_TIME = 'OpponentStartTime',
	OPPONENT_STOP_TIME = 'OpponentStopTime',
	CHAT_MESSAGE_RECEIVED = 'ChatMessageReceived',
	MATCH_STARTED = 'MatchStarted',
	OPPONENT_LEFT_MATCH = 'OpponentLeftMatch',
	OPPONENT_SOLVE_UPDATED = 'OpponentSolveUpdated',
	OPPONENT_RESIGNED_MATCH = 'OpponentResignedMatch',
	OPPONENT_FORFEITED_MATCH = 'OpponentForfeitedMatch',
	OPPONENT_ABORTED_MATCH = 'OpponentAbortedMatch',
	OPPONENT_TIME_SAVED = 'OpponentTimeSaved',
	MATCH_UPDATE = 'MatchUpdate',

	OPPONENT_REJOINED_MATCH = 'OpponentRejoinedMatch',
}

export enum MatchClientEvent {
	START_OPPONENT_TIME = 'StartOpponentTime',
	STOP_OPPONENT_TIME = 'StopOpponentTime',
	OPPONENT_SOLVE_UPDATED = 'OpponentSolveUpdated',
	UPDATE_OPPONENT_STATUS = 'UpdateOpponentStatus',
	OPPONENT_TIME_SAVED = 'OpponentTimeSaved',
	OPPONENT_LEFT_MATCH = 'OpponentLeftMatch',
	OPPONENT_FORFEITED_MATCH = 'OpponentForfeitedMatch',
	OPPONENT_RESIGNED_MATCH = 'OpponentResignedMatch',
	OPPONENT_ABORTED_MATCH = 'OpponentAbortedMatch',
	OPPONENT_REJOINED_MATCH = 'OpponentRejoinedMatch',
}

export enum MatchRoom {
	LOBBY = 'Lobby',
}
