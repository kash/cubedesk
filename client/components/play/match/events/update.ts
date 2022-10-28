import {MatchStanding, MatchUpdate, PlayerStatus} from '../../../../shared/match/types';
import {MatchClientEvent} from '../../../../shared/match/events';
import {useContext} from 'react';
import {MatchContext} from '../Match';
import {useMe} from '../../../../util/hooks/useMe';
import {useSocketListener} from '../../../../util/hooks/useSocketListener';
import {triggerConfetti} from '../../../timer/helpers/pb';
import {displayTimerAlert, removeTimerNotifications} from '../../../timer/helpers/notification';
import {updateMatchState} from '../helpers/state';
import {GameContext} from '../../game/Game';
import {emitEvent} from '../../../../util/event_handler';
import {getMatchClientEvent} from '../../../../shared/match/client_events';

export function listenForMatchUpdates() {
	const gameContext = useContext(GameContext);
	const matchContext = useContext(MatchContext);
	const me = useMe();
	const {
		watchingPlayerId,
		spectating,
		winnerId,
		setTimerDisabled,
		matchOver,
		setRematchRoomSize,
		setMatchOver,
		setMatch,
		setMatchSession,
	} = matchContext;

	useSocketListener('matchUpdated', onMatchUpdate, [
		matchContext.match,
		matchContext.spectating,
		watchingPlayerId.current,
		spectating,
		winnerId.current,
	]);

	function onMatchUpdate(data: MatchUpdate) {
		if (data.match.id !== matchContext.match.id) {
			return;
		}

		updateMatchStatus(data);

		const {match, standings} = data;

		let minSolves = Infinity;
		let solveCount = Infinity;

		let myId = me.id;
		if (watchingPlayerId.current) {
			myId = watchingPlayerId.current;
		} else if (spectating) {
			const firstPlayer = match.participants?.length ? match.participants[0] : null;
			watchingPlayerId.current = firstPlayer?.user_id;
		}

		for (const stand of standings) {
			minSolves = Math.min(minSolves, stand.solveCount);

			if (stand.userId === myId) {
				solveCount = stand.solveCount;
			}

			if (stand.status === PlayerStatus.Won) {
				onWin(stand);
			}

			emitEvent<any>(getMatchClientEvent(MatchClientEvent.UPDATE_OPPONENT_STATUS, stand.userId), stand);
		}

		/*
		When should timer be disabled:
		- When player 1 more solve further than the lowest number of solves completed
		- When match has not started yet
		 */
		let timerDisabled = false;
		if (solveCount > minSolves || !match.started_at) {
			timerDisabled = true;
		}

		setTimerDisabled(timerDisabled);
		updateMatchState(match, matchOver, myId, gameContext, setMatch, setMatchSession, setMatchOver, true);
	}

	function onWin(stand: MatchStanding) {
		if (winnerId.current) {
			return;
		}

		winnerId.current = stand.userId;

		if (winnerId.current === me.id) {
			triggerConfetti();
			displayTimerAlert({
				backgroundColor: 'green',
				text: 'You won!',
			});
		} else {
			displayTimerAlert({
				backgroundColor: 'orange',
				text: `${stand.username} won`,
			});
		}
	}

	function getPlayerCountText(count: number) {
		return `${count} player${count === 1 ? '' : 's'}`;
	}

	function updateMatchStatus(data: MatchUpdate) {
		const {
			match,
			match: {match_session: matchSession},
		} = data;

		const {min_players: minPlayers} = matchSession;

		const matchStarted = match.started_at;
		const matchEnded = match.ended_at;

		setRematchRoomSize(data.rematchRoomSize);

		let message;

		if (!matchStarted) {
			const playersNeeded = minPlayers - data.playersInRoomCount;

			message = `Waiting for ${getPlayerCountText(playersNeeded)}...`;
			setTimerDisabled(true);
		}

		if (matchEnded) {
			message = `Match ended`;
			setTimerDisabled(true);
		}

		if (message) {
			displayTimerAlert(
				{
					backgroundColor: 'button',
					textColor: 'text',
					text: message,
				},
				true
			);
		} else {
			removeTimerNotifications();
		}
	}
}
