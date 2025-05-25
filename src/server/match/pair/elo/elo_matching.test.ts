import {getPlayerPairsByGameType} from './elo_matching';
import {testGenerateMatchLobbyRows} from '../../__test__/match_lobby';
import * as SocketUtils from '../../util';
import {MatchLobby} from '../../../schemas/MatchLobby.schema';
import {GameType} from '../../../../shared/match/consts';

describe('match players in lobby', () => {
	test('leave one unmatched', async () => {
		const matchLobby = testGenerateMatchLobbyRows(11);
		const clientIdsInRoomSpy = spyOnClientIds(matchLobby);

		const res = await getPlayerPairsByGameType(GameType.HEAD_TO_HEAD, matchLobby);
		expect(clientIdsInRoomSpy).toBeCalledTimes(1);

		expect(res).not.toBeNull();
		expect(res.remove.length).toBe(10);
		expect(res.pair.length).toBe(5);
	});

	test('remove old records', async () => {
		const oneHourAgo = new Date();
		oneHourAgo.setHours(oneHourAgo.getHours() - 1);

		const validRecs = testGenerateMatchLobbyRows(3);
		const oldRecs = testGenerateMatchLobbyRows(3, {
			created_at: oneHourAgo,
		});

		const matchLobby = [...oldRecs, ...validRecs];
		spyOnClientIds(matchLobby);

		const res = await getPlayerPairsByGameType(GameType.HEAD_TO_HEAD, matchLobby);

		expect(res.remove.length).toBe(5);
		expect(res.pair.length).toBe(1);
	});

	test('no duplicates', async () => {
		const matchLobby = testGenerateMatchLobbyRows(100);
		spyOnClientIds(matchLobby);

		const res = await getPlayerPairsByGameType(GameType.HEAD_TO_HEAD, matchLobby);
		const processedUserIds: Record<string, boolean> = {};
		let hasDuplicates = false;
		res.pair.forEach((pair) => {
			if (processedUserIds[pair[0].user_id] || processedUserIds[pair[1].user_id]) {
				hasDuplicates = true;
			}

			processedUserIds[pair[0].user_id] = true;
			processedUserIds[pair[1].user_id] = true;
		});

		expect(hasDuplicates).toBeFalsy();
	});

	test('big elo range', async () => {
		const eloRange = [600, 800, 1000, 1350, 1500, 2000, 2500];
		const matchLobby = eloRange.reduce((arr, elo) => {
			const recs = testGenerateMatchLobbyRows(5, {
				elo: elo,
			});

			return [...arr, ...recs];
		}, []);
		spyOnClientIds(matchLobby);

		const res = await getPlayerPairsByGameType(GameType.HEAD_TO_HEAD, matchLobby);

		const totalPaired = res.pair.length * 2;
		expect(totalPaired).toBe(res.remove.length);

		let pairsWithBigGaps = 0;
		res.pair.forEach((pair) => {
			const elo1 = pair[0].elo;
			const elo2 = pair[1].elo;
			const gap = Math.abs(elo1 - elo2);
			if (gap > 100) {
				pairsWithBigGaps++;
			}
		});

		expect(pairsWithBigGaps).toBe(0);
	});

	function spyOnClientIds(matchLobby: MatchLobby[]) {
		return jest.spyOn(SocketUtils, 'getClientIdsInRoom').mockImplementation(() => {
			const clientIds = matchLobby.map((row) => row.client_id);
			return Promise.resolve(new Set(clientIds));
		});
	}
});
