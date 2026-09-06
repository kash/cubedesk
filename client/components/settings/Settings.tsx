import HorizontalNav, {HorizontalNavTab} from '@/components/common/HorizontalNav';
import PageTitle from '@/components/common/PageTitle';
import React, {ReactNode} from 'react';
import {useRouteMatch} from 'react-router-dom';

const TABS: HorizontalNavTab[] = [
	{id: 'timer', value: 'Timer', link: '/settings/timer'},
	{id: 'appearance', value: 'Appearance', link: '/settings/appearance'},
	{id: 'data', value: 'Data', link: '/settings/data'},
];

interface Props {
	children: ReactNode;
}

export default function Settings(props: Props) {
	const {children} = props;
	const page = useRouteMatch().path.split('/').pop();

	return (
		<div className="mx-auto w-full max-w-4xl py-4 sm:py-8">
			<PageTitle pageName="Settings">
				<HorizontalNav tabId={page} tabs={TABS} />
			</PageTitle>
			<div className="mt-5 w-full pb-24">{children}</div>
		</div>
	);
}
