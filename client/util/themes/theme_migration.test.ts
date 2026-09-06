import {runInNewContext} from 'node:vm';
import {getAllLocalSettings} from '@/db/settings/local';
import {APP_THEME_PRESETS} from '@/util/themes/theme_consts';
import {getBlockingThemeInitScript, initThemeFromLocalStorage} from '@/util/themes/theme_init';
import {LEGACY_DARK_THEME_COLORS, migrateDefaultDarkTheme} from '@/util/themes/theme_migration';

jest.mock('@/components/store', () => ({getMe: () => ({id: 'user'})}));
jest.mock('@/db/settings/query', () => ({
	getDefaultSettings: () => ({...APP_THEME_PRESETS.dark.values, timer_time_size: 90}),
}));

beforeEach(() => {
	const values = new Map<string, string>();
	Object.defineProperty(globalThis, 'localStorage', {
		configurable: true,
		value: {
			getItem: (key: string) => values.get(key) ?? null,
			setItem: (key: string, value: string) => values.set(key, value),
		},
	});
});

afterEach(() => {
	Reflect.deleteProperty(globalThis, 'localStorage');
	Reflect.deleteProperty(globalThis, 'document');
});

test('migrates the complete old default, preserves other preferences, and is idempotent', () => {
	const original = {...LEGACY_DARK_THEME_COLORS, timer_time_size: 120};
	const migrated = migrateDefaultDarkTheme(original);
	expect(migrated).toEqual({...APP_THEME_PRESETS.dark.values, timer_time_size: 120});
	expect(original).toEqual({...LEGACY_DARK_THEME_COLORS, timer_time_size: 120});
	expect(migrateDefaultDarkTheme(migrated)).toBe(migrated);
});

test.each(Object.keys(LEGACY_DARK_THEME_COLORS))(
	'preserves the entire theme when %s is customized',
	(key) => {
		const custom = {...LEGACY_DARK_THEME_COLORS, [key]: '1, 2, 3'};
		expect(migrateDefaultDarkTheme(custom)).toBe(custom);
	},
);

test.each(Object.keys(APP_THEME_PRESETS))('preserves the %s preset', (key) => {
	const preset = APP_THEME_PRESETS[key].values;
	expect(migrateDefaultDarkTheme(preset)).toBe(preset);
});

test('accepts RGB whitespace variations but leaves incomplete palettes alone', () => {
	const compact = Object.fromEntries(
		Object.entries(LEGACY_DARK_THEME_COLORS).map(([key, value]) => [
			key,
			value.replace(/ /g, ''),
		]),
	);
	expect(migrateDefaultDarkTheme(compact)).toEqual(APP_THEME_PRESETS.dark.values);
	const partial = {background_color: LEGACY_DARK_THEME_COLORS.background_color};
	expect(migrateDefaultDarkTheme(partial)).toBe(partial);
});

test('persists the migration for the current user without changing other accounts', () => {
	const other = {...APP_THEME_PRESETS.light.values};
	localStorage.setItem(
		'settings',
		JSON.stringify({user: {...LEGACY_DARK_THEME_COLORS, timer_time_size: 120}, other}),
	);
	expect(getAllLocalSettings('user')).toEqual({
		...APP_THEME_PRESETS.dark.values,
		timer_time_size: 120,
	});
	expect(JSON.parse(localStorage.getItem('settings')!)).toEqual({
		user: {...APP_THEME_PRESETS.dark.values, timer_time_size: 120},
		other,
	});
});

test('migrates legacy individual storage keys when importing settings', () => {
	for (const [key, value] of Object.entries(LEGACY_DARK_THEME_COLORS)) {
		localStorage.setItem(key, JSON.stringify(value));
	}
	expect(getAllLocalSettings('user')).toEqual({
		...APP_THEME_PRESETS.dark.values,
		timer_time_size: 90,
	});
	expect(JSON.parse(localStorage.getItem('settings')!).user.background_color).toBe('0, 0, 0');
});

describe.each(['startup', 'blocking script'])('%s', (mode) => {
	test.each([false, true])(
		'uses the correct first-paint colors (customized: %s)',
		(customized) => {
			const colors = {...LEGACY_DARK_THEME_COLORS};
			if (customized) colors.primary_color = '1, 2, 3';
			localStorage.setItem('settings', JSON.stringify({user: colors}));
			const style = {setProperty: jest.fn()};
			const document = {documentElement: {style, classList: {add: jest.fn()}}};
			if (mode === 'blocking script') {
				runInNewContext(getBlockingThemeInitScript(), {
					localStorage,
					document,
					window: {__STORE__: {account: {me: {id: 'user'}}}},
				});
			} else {
				Object.defineProperty(globalThis, 'document', {
					configurable: true,
					value: document,
				});
				initThemeFromLocalStorage('user');
			}
			expect(style.setProperty).toHaveBeenCalledWith(
				'--background-color',
				customized ? colors.background_color : '0, 0, 0',
			);
			expect(style.setProperty).toHaveBeenCalledWith(
				'--primary-color',
				customized ? colors.primary_color : '235, 235, 235',
			);
		},
	);
});
