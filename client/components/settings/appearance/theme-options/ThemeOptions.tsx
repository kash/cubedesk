import {useTranslation} from 'react-i18next';
import ColorPicker from '@/components/common/ColorPicker';
import ThemeOption from '@/components/settings/appearance/theme-options/ThemeOption';
import SettingRow from '@/components/settings/common/SettingRow';
import {AllSettings, getDefaultSetting} from '@/db/settings/query';
import {setSetting} from '@/db/settings/update';
import {useSettings} from '@/util/hooks/useSettings';
import React from 'react';

export default function ThemeOptions() {
	const {t} = useTranslation();
	const primaryColor = useSettings('primary_color');
	const secondaryColor = useSettings('secondary_color');
	const backgroundColor = useSettings('background_color');
	const moduleColor = useSettings('module_color');
	const textColor = useSettings('text_color');
	const buttonColor = useSettings('button_color');

	function updateSetting(name: keyof AllSettings, value: any) {
		setSetting(name, value);
	}

	return (
		<>
			<SettingRow vertical title={t('settings.basicThemeCustomization')}>
				<div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
					<ColorPicker
						fullWidth
						hideReset
						name={t('settings.colors.primary')}
						selectedColorHex={primaryColor}
						resetToRgb={getDefaultSetting('primary_color')}
						onChange={(color) => updateSetting('primary_color', color)}
					/>
					<ColorPicker
						fullWidth
						hideReset
						name={t('settings.colors.secondary')}
						selectedColorHex={secondaryColor}
						resetToRgb={getDefaultSetting('secondary_color')}
						onChange={(color) => updateSetting('secondary_color', color)}
					/>
				</div>
			</SettingRow>
			<SettingRow
				vertical
				title={t('settings.themes')}
				description={t('settings.chooseThemePreset')}
			>
				<div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
					<ThemeOption theme="dark" />
					<ThemeOption theme="light" />
					<ThemeOption theme="cyberpunk" />
					<ThemeOption theme="tokyo" />
					<ThemeOption theme="save_the_bees" />
					<ThemeOption theme="norman" />
					<ThemeOption theme="night_owl" />
					<ThemeOption theme="phd_student" />
				</div>
			</SettingRow>
			<SettingRow vertical title={t('settings.advancedThemeCustomization')}>
				<div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
					<ColorPicker
						fullWidth
						openUp
						hideReset
						name={t('settings.colors.background')}
						selectedColorHex={backgroundColor}
						resetToRgb={getDefaultSetting('background_color')}
						onChange={(color) => updateSetting('background_color', color)}
					/>
					<ColorPicker
						fullWidth
						openUp
						hideReset
						name={t('settings.colors.module')}
						selectedColorHex={moduleColor}
						resetToRgb={getDefaultSetting('module_color')}
						onChange={(color) => updateSetting('module_color', color)}
					/>
					<ColorPicker
						fullWidth
						openUp
						hideReset
						name={t('settings.colors.text')}
						selectedColorHex={textColor}
						resetToRgb={getDefaultSetting('text_color')}
						onChange={(color) => updateSetting('text_color', color)}
					/>
					<ColorPicker
						fullWidth
						openUp
						hideReset
						name={t('settings.colors.button')}
						selectedColorHex={buttonColor}
						resetToRgb={getDefaultSetting('button_color')}
						onChange={(color) => updateSetting('button_color', color)}
					/>
				</div>
			</SettingRow>
		</>
	);
}
