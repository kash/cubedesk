import {getPrisma} from '@/server/database';
import {getPlayerPairsByGameType} from '@/server/match/pair/elo/elo_matching';
import {pairPlayersInRoom} from '@/server/match/pair/start_match';
import {getClientById} from '@/server/match/util';
import {getUserEloRatingByCubeType} from '@/server/models/elo_rating';
import {acquireRedisLock, createRedisKey, RedisNamespace} from '@/server/services/redis';
import {GameType} from '@/shared/match/consts';
import {GameOptionsInput} from '@/types/match';
import {MatchLobby} from '@/types/match';
import {PublicUserAccount} from '@/types/user';
import {Socket} from 'socket.io';

const PAIRING_IN_PROGRESS_TTL_MS = 4000;
const pairingInProgressKey = createRedisKey(RedisNamespace.PLAY, 'pairing_in_progress');

export async function joinLobby(
	client: Socket,
	user: PublicUserAccount,
	playerCount: number,
	gameOptions: GameOptionsInput
) {
	const cubeType = gameOptions?.cube_type || '333';
	const {elo} = await getUserEloRatingByCubeType(user.id, cubeType);
	const gameType = gameOptions.game_type;

	const deleteTx = getPrisma().matchLobby.deleteMany({
		where: {
			user_id: user.id,
		},
	});

	const createTx = getPrisma().matchLobby.create({
		data: {
			user_id: user.id,
			client_id: client.id,
			cube_type: cubeType,
			game_type: gameType,
			player_count: playerCount,
			elo,
		},
	});

	const res = await getPrisma().$transaction([deleteTx, createTx]);
	return res[1];
}

export async function removeMatchLobbyRecordsByClientId(clientId: string) {
	return getPrisma().matchLobby.deleteMany({
		where: {
			client_id: clientId,
		},
	});
}

async function deleteMatchLobbyRecord(record: MatchLobby) {
	return getPrisma().matchLobby.delete({
		where: {
			id: record.id,
		},
	});
}

async function fetchMatchLobbyRecords(gameType: GameType, orderBy: string = 'created_at') {
	return getPrisma().matchLobby.findMany({
		where: {
			game_type: gameType,
		},
		orderBy: {
			[orderBy]: 'asc',
		},
	});
}

export async function matchPlayersInLobby() {
	const gameTypes = Object.keys(GameType);

	const lock = await acquireRedisLock(pairingInProgressKey, PAIRING_IN_PROGRESS_TTL_MS);
	if (!lock) {
		return null;
	}

	const matchPromises: ReturnType<typeof matchPlayersByGameType>[] = [];

	for (const gameType of gameTypes) {
		matchPromises.push(matchPlayersByGameType(gameType as GameType));
	}

	const res = await Promise.all(matchPromises);

	const output = {};
	for (let i = 0; i < res.length; i++) {
		const gtRes = res[i];
		const gtName = gameTypes[i];
		output[gtName] = gtRes;
	}

	return output;
}

async function matchPlayersByGameType(gameType: GameType) {
	const recs = await fetchMatchLobbyRecords(gameType);
	const {pair, remove} = await getPlayerPairsByGameType(gameType, recs);

	const playerPairs: ReturnType<typeof pairPlayersInRoom>[] = [];
	for (const p of pair) {
		const client1 = await getClientById(p[0].client_id);
		const client2 = await getClientById(p[1].client_id);

		if (!client1 || !client2) {
			continue;
		}

		playerPairs.push(
			pairPlayersInRoom(gameType, [client1, client2], {
				cube_type: '333',
				game_type: GameType.HEAD_TO_HEAD,
			})
		);
	}

	await Promise.allSettled(playerPairs);

	const removeRecs: ReturnType<typeof deleteMatchLobbyRecord>[] = [];
	for (const r of remove) {
		removeRecs.push(deleteMatchLobbyRecord(r));
	}

	await Promise.all(removeRecs);

	return pair;
}
