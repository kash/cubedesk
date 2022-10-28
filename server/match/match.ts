import {getClientRooms, getDetailedClientInfo} from './util';
import {Match} from '../schemas/Match.schema';
import {PublicUserAccount} from '../schemas/UserAccount.schema';
import {MatchRoom} from '../../client/shared/match/events';
import {MatchConst} from '../../client/shared/match/consts';
import {GameType} from '@prisma/client';

export function getRematchRoomName(match: Match): string {
	return `${MatchConst.REMATCH_ROOM_PREFIX}${match.id}`;
}

export function getMatchSpectatorsRoomName(match: Match): string {
	return `${MatchConst.SPECTATORS_ROOM_PREFIX}${match.id}`;
}

export function getMatchPlayersRoomName(match: Match): string {
	return `${MatchConst.PLAYERS_ROOM_PREFIX}${match.id}`;
}

export function getMatchPlayersRoomNameByMatchId(matchId: string): string {
	return `${MatchConst.PLAYERS_ROOM_PREFIX}${matchId}`;
}

export function getMatchIdFromPlayersRoom(roomName: string): string {
	if (!roomName || roomName.indexOf(MatchConst.PLAYERS_ROOM_PREFIX) < 0) {
		return null;
	}

	return roomName.replace(MatchConst.PLAYERS_ROOM_PREFIX, '');
}

export function getLobbyRoomName(eventName: GameType, key: MatchRoom) {
	return eventName + key;
}

// Returns list of clients in match
export async function isClientInAnyMatch(client) {
	const {user} = await getDetailedClientInfo(client);
	if (!user) {
		return false;
	}

	const rooms = getClientRooms(client);

	return rooms.some((room) => room.startsWith(MatchConst.PLAYERS_ROOM_PREFIX));
}

export function userExistsInMatch(match: Match, user: PublicUserAccount): boolean {
	if (!match || !match.participants) {
		return false;
	}

	return match.participants.some((player) => player.user_id === user.id);
}
