import React, {ReactNode} from 'react';
import HorizontalNav, {HorizontalNavTab} from '@/components/common/HorizontalNav';
import PageTitle from '@/components/common/PageTitle';
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
		<div>
			<PageTitle pageName="Settings">
				<HorizontalNav tabId={page} tabs={TABS} />
			</PageTitle>
			<div className="mt-5 w-full max-w-[650px] pb-[300px]">{children}</div>
		</div>
	);
}
