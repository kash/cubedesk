import SelectField from '@/components/common/inputs/SelectField';
import {useTranslation} from 'react-i18next';
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

const TIMER_INPUT_TYPES = [
	{value: 'keyboard', labelKey: 'timer.inputTypes.keyboard'},
	{value: 'stackmat', labelKey: 'timer.inputTypes.stackmat'},
	{value: 'smart', labelKey: 'timer.inputTypes.smartCube'},
	{value: 'gantimer', labelKey: 'timer.inputTypes.ganSmartTimer'},
] as const;

export default function TimerSettings() {
	const {t} = useTranslation();
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
			title: t('timer.manageCubeTypes'),
			description: t('timer.customScrambleTypesDescription'),
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
					title={t('timer.inspectionTimeS')}
					settingName="inspection_delay"
					isNumberInput
				/>
				<SettingRow
					title={t('common.playSound')}
					description={t('timer.inspection.announcementHint')}
					settingName="play_inspection_sound"
					isSwitch
				/>
				<SettingRow
					title={t('timer.inspectionAutoStart')}
					description={t('timer.autoStartAfterInspectionTimeIsUp')}
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
					title={t('timer.settings.decimalPoints')}
					description={t('timer.decimalPlacesHint')}
				>
					<SelectField
						label={t('timer.settings.decimalPoints')}
						value={String(timerDecimalPoints)}
						onValueChange={(value) =>
							updateSetting('timer_decimal_points', Number(value))
						}
						options={[0, 1, 2, 3].map((count) => ({
							value: String(count),
							text: t('timer.options.decimals', {count}),
						}))}
					/>
				</SettingRow>
				<SettingRow
					title={t('timer.settings.inputType')}
					description={t('timer.inputType.description')}
				>
					<SelectField
						label={t('timer.settings.inputType')}
						value={timerType}
						onValueChange={(value) => updateSetting('timer_type', value)}
						options={TIMER_INPUT_TYPES.map(({value, labelKey}) => ({
							value,
							text: t(labelKey),
						}))}
					/>
				</SettingRow>
				<SettingRow
					title={t('timer.freezeTimeS')}
					description={t('timer.holdToStartHint')}
					settingName="freeze_time"
					isNumberInput
					step={0.1}
				/>
				<SettingRow
					loggedInOnly
					title={t('timer.cubeTypes')}
					description={t('settings.cubeTypes.description')}
				>
					<Button variant="secondary" onClick={toggleCubeTypes}>
						{t('timer.manageCubeTypes')}
					</Button>
				</SettingRow>
				<SettingRow
					title={t('timer.useSpaceBarWithSmartCubes')}
					description={t('timer.smartCube.useSpaceHint')}
					settingName="use_space_with_smart_cube"
					isSwitch
				/>
				<SettingRow
					title={t('timer.hideTimeWhenSolving')}
					settingName="hide_time_when_solving"
					isSwitch
				/>
				<SettingRow
					title={t('timer.zeroOutTimeAfterSolve')}
					description={t('timer.resetAfterSolveHint')}
					settingName="zero_out_time_after_solve"
					isSwitch
				/>
				<SettingRow
					title={t('timer.requirePeriodInManualEntry')}
					description={t('solves.manualEntry.divideBy100Hint')}
					settingName="require_period_in_manual_time_entry"
					isSwitch
				/>
				<SettingRow
					title={t('solves.confirmDeleteSolves')}
					description={t('solves.confirmBeforeDeleteHint')}
					settingName="confirm_delete_solve"
					isSwitch
				/>
				<SettingRow
					title={t('timer.personalBestConfetti')}
					description={t('timer.pb.confettiHint')}
					settingName="pb_confetti"
					isSwitch
				/>
				<SettingSection>
					<SettingRow
						parent
						title={t('timer.options.inspection')}
						description={t('timer.inspection.limitHint')}
						settingName="inspection"
						isSwitch
					/>
					{inspectionBody}
				</SettingSection>
				<SettingSection>
					<SettingRow
						parent
						title={t('timer.stackmatOptions')}
						description={t('timer.stackmat.optionsHint')}
					/>
					<SettingRow sub title={t('timer.stackmat.microphoneHint')}>
						<MicAccess />
					</SettingRow>
					<SettingRow sub title={t('timer.stackmat.deviceHint')}>
						<Button
							variant={!stackMatId ? 'default' : 'secondary'}
							onClick={openStackMatPicker}
						>
							{stackMatId
								? t('timer.stackmat.changeDevice')
								: t('timer.selectStackMat')}
						</Button>
					</SettingRow>
				</SettingSection>
				<SettingRow
					title={t('timer.betaTester')}
					description={t('settings.beta.warning')}
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
					<DialogContent closeLabel={t('common.closeDialog')}>
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
					<DialogContent closeLabel={t('common.closeDialog')}>
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
