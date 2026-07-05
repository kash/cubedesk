import React from 'react';
import SettingRow from '@/components/settings/common/SettingRow';
import ColorPicker from '@/components/common/ColorPicker';
import {useSettings} from '@/util/hooks/useSettings';
import {setSetting} from '@/db/settings/update';
import ThemeOption from '@/components/settings/appearance/theme-options/ThemeOption';
import {AllSettings, getDefaultSetting} from '@/db/settings/query';

export default function ThemeOptions() {
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
			<SettingRow vertical title="Basic theme customization theme">
				<div className="box-border grid w-full grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-2.5">
					<ColorPicker
						hideReset
						name="Primary color"
						selectedColorHex={primaryColor}
						resetToRgb={getDefaultSetting('primary_color')}
						onChange={(color) => updateSetting('primary_color', color)}
					/>
					<ColorPicker
						hideReset
						name="Secondary color"
						selectedColorHex={secondaryColor}
						resetToRgb={getDefaultSetting('secondary_color')}
						onChange={(color) => updateSetting('secondary_color', color)}
					/>
				</div>
			</SettingRow>
			<SettingRow
				vertical
				title="Themes"
				description="Choose from a pre-defined list of themes or customize your own in the section below. *Warning*: Selecting one of these themes will reset any custom theme settings you may have set."
			>
				<div className="box-border grid w-full grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-2.5">
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
			<SettingRow vertical title="Advanced theme customization">
				<div className="box-border grid w-full grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-2.5">
					<ColorPicker
						openUp
						hideReset
						name="Background color"
						selectedColorHex={backgroundColor}
						resetToRgb={getDefaultSetting('background_color')}
						onChange={(color) => updateSetting('background_color', color)}
					/>
					<ColorPicker
						openUp
						hideReset
						name="Module color"
						selectedColorHex={moduleColor}
						resetToRgb={getDefaultSetting('module_color')}
						onChange={(color) => updateSetting('module_color', color)}
					/>
					<ColorPicker
						openUp
						hideReset
						name="Text color"
						selectedColorHex={textColor}
						resetToRgb={getDefaultSetting('text_color')}
						onChange={(color) => updateSetting('text_color', color)}
					/>
					<ColorPicker
						openUp
						hideReset
						name="Button color"
						selectedColorHex={buttonColor}
						resetToRgb={getDefaultSetting('button_color')}
						onChange={(color) => updateSetting('button_color', color)}
					/>
				</div>
			</SettingRow>
		</>
	);
}
