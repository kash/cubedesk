const Preset = ['dark', 'light', 'tokyo', 'norman', 'save_the_bees', 'night_owl', 'cyberpunk', 'phd_student'] as const;

export interface PresetTheme {
	values: {
		primary_color: string;
		secondary_color: string;
		text_color: string;
		background_color: string;
		button_color: string;
		module_color: string;
	};
	proOnly: boolean;
	name: string;
}
export type PresetThemeValues = {[K in typeof Preset[number]]: PresetTheme};

export const APP_THEME_PRESETS: PresetThemeValues = {
	dark: {
		name: 'Dark',
		proOnly: false,
		values: {
			background_color: '18, 20, 28',
			button_color: '30, 36, 44',
			module_color: '12, 13, 23',
			primary_color: '36, 107, 253',
			secondary_color: '65, 176, 88',
			text_color: '255, 255, 255',
		},
	},
	light: {
		name: 'Light',
		proOnly: false,
		values: {
			background_color: '255, 255, 255',
			button_color: '212, 212, 212',
			module_color: '242, 243, 245',
			primary_color: '36, 107, 253',
			secondary_color: '65, 176, 88',
			text_color: '26, 29, 33',
		},
	},
	cyberpunk: {
		name: 'Cyberpunk',
		proOnly: false,
		values: {
			background_color: '0,0,0',
			button_color: '28,49,35',
			module_color: '0, 7, 1',
			primary_color: '240, 255, 43',
			secondary_color: '30, 255, 242',
			text_color: '86,255,75',
		},
	},
	tokyo: {
		name: 'Tokyo',
		proOnly: true,
		values: {
			background_color: '26, 27, 39',
			button_color: '43, 45, 82',
			module_color: '22, 22, 31',
			primary_color: '255, 66, 15',
			secondary_color: '135, 100, 235',
			text_color: '255, 255, 255',
		},
	},
	norman: {
		name: 'Norman',
		proOnly: true,
		values: {
			background_color: '41, 45, 62',
			button_color: '108, 141, 212',
			module_color: '36, 40, 55',
			primary_color: '126, 87, 194',
			secondary_color: '248, 197, 103',
			text_color: '255, 255, 255',
		},
	},
	save_the_bees: {
		name: 'Save the Bees',
		proOnly: true,
		values: {
			background_color: '241, 243, 245',
			button_color: '193, 204, 216',
			module_color: '222, 226, 228',
			primary_color: '255, 195, 80',
			secondary_color: '55, 158, 255',
			text_color: '3, 10, 63',
		},
	},
	night_owl: {
		name: 'Night Owl',
		proOnly: true,
		values: {
			background_color: '1, 22, 39',
			button_color: '14, 80, 134',
			module_color: '1, 18, 32',
			primary_color: '49, 145, 181',
			secondary_color: '255, 198, 93',
			text_color: '255, 255, 255',
		},
	},
	phd_student: {
		name: 'The PhD Student',
		proOnly: true,
		values: {
			background_color: '254, 63, 255',
			button_color: '144, 78, 0',
			module_color: '0, 13, 255',
			primary_color: '0, 36, 109',
			secondary_color: '89, 255, 123',
			text_color: '255, 228, 7',
		},
	},
};
