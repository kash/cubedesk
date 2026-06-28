import React from 'react';
import PageTitle from '@/components/common/page_title/PageTitle';
import HorizontalNav from '@/components/common/horizontal_nav/HorizontalNav';

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
