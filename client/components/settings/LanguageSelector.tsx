import SelectField from '@/components/common/inputs/SelectField';
import SettingRow from '@/components/settings/common/SettingRow';
import {useI18n} from '@/i18n';
import React from 'react';

export default function LanguageSelector() {
	const {locale, setLocale} = useI18n();

	return (
		<SettingRow
			title="Language and region"
			description="Choose the language used throughout CubeDesk."
		>
			<SelectField
				label="Language"
				value={locale}
				onValueChange={(value) => setLocale(value as typeof locale)}
				options={[
					{value: 'en', text: 'English'},
					{value: 'es', text: 'Spanish'},
				]}
			/>
		</SettingRow>
	);
}
