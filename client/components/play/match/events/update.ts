import {getMatchClientEvent} from '@/client/shared/match/client-events';
import {MatchClientEvent} from '@/client/shared/match/events';
import {MatchStanding, MatchUpdate, PlayerStatus} from '@/client/shared/match/types';
import {GameContext} from '@/components/play/game/Game';
import {updateMatchState} from '@/components/play/match/helpers/state';
import {useMatchContext} from '@/components/play/match/Match';
import {displayTimerAlert, removeTimerNotifications} from '@/components/timer/helpers/notification';
import {triggerConfetti} from '@/components/timer/helpers/pb';
import {emitEvent} from '@/util/event_handler';
import {useMe} from '@/util/hooks/useMe';
import {useSocketListener} from '@/util/hooks/useSocketListener';
import {useTranslation} from 'react-i18next';
import {useContext} from 'react';

export function listenForMatchUpdates() {
	const {t} = useTranslation();
	const gameContext = useContext(GameContext);
	const matchContext = useMatchContext();
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
		t,
		matchContext.match,
		matchContext.spectating,
		watchingPlayerId.current,
		spectating,
		winnerId.current,
	]);

	function onMatchUpdate(data: MatchUpdate) {
		if (data.match.id !== matchContext.match?.id) {
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
			watchingPlayerId.current = firstPlayer?.user_id ?? '';
			myId = watchingPlayerId.current ?? myId;
		}

		if (!myId) {
			return;
		}

		for (const stand of standings) {
			minSolves = Math.min(minSolves, stand.solveCount);

			if (stand.userId === myId) {
				solveCount = stand.solveCount;
			}

			if (stand.status === PlayerStatus.Won) {
				onWin(stand);
			}

			emitEvent<any>(
				getMatchClientEvent(MatchClientEvent.UPDATE_OPPONENT_STATUS, stand.userId),
				stand,
			);
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
		updateMatchState(
			match,
			matchOver,
			myId,
			gameContext,
			setMatch,
			setMatchSession,
			setMatchOver,
			true,
		);
	}

	function onWin(stand: MatchStanding) {
		if (winnerId.current) {
			return;
		}

		winnerId.current = stand.userId;

		if (winnerId.current === me.id) {
			triggerConfetti();
			displayTimerAlert({
				variant: 'success',
				text: t('community.youWon'),
			});
		} else {
			displayTimerAlert({
				variant: 'warning',
				text: t('community.won', {name: stand.username}),
			});
		}
	}

	function getPlayerCountText(count: number) {
		return t('community.players', {count});
	}

	function updateMatchStatus(data: MatchUpdate) {
		const {
			match,
			match: {match_session: matchSession},
		} = data;

		const minPlayers = matchSession?.min_players ?? 0;

		const matchStarted = match.started_at;
		const matchEnded = match.ended_at;

		setRematchRoomSize(data.rematchRoomSize);

		let message;

		if (!matchStarted) {
			const playersNeeded = minPlayers - data.playersInRoomCount;

			message = t('community.waitingFor', {players: getPlayerCountText(playersNeeded)});
			setTimerDisabled(true);
		}

		if (matchEnded) {
			message = t('community.matchEnded');
			setTimerDisabled(true);
		}

		if (message) {
			displayTimerAlert(
				{
					variant: 'secondary',
					text: message,
				},
				true,
			);
		} else {
			removeTimerNotifications();
		}
	}
}
