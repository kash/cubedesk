import {getPrisma} from '@/server/database';
import {calculateNewElo, EloUpdatePayload} from '@/server/match/pair/elo/calc_elo';
import {createEloLog} from '@/server/models/elo_log';
import {getUserEloRatingByEventType, incrementGameCountForEventType, updateEloRating} from '@/server/models/elo_rating';
import {updateMatch} from '@/server/models/match';
import {FullMatch, Match} from '@/types/match';

// Also sets the elo for the updated match
export async function updateMatchWithWinner(match: FullMatch, winnerId: string) {
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
		const eventType = match.match_session.game_options.event_type;

		const [winner, loser] = await prepPlayersEloUpdate(winnerId, loserId, eventType);
		const updatePayload = calculateNewElo(eventType, winner, loser);
		await updatePlayerRatings(match, updatePayload);
	}

	return match;
}

async function prepPlayersEloUpdate(winnerId: string, loserId: string, eventType: string) {
	await Promise.all([
		incrementGameCountForEventType(winnerId, eventType),
		incrementGameCountForEventType(loserId, eventType),
	]);

	return Promise.all([getUserEloRatingByEventType(winnerId, eventType), getUserEloRatingByEventType(loserId, eventType)]);
}

async function updatePlayerRatings(match: Match, updatePayload: EloUpdatePayload) {
	const {winner, loser, eventType, winnerNewElo, winnerEloChange, loserEloChange, loserNewElo} = updatePayload;

	return getPrisma().$transaction([
		updateEloRating(winner.userId, eventType, winnerNewElo),
		updateEloRating(loser.userId, eventType, loserNewElo),
		createEloLog({
			player_id: winner.userId,
			opponent_id: loser.userId,
			elo_change: winnerEloChange,
			event_type: eventType,
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
			event_type: eventType,
			match_id: match.id,
			player_new_game_count: loser.games,
			player_new_elo_rating: loserNewElo,
			opponent_new_game_count: winner.games,
			opponent_new_elo_rating: winnerNewElo,
		}),
	]);
}
