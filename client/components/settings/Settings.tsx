import {useTranslation} from 'react-i18next';
import HorizontalNav, {HorizontalNavTab} from '@/components/common/HorizontalNav';
import LanguageSelector from '@/components/settings/LanguageSelector';
import PageTitle from '@/components/common/PageTitle';
import React, {ReactNode} from 'react';
import {useRouteMatch} from 'react-router-dom';

const TABS: HorizontalNavTab[] = [
	{id: 'timer', value: 'timer.timer', link: '/settings/timer'},
	{id: 'appearance', value: 'settings.appearance', link: '/settings/appearance'},
	{id: 'data', value: 'settings.data', link: '/settings/data'},
];

interface Props {
	children: ReactNode;
}

export default function Settings(props: Props) {
	const {t} = useTranslation();
	const {children} = props;
	const page = useRouteMatch().path.split('/').pop();

	return (
		<div className="mx-auto w-full max-w-4xl py-4 sm:py-8">
			<PageTitle pageName={t('settings.settings')}>
				<HorizontalNav
					tabId={page}
					tabs={TABS.map((tab) => ({...tab, value: t(tab.value)}))}
				/>
			</PageTitle>
			<div className="mt-5">
				<LanguageSelector />
			</div>
			<div className="mt-5 w-full pb-24">{children}</div>
		</div>
	);
}
