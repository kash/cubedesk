import CubePicker from '@/components/common/cube_picker/CubePicker';
import './HeaderControl.scss';
import Dropdown from '@/components/common/inputs/dropdown/Dropdown';
import CreateNewSession from '@/components/sessions/new_session/CreateNewSession';
import SessionSwitcher from '@/components/sessions/SessionPicker';
import StackMatPicker from '@/components/settings/stackmat_picker/StackMatPicker';
import {TIMER_INPUT_TYPE_NAMES} from '@/components/settings/timer/TimerSettings';
import {Button} from '@/components/ui/button';
import {openModal} from '@/lib/actions/general';
import {AllSettings} from '@/lib/db/settings/query';
import {setCubeType, setSetting} from '@/lib/db/settings/update';
import {toggleSetting} from '@/lib/db/settings/update';
import {useGeneral} from '@/lib/util/hooks/useGeneral';
import {useMe} from '@/lib/util/hooks/useMe';
import {useSettings} from '@/lib/util/hooks/useSettings';
import {HOTKEY_MAP} from '@/lib/util/timer/hotkeys';
import screenfull from '@/lib/util/vendor/screenfull';
import block from '@/styles/bem';
import {
	CaretDown,
	CrosshairSimple,
	FrameCorners,
	Keyboard,
	MagnifyingGlassPlus,
	Plus,
	X,
} from '@phosphor-icons/react/dist/ssr';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {GlobalHotKeys} from 'react-hotkeys';
import {useDispatch} from 'react-redux';
import {smartCubeSelected} from '../helpers/util';
import {TimerContext} from '../Timer';

const b = block('timer-header-control');

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

	const toggleCreateNewSession = useCallback(() => {
		dispatch(openModal(<CreateNewSession />));
	}, [dispatch]);

	const changeCubeType = useCallback((cubeTypeId: string) => {
		setCubeType(cubeTypeId);
	}, []);

	const selectTimerType = useCallback((timerType: AllSettings['timer_type']) => {
		setSetting('timer_type', timerType);
	}, []);

	const openStackMat = useCallback(() => {
		dispatch(openModal(<StackMatPicker />));
	}, [dispatch]);

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
			<Button variant="ghost" className="!m-0" onClick={() => toggleSetting('focus_mode')}>
				<X weight="bold" />
			</Button>
		);
	}

	return (
		<GlobalHotKeys handlers={handlers} keyMap={HOTKEY_MAP}>
			<div className={b()}>
				<div>
					{headerOptions?.customHeadersLeft}
					{cubePicker}
					{sessionSwitcher}
				</div>
				<div />
				<div>
					{headerOptions?.customHeadersRight}
					{timerTypeDropdown}
					{topRightButton}
				</div>
			</div>
		</GlobalHotKeys>
	);
}
