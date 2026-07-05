import HorizontalNav from '@/components/common/HorizontalNav';
import PageTitle from '@/components/common/PageTitle';
import React from 'react';
import {useRouteMatch} from 'react-router-dom';

const TABS = [
	{
		id: 'personal-info',
		link: '/account/personal-info',
		value: 'Personal Info',
	},
	{
		id: 'password',
		link: '/account/password',
		value: 'Password',
	},
	{
		id: 'notifications',
		link: '/account/notifications',
		value: 'Notifications',
	},
	{
		id: 'linked-accounts',
		link: '/account/linked-accounts',
		value: 'Linked Accounts',
	},
	{
		id: 'danger-zone',
		link: '/account/danger-zone',
		value: 'Danger Zone',
	},
];

export default function AccountNav() {
	const page = useRouteMatch().path.split('/').pop();

	return (
		<div className="max-w-none">
			<PageTitle pageName="Account">
				<HorizontalNav tabs={TABS} tabId={page} />
			</PageTitle>
		</div>
	);
}
