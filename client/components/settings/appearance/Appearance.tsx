import React from 'react';
import {getTimeString} from '../../../util/time';
import Slider from '../../common/slider/Slider';
import LayoutSelector from './layout_selector/LayoutSelector';
import TimerBackground from './timer_background/TimerBackground';
import SettingRow from '../setting/row/SettingRow';
import Dropdown from '../../common/inputs/dropdown/Dropdown';
import SettingSection from '../setting/section/SettingSection';
import {setSetting} from '../../../db/settings/update';
import {useSettings} from '../../../util/hooks/useSettings';
import Button from '../../common/button/Button';
import ThemeOptions from './theme_options/ThemeOptions';
import {AllSettings, getDefaultSetting} from '../../../db/settings/query';
import {CaretDown} from '@phosphor-icons/react';

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
				<Dropdown
					text={String(timerModuleCount)}
					noMargin
					icon={<CaretDown />}
					options={[1, 2, 3, 4, 5, 6].map((count) => ({
						text: String(count) + (count === 3 ? ' (Default)' : ''),
						onClick: () => updateSetting('timer_module_count', count),
					}))}
				/>
			</SettingRow>
			<SettingRow
				title="Timer layout"
				description="Change the way your timer looks. If you have a smaller screen, you may want to put the modules to the left or right."
			>
				<LayoutSelector />
			</SettingRow>
			<SettingRow title="Timer background" description="Change the background color or image of the timer.">
				<TimerBackground />
			</SettingRow>
			<SettingRow title="Timer font" description="Font of the big timer you see on the timer page">
				<Dropdown
					text={timerFontFamily}
					noMargin
					icon={<CaretDown />}
					options={FONT_FAMILIES.map((ff) => ({
						text: ff,
						onClick: () => updateSetting('timer_font_family', ff),
					}))}
				/>
				<Button
					hidden={timerFontFamily === DEFAULT_FONT_FAMILY}
					text="Reset"
					warning
					flat
					onClick={() => updateSetting('timer_font_family', DEFAULT_FONT_FAMILY)}
				/>
			</SettingRow>
			<SettingSection>
				<SettingRow title="Timer font size" description="Font size of the big time you see on the timer page">
					<Slider
						min={35}
						value={timerTimeSize}
						max={150}
						onChange={(e) => updateSetting('timer_time_size', e.target.value)}
					/>
					<Button
						hidden={timerTimeSize === getDefaultSetting('timer_time_size')}
						text="Reset"
						warning
						flat
						onClick={() => updateSetting('timer_time_size', getDefaultSetting('timer_time_size'))}
					/>
				</SettingRow>
				<div className="cd-settings__text-size">
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
						value={timerScrambleSize}
						max={40}
						onChange={(e) => updateSetting('timer_scramble_size', e.target.value)}
					/>
					<Button
						hidden={timerScrambleSize === getDefaultSetting('timer_scramble_size')}
						text="Reset"
						warning
						flat
						onClick={() => updateSetting('timer_scramble_size', getDefaultSetting('timer_scramble_size'))}
					/>
				</SettingRow>
				<div className="cd-settings__text-size">
					<h3
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
