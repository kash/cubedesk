import SelectField from '@/components/common/inputs/SelectField';
import SettingRow from '@/components/settings/common/SettingRow';
import {useLocale} from '@/i18n';
import {useTranslation} from 'react-i18next';
import React from 'react';

export default function LanguageSelector() {
	const {locale, setLocale} = useLocale();
	const {t} = useTranslation();

	return (
		<SettingRow
			title={t('settings.languageAndRegion')}
			description={t('settings.languageDescription')}
		>
			<SelectField
				label={t('settings.language')}
				value={locale}
				onValueChange={(value) => setLocale(value as typeof locale)}
				options={[
					{value: 'en', text: t('common.english')},
					{value: 'es', text: t('common.spanish')},
				]}
			/>
		</SettingRow>
	);
}
