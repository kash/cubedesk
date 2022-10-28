import {updateMatchParticipant} from '../../models/match_participation';
import {getMatchById} from '../../models/match';
import {Match} from '../../schemas/Match.schema';
import MatchTypeLogic from '../match_types/match_type_interface';
import {emitMatchUpdate} from './send';
import {MatchStanding, MatchUpdate, PlayerStatus} from '../../../client/shared/match/types';
import {getMatchPlayersRoomName, getMatchSpectatorsRoomName, getRematchRoomName} from '../match';
import {getRoomSize, getUsersInRoom, userExistsInRoom} from '../util';
import {updateMatchWithWinner} from './on_win';
import {getMatchTypeByMatch} from '../init';
import {getPrisma} from '../../database';

export async function sendMatchUpdateById(matchId: string) {
	const match = await getMatchById(matchId);
	return sendMatchUpdate(match);
}

export async function sendMatchUpdate(match: Match) {
	const matchType = getMatchTypeByMatch(match);
	const standings = await getMatchStandings(match, matchType);

	let winnerId = null;
	const playerUpdateTxs = [];
	const standMap = getMatchStandingsMap(standings);

	for (const player of standings) {
		const standing = standMap[player.userId];
		const won = standing.status === PlayerStatus.Won;
		const lost = standing.status === PlayerStatus.Lost;

		const promise = updateMatchParticipant(match, standing.user, {
			lost,
			won,
			position: standing.position,
		});
		playerUpdateTxs.push(promise);

		winnerId = won ? player.userId : winnerId;
	}

	await getPrisma().$transaction(playerUpdateTxs);

	// Update the match if the match is not over and the winner is set
	if (!match.ended_at && winnerId) {
		match = await updateMatchWithWinner(match, winnerId);
	}

	const updatedMatch = await getMatchById(match.id);

	const spectatorsRoomName = getMatchSpectatorsRoomName(match);
	const playersRoomName = getMatchPlayersRoomName(match);
	const rematchRoomName = getRematchRoomName(match);

	const spectatorCount = await getRoomSize(spectatorsRoomName);
	const playersInRoom = await getUsersInRoom(playersRoomName);
	const playersInRematchRoom = await getUsersInRoom(rematchRoomName);

	const payload: MatchUpdate = {
		standings,
		match: updatedMatch,
		playersInRoomCount: playersInRoom.length,
		playersInRematchRoom,
		playersInRoom,
		spectatorCount,
		rematchRoomSize: playersInRematchRoom.length,
	};

	// Send message to client(s)
	emitMatchUpdate('matchUpdated', match, payload);

	return payload;
}

export async function getMatchStandings(match: Match, matchType: MatchTypeLogic): Promise<MatchStanding[]> {
	const output: MatchStanding[] = [];

	const allPlayers = match.participants;

	let lostCount = 0;
	let hasWinner = false;
	for (const player of allPlayers) {
		const playerStatus = matchType.playerStatus(player, match);

		let status = playerStatus.status;

		const user = player.user;
		const inRoom = await userExistsInRoom(user, getMatchPlayersRoomName(match));

		if (player.forfeited || player.resigned) {
			status = PlayerStatus.Lost;
		} else if (!inRoom) {
			status = PlayerStatus.Disconnected;
		}

		const out: MatchStanding = {
			username: user.username,
			participantId: player.id,
			inRoom,
			userId: player.user_id,
			user,
			solveCount: player.solves.length,
			points: playerStatus.points,
			status,
		};

		if (status === PlayerStatus.Lost) {
			lostCount += 1;
		} else if (status === PlayerStatus.Won) {
			hasWinner = true;
		}

		output.push(out);
	}

	output.sort((a, b) => a.points - b.points);

	// If there is no winner, but lost count shows that player is lost, then set the winner
	if (!hasWinner && lostCount === allPlayers.length - 1) {
		for (let i = 0; i < output.length; i += 1) {
			const player = output[i];

			if (player.status !== PlayerStatus.Lost) {
				output[i].status = PlayerStatus.Won;
				break;
			}
		}
	}

	return output;
}

function getMatchStandingsMap(standings: MatchStanding[]): {[key: string]: MatchStanding} {
	const map: {[key: string]: MatchStanding} = {};

	for (let i = 0; i < standings.length; i += 1) {
		const stand = standings[i];

		map[stand.userId] = {
			...stand,
			position: i,
		};
	}

	return map;
}
