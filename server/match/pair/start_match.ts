import {getMatchPlayersRoomName} from '@/server/match/match';
import {emitMatchUpdate} from '@/server/match/update/send';
import {sendMatchUpdateById} from '@/server/match/update/standings';
import {
	DetailedClientInfo,
	getClientsInRoom,
	getUserFromClient,
	joinRoom,
	leaveAllMatchRooms,
	leaveRoom,
	SocketType,
} from '@/server/match/util';
import {createGameOptions} from '@/server/models/game_options';
import {createMatch, startMatch} from '@/server/models/match';
import {createMatchParticipant} from '@/server/models/match_participation';
import {createMatchSession} from '@/server/models/match_session';
import {logger} from '@/server/services/logger';
import {GameType} from '@/shared/match/consts';
import {Match} from '@/types/match';
import {MatchSession} from '@/types/match';
import {GameOptionsInput} from '@/types/match';

export async function pairPlayersInRoom(
	gameType: GameType,
	clientsInRoom: SocketType[],
	gameOptions: GameOptionsInput | null,
	existingSession?: MatchSession,
	existingMatch?: Match
): Promise<boolean> {
	// Will return null if not enough users in the room
	const clientsToAddToMatch = await getClientsToAddToMatchFromRoom(
		gameType,
		clientsInRoom,
		existingSession || existingMatch?.match_session
	);

	if (!clientsToAddToMatch || !clientsToAddToMatch.length || clientsToAddToMatch.some((c) => !c)) {
		return false;
	}

	// Create match and session if not provided already
	let match: Match;
	if (existingMatch) {
		// Match already exists. Just need to start it
		match = existingMatch;

		if (!(await startMatch(match))) {
			return false;
		}
	} else if (existingSession) {
		// There is an existing session, create a new match
		match = await createMatch(existingSession, true);
	} else {
		// Neither match or session provided, create a new
		if (!gameOptions) {
			throw new Error('gameOptions is required when creating a brand-new match session');
		}

		try {
			const matchSession = await createMatchSession(
				{
					match_type: gameType,
					min_players: 2,
					max_players: 2,
				},
				null,
				false,
				true
			);

			await createGameOptions({
				...gameOptions,
				match_session_id: matchSession.id,
				game_type: gameType,
			});

			match = await createMatch(matchSession, true);
		} catch (e) {
			logger.error('Error creating match session.', {
				error: e,
			});

			// Without a match there is nothing to pair the players into
			return false;
		}
	}

	// Add the selected clients to the match
	await addClientsAsParticipantsAndJoinMatchRoom(match, clientsToAddToMatch);

	// Send out the match update
	const updatePayload = await sendMatchUpdateById(match.id);
	if (updatePayload) {
		emitMatchUpdate('matchStarted', match, updatePayload);
	}

	return true;
}

async function addClientsAsParticipantsAndJoinMatchRoom(match: Match, clientsToAddToMatch: DetailedClientInfo[]) {
	const matchRoomName = getMatchPlayersRoomName(match);
	const playerIds = new Set(clientsToAddToMatch.map(({user}) => user.id));

	for (const toAdd of clientsToAddToMatch) {
		const {client, user} = toAdd;

		leaveAllMatchRooms(client);
		joinRoom(client, matchRoomName);

		await createMatchParticipant(user, match);
	}

	for (const client of await getClientsInRoom(matchRoomName)) {
		const user = await getUserFromClient(client);
		if (!user || !playerIds.has(user.id)) {
			leaveRoom(client, matchRoomName);
		}
	}
}

// Looks through list of clients in the room and picks the ones that should be added to the match. If the list of users
// is less than the minimum number of players, then it will return null.
async function getClientsToAddToMatchFromRoom(
	gameType: GameType,
	clientsInRoom: SocketType[],
	matchSession?: MatchSession
): Promise<null | DetailedClientInfo[]> {
	const minPlayers = matchSession?.min_players || 2;
	const maxPlayers = matchSession?.max_players || 2;

	if (clientsInRoom.length < minPlayers) {
		return null;
	}

	const clientsToAddToMatch: DetailedClientInfo[] = [];
	for (const client of clientsInRoom) {
		if (clientsToAddToMatch.length >= maxPlayers) {
			break;
		}

		const user = await getUserFromClient(client);
		if (!user || clientsToAddToMatch.some((added) => added.user.id === user.id)) {
			continue;
		}

		clientsToAddToMatch.push({client, user});
	}

	if (!clientsToAddToMatch.length || clientsToAddToMatch.length < minPlayers) {
		return null;
	}

	return clientsToAddToMatch;
}
