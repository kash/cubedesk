import React, {useContext} from 'react';
import './HeaderControl.scss';
import {GlobalHotKeys} from 'react-hotkeys';
import {setCubeType, setSetting} from '../../../db/settings/update';
import CubePicker from '../../common/cube_picker/CubePicker';
import SessionSwitcher from '../../sessions/SessionPicker';
import {HOTKEY_MAP} from '../../../util/timer/hotkeys';
import CreateNewSession from '../../sessions/new_session/CreateNewSession';
import {openModal} from '../../../actions/general';
import Dropdown from '../../common/inputs/dropdown/Dropdown';
import {TimerContext} from '../Timer';
import {toggleSetting} from '../../../db/settings/update';
import {useDispatch} from 'react-redux';
import {useGeneral} from '../../../util/hooks/useGeneral';
import {smartCubeSelected} from '../helpers/util';
import Button from '../../common/button/Button';
import block from '../../../styles/bem';
import StackMatPicker from '../../settings/stackmat_picker/StackMatPicker';
import {TIMER_INPUT_TYPE_NAMES} from '../../settings/timer/TimerSettings';
import {useSettings} from '../../../util/hooks/useSettings';
import {AllSettings} from '../../../db/settings/query';
import {useMe} from '../../../util/hooks/useMe';

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
			icon="ph-caret-down"
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
					text: 'Focus Mode',
					on: focusMode,
					hidden: headerOptions.hideFocus,
					onClick: () => toggleSetting('focus_mode'),
					icon: 'ph-crosshair-simple',
				},
				{
					text: 'Inspection',
					on: inspection,
					hidden: headerOptions.hideInspection,
					onClick: () => toggleSetting('inspection'),
					icon: 'ph-magnifying-glass-plus',
				},
				{
					text: 'Manual Entry',
					on: manualEntry,
					hidden: headerOptions.hideManualEntry,
					onClick: () => toggleSetting('manual_entry'),
					icon: 'ph-keyboard',
					disabled: manualDisabled,
				},
				{
					text: 'New Session',
					hidden: headerOptions.hideNewSession || !me,
					onClick: toggleCreateNewSession,
					icon: 'ph-plus',
				},
			]}
		/>
	);

	if (focusMode) {
		topRightButton = <Button noMargin transparent icon="ph-x" onClick={() => toggleSetting('focus_mode')} />;
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
