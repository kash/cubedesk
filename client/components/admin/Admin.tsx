import HorizontalNav from '@/components/common/HorizontalNav';
import PageTitle from '@/components/common/PageTitle';
import React from 'react';

const TABS = [
	{
		id: 'reports',
		link: '/admin/reports',
		value: 'Reports',
	},
	{
		id: 'users',
		link: '/admin/users',
		value: 'Users',
	},
];

interface Props {
	path: string;
	children: React.ReactNode;
}

export default function Admin(props: Props) {
	const {path, children} = props;
	const page = path.split('/')[2];

	return (
		<div>
			<PageTitle pageName="Admin">
				<HorizontalNav tabId={page} tabs={TABS} />
			</PageTitle>
			{children}
		</div>
	);
}
