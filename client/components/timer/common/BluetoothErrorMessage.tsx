import {DialogHeader} from '@/components/ui/dialog';
import React from 'react';
import {useTranslation} from 'react-i18next';

export default function BluetoothErrorMessage() {
	const {t} = useTranslation();
	const title = (
		<span style={{color: 'rgb(var(--error-color))'}}>{t('timer.bluetooth.unavailable')}</span>
	);
	const description = (
		<span style={{color: 'rgb(var(--warning-color))'}}>
			{t('timer.bluetooth.checkEnabled')}
		</span>
	);

	return (
		<>
			<DialogHeader title={title} description={description} />
			<p>
				{t('timer.bluetooth.browserSupport')}
				<ul style={{listStyle: 'disc', margin: '1em', paddingLeft: '1em'}}>
					<li>{t('timer.bluetooth.chromePlatforms')}</li>
					<li>{t('timer.bluetooth.bluefyIos')}</li>
				</ul>
				{t('timer.bluetooth.checkStatus')}
				<a
					style={{textDecoration: 'underline'}}
					target="_blank"
					href="https://github.com/WebBluetoothCG/web-bluetooth/blob/main/implementation-status.md"
				>
					{t('timer.bluetooth.implementationStatus')}
				</a>
				{t('timer.bluetooth.supportedBrowsers')}
			</p>
		</>
	);
}
