import {useTranslation} from 'react-i18next';
import HorizontalNav, {HorizontalNavTab} from '@/components/common/HorizontalNav';
import LanguageSelector from '@/components/settings/LanguageSelector';
import PageTitle from '@/components/common/PageTitle';
import React, {ReactNode} from 'react';
import {useRouteMatch} from 'react-router-dom';

interface Props {
	children: ReactNode;
}

export default function Settings(props: Props) {
	const {t} = useTranslation();
	const {children} = props;
	const page = useRouteMatch().path.split('/').pop();
	const tabs: HorizontalNavTab[] = [
		{id: 'timer', value: t('timer.timer'), link: '/settings/timer'},
		{id: 'appearance', value: t('settings.appearance'), link: '/settings/appearance'},
		{id: 'data', value: t('settings.data'), link: '/settings/data'},
	];

	return (
		<div className="mx-auto w-full max-w-4xl py-4 sm:py-8">
			<PageTitle pageName={t('settings.settings')}>
				<HorizontalNav tabId={page} tabs={tabs} />
			</PageTitle>
			<div className="mt-5">
				<LanguageSelector />
			</div>
			<div className="mt-5 w-full pb-24">{children}</div>
		</div>
	);
}
