import {getMatchPhase, MatchPhase} from '@/server/match/authorization';
import {getMatchTypeByMatch} from '@/server/match/init';
import {getMatchPlayersRoomName, userExistsInMatch} from '@/server/match/match';
import {pairPlayersInRoom} from '@/server/match/pair/start_match';
import {sendMatchUpdate, sendMatchUpdateById} from '@/server/match/update/standings';
import {getClientsInRoom, getUsersInRoom, isClientInRoom, joinRoom} from '@/server/match/util';
import {FullMatch} from '@/types/match';
import {PublicUserAccount} from '@/types/user';
import {Socket} from 'socket.io';

export async function matchPlayersInCustomMatch(
	client: Socket,
	user: PublicUserAccount,
	match: FullMatch,
) {
	const matchRoomName = getMatchPlayersRoomName(match);

	// Making sure that user is not already in match room
	if (isClientInRoom(client, matchRoomName)) {
		return;
	}

	// User probably joined through the lobby
	if (userExistsInMatch(match, user)) {
		joinRoom(client, matchRoomName);
		await sendMatchUpdate(match);
		return;
	}

	if (!match.match_session.custom_match || getMatchPhase(match) !== MatchPhase.Waiting) {
		return;
	}

	const waitingUserIds = new Set(
		(await getUsersInRoom(matchRoomName)).map((waiting) => waiting.id),
	);
	if (!waitingUserIds.has(user.id) && waitingUserIds.size >= match.match_session.max_players) {
		return;
	}

	joinRoom(client, matchRoomName);

	const clients = await getClientsInRoom(matchRoomName);
	const matchType = getMatchTypeByMatch(match);

	const paired = await pairPlayersInRoom(
		matchType.params().eventName,
		clients,
		null,
		match.match_session,
		match,
	);
	if (!paired) {
		await sendMatchUpdateById(match.id);
	}
}
