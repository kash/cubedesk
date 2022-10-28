import React from 'react';
import './Admin.scss';
import block from '../../styles/bem';
import PageTitle from '../common/page_title/PageTitle';
import HorizontalNav from '../common/horizontal_nav/HorizontalNav';

const b = block('admin');

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
		<div className={b()}>
			<PageTitle pageName="Admin">
				<HorizontalNav tabId={page} tabs={TABS} />
			</PageTitle>
			{children}
		</div>
	);
}
