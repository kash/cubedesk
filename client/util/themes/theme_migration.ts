import {APP_THEME_PRESETS, type PresetTheme} from '@/util/themes/theme_consts';

export const LEGACY_DARK_THEME_COLORS: PresetTheme['values'] = {
	background_color: '18, 20, 28',
	button_color: '30, 36, 44',
	module_color: '12, 13, 23',
	primary_color: '36, 107, 253',
	secondary_color: '65, 176, 88',
	text_color: '255, 255, 255',
};

// Keep this function self-contained: the blocking theme script also embeds it.
export function matchesLegacyDarkTheme(
	colors: Partial<PresetTheme['values']>,
	legacyColors: PresetTheme['values'],
): boolean {
	return Object.keys(legacyColors).every((key) => {
		const color = colors[key];
		return (
			typeof color === 'string' &&
			color.replace(/\s/g, '') === legacyColors[key].replace(/\s/g, '')
		);
	});
}

export function migrateDefaultDarkTheme<T extends Partial<PresetTheme['values']>>(settings: T): T {
	// Match the entire palette so even a single customized color preserves the theme.
	if (!matchesLegacyDarkTheme(settings, LEGACY_DARK_THEME_COLORS)) {
		return settings;
	}

	return {...settings, ...APP_THEME_PRESETS.dark.values};
}
