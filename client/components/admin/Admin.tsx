import {useTranslation} from 'react-i18next';
import HorizontalNav from '@/components/common/HorizontalNav';
import PageTitle from '@/components/common/PageTitle';
import React from 'react';

interface Props {
	path: string;
	children: React.ReactNode;
}

export default function Admin(props: Props) {
	const {t} = useTranslation();
	const {path, children} = props;
	const page = path.split('/')[2];
	const tabs = [
		{id: 'metrics', link: '/admin/metrics', value: t('admin.metrics')},
		{id: 'trainer', link: '/admin/trainer', value: t('admin.trainer')},
		{id: 'reports', link: '/admin/reports', value: t('admin.reports')},
		{id: 'users', link: '/admin/users', value: t('admin.users')},
	];

	return (
		<div>
			<PageTitle pageName={t('admin.admin')}>
				<HorizontalNav tabId={page} tabs={tabs} />
			</PageTitle>
			{children}
		</div>
	);
}
