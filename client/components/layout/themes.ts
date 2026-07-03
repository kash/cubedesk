import {getSetting} from '@/db/settings/query';
import {
	applyThemeColorsToDocument,
	DEFAULT_THEME_COLORS,
	THEME_COLOR_KEYS,
} from '@/util/themes/theme_init';

export function updateThemeColors() {
	const colors = {...DEFAULT_THEME_COLORS};

	for (const key of THEME_COLOR_KEYS) {
		const color = getSetting(key) as string;
		if (color && color !== 'undefined') {
			colors[key] = color;
		}
	}

	applyThemeColorsToDocument(colors);
}
