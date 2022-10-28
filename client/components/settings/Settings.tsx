import React, {ReactNode} from 'react';
import './Settings.scss';
import HorizontalNav, {HorizontalNavTab} from '../common/horizontal_nav/HorizontalNav';
import Appearance from './appearance/Appearance';
import {useGeneral} from '../../util/hooks/useGeneral';
import PageTitle from '../common/page_title/PageTitle';
import {useRouteMatch} from 'react-router-dom';
import block from '../../styles/bem';

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
	const page = useRouteMatch().path.split('/').pop();
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
