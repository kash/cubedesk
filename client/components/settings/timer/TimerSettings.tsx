import React from 'react';
import MicAccess from '../mic_access/MicAccess';
import StackMatPicker from '../stackmat_picker/StackMatPicker';
import {openModal} from '../../../actions/general';
import CubeTypes from '../cube_types/CubeTypes';
import SettingRow from '../setting/row/SettingRow';
import Dropdown from '../../common/inputs/dropdown/Dropdown';
import {useDispatch} from 'react-redux';
import SettingSection from '../setting/section/SettingSection';
import Button, {CommonType} from '../../common/button/Button';
import {setSetting} from '../../../db/settings/update';
import {useSettings} from '../../../util/hooks/useSettings';
import {AllSettings} from '../../../db/settings/query';

export const TIMER_INPUT_TYPE_NAMES = {
	keyboard: 'Keyboard',
	stackmat: 'StackMat',
	smart: 'Smart Cube',
};

export default function TimerSettings() {
	const dispatch = useDispatch();

	const timerDecimalPoints = useSettings('timer_decimal_points');
	const inspection = useSettings('inspection');
	const stackMatId = useSettings('stackmat_id');
	const timerType = useSettings('timer_type');

	function updateSetting(name: keyof AllSettings, value: any) {
		setSetting(name, value);
	}

	function toggleCubeTypes() {
		dispatch(
			openModal(<CubeTypes />, {
				title: 'Manage Cube Types',
				description:
					"You can use custom scramble types for special events that aren't listed by default. For example 8x8 or Examinx.",
			})
		);
	}

	function openStackMatPicker() {
		dispatch(openModal(<StackMatPicker />));
	}

	function getTimerTypeName(tt: string) {
		return TIMER_INPUT_TYPE_NAMES[tt];
	}

	let inspectionBody = null;
	if (inspection) {
		inspectionBody = (
			<>
				<SettingRow title="Inspection time (s)" settingName="inspection_delay" isNumberInput />
				<SettingRow
					title="Play sound"
					description="Announce when 8 and 12 seconds have lapsed"
					settingName="play_inspection_sound"
					isSwitch
				/>
				<SettingRow
					title="Inspection auto start"
					description="Auto start after inspection time is up"
					settingName="inspection_auto_start"
					isSwitch
				/>
			</>
		);
	}

	return (
		<>
			<SettingRow title="Timer decimal points" description="How many decimal points to show on the timer page">
				<Dropdown
					icon={null}
					text={`${timerDecimalPoints} decimal point${timerDecimalPoints === 1 ? '' : 's'}`}
					options={[0, 1, 2, 3].map((c) => ({
						text: String(c),
						onClick: () => updateSetting('timer_decimal_points', c),
					}))}
				/>
			</SettingRow>
			<SettingRow
				title="Timer input type"
				description="Select between using your keyboard (space bar), a StackMat, or a Smart Cube to start the timer."
			>
				<Dropdown
					icon={null}
					text={getTimerTypeName(timerType)}
					options={['keyboard', 'stackmat', 'smart'].map((c) => ({
						text: getTimerTypeName(c),
						onClick: () => updateSetting('timer_type', c),
					}))}
				/>
			</SettingRow>
			<SettingRow
				title="Freeze time (s)"
				description="How many seconds to hold space bar before timer will start."
				settingName="freeze_time"
				isNumberInput
				step={0.1}
			/>
			<SettingRow loggedInOnly title="Cube Types" description="Add custom cube types with or without scrambles">
				<Button theme={CommonType.GRAY} text="Manage Cube Types" onClick={toggleCubeTypes} />
			</SettingRow>
			<SettingRow
				title="Use space bar with smart cubes"
				description="Instead of detecting when cube solve was started/ended by smart cube turns, use space bar like with normal cubes."
				settingName="use_space_with_smart_cube"
				isSwitch
			/>
			<SettingRow title="Hide time when solving" settingName="hide_time_when_solving" isSwitch />
			<SettingRow
				title="Zero out time after solve"
				description="Instead of showing the time of your last solve, the timer will reset to 0.00 after a solve."
				settingName="zero_out_time_after_solve"
				isSwitch
			/>
			<SettingRow
				title="Require period in manual entry"
				description="Turn this off if you would like the times you manually enter to be divided by 100 automatically"
				settingName="require_period_in_manual_time_entry"
				isSwitch
			/>
			<SettingRow
				title="Confirm delete solves"
				description="Get a confirmation box before you can delete a solve"
				settingName="confirm_delete_solve"
				isSwitch
			/>
			<SettingRow
				title="Personal best confetti"
				description="Display confetti when you get a personal best"
				settingName="pb_confetti"
				isSwitch
			/>
			<SettingSection>
				<SettingRow
					parent
					title="Inspection"
					description="Limit inspection time. Good for practicing for competitions."
					settingName="inspection"
					isSwitch
				/>
				{inspectionBody}
			</SettingSection>
			<SettingSection>
				<SettingRow
					parent
					title="StackMat Options"
					description="These options will be used when your timer input type is set to StackMat"
				/>
				<SettingRow sub title="Allow access to microphone (that's how Stackmat transmits data)">
					<MicAccess />
				</SettingRow>
				<SettingRow sub title={`Select your Stackmat device. Usually called "USB Audio Device"`}>
					<Button
						gray
						primary={!stackMatId}
						text={stackMatId ? `Selected - Change Input Device` : 'Select StackMat'}
						onClick={openStackMatPicker}
					/>
				</SettingRow>
			</SettingSection>
			<SettingRow
				proOnly
				title="Beta tester"
				description="Unlock features that are still in beta. WARNING: This could mess with your data. Only turn this on if you're okay with some things breaking."
				settingName="beta_tester"
				isSwitch
			/>
		</>
	);
}
