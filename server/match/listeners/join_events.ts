import {getLobbyRoomName, getMatchSpectatorsRoomName, getRematchRoomName} from '../match';
import {getDetailedClientInfo, joinRoom, leaveRoom} from '../util';
import {getMatchById, getMatchByLinkCode, getMatchBySpectateCode} from '../../models/match';
import {MatchRoom} from '../../../client/shared/match/events';
import {matchPlayersInCustomMatch} from '../pair/custom_match';
import {rematchPlayers} from '../pair/rematch';
import {sendMatchUpdate, sendMatchUpdateById} from '../update/standings';
import {joinLobby, removeMatchLobbyRecordsByClientId} from '../pair/pair_logic';
import {SocketClient} from '../init';

export function listenForJoinEvents(client: SocketClient) {
	client.on('playerJoinedMatchByLinkCode', async (linkCode) => {
		const match = await getMatchByLinkCode(linkCode);
		await sendMatchUpdate(match);
	});

	// Client joins [match type] lobby
	client.on('playerJoinedLobby', async (gameOptions) => {
		const gameType = gameOptions.game_type;

		joinRoom(client, getLobbyRoomName(gameType, MatchRoom.LOBBY));
		const {user} = await getDetailedClientInfo(client);

		// Change playerCount in the future?
		await joinLobby(client, user, 2, gameOptions);
	});

	// Client leave [match type] lobby
	client.on('playerLeftLobby', async () => {
		const rooms = client.rooms;
		rooms.forEach((room) => {
			if (room.includes(MatchRoom.LOBBY)) {
				leaveRoom(client, room);
				removeMatchLobbyRecordsByClientId(client.id);
			}
		});
	});

	// Client joins spectate
	client.on('playerJoinedSpectateMode', async (spectateCode) => {
		const match = await getMatchBySpectateCode(spectateCode);

		if (!match) {
			return;
		}

		const spectateRoom = getMatchSpectatorsRoomName(match);
		joinRoom(client, spectateRoom);
	});

	// Client joins match
	client.on('playerJoinedMatchByLinkCode', async (linkCode) => {
		const match = await getMatchByLinkCode(linkCode);
		if (!match) {
			return;
		}

		const paired = await matchPlayersInCustomMatch(client, match);
		if (!paired) {
			await sendMatchUpdateById(match.id);
		}
	});

	// Client clicks rematch button
	client.on('playerJoinedRematchQueue', async (matchId) => {
		const match = await getMatchById(matchId);

		if (!match || !match.ended_at) {
			return;
		}

		const rematchRoom = getRematchRoomName(match);

		joinRoom(client, rematchRoom);
		await rematchPlayers(match);
	});
}
