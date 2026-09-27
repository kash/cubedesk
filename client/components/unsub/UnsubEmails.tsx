import {useTranslation} from 'react-i18next';
import AlertContainer from '@/components/common/AlertContainer';
import React from 'react';

export default function UnsubEmails() {
	const {t} = useTranslation();
	const body = (
		<p>
			{t('settings.notifications.unsubscribed')}{' '}
			<a href="/account/notifications">{t('common.notifications')}</a>{' '}
			{t('settings.notifications.page')}
		</p>
	);

	return <AlertContainer fill body={body} header={t('common.success')} type="success" />;
}
