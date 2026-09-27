import {useTranslation} from 'react-i18next';
import HorizontalNav from '@/components/common/HorizontalNav';
import PageTitle from '@/components/common/PageTitle';
import React from 'react';
import {useRouteMatch} from 'react-router-dom';

const TABS = [
	{
		id: 'personal-info',
		link: '/account/personal-info',
		value: 'auth.personalInfo',
	},
	{
		id: 'password',
		link: '/account/password',
		value: 'auth.password',
	},
	{
		id: 'notifications',
		link: '/account/notifications',
		value: 'common.notifications',
	},
	{
		id: 'linked-accounts',
		link: '/account/linked-accounts',
		value: 'auth.linkedAccounts',
	},
	{
		id: 'danger-zone',
		link: '/account/danger-zone',
		value: 'auth.dangerZone',
	},
];

export default function AccountNav() {
	const {t} = useTranslation();
	const page = useRouteMatch().path.split('/').pop();

	return (
		<div className="max-w-none">
			<PageTitle pageName={t('navigation.account')}>
				<HorizontalNav
					tabs={TABS.map((tab) => ({...tab, value: t(tab.value)}))}
					tabId={page}
				/>
			</PageTitle>
		</div>
	);
}
