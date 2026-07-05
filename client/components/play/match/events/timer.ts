import {useMatchContext} from '@/components/play/match/Match';
import {useEventListener} from '@/util/event_handler';
import {socketClient} from '@/util/socket/socketio';

export function listenForTimerEvents() {
	const matchContext = useMatchContext();

	useEventListener(
		'startTimerEvent',
		(data) => {
			const {match} = matchContext;
			if (!match) {
				return;
			}

			const startedAt = data.timeStartedAt.getTime();
			socketClient().emit('playerStartedSolve', match.id, startedAt);
		},
		[matchContext.match]
	);

	useEventListener(
		'solveSavedEvent',
		(data) => {
			const {match, setTimerDisabled} = matchContext;
			setTimerDisabled(true);

			// Solves saved by the timer always carry ended_at; without it (or a
			// match) there is nothing meaningful to report to the opponent
			if (!match || data.ended_at === null) {
				return;
			}

			socketClient().emit('playerEndedSolve', match.id, data.ended_at, data.time);
		},
		[matchContext.match]
	);
}
