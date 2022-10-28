import React, {useEffect, useState} from 'react';
import Checkbox from '../../common/checkbox/Checkbox';
import {NOTIFICATION_PREFERENCE_FRAGMENT} from '../../../util/graphql/fragments';
import {gqlMutate} from '../../api';
import {gql, useQuery} from '@apollo/client';
import InputLegend from '../../common/inputs/input/input_legend/InputLegend';
import {NotificationPreference} from '../../../@types/generated/graphql';

const NOTIFICATION_PREFERENCES_QUERY = gql`
	${NOTIFICATION_PREFERENCE_FRAGMENT}
	query Query {
		notificationPreferences {
			...NotificationPreferenceFragment
		}
	}
`;

export default function NotificationPreferences() {
	const [prefs, setPrefs] = useState({});
	const {data} = useQuery<{notificationPreferences: NotificationPreference}>(NOTIFICATION_PREFERENCES_QUERY);

	useEffect(() => {
		if (!data) {
			return;
		}
		setPrefs(data.notificationPreferences);
	}, [data]);

	function handleChange(e) {
		const newPrefs = {...prefs};
		newPrefs[e.target.name] = e.target.checked;
		setPrefs(newPrefs);

		gqlMutate(
			gql`
				${NOTIFICATION_PREFERENCE_FRAGMENT}
				mutation Mutate($key: String, $value: Boolean) {
					updateNotificationPreferences(key: $key, value: $value) {
						...NotificationPreferenceFragment
					}
				}
			`,
			{
				key: e.target.name,
				value: e.target.checked,
			}
		);
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

	const checkboxes = [];
	for (const notifTypeName of notificationTypeNames) {
		const pref = notifTypeName.key;
		const label = notifTypeName.label;

		if (pref in prefs) {
			checkboxes.push(
				<Checkbox key={pref} name={pref} text={label} onChange={handleChange} checked={prefs[pref]} />
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
