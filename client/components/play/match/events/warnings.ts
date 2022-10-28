import {useSocketListener} from '../../../../util/hooks/useSocketListener';
import {displayTimerAlert} from '../../../timer/helpers/notification';
import {useMe} from '../../../../util/hooks/useMe';

export function listenForMatchWarnings() {
	const me = useMe();

	useSocketListener('inactivityBeforeSolveStartsWarning', (opponent, secondsToStart) => {
		const isMe = opponent.id === me.id;

		let message;
		if (isMe) {
			message = `You have ${secondsToStart} seconds to start solving`;
		} else {
			message = `${opponent.username} has ${secondsToStart} seconds to start solving`;
		}

		displayTimerAlert({
			backgroundColor: 'orange',
			text: message,
		});
	});

	useSocketListener('solveTakingTooLongWarning', (opponent, secondsToFinish) => {
		const isMe = opponent.id === me.id;

		let message;
		if (isMe) {
			message = `You have ${secondsToFinish} seconds to finish your solve`;
		} else {
			message = `${opponent.username} has ${secondsToFinish} seconds to finish their solve`;
		}

		displayTimerAlert({
			backgroundColor: 'orange',
			text: message,
		});
	});
}
