import {openModal} from '@/actions/general';
import Button from '@/components/common/Button';
import CubePicker from '@/components/common/CubePicker';
import Dropdown from '@/components/common/inputs/dropdown/Dropdown';
import CreateNewSession from '@/components/sessions/CreateNewSession';
import SessionSwitcher from '@/components/sessions/SessionPicker';
import StackMatPicker from '@/components/settings/stackmat-picker/StackMatPicker';
import {TIMER_INPUT_TYPE_NAMES} from '@/components/settings/timer/TimerSettings';
import {smartCubeSelected} from '@/components/timer/helpers/util';
import {TimerContext} from '@/components/timer/Timer';
import {AllSettings} from '@/db/settings/query';
import {setCubeType, setSetting} from '@/db/settings/update';
import {toggleSetting} from '@/db/settings/update';
import {useGeneral} from '@/util/hooks/useGeneral';
import {useMe} from '@/util/hooks/useMe';
import {useSettings} from '@/util/hooks/useSettings';
import {HOTKEY_MAP} from '@/util/timer/hotkeys';
import screenfull from '@/util/vendor/screenfull';
import classNames from 'classnames';
import {
	CaretDown,
	CrosshairSimple,
	FrameCorners,
	Keyboard,
	MagnifyingGlassPlus,
	Plus,
	X,
} from 'phosphor-react';
import React, {useContext, useEffect, useState} from 'react';
import {GlobalHotKeys} from 'react-hotkeys';
import {useDispatch} from 'react-redux';

export default function HeaderControl() {
	const dispatch = useDispatch();

	const me = useMe();
	const context = useContext(TimerContext);
	const {focusMode, cubeType} = context;
	const headerOptions = context.headerOptions || {};

	const mobileMode = useGeneral('mobile_mode');
	const manualEntry = useSettings('manual_entry');
	const inspection = useSettings('inspection');
	const timerType = useSettings('timer_type');

	const [fullScreenMode, setFullScreenMode] = useState(false);
	if (screenfull.isEnabled) {
		useEffect(() => {
			const updateFullScreenState = () => setFullScreenMode(screenfull.isFullscreen);
			updateFullScreenState();
			screenfull.on('change', updateFullScreenState);
			return () => screenfull.off('change', updateFullScreenState);
		}, []);
	}

	function toggleCreateNewSession() {
		dispatch(openModal(<CreateNewSession />));
	}

	function changeCubeType(cubeTypeId: string) {
		setCubeType(cubeTypeId);
	}

	function selectTimerType(timerType: AllSettings['timer_type']) {
		setSetting('timer_type', timerType);
	}

	function openStackMat() {
		dispatch(openModal(<StackMatPicker />));
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

	const timerTypeName = TIMER_INPUT_TYPE_NAMES[timerType];

	let manualDisabled = false;
	if (smartCubeSelected(context)) {
		manualDisabled = true;
	}

	const cubePicker = !focusMode && !headerOptions.hideCubeType && (
		<CubePicker
			dropdownProps={{openLeft: true, noMargin: true}}
			value={cubeType}
			onChange={(ct) => changeCubeType(ct.id)}
		/>
	);

	const timerTypeDropdown = !focusMode && !headerOptions.hideTimerType && !mobileMode && (
		<Dropdown
			noMargin
			text={timerTypeName}
			icon={<CaretDown />}
			options={[
				{
					text: 'Keyboard',
					onClick: () => selectTimerType('keyboard'),
				},
				{
					text: 'StackMat',
					onClick: () => openStackMat(),
				},
				{
					text: 'Smart Cube',
					disabled: cubeType !== '333',
					onClick: () => selectTimerType('smart'),
				},
				{
					text: 'GAN Smart Timer',
					onClick: () => selectTimerType('gantimer'),
				},
			]}
		/>
	);

	const sessionSwitcher = !focusMode && !headerOptions.hideSessionSelector && <SessionSwitcher />;

	let topRightButton = (
		<Dropdown
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
			<Button noMargin transparent icon={<X />} onClick={() => toggleSetting('focus_mode')} />
		);
	}

	return (
		<GlobalHotKeys handlers={handlers} keyMap={HOTKEY_MAP}>
			<div
				className={classNames(
					'absolute top-0 z-30 box-border grid w-full grid-cols-3 justify-between p-5 transition-opacity duration-200 ease-in-out focus-within:z-[10000]',
					context.timeStartedAt && 'pointer-events-none opacity-30',
				)}
			>
				<div className="flex flex-row items-start justify-start gap-2.5">
					{headerOptions?.customHeadersLeft}
					{cubePicker}
					{sessionSwitcher}
				</div>
				<div className="flex flex-row items-start justify-center gap-2.5" />
				<div className="flex flex-row items-start justify-end gap-2.5">
					{headerOptions?.customHeadersRight}
					{timerTypeDropdown}
					{topRightButton}
				</div>
			</div>
		</GlobalHotKeys>
	);
}
