import {Match} from '@/types/match';
import {PublicUserAccount} from '@/types/user';
import {MatchRoom} from '../../client/shared/match/events';
import {MatchConst} from '../../client/shared/match/consts';
import {GameType} from '@/generated/prisma/client';

export function getRematchRoomName(match: Match): string {
	return `${MatchConst.REMATCH_ROOM_PREFIX}${match.id}`;
}

export function getMatchSpectatorsRoomName(match: Match): string {
	return `${MatchConst.SPECTATORS_ROOM_PREFIX}${match.id}`;
}

export function getMatchPlayersRoomName(match: Match): string {
	return `${MatchConst.PLAYERS_ROOM_PREFIX}${match.id}`;
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

export function userExistsInMatch(match: Match, user: PublicUserAccount): boolean {
	if (!match || !match.participants) {
		return false;
	}

	return match.participants.some((player) => player.user_id === user.id);
}
