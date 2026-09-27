import {displayTimerAlert} from '@/components/timer/helpers/notification';
import {useMe} from '@/util/hooks/useMe';
import {useSocketListener} from '@/util/hooks/useSocketListener';
import {useTranslation} from 'react-i18next';

export function listenForMatchWarnings() {
	const {t} = useTranslation();
	const me = useMe();

	useSocketListener(
		'inactivityBeforeSolveStartsWarning',
		(opponent, secondsToStart) => {
			const isMe = opponent.id === me.id;

			let message;
			if (isMe) {
				message = t('community.youHaveSecondsToStartSolving', {seconds: secondsToStart});
			} else {
				message = t('community.hasSecondsToStartSolving', {
					name: opponent.username,
					seconds: secondsToStart,
				});
			}

			displayTimerAlert({
				variant: 'warning',
				text: message,
			});
		},
		[t],
	);

	useSocketListener(
		'solveTakingTooLongWarning',
		(opponent, secondsToFinish) => {
			const isMe = opponent.id === me.id;

			let message;
			if (isMe) {
				message = t('community.elimination.timeLimit', {
					seconds: secondsToFinish,
				});
			} else {
				message = t('community.hasSecondsToFinishTheirSolve', {
					name: opponent.username,
					seconds: secondsToFinish,
				});
			}

			displayTimerAlert({
				variant: 'warning',
				text: message,
			});
		},
		[t],
	);
}
