import {useTranslation} from 'react-i18next';
import Checkbox from '@/components/common/Checkbox';
import InputLegend from '@/components/common/inputs/input/InputLegend';
import {NotificationPreferenceKey} from '@/types/notification-preference';
import {trpc} from '@/util/trpc';
import React, {ReactNode, useEffect, useState} from 'react';

export default function NotificationPreferences() {
	const {t} = useTranslation();
	const [prefs, setPrefs] = useState({});

	useEffect(() => {
		trpc.notificationPref.get.query().then((data) => {
			setPrefs(data);
		});
	}, []);

	function handleChange(key: string, checked: boolean) {
		const newPrefs = {...prefs};
		newPrefs[key] = checked;
		setPrefs(newPrefs);

		trpc.notificationPref.set.mutate({
			key: key as NotificationPreferenceKey,
			value: checked,
		});
	}

	const notificationTypeNames = [
		{
			key: 'friend_request',
			label: t('settings.notifications.friendRequestAccepted'),
		},
		{
			key: 'friend_request_accept',
			label: t('settings.notifications.friendRequestReceived'),
		},
		{
			key: 'elo_refund',
			label: t('settings.notifications.eloRefunded'),
		},
		{
			key: 'marketing_emails',
			label: t('settings.notifications.marketingEmails'),
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
					onCheckedChange={(checked) => handleChange(pref, checked)}
					checked={prefs[pref]}
				/>,
			);
		}
	}

	return (
		<div>
			<InputLegend text={t('settings.emailNotifications')} />
			{checkboxes}
		</div>
	);
}
