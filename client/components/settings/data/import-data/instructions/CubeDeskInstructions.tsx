import {Trans, useTranslation} from 'react-i18next';
import ImportSection from '@/components/settings/data/import-data/ImportSection';
import React from 'react';

export default function CubeDeskInstructions() {
	const {t} = useTranslation();
	return (
		<div>
			<ImportSection title={t('settings.import.exportFromCubeDesk')}>
				<ol className="box-border list-decimal pl-[35px]">
					<li className="text-text text-[1.1rem] leading-[1.6rem] opacity-85">
						<Trans
							i18nKey="settings.import.navigateToSettings"
							components={{
								settingsLink: (
									<a
										className="text-text underline opacity-70"
										href="/settings"
										target="_blank"
									/>
								),
							}}
						/>
					</li>
					<li className="text-text text-[1.1rem] leading-[1.6rem] opacity-85">
						{t('settings.import.clickExport')}
					</li>
				</ol>
			</ImportSection>
		</div>
	);
}
