import {MatchConst} from '@/client/shared/match/consts';
import {getParticipantMatch, MatchPhase} from '@/server/match/authorization';
import {SocketClient} from '@/server/match/init';
import {getMatchIdFromPlayersRoom, getMatchPlayersRoomName} from '@/server/match/match';
import {
	onProtectedSocketEvent,
	runSocketHandler,
	socketIdSchema,
} from '@/server/match/socket_event';
import {abortMatch, resignMatch} from '@/server/match/update/resign';
import {emitMatchUpdate} from '@/server/match/update/send';
import {sendMatchUpdate} from '@/server/match/update/standings';
import {
	getClientRooms,
	getClientsInRoom,
	getUserFromClient,
	leaveAllRooms,
	userExistsInRoom,
} from '@/server/match/util';
import {getMatchById, updateMatch} from '@/server/models/match';
import {FullMatch} from '@/types/match';
import {PublicUserAccount} from '@/types/user';
import {z} from 'zod';

const matchIdArgs = z.tuple([socketIdSchema]);

export function listenForLeaveEvents(client: SocketClient) {
	onProtectedSocketEvent(client, 'playerResignedMatch', matchIdArgs, async (user, matchId) => {
		const match = await getParticipantMatch(user, matchId, [MatchPhase.Active]);
		if (!match) {
			return;
		}

		await resignMatch(match, user);
	});

	onProtectedSocketEvent(client, 'playerAbortedMatch', matchIdArgs, async (user, matchId) => {
		const match = await getParticipantMatch(user, matchId, [MatchPhase.Active]);
		if (!match) {
			return;
		}

		await abortMatch(match, user);
	});

	onProtectedSocketEvent(client, 'playerLeftGame', matchIdArgs, async (user) => {
		await leaveMatch(user, getClientRooms(client));
	});

	client.on('disconnecting', () => {
		const rooms = getClientRooms(client);

		void runSocketHandler(client, 'disconnecting', async () => {
			// Anonymous clients (e.g. demo mode) have no user to resolve
			const user = await getUserFromClient(client);
			if (!user) {
				return;
			}

			await leaveMatch(user, rooms);
		});
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

			const match = await getParticipantMatch(user, matchId, [MatchPhase.Active]);
			if (!match) {
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

			if (
				secondsWaited >= MatchConst.SECONDS_TO_RETURN_AFTER_LEAVING &&
				!endMatchGracePeriodTimeout
			) {
				clearInterval(int);

				// Already waited 30 seconds, time to forfeit
				await resignMatch(match, user, true);
			}
		}, 1000);
	}
}
