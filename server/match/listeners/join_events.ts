import {MatchRoom} from '@/client/shared/match/events';
import {SocketClient} from '@/server/match/init';
import {
	getLobbyRoomName,
	getMatchSpectatorsRoomName,
	getRematchRoomName,
} from '@/server/match/match';
import {matchPlayersInCustomMatch} from '@/server/match/pair/custom_match';
import {joinLobby, removeMatchLobbyRecordsByClientId} from '@/server/match/pair/pair_logic';
import {rematchPlayers} from '@/server/match/pair/rematch';
import {onProtectedSocketEvent, onSocketEvent, socketIdSchema} from '@/server/match/socket_event';
import {sendMatchUpdateById} from '@/server/match/update/standings';
import {getClientRooms, joinRoom, leaveRoom} from '@/server/match/util';
import {getMatchById, getMatchByLinkCode, getMatchBySpectateCode} from '@/server/models/match';
import {GameType} from '@/shared/match/consts';
import {z} from 'zod';

const gameOptionsSchema = z.object({
	event_type: z.string(),
	game_type: z.enum(GameType),
	elimination_starting_time_seconds: z.number().optional(),
	elimination_percent_change_rate: z.number().optional(),
	head_to_head_target_win_count: z.number().optional(),
	gauntlet_time_multiplier: z.number().optional(),
});

const idArgs = z.tuple([socketIdSchema]);

export function listenForJoinEvents(client: SocketClient) {
	onProtectedSocketEvent(
		client,
		'playerJoinedLobby',
		z.tuple([gameOptionsSchema]),
		async (user, gameOptions) => {
			joinRoom(client, getLobbyRoomName(gameOptions.game_type, MatchRoom.LOBBY));

			await joinLobby(client, user, 2, gameOptions);
		},
	);

	onSocketEvent(client, 'playerLeftLobby', z.tuple([]), async () => {
		for (const room of getClientRooms(client)) {
			if (room.includes(MatchRoom.LOBBY)) {
				leaveRoom(client, room);
				await removeMatchLobbyRecordsByClientId(client.id);
			}
		}
	});

	onSocketEvent(client, 'playerJoinedSpectateMode', idArgs, async (spectateCode) => {
		const match = await getMatchBySpectateCode(spectateCode);

		if (!match) {
			return;
		}

		const spectateRoom = getMatchSpectatorsRoomName(match);
		joinRoom(client, spectateRoom);
	});

	onProtectedSocketEvent(
		client,
		'playerJoinedMatchByLinkCode',
		idArgs,
		async (user, linkCode) => {
			const match = await getMatchByLinkCode(linkCode);
			if (!match) {
				return;
			}

			const paired = await matchPlayersInCustomMatch(client, user, match);
			if (!paired) {
				await sendMatchUpdateById(match.id);
			}
		},
	);

	onProtectedSocketEvent(client, 'playerJoinedRematchQueue', idArgs, async (_user, matchId) => {
		const match = await getMatchById(matchId);

		if (!match || !match.ended_at) {
			return;
		}

		const rematchRoom = getRematchRoomName(match);

		joinRoom(client, rematchRoom);
		await rematchPlayers(match);
	});
}
