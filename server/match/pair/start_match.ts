import {getMatchPlayersRoomName} from '../match';
import {DetailedClientInfo, getDetailedClientInfo, joinRoom, leaveAllMatchRooms, SocketType} from '../util';
import {createMatchSession} from '../../models/match_session';
import {createMatch, updateMatch} from '../../models/match';
import {sendMatchUpdateById} from '../update/standings';
import {Match} from '../../schemas/Match.schema';
import {createMatchParticipant} from '../../models/match_participation';
import {MatchSession} from '../../schemas/MatchSession.schema';
import {emitMatchUpdate} from '../update/send';
import {GameOptionsInput} from '../../schemas/GameOptions.schema';
import {createGameOptions} from '../../models/game_options';
import {logger} from '../../services/logger';
import {GameType} from '../../../shared/match/consts';

export async function pairPlayersInRoom(
	gameType: GameType,
	clientsInRoom: SocketType[],
	gameOptions: GameOptionsInput,
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

		await updateMatch(match, {
			started_at: new Date(),
		});
	} else if (existingSession) {
		// There is an existing session, create a new match
		match = await createMatch(existingSession, true);
	} else {
		// Neither match or session provided, create a new
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
		}
	}

	// Add the selected clients to the match
	await addClientsAsParticipantsAndJoinMatchRoom(match, clientsToAddToMatch);

	// Send out the match update
	const updatePayload = await sendMatchUpdateById(match.id);
	emitMatchUpdate('matchStarted', match, updatePayload);

	return true;
}

async function addClientsAsParticipantsAndJoinMatchRoom(match: Match, clientsToAddToMatch: DetailedClientInfo[]) {
	for (const toAdd of clientsToAddToMatch) {
		const {client, user} = toAdd;

		leaveAllMatchRooms(client);

		const matchRoomName = getMatchPlayersRoomName(match);

		joinRoom(client, matchRoomName);

		// No need to check if user is already in match because it's a new match
		await createMatchParticipant(user, match);
	}
}

// Looks through list of clients in the room and picks the ones that should be added to the match. If the list of users
// is less than the minimum number of players, then it will return null.
async function getClientsToAddToMatchFromRoom(
	gameType: GameType,
	clientsInRoom: SocketType[],
	matchSession?: MatchSession
): Promise<null | DetailedClientInfo[]> {
	const maxPlayers = matchSession?.min_players || 2;
	const minPlayers = matchSession?.max_players || 2;

	if (clientsInRoom.length < minPlayers) {
		return null;
	}

	const clientsToAddToMatch: DetailedClientInfo[] = [];
	for (const client of clientsInRoom) {
		if (clientsToAddToMatch.length >= maxPlayers) {
			break;
		}

		const clientDetails = await getDetailedClientInfo(client);
		clientsToAddToMatch.push(clientDetails);
	}

	if (!clientsToAddToMatch.length || clientsToAddToMatch.length < minPlayers) {
		return null;
	}

	return clientsToAddToMatch;
}
