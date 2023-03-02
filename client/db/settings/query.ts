import {getSettingsDb, SettingValue} from './init';
import {CustomCubeType} from '../../@types/generated/graphql';
import {TimerModuleType} from '../../components/timer/@types/enums';
import {APP_THEME_PRESETS} from '../../util/themes/theme_consts';

export type TimerLayoutPosition = 'bottom' | 'left' | 'right';

export interface AllSettings {
	// Backend
	focus_mode: boolean;
	freeze_time: number;
	inspection: boolean;
	manual_entry: boolean;
	inspection_delay: number;
	inverse_time_list: boolean;
	hide_time_when_solving: boolean;
	inspection_auto_start: boolean;
	nav_collapsed: boolean;
	timer_decimal_points: number;
	pb_confetti: boolean;
	play_inspection_sound: boolean;
	zero_out_time_after_solve: boolean;
	confirm_delete_solve: boolean;
	use_space_with_smart_cube: boolean;
	require_period_in_manual_time_entry: boolean;
	beta_tester: boolean;
	cube_type: string;
	session_id: string;
	custom_cube_types: CustomCubeType[];

	// Local
	timer_type: 'keyboard' | 'smart' | 'stackmat' | 'gantimer';
	timer_layout: TimerLayoutPosition;
	timer_module_count: number;
	stackmat_id: string;
	timer_time_size: number;
	timer_scramble_size: number;
	cube_face_colors: string[];
	timer_font_family: string;
	primary_color: string;
	secondary_color: string;
	text_color: string;
	background_color: string;
	module_color: string;
	button_color: string;
	timer_modules: TimerModuleType[];

	hide_mobile_timer_footer: boolean;
	timer_avg_main: string;
	timer_avg_1: string;
	timer_avg_2: string;
	timer_avg_3: string;
	timer_avg_4: string;
	timer_avg_5: string;
	timer_avg_6: string;
}

const defaultSettings: AllSettings = {
	focus_mode: false,
	freeze_time: 0.2,
	inspection: false,
	manual_entry: false,
	inspection_delay: 15,
	inverse_time_list: false,
	hide_time_when_solving: false,
	inspection_auto_start: false,
	nav_collapsed: false,
	timer_decimal_points: 2,
	pb_confetti: true,
	play_inspection_sound: false,
	zero_out_time_after_solve: false,
	confirm_delete_solve: false,
	use_space_with_smart_cube: false,
	require_period_in_manual_time_entry: false,
	beta_tester: false,
	cube_type: '333',
	session_id: null,
	custom_cube_types: [],

	timer_type: 'keyboard',
	timer_module_count: 3,
	timer_layout: 'bottom',
	stackmat_id: '',
	timer_time_size: 90,
	timer_scramble_size: 19,
	timer_font_family: 'Roboto Mono',
	timer_modules: [
		TimerModuleType.HISTORY,
		TimerModuleType.STATS,
		TimerModuleType.SCRAMBLE,
		TimerModuleType.LAST_SOLVE,
		TimerModuleType.TIME_DISTRO,
		TimerModuleType.CONSISTENCY,
		TimerModuleType.SOLVE_GRAPH,
	],

	// U R F D L B
	cube_face_colors: ['#43FF43', '#FF9826', '#FFFFFF', '#246BFD', '#FF4343', '#FFFF49'],

	// User defined vallues
	...APP_THEME_PRESETS.dark.values,

	hide_mobile_timer_footer: true,
	timer_avg_main: 'pb',
	timer_avg_1: 'avg',
	timer_avg_2: 'worst',
	timer_avg_3: 'ao5',
	timer_avg_4: 'ao5pb',
	timer_avg_5: 'ao10',
	timer_avg_6: 'ao50',
};

export function getDefaultSetting<T extends keyof AllSettings>(key: T): AllSettings[T] {
	return defaultSettings[key];
}

export function getDefaultSettings() {
	return defaultSettings;
}

export function getSettings(): AllSettings {
	const settingsDb = getSettingsDb();
	const settings: Partial<AllSettings> = {};

	let settingsData: any = settingsDb?.data;
	if (!settingsDb || !settingsData) {
		settingsData = Object.keys(defaultSettings).map((key) => ({id: key, value: defaultSettings[key]}));
	}
	settingsData.forEach((setting) => {
		settings[setting.id] = setting.value;
	});

	return settings as AllSettings;
}

export function getSetting<T extends keyof AllSettings>(key: T): AllSettings[T] {
	const settingsDb = getSettingsDb();

	if (!key) {
		return null;
	}

	const defaultValue = defaultSettings[key];
	if (!settingsDb) {
		return defaultValue;
	}

	const result: SettingValue = settingsDb.findOne({
		id: key,
	});

	if (!result) {
		return defaultValue;
	}

	return result?.value;
}
