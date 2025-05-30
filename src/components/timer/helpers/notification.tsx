import React from 'react';
import {getTimerStore} from '../../../lib/util/store/getTimer';
import block from '../../../styles/bem';
import Tag, {TagProps} from '../../common/tag/Tag';
import {setTimerParam, setTimerParams} from './params';
import {NOTIFICATION_TIMEOUT, setTimer, stopTimer} from './timers';

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
		}, HIDE_NOTIF_TIMEOUT),
	);
}

export function removeTimerNotifications() {
	setTimerParam('notification', null);
}
