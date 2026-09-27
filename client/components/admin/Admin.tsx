import {useTranslation} from 'react-i18next';
import HorizontalNav from '@/components/common/HorizontalNav';
import PageTitle from '@/components/common/PageTitle';
import React from 'react';

const TABS = [
	{id: 'metrics', link: '/admin/metrics', value: 'admin.metrics'},
	{id: 'trainer', link: '/admin/trainer', value: 'trainer.trainer'},
	{
		id: 'reports',
		link: '/admin/reports',
		value: 'admin.reports',
	},
	{
		id: 'users',
		link: '/admin/users',
		value: 'admin.users',
	},
];

interface Props {
	path: string;
	children: React.ReactNode;
}

export default function Admin(props: Props) {
	const {t} = useTranslation();
	const {path, children} = props;
	const page = path.split('/')[2];

	return (
		<div>
			<PageTitle pageName={t('admin.admin')}>
				<HorizontalNav
					tabId={page}
					tabs={TABS.map((tab) => ({...tab, value: t(tab.value)}))}
				/>
			</PageTitle>
			{children}
		</div>
	);
}
