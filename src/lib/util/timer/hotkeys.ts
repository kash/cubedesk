interface HotkeyMap {
	DELETE_LAST_TIME: string[];
	TOGGLE_OK: string[];
	TOGGLE_PLUS_TWO: string[];
	TOGGLE_DNF: string[];
	RESET_INSPECTION: string;
	TOGGLE_INSPECTION_MODE: string[];
	TOGGLE_FOCUS_MODE: string[];
	CHANGE_CUBE_222: string[];
	CHANGE_CUBE_333: string[];
	CHANGE_CUBE_444: string[];
	CHANGE_CUBE_555: string[];
	CHANGE_CUBE_666: string[];
	CHANGE_CUBE_777: string[];
	CHANGE_CUBE_PYRAM: string[];
	CHANGE_CUBE_MINX: string[];
	CHANGE_CUBE_CLOCK: string[];
	CHANGE_CUBE_SKEWB: string[];
	CHANGE_CUBE_OTHER: string[];
}

export const HOTKEY_MAP: HotkeyMap = {
	DELETE_LAST_TIME: ['alt+z', 'command+z'],
	TOGGLE_OK: ['Control+1', 'command+1', '1'],
	TOGGLE_PLUS_TWO: ['Control+2', 'command+2', '2'],
	TOGGLE_DNF: ['Control+3', 'command+3', '3'],
	RESET_INSPECTION: 'esc',
	TOGGLE_INSPECTION_MODE: ['alt+i', 'i'],
	TOGGLE_FOCUS_MODE: ['alt+f', 'f'],
	CHANGE_CUBE_222: ['alt+2'],
	CHANGE_CUBE_333: ['alt+3'],
	CHANGE_CUBE_444: ['alt+4'],
	CHANGE_CUBE_555: ['alt+5'],
	CHANGE_CUBE_666: ['alt+6'],
	CHANGE_CUBE_777: ['alt+7'],
	CHANGE_CUBE_PYRAM: ['alt+p'],
	CHANGE_CUBE_MINX: ['alt+m'],
	CHANGE_CUBE_CLOCK: ['alt+c'],
	CHANGE_CUBE_SKEWB: ['alt+s'],
	CHANGE_CUBE_OTHER: ['alt+o'],
};
