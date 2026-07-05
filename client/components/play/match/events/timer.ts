import {useMatchContext} from '@/components/play/match/Match';
import {useEventListener} from '@/util/event_handler';
import {socketClient} from '@/util/socket/socketio';

export function listenForTimerEvents() {
	const matchContext = useMatchContext();

	useEventListener(
		'startTimerEvent',
		(data) => {
			const {match} = matchContext;

			const startedAt = data.timeStartedAt.getTime();
			socketClient().emit('playerStartedSolve', match?.id, startedAt);
		},
		[matchContext.match]
	);

	useEventListener(
		'solveSavedEvent',
		(data) => {
			const {match, setTimerDisabled} = matchContext;
			setTimerDisabled(true);

			socketClient().emit('playerEndedSolve', match?.id, data.ended_at, data.time);
		},
		[matchContext.match]
	);
}
