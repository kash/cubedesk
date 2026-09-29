import {Trans, useTranslation} from 'react-i18next';
import AlertContainer from '@/components/common/AlertContainer';
import React from 'react';

export default function UnsubEmails() {
	const {t} = useTranslation();
	const body = (
		<p>
			<Trans
				i18nKey="settings.notifications.unsubscribedPrompt"
				components={{notificationsLink: <a href="/account/notifications" />}}
			/>
		</p>
	);

	return <AlertContainer fill body={body} header={t('common.success')} type="success" />;
}
