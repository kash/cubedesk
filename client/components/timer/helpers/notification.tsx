import {Badge, badgeVariants} from '@/components/ui/badge';
import {VariantProps} from 'class-variance-authority';
import {setTimerParam, setTimerParams} from '@/components/timer/helpers/params';
import {NOTIFICATION_TIMEOUT, setTimer, stopTimer} from '@/components/timer/helpers/timers';
import {getTimerStore} from '@/util/store/getTimer';
import classNames from 'classnames';
import React from 'react';

const HIDE_NOTIF_TIMEOUT = 7000;

// This is for the notification that shows up above the scramble
export interface TimerAlertOptions {
	text: string;
	variant?: VariantProps<typeof badgeVariants>['variant'];
}

export function displayTimerAlert(
	{text, variant = 'secondary'}: TimerAlertOptions,
	dontHide?: boolean,
) {
	setTimerParams({
		notification: (
			<div
				className={classNames(
					'absolute top-0 z-[10000] box-border flex w-full -translate-y-full justify-center px-5 opacity-100 transition-all duration-300 ease-in-out',
					dontHide && 'opacity-100',
				)}
			>
				<Badge
					variant={variant}
					role="status"
					className="h-auto min-h-7 max-w-full py-1 text-center break-words whitespace-normal"
				>
					{text}
				</Badge>
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
			if (!notification) {
				return;
			}

			setTimerParams({
				notification: React.cloneElement(notification, {
					className:
						'absolute top-[30px] z-[10000] box-border flex w-full -translate-y-full justify-center px-5 opacity-0 transition-all duration-300 ease-in-out',
				}),
			});
		}, HIDE_NOTIF_TIMEOUT),
	);
}

export function removeTimerNotifications() {
	setTimerParam('notification', null);
}
