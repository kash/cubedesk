import {MatchConst} from '@/client/shared/match/consts';
import {SocketClient} from '@/server/match/init';
import {getMatchIdFromPlayersRoom, getMatchPlayersRoomName} from '@/server/match/match';
import {abortMatch, resignMatch} from '@/server/match/update/resign';
import {emitMatchUpdate} from '@/server/match/update/send';
import {sendMatchUpdate} from '@/server/match/update/standings';
import {
	getClientRooms,
	getClientsInRoom,
	getDetailedClientInfo,
	getUserFromClient,
	leaveAllRooms,
	userExistsInRoom,
} from '@/server/match/util';
import {getMatchById, updateMatch} from '@/server/models/match';
import {FullMatch} from '@/types/match';
import {PublicUserAccount} from '@/types/user';

export function listenForLeaveEvents(client: SocketClient) {
	// Player resigns match
	client.on('playerResignedMatch', async (matchId) => {
		const match = await getMatchById(matchId);
		if (!match) {
			return;
		}

		const {user} = await getDetailedClientInfo(client);
		await resignMatch(match, user);
	});

	// Player abort match
	client.on('playerAbortedMatch', async (matchId) => {
		const match = await getMatchById(matchId);
		if (!match) {
			return;
		}

		const {user} = await getDetailedClientInfo(client);
		await abortMatch(match, user);
	});

	// Player disconnects from match
	client.on('playerLeftGame', async () => {
		const rooms = getClientRooms(client);
		const {user} = await getDetailedClientInfo(client);

		await leaveMatch(user, rooms);
	});

	client.on('disconnecting', async () => {
		const rooms = getClientRooms(client);

		// Anonymous clients (e.g. demo mode) have no user to resolve
		const user = await getUserFromClient(client);
		if (!user) {
			return;
		}

		await leaveMatch(user, rooms);
	});

	async function leaveMatch(user: PublicUserAccount, rooms: string[]) {
		if (!user) {
			return;
		}

		for (const room of rooms) {
			const matchId = getMatchIdFromPlayersRoom(room);

			if (!matchId) {
				continue;
			}

			const match = await getMatchById(matchId);

			if (!match || !match.started_at || match.ended_at) {
				continue;
			}

			const secondsToReturn = MatchConst.SECONDS_TO_RETURN_AFTER_LEAVING as number;

			emitMatchUpdate('opponentLeftMatch', match, user, secondsToReturn);
			waitForUserToReturn(user, match);

			await sendMatchUpdate(match);
		}

		leaveAllRooms(client);
	}

	function waitForUserToReturn(user: PublicUserAccount, match: FullMatch) {
		const matchRoom = getMatchPlayersRoomName(match);
		let secondsWaited = 0;
		let endMatchGracePeriodTimeout: NodeJS.Timeout | null = null;

		const int = setInterval(async () => {
			const clientsInRoom = await getClientsInRoom(matchRoom);

			if (await userExistsInRoom(user, matchRoom)) {
				// User is back
				if (endMatchGracePeriodTimeout) {
					clearTimeout(endMatchGracePeriodTimeout);
					endMatchGracePeriodTimeout = null;
				}
				await sendMatchUpdate(match);

				clearInterval(int);
				return;
			} else if (!clientsInRoom.length && !endMatchGracePeriodTimeout) {
				// Match room is empty

				// Give players a few seconds to rejoin in case both fell out
				endMatchGracePeriodTimeout = setTimeout(async () => {
					if (clientsInRoom.length) {
						return;
					}

					clearInterval(int);

					const currentMatch = await getMatchById(match.id);
					if (!currentMatch || currentMatch.ended_at) {
						return;
					}

					await updateMatch(match, {
						ended_at: new Date(),
					});

					const newMatch = await getMatchById(match.id);
					if (newMatch) {
						await sendMatchUpdate(newMatch);
					}
				}, MatchConst.PLAYERS_LEAVE_END_MATCH_GRACE_PERIOD_SEC * 1000);
			}

			secondsWaited += 1;

			if (secondsWaited >= MatchConst.SECONDS_TO_RETURN_AFTER_LEAVING && !endMatchGracePeriodTimeout) {
				clearInterval(int);

				// Already waited 30 seconds, time to forfeit
				await resignMatch(match, user, true);
			}
		}, 1000);
	}
}
