import {usePathname} from 'next/navigation';
import './Settings.scss';
import React, {ReactNode} from 'react';
import {useGeneral} from '../../lib/util/hooks/useGeneral';
import block from '../../styles/bem';
import HorizontalNav, {HorizontalNavTab} from '../common/horizontal_nav/HorizontalNav';
import PageTitle from '../common/page-title/PageTitle';

const b = block('settings');

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
	const pathname = usePathname();
	const page = pathname.split('/').pop();
	const mobileMode = useGeneral('mobile_mode');

	return (
		<div className={b({mobileMode})}>
			<PageTitle pageName="Settings">
				<HorizontalNav tabId={page} tabs={TABS} />
			</PageTitle>
			<div className={b('body')}>{children}</div>
		</div>
	);
}
