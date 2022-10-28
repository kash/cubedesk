import {MatchClientEvent} from '../../../../shared/match/events';
import {getMatchClientEvent} from '../../../../shared/match/client_events';
import {emitEvent} from '../../../../util/event_handler';
import {useSocketListener} from '../../../../util/hooks/useSocketListener';

/**
 * Relays server events to Challenger component via JavaScript events
 */
export function relayOpponentEvents() {
	useSocketListener('opponentStartedSolve', (opponent, startedAtUnix) => {
		const userId = opponent.profile.user_id;
		const event = MatchClientEvent.START_OPPONENT_TIME;

		emitEvent<any>(getMatchClientEvent(event, userId), {
			startedAt: startedAtUnix,
		});
	});

	useSocketListener('opponentLeftMatch', (opponent, secondsToReturn) => {
		const userId = opponent.profile.user_id;
		const event = MatchClientEvent.OPPONENT_LEFT_MATCH;

		emitEvent<any>(getMatchClientEvent(event, userId), {
			secondsToReturn: secondsToReturn,
		});
	});

	useSocketListener('opponentForfeitedMatch', (opponent) => {
		const userId = opponent.profile.user_id;
		const event = MatchClientEvent.OPPONENT_FORFEITED_MATCH;
		emitEvent<any>(getMatchClientEvent(event, userId));
	});

	useSocketListener('opponentSolveUpdated', (opponent, solve) => {
		const userId = opponent.profile.user_id;
		const event = MatchClientEvent.OPPONENT_SOLVE_UPDATED;
		emitEvent<any>(getMatchClientEvent(event, userId), {
			solve,
		});
	});

	useSocketListener('opponentSolveSaved', (opponent, solve) => {
		const userId = opponent.profile.user_id;
		const event = MatchClientEvent.OPPONENT_TIME_SAVED;
		emitEvent<any>(getMatchClientEvent(event, userId), {
			solve,
		});
	});

	useSocketListener('opponentResignedMatch', (opponent) => {
		const userId = opponent.profile.user_id;
		const event = MatchClientEvent.OPPONENT_RESIGNED_MATCH;
		emitEvent<any>(getMatchClientEvent(event, userId));
	});

	useSocketListener('opponentEndedSolve', (opponent, endedAtUnix, finalTimeMillis) => {
		const userId = opponent.profile.user_id;
		const event = MatchClientEvent.STOP_OPPONENT_TIME;
		emitEvent<any>(getMatchClientEvent(event, userId), {
			endedAt: endedAtUnix,
			finalTime: finalTimeMillis,
		});
	});
}
