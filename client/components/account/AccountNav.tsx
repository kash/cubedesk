import {useTranslation} from 'react-i18next';
import HorizontalNav from '@/components/common/HorizontalNav';
import PageTitle from '@/components/common/PageTitle';
import React from 'react';
import {useRouteMatch} from 'react-router-dom';

export default function AccountNav() {
	const {t} = useTranslation();
	const page = useRouteMatch().path.split('/').pop();
	const tabs = [
		{
			id: 'personal-info',
			link: '/account/personal-info',
			value: t('auth.personalInfo'),
		},
		{
			id: 'password',
			link: '/account/password',
			value: t('auth.password'),
		},
		{
			id: 'notifications',
			link: '/account/notifications',
			value: t('auth.notifications'),
		},
		{
			id: 'linked-accounts',
			link: '/account/linked-accounts',
			value: t('auth.linkedAccounts'),
		},
		{
			id: 'danger-zone',
			link: '/account/danger-zone',
			value: t('auth.dangerZone'),
		},
	];

	return (
		<div className="max-w-none">
			<PageTitle pageName={t('navigation.account')}>
				<HorizontalNav tabs={tabs} tabId={page} />
			</PageTitle>
		</div>
	);
}
