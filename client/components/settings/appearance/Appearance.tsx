import SelectField from '@/components/common/inputs/SelectField';
import Slider from '@/components/common/Slider';
import LayoutSelector from '@/components/settings/appearance/LayoutSelector';
import ThemeOptions from '@/components/settings/appearance/theme-options/ThemeOptions';
import TimerBackground from '@/components/settings/appearance/TimerBackground';
import SettingRow from '@/components/settings/common/SettingRow';
import SettingSection from '@/components/settings/common/SettingSection';
import {Button} from '@/components/ui/button';
import {AllSettings, getDefaultSetting} from '@/db/settings/query';
import {setSetting} from '@/db/settings/update';
import {useSettings} from '@/util/hooks/useSettings';
import {getTimeString} from '@/util/time';
import React from 'react';

const DEFAULT_FONT_FAMILY = 'Roboto Mono';

const FONT_FAMILIES = [
	DEFAULT_FONT_FAMILY,
	'Fira Sans',
	'Fira Mono',
	'Kiwi Maru',
	'JetBrains Mono',
	'Poppins',
	'Montserrat',
	'Space Mono',
	'Arial',
	'monospace',
];

export default function Appearance() {
	const timerTimeSize = useSettings('timer_time_size');
	const timerScrambleSize = useSettings('timer_scramble_size');
	const timerDecimalPoints = useSettings('timer_decimal_points');
	const timerFontFamily = useSettings('timer_font_family');
	const timerModuleCount = useSettings('timer_module_count');

	function updateSetting(name: keyof AllSettings, value: any) {
		setSetting(name, value);
	}

	return (
		<>
			<ThemeOptions />
			<SettingRow
				title="Timer modules"
				description="Change the number of modules shown on the timer page. Note that this is the *maximum* number of modules shown (based on your window size)."
			>
				<SelectField
					label="Timer modules"
					value={String(timerModuleCount)}
					onValueChange={(value) => updateSetting('timer_module_count', Number(value))}
					options={[1, 2, 3, 4, 5, 6].map((count) => ({
						value: String(count),
						text: String(count) + (count === 3 ? ' (Default)' : ''),
					}))}
				/>
			</SettingRow>
			<SettingRow
				title="Timer layout"
				description="Change the way your timer looks. If you have a smaller screen, you may want to put the modules to the left or right."
			>
				<LayoutSelector />
			</SettingRow>
			<SettingRow
				title="Timer background"
				description="Change the background color or image of the timer."
			>
				<TimerBackground />
			</SettingRow>
			<SettingRow
				title="Timer font"
				description="Font of the big timer you see on the timer page"
			>
				<SelectField
					label="Timer font"
					value={timerFontFamily}
					onValueChange={(value) => updateSetting('timer_font_family', value)}
					contentClassName="min-w-72"
					options={FONT_FAMILIES.map((font) => ({
						value: font,
						text: font,
						endContent: (
							<span
								className="inline-block w-16 text-right"
								style={{fontFamily: font, fontWeight: 400}}
							>
								12.34
							</span>
						),
					}))}
				/>
				{timerFontFamily === DEFAULT_FONT_FAMILY ? null : (
					<Button
						variant="ghost"
						onClick={() => updateSetting('timer_font_family', DEFAULT_FONT_FAMILY)}
						size="sm"
					>
						{'Reset'}
					</Button>
				)}
			</SettingRow>
			<SettingSection>
				<SettingRow
					title="Timer font size"
					description="Font size of the big time you see on the timer page"
				>
					<Slider
						min={35}
						label="Timer font size"
						value={Number(timerTimeSize)}
						max={150}
						onValueChange={(value) => updateSetting('timer_time_size', value)}
					/>
					{timerTimeSize === getDefaultSetting('timer_time_size') ? null : (
						<Button
							variant="ghost"
							onClick={() =>
								updateSetting(
									'timer_time_size',
									getDefaultSetting('timer_time_size'),
								)
							}
							size="sm"
						>
							{'Reset'}
						</Button>
					)}
				</SettingRow>
				<div className="w-full py-[30px] pb-[50px] text-center">
					<h1
						style={{
							fontWeight: '500',
							fontFamily: timerFontFamily,
							fontSize: `${timerTimeSize}px`,
						}}
					>
						{getTimeString(23.074, timerDecimalPoints)}
					</h1>
				</div>
			</SettingSection>
			<SettingSection>
				<SettingRow
					title="Scramble font size"
					description="Font size of the scramble you see on the timer page"
				>
					<Slider
						min={10}
						label="Scramble font size"
						value={Number(timerScrambleSize)}
						max={40}
						onValueChange={(value) => updateSetting('timer_scramble_size', value)}
					/>
					{timerScrambleSize === getDefaultSetting('timer_scramble_size') ? null : (
						<Button
							variant="ghost"
							onClick={() =>
								updateSetting(
									'timer_scramble_size',
									getDefaultSetting('timer_scramble_size'),
								)
							}
							size="sm"
						>
							{'Reset'}
						</Button>
					)}
				</SettingRow>
				<div className="w-full py-[30px] pb-[50px] text-center">
					<h3
						className="text-text font-['Roboto_Mono',monospace] font-normal"
						style={{
							fontSize: `${timerScrambleSize}px`,
						}}
					>
						D' R2 B2 R2 U' F2 R2 U' L2 U2 L2 R2 F' D' L D' F' D' F D' R' U
					</h3>
				</div>
			</SettingSection>
		</>
	);
}
