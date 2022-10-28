import React from 'react';
import {NOTIFICATION_TIMEOUT, setTimer, stopTimer} from './timers';
import block from '../../../styles/bem';
import {setTimerParam, setTimerParams} from './params';
import Tag, {TagProps} from '../../common/tag/Tag';
import {getTimerStore} from '../../../util/store/getTimer';

const b = block('timer-notif');

const HIDE_NOTIF_TIMEOUT = 7000;

// This is for the notification that shows up above the scramble
export function displayTimerAlert(tagProps: TagProps, dontHide?: boolean) {
	setTimerParams({
		notification: (
			<div className={b({static: dontHide})}>
				<Tag glow {...tagProps} />
			</div>
		),
	});

	stopTimer(NOTIFICATION_TIMEOUT);

	if (dontHide) {
		return;
	}

	setTimer(
		NOTIFICATION_TIMEOUT,
		setTimeout(() => {
			const notification = getTimerStore('notification');

			setTimerParams({
				notification: React.cloneElement(notification, {
					className: b({out: true}),
				}),
			});
		}, HIDE_NOTIF_TIMEOUT)
	);
}

export function removeTimerNotifications() {
	setTimerParam('notification', null);
}
