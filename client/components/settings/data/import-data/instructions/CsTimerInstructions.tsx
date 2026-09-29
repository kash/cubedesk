import ImportSection from '@/components/settings/data/import-data/ImportSection';
import React from 'react';
import {Trans, useTranslation} from 'react-i18next';

export default function CsTimerInstructions() {
	const {t} = useTranslation();
	return (
		<div>
			<ImportSection title={t('settings.import.exportFromCsTimer')}>
				<ol className="box-border list-decimal pl-[35px]">
					<li className="text-text text-[1.1rem] leading-[1.6rem] opacity-85">
						<Trans
							i18nKey="settings.import.goToCsTimer"
							components={{
								csTimerLink: (
									<a
										className="text-text underline opacity-70"
										href="https://cstimer.net"
										target="_blank"
									/>
								),
							}}
						/>
					</li>
					<li className="text-text text-[1.1rem] leading-[1.6rem] opacity-85">
						{t('settings.import.csTimerExportIcon')}
					</li>
					<li className="text-text text-[1.1rem] leading-[1.6rem] opacity-85">
						{t('settings.import.csTimerExportFile')}
					</li>
				</ol>
			</ImportSection>
		</div>
	);
}
