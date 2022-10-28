import {useEventListener} from '../../../../util/event_handler';
import {socketClient} from '../../../../util/socket/socketio';
import {MatchContext} from '../Match';
import {useContext} from 'react';

export function listenForTimerEvents() {
	const matchContext = useContext(MatchContext);

	useEventListener(
		'startTimerEvent',
		(data) => {
			const {match} = matchContext;

			const startedAt = data.timeStartedAt.getTime();
			socketClient().emit('playerStartedSolve', match?.id, startedAt);
		},
		[matchContext?.match]
	);

	useEventListener(
		'solveSavedEvent',
		(data) => {
			const {match, setTimerDisabled} = matchContext;
			setTimerDisabled(true);

			socketClient().emit('playerEndedSolve', match?.id, data.ended_at, data.time);
		},
		[matchContext?.match]
	);
}
