import {updateMatch} from '../../models/match';
import {Match} from '../../schemas/Match.schema';
import {EloUpdatePayload, calculateNewElo} from '../pair/elo/calc_elo';
import {getUserEloRatingByCubeType, incrementGameCountForCubeType, updateEloRating} from '../../models/elo_rating';
import {createEloLog} from '../../models/elo_log';
import {getPrisma} from '../../database';

// Also sets the elo for the updated match
export async function updateMatchWithWinner(match: Match, winnerId: string) {
	const now = new Date();
	await updateMatch(match, {
		ended_at: now,
		winner_id: winnerId,
	});

	match.ended_at = now;
	match.winner_id = winnerId;

	// Update ELO if two user and rated
	const parts = match.participants;

	if (match.match_session.rated && parts.length === 2) {
		const loserId = parts[0].user_id === winnerId ? parts[1].user_id : parts[0].user_id;
		const cubeType = match.match_session.game_options.cube_type;

		const [winner, loser] = await prepPlayersEloUpdate(winnerId, loserId, cubeType);
		const updatePayload = calculateNewElo(cubeType, winner, loser);
		await updatePlayerRatings(match, updatePayload);
	}

	return match;
}

async function prepPlayersEloUpdate(winnerId: string, loserId: string, cubeType: string) {
	await Promise.all([
		incrementGameCountForCubeType(winnerId, cubeType),
		incrementGameCountForCubeType(loserId, cubeType),
	]);

	return Promise.all([getUserEloRatingByCubeType(winnerId, cubeType), getUserEloRatingByCubeType(loserId, cubeType)]);
}

async function updatePlayerRatings(match: Match, updatePayload: EloUpdatePayload) {
	const {winner, loser, cubeType, winnerNewElo, winnerEloChange, loserEloChange, loserNewElo} = updatePayload;

	return getPrisma().$transaction([
		updateEloRating(winner.userId, cubeType, winnerNewElo),
		updateEloRating(loser.userId, cubeType, loserNewElo),
		createEloLog({
			player_id: winner.userId,
			opponent_id: loser.userId,
			elo_change: winnerEloChange,
			cube_type: cubeType,
			match_id: match.id,
			player_new_game_count: winner.games,
			player_new_elo_rating: winnerNewElo,
			opponent_new_game_count: loser.games,
			opponent_new_elo_rating: loserNewElo,
		}),
		createEloLog({
			player_id: loser.userId,
			opponent_id: winner.userId,
			elo_change: loserEloChange,
			cube_type: cubeType,
			match_id: match.id,
			player_new_game_count: loser.games,
			player_new_elo_rating: loserNewElo,
			opponent_new_game_count: winner.games,
			opponent_new_elo_rating: winnerNewElo,
		}),
	]);
}
