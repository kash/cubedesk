import {useTranslation} from 'react-i18next';
import PageTitle from '@/components/common/PageTitle';
import React, {ReactElement} from 'react';

interface Props {
	children: ReactElement;
}

export default function PlayWrapper(props: Props) {
	const {t} = useTranslation();
	const {children} = props;

	return (
		<div className="mx-auto w-full max-w-4xl py-4 sm:py-8">
			<PageTitle
				pageName={t('community.play')}
				description={t('community.play.description')}
			/>
			{children}
		</div>
	);
}
