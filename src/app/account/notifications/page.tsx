'use client';

import {api} from '@/trpc/react';
import {Label} from '@radix-ui/react-label';
import {useCallback, useEffect} from 'react';
import {Checkbox} from '@/components/ui/checkbox';
import {useState} from 'react';

export default function NotificationsPage() {
	const [prefs, setPrefs] = useState<any>({});
	const {data} = api.notificationPreference.notificationPreferences.useQuery();
	const updatePrefsMutation =
		api.notificationPreference.updateNotificationPreferences.useMutation();

	useEffect(() => {
		if (!data) {
			return;
		}
		setPrefs(data);
	}, [data]);

	const handleChange = useCallback(
		(e: any) => {
			const newPrefs = {...prefs};
			newPrefs[e.target.name] = e.target.checked;
			setPrefs(newPrefs);

			updatePrefsMutation.mutate({
				key: e.target.name,
				value: e.target.checked,
			});
		},
		[prefs, updatePrefsMutation],
	);

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

	const checkboxes = [];
	for (const notifTypeName of notificationTypeNames) {
		const pref = notifTypeName.key;
		const label = notifTypeName.label;

		if (pref in prefs) {
			checkboxes.push(
				<Checkbox key={pref} name={pref} onChange={handleChange} checked={prefs[pref]}>
					{label}
				</Checkbox>,
			);
		}
	}

	return (
		<div>
			<Label>Email Notifications</Label>
			{checkboxes}
		</div>
	);
}
