import SelectField from '@/components/common/inputs/SelectField';
import SettingRow from '@/components/settings/common/SettingRow';
import SettingSection from '@/components/settings/common/SettingSection';
import CubeTypes from '@/components/settings/cube-types/CubeTypes';
import MicAccess from '@/components/settings/mic-access/MicAccess';
import StackMatPicker from '@/components/settings/stackmat-picker/StackMatPicker';
import {Button} from '@/components/ui/button';
import {Dialog, DialogContent, DialogHeader} from '@/components/ui/dialog';
import {AllSettings} from '@/db/settings/query';
import {setSetting} from '@/db/settings/update';
import {useSettings} from '@/util/hooks/useSettings';
import React, {ReactNode} from 'react';

export const TIMER_INPUT_TYPE_NAMES = {
	keyboard: 'Keyboard',
	stackmat: 'StackMat',
	smart: 'Smart Cube',
	gantimer: 'GAN Smart Timer',
};

export default function TimerSettings() {
	const [cubeTypesDialog, setCubeTypesDialog] = React.useState<{
		props: Record<string, never>;
		title: React.ReactNode;
		description: React.ReactNode;
	} | null>(null);
	const [stackMatPickerDialog, setStackMatPickerDialog] = React.useState<React.ComponentProps<
		typeof StackMatPicker
	> | null>(null);

	const timerDecimalPoints = useSettings('timer_decimal_points');
	const inspection = useSettings('inspection');
	const stackMatId = useSettings('stackmat_id');
	const timerType = useSettings('timer_type');

	function updateSetting(name: keyof AllSettings, value: any) {
		setSetting(name, value);
	}

	function toggleCubeTypes() {
		setCubeTypesDialog({
			props: {},
			title: 'Manage Cube Types',
			description:
				"You can use custom scramble types for special events that aren't listed by default. For example 8x8 or Examinx.",
		});
	}

	function openStackMatPicker() {
		setStackMatPickerDialog({});
	}

	let inspectionBody: ReactNode = null;
	if (inspection) {
		inspectionBody = (
			<>
				<SettingRow
					title="Inspection time (s)"
					settingName="inspection_delay"
					isNumberInput
				/>
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
			<>
				<SettingRow
					title="Timer decimal points"
					description="How many decimal points to show on the timer page"
				>
					<SelectField
						label="Timer decimal points"
						value={String(timerDecimalPoints)}
						onValueChange={(value) =>
							updateSetting('timer_decimal_points', Number(value))
						}
						options={[0, 1, 2, 3].map((count) => ({
							value: String(count),
							text: count + ' decimal point' + (count === 1 ? '' : 's'),
						}))}
					/>
				</SettingRow>
				<SettingRow
					title="Timer input type"
					description="Select between using your keyboard (space bar), a StackMat, or a Smart Cube to start the timer."
				>
					<SelectField
						label="Timer input type"
						value={timerType}
						onValueChange={(value) => updateSetting('timer_type', value)}
						options={Object.entries(TIMER_INPUT_TYPE_NAMES).map(([value, text]) => ({
							value,
							text,
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
				<SettingRow
					loggedInOnly
					title="Cube Types"
					description="Add custom cube types with or without scrambles"
				>
					<Button variant="secondary" onClick={toggleCubeTypes}>
						{'Manage Cube Types'}
					</Button>
				</SettingRow>
				<SettingRow
					title="Use space bar with smart cubes"
					description="Instead of detecting when cube solve was started/ended by smart cube turns, use space bar like with normal cubes."
					settingName="use_space_with_smart_cube"
					isSwitch
				/>
				<SettingRow
					title="Hide time when solving"
					settingName="hide_time_when_solving"
					isSwitch
				/>
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
					<SettingRow
						sub
						title="Allow access to microphone (that's how Stackmat transmits data)"
					>
						<MicAccess />
					</SettingRow>
					<SettingRow
						sub
						title={`Select your Stackmat device. Usually called "USB Audio Device"`}
					>
						<Button
							variant={!stackMatId ? 'default' : 'secondary'}
							onClick={openStackMatPicker}
						>
							{stackMatId ? `Selected - Change Input Device` : 'Select StackMat'}
						</Button>
					</SettingRow>
				</SettingSection>
				<SettingRow
					title="Beta tester"
					description="Unlock features that are still in beta. WARNING: This could mess with your data. Only turn this on if you're okay with some things breaking."
					settingName="beta_tester"
					isSwitch
				/>
			</>
			<Dialog
				open={cubeTypesDialog !== null}
				onOpenChange={(open) => {
					if (!open) {
						setCubeTypesDialog(null);
					}
				}}
			>
				{cubeTypesDialog && (
					<DialogContent>
						<DialogHeader
							title={cubeTypesDialog.title}
							description={cubeTypesDialog.description}
						/>
						<CubeTypes {...cubeTypesDialog.props} />
					</DialogContent>
				)}
			</Dialog>
			<Dialog
				open={stackMatPickerDialog !== null}
				onOpenChange={(open) => {
					if (!open) {
						setStackMatPickerDialog(null);
					}
				}}
			>
				{stackMatPickerDialog && (
					<DialogContent>
						<StackMatPicker
							{...stackMatPickerDialog}
							onComplete={() => {
								setStackMatPickerDialog((current) =>
									current === stackMatPickerDialog ? null : current,
								);
							}}
						/>
					</DialogContent>
				)}
			</Dialog>
		</>
	);
}
