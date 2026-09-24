import {displayTimerAlert} from '@/components/timer/helpers/notification';
import {useMe} from '@/util/hooks/useMe';
import {useSocketListener} from '@/util/hooks/useSocketListener';
import {useI18n} from '@/i18n';

export function listenForMatchWarnings() {
	const {t} = useI18n();
	const me = useMe();

	useSocketListener('inactivityBeforeSolveStartsWarning', (opponent, secondsToStart) => {
		const isMe = opponent.id === me.id;

		let message;
		if (isMe) {
			message = t('You have {seconds} seconds to start solving', {seconds: secondsToStart});
		} else {
			message = t('{name} has {seconds} seconds to start solving', {
				name: opponent.username,
				seconds: secondsToStart,
			});
		}

		displayTimerAlert({
			variant: 'warning',
			text: message,
		});
	}, [t]);

	useSocketListener('solveTakingTooLongWarning', (opponent, secondsToFinish) => {
		const isMe = opponent.id === me.id;

		let message;
		if (isMe) {
			message = t('You have {seconds} seconds to finish your solve', {seconds: secondsToFinish});
		} else {
			message = t('{name} has {seconds} seconds to finish their solve', {
				name: opponent.username,
				seconds: secondsToFinish,
			});
		}

		displayTimerAlert({
			variant: 'warning',
			text: message,
		});
	}, [t]);
}
