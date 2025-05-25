import React from 'react';
import HorizontalNav from '../common/horizontal_nav/HorizontalNav';
import {useRouteMatch} from 'react-router-dom';
import PageTitle from '../common/page_title/PageTitle';
import block from '../../styles/bem';

const b = block('account-nav');

const TABS = [
	{
		id: 'personal-info',
		link: '/account/personal-info',
		value: 'Personal Info',
	},
	{
		id: 'pro',
		link: '/account/pro',
		value: 'Pro',
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
		<div className={b()}>
			<PageTitle pageName="Account">
				<HorizontalNav tabs={TABS} tabId={page} />
			</PageTitle>
		</div>
	);
}
