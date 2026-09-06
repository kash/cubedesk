import CubePicker from '@/components/common/CubePicker';
import ActionMenu from '@/components/common/inputs/ActionMenu';
import SelectField from '@/components/common/inputs/SelectField';
import {LogoBrandmark, LogoLockup} from '@/components/common/Logo';
import AuthDialog from '@/components/login/AuthDialog';
import CreateNewSession from '@/components/sessions/CreateNewSession';
import SessionSwitcher from '@/components/sessions/SessionPicker';
import StackMatPicker from '@/components/settings/stackmat-picker/StackMatPicker';
import {smartCubeSelected} from '@/components/timer/helpers/util';
import {useTimerContext} from '@/components/timer/Timer';
import {Button} from '@/components/ui/button';
import {Dialog, DialogContent} from '@/components/ui/dialog';
import {
	TooltipContent,
	TooltipProvider,
	TooltipRoot,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import {AllSettings} from '@/db/settings/query';
import {setCubeType, setSetting} from '@/db/settings/update';
import {toggleSetting} from '@/db/settings/update';
import {useGeneral} from '@/util/hooks/useGeneral';
import {useMe} from '@/util/hooks/useMe';
import {useSettings} from '@/util/hooks/useSettings';
import {useTheme} from '@/util/hooks/useTheme';
import {HOTKEY_MAP} from '@/util/timer/hotkeys';
import screenfull from '@/util/vendor/screenfull';
import classNames from 'classnames';
import {
	CrosshairSimple,
	FrameCorners,
	Keyboard,
	MagnifyingGlassPlus,
	Plus,
	X,
} from 'phosphor-react';
import React, {useEffect, useState} from 'react';
import {GlobalHotKeys} from 'react-hotkeys';

export default function HeaderControl() {
	const [createNewSessionDialog, setCreateNewSessionDialog] = React.useState<React.ComponentProps<
		typeof CreateNewSession
	> | null>(null);
	const [stackMatPickerDialog, setStackMatPickerDialog] = React.useState<React.ComponentProps<
		typeof StackMatPicker
	> | null>(null);

	const me = useMe();
	const backgroundColor = useTheme('background_color');
	const context = useTimerContext();
	const {focusMode, cubeType} = context;
	const headerOptions = context.headerOptions || {};

	const mobileMode = useGeneral('mobile_mode');
	const manualEntry = useSettings('manual_entry');
	const inspection = useSettings('inspection');
	const timerType = useSettings('timer_type');

	const [fullScreenMode, setFullScreenMode] = useState(false);
	useEffect(() => {
		if (!screenfull.isEnabled) {
			return;
		}

		const updateFullScreenState = () => setFullScreenMode(screenfull.isFullscreen);
		updateFullScreenState();
		screenfull.on('change', updateFullScreenState);
		return () => screenfull.off('change', updateFullScreenState);
	}, []);

	function toggleCreateNewSession() {
		setCreateNewSessionDialog({});
	}

	function changeCubeType(cubeTypeId: string) {
		setCubeType(cubeTypeId);
	}

	function selectTimerType(timerType: AllSettings['timer_type']) {
		setSetting('timer_type', timerType);
	}

	function openStackMat() {
		setStackMatPickerDialog({});
	}

	const handlers = {
		TOGGLE_INSPECTION_MODE: () => toggleSetting('inspection'),
		TOGGLE_FOCUS_MODE: () => toggleSetting('focus_mode'),
		CHANGE_CUBE_222: () => changeCubeType('222'),
		CHANGE_CUBE_333: () => changeCubeType('333'),
		CHANGE_CUBE_444: () => changeCubeType('444'),
		CHANGE_CUBE_555: () => changeCubeType('555'),
		CHANGE_CUBE_666: () => changeCubeType('666'),
		CHANGE_CUBE_777: () => changeCubeType('777'),
		CHANGE_CUBE_PYRAM: () => changeCubeType('pyram'),
		CHANGE_CUBE_MINX: () => changeCubeType('minx'),
		CHANGE_CUBE_CLOCK: () => changeCubeType('clock'),
		CHANGE_CUBE_SKEWB: () => changeCubeType('skewb'),
		CHANGE_CUBE_OTHER: () => changeCubeType('other'),
	};

	let manualDisabled = false;
	if (smartCubeSelected(context)) {
		manualDisabled = true;
	}

	const cubePicker = !focusMode && !headerOptions.hideCubeType && (
		<CubePicker
			pickerProps={{openLeft: true, noMargin: true}}
			value={cubeType ?? ''}
			onChange={(ct) => changeCubeType(ct.id)}
		/>
	);

	const timerTypeDropdown = !focusMode && !headerOptions.hideTimerType && !mobileMode && (
		<div className="flex items-center gap-1">
			{inspection && !headerOptions.hideInspection && (
				<TooltipProvider>
					<TooltipRoot>
						<TooltipTrigger asChild>
							<span
								tabIndex={0}
								aria-label="Inspection is on"
								className="text-text mr-3 inline-flex shrink-0 items-center rounded-sm opacity-40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
							>
								<MagnifyingGlassPlus className="size-4" aria-hidden="true" />
							</span>
						</TooltipTrigger>
						<TooltipContent side="bottom">Inspection is on</TooltipContent>
					</TooltipRoot>
				</TooltipProvider>
			)}
			{manualEntry && !headerOptions.hideManualEntry && (
				<TooltipProvider>
					<TooltipRoot>
						<TooltipTrigger asChild>
							<span
								tabIndex={0}
								aria-label="Manual entry is on"
								className="text-text mr-3 inline-flex shrink-0 items-center rounded-sm opacity-40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
							>
								<Keyboard className="size-4" aria-hidden="true" />
							</span>
						</TooltipTrigger>
						<TooltipContent side="bottom">Manual entry is on</TooltipContent>
					</TooltipRoot>
				</TooltipProvider>
			)}
			<SelectField
				label="Timer input type"
				value={timerType}
				onValueChange={(value) =>
					value === 'stackmat'
						? openStackMat()
						: selectTimerType(value as AllSettings['timer_type'])
				}
				options={[
					{value: 'keyboard', text: 'Keyboard'},
					{value: 'stackmat', text: 'StackMat'},
					{value: 'smart', text: 'Smart Cube', disabled: cubeType !== '333'},
					{value: 'gantimer', text: 'GAN Smart Timer'},
				]}
			/>
			{timerType === 'stackmat' && (
				<Button variant="secondary" onClick={openStackMat}>
					{'Configure'}
				</Button>
			)}
		</div>
	);

	const sessionSwitcher = me && !focusMode && !headerOptions.hideSessionSelector && (
		<SessionSwitcher />
	);

	let topRightButton = (
		<ActionMenu
			noMargin
			options={[
				{
					text: 'Full Screen',
					on: fullScreenMode,
					hidden: !screenfull.isEnabled,
					onClick: () => screenfull.toggle(),
					icon: <FrameCorners />,
				},
				{
					text: 'Focus Mode',
					on: focusMode,
					hidden: headerOptions.hideFocus,
					onClick: () => toggleSetting('focus_mode'),
					icon: <CrosshairSimple />,
				},
				{
					text: 'Inspection',
					on: inspection,
					hidden: headerOptions.hideInspection,
					onClick: () => toggleSetting('inspection'),
					icon: <MagnifyingGlassPlus />,
				},
				{
					text: 'Manual Entry',
					on: manualEntry,
					hidden: headerOptions.hideManualEntry,
					onClick: () => toggleSetting('manual_entry'),
					icon: <Keyboard />,
					disabled: manualDisabled,
				},
				{
					text: 'New Session',
					hidden: headerOptions.hideNewSession || !me,
					onClick: toggleCreateNewSession,
					icon: <Plus />,
				},
			]}
		/>
	);

	if (focusMode) {
		topRightButton = (
			<Button
				variant="ghost"
				onClick={() => toggleSetting('focus_mode')}
				size="icon"
				aria-label="Exit focus mode"
			>
				<X />
			</Button>
		);
	}

	return (
		<>
			<GlobalHotKeys handlers={handlers} keyMap={HOTKEY_MAP}>
				<div
					className={classNames(
						'absolute top-0 z-30 box-border grid w-full grid-cols-3 justify-between p-5 transition-opacity duration-200 ease-in-out focus-within:z-[10000]',
						context.timeStartedAt && 'pointer-events-none opacity-10',
						!me && '!grid-cols-[minmax(0,1fr)_auto]',
					)}
				>
					<div className="flex flex-row items-center justify-start gap-2.5">
						{!me && (
							<div
								className={
									mobileMode
										? 'mr-1 w-[23px] shrink-0'
										: 'mr-3 w-[120px] shrink-0'
								}
							>
								{mobileMode ? (
									<LogoBrandmark dark={!backgroundColor.isDark} />
								) : (
									<LogoLockup dark={!backgroundColor.isDark} />
								)}
							</div>
						)}
						{headerOptions?.customHeadersLeft}
						{cubePicker}
						{sessionSwitcher}
					</div>
					{me && <div className="flex flex-row items-start justify-center gap-2.5" />}
					<div className="flex flex-row items-start justify-end gap-2.5">
						{headerOptions?.customHeadersRight}
						{timerTypeDropdown}
						{topRightButton}
						{!me && (
							<div className="flex shrink-0 items-center gap-2">
								<AuthDialog view="login">
									<Button variant="secondary">{'Log in'}</Button>
								</AuthDialog>
								<AuthDialog view="signup">
									<Button variant="default">{'Sign up'}</Button>
								</AuthDialog>
							</div>
						)}
					</div>
				</div>
			</GlobalHotKeys>
			<Dialog
				open={createNewSessionDialog !== null}
				onOpenChange={(open) => {
					if (!open) {
						setCreateNewSessionDialog(null);
					}
				}}
			>
				{createNewSessionDialog && (
					<DialogContent>
						<CreateNewSession
							{...createNewSessionDialog}
							onComplete={() => {
								setCreateNewSessionDialog((current) =>
									current === createNewSessionDialog ? null : current,
								);
							}}
						/>
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
