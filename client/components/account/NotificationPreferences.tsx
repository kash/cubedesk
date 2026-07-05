import Checkbox from '@/components/common/Checkbox';
import InputLegend from '@/components/common/inputs/input/InputLegend';
import {NotificationPreferenceKey} from '@/types/notification-preference';
import {trpc} from '@/util/trpc';
import React, {ReactNode, useEffect, useState} from 'react';

export default function NotificationPreferences() {
	const [prefs, setPrefs] = useState({});

	useEffect(() => {
		trpc.notificationPref.get.query().then((data) => {
			setPrefs(data);
		});
	}, []);

	function handleChange(e) {
		const newPrefs = {...prefs};
		newPrefs[e.target.name] = e.target.checked;
		setPrefs(newPrefs);

		trpc.notificationPref.set.mutate({
			key: e.target.name as NotificationPreferenceKey,
			value: e.target.checked,
		});
	}

	const notificationTypeNames = [
		{
			key: 'friend_request',
			label: 'Friend request accepted',
		},
		{
			key: 'friend_request_accept',
			label: 'Friend request received',
		},
		{
			key: 'elo_refund',
			label: 'ELO refunded after playing a cheater',
		},
		{
			key: 'marketing_emails',
			label: 'Tips, updates, and other emails from CubeDesk',
		},
	];

	const checkboxes: ReactNode[] = [];
	for (const notifTypeName of notificationTypeNames) {
		const pref = notifTypeName.key;
		const label = notifTypeName.label;

		if (pref in prefs) {
			checkboxes.push(
				<Checkbox
					key={pref}
					name={pref}
					text={label}
					onChange={handleChange}
					checked={prefs[pref]}
				/>,
			);
		}
	}

	return (
		<div>
			<InputLegend text="Email Notifications" />
			{checkboxes}
		</div>
	);
}
