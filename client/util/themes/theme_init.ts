import {APP_THEME_PRESETS} from '@/util/themes/theme_consts';
import {getAnyColorStringAsRawRgbString} from '@/util/themes/theme_util';

export const THEME_COLOR_KEYS = [
	'primary_color',
	'secondary_color',
	'background_color',
	'module_color',
	'text_color',
	'button_color',
] as const;

export type ThemeColorKey = (typeof THEME_COLOR_KEYS)[number];

export const THEME_CSS_VARS: Record<ThemeColorKey, string> = {
	primary_color: '--primary-color',
	secondary_color: '--secondary-color',
	background_color: '--background-color',
	module_color: '--module-color',
	text_color: '--text-color',
	button_color: '--button-color',
};

export const DEFAULT_THEME_COLORS: Record<ThemeColorKey, string> = {
	...APP_THEME_PRESETS.dark.values,
};

function parseStoredValue(raw: string | null): string | null {
	if (!raw) {
		return null;
	}

	try {
		const parsed = JSON.parse(raw);
		if (typeof parsed === 'string' && parsed.includes(',')) {
			return parsed;
		}
	} catch (_e) {
		if (raw.includes(',')) {
			return raw;
		}
	}

	return null;
}

function getThemeBackgroundColor(rgb: string, opposite = false): string {
	const parts = rgb.split(',').map((part) => parseInt(part.trim(), 10));
	const luminance = (0.299 * parts[0] + 0.587 * parts[1] + 0.114 * parts[2]) / 255;
	const isDark = luminance < 0.5;

	if ((isDark && !opposite) || (!isDark && opposite)) {
		return '0, 0, 0';
	}

	return '255, 255, 255';
}

export function getThemeSettingsFromLocalStorage(userId?: string | null): Record<ThemeColorKey, string> {
	const colors = {...DEFAULT_THEME_COLORS};

	if (typeof localStorage === 'undefined') {
		return colors;
	}

	let userSettings: Partial<Record<ThemeColorKey, string>> | null = null;

	try {
		const settingsRaw = localStorage.getItem('settings');
		if (settingsRaw) {
			const allSettings = JSON.parse(settingsRaw);
			const settingsUserId = userId || 'demo';
			userSettings = allSettings?.[settingsUserId] || null;

			if (!userSettings && userId) {
				userSettings = allSettings?.demo || null;
			}

			if (!userSettings && allSettings && typeof allSettings === 'object') {
				const userIds = Object.keys(allSettings);
				for (const id of userIds) {
					if (id !== 'demo' && allSettings[id]) {
						userSettings = allSettings[id];
						break;
					}
				}
			}
		}
	} catch (_e) {
		userSettings = null;
	}

	for (const key of THEME_COLOR_KEYS) {
		const settingColor = userSettings?.[key];
		if (settingColor && settingColor !== 'undefined') {
			colors[key] = settingColor;
			continue;
		}

		const legacyColor = parseStoredValue(localStorage.getItem(key));
		if (legacyColor) {
			colors[key] = legacyColor;
		}
	}

	return colors;
}

export function applyThemeColorsToDocument(colors: Record<ThemeColorKey, string>) {
	if (typeof document === 'undefined') {
		return;
	}

	const html = document.documentElement;
	html.classList.add('app-html');

	for (const key of THEME_COLOR_KEYS) {
		const color = colors[key];
		if (!color || color === 'undefined') {
			continue;
		}

		const cssVar = THEME_CSS_VARS[key];
		const rgb = getAnyColorStringAsRawRgbString(color);
		html.style.setProperty(cssVar, rgb);
		html.style.setProperty(`--theme-${key.replace('_color', '')}`, getThemeBackgroundColor(rgb));
		html.style.setProperty(
			`--theme-${key.replace('_color', '')}-opposite`,
			getThemeBackgroundColor(rgb, true)
		);
	}

	const backgroundColor = colors.background_color;
	if (backgroundColor) {
		const backgroundRgb = `rgb(${getAnyColorStringAsRawRgbString(backgroundColor)})`;
		html.style.backgroundColor = backgroundRgb;
		if (document.body) {
			document.body.style.backgroundColor = backgroundRgb;
		}
		html.style.colorScheme =
			getThemeBackgroundColor(getAnyColorStringAsRawRgbString(backgroundColor)) === '0, 0, 0'
				? 'dark'
				: 'light';
	}
}

export function initThemeFromLocalStorage(userId?: string | null) {
	applyThemeColorsToDocument(getThemeSettingsFromLocalStorage(userId));
}

export function getBlockingThemeInitScript(): string {
	const defaults = JSON.stringify(DEFAULT_THEME_COLORS);
	const cssVars = JSON.stringify(THEME_CSS_VARS);
	const themeKeys = JSON.stringify(THEME_COLOR_KEYS);

	return `(function () {
	try {
		var defaults = ${defaults};
		var cssVars = ${cssVars};
		var themeKeys = ${themeKeys};
		var userId = null;

		try {
			var store = window.__STORE__;
			if (typeof store === 'string') {
				store = JSON.parse(store);
			}
			userId = store && store.account && store.account.me && store.account.me.id;
		} catch (e) {}

		function parseStoredValue(raw) {
			if (!raw) return null;
			try {
				var parsed = JSON.parse(raw);
				if (typeof parsed === 'string' && parsed.indexOf(',') !== -1) return parsed;
			} catch (e) {
				if (raw.indexOf(',') !== -1) return raw;
			}
			return null;
		}

		function getThemeBackgroundColor(rgb, opposite) {
			var parts = rgb.split(',').map(function (part) {
				return parseInt(part.trim(), 10);
			});
			var luminance = (0.299 * parts[0] + 0.587 * parts[1] + 0.114 * parts[2]) / 255;
			var isDark = luminance < 0.5;
			if ((isDark && !opposite) || (!isDark && opposite)) return '0, 0, 0';
			return '255, 255, 255';
		}

		function getThemeSettings() {
			var colors = Object.assign({}, defaults);
			var userSettings = null;

			try {
				var settingsRaw = localStorage.getItem('settings');
				if (settingsRaw) {
					var allSettings = JSON.parse(settingsRaw);
					var settingsUserId = userId || 'demo';
					userSettings = allSettings && allSettings[settingsUserId];

					if (!userSettings && userId && allSettings && allSettings.demo) {
						userSettings = allSettings.demo;
					}

					if (!userSettings && allSettings) {
						var userIds = Object.keys(allSettings);
						for (var i = 0; i < userIds.length; i++) {
							var id = userIds[i];
							if (id !== 'demo' && allSettings[id]) {
								userSettings = allSettings[id];
								break;
							}
						}
					}
				}
			} catch (e) {}

			for (var i = 0; i < themeKeys.length; i++) {
				var key = themeKeys[i];
				var settingColor = userSettings && userSettings[key];
				if (settingColor && settingColor !== 'undefined') {
					colors[key] = settingColor;
					continue;
				}

				var legacyColor = parseStoredValue(localStorage.getItem(key));
				if (legacyColor) colors[key] = legacyColor;
			}

			return colors;
		}

		var colors = getThemeSettings();
		var html = document.documentElement;
		html.classList.add('app-html');

		for (var j = 0; j < themeKeys.length; j++) {
			var colorKey = themeKeys[j];
			var color = colors[colorKey];
			if (!color || color === 'undefined') continue;

			var cssVar = cssVars[colorKey];
			html.style.setProperty(cssVar, color);
			var themeKey = colorKey.replace('_color', '');
			html.style.setProperty('--theme-' + themeKey, getThemeBackgroundColor(color));
			html.style.setProperty('--theme-' + themeKey + '-opposite', getThemeBackgroundColor(color, true));
		}

		var backgroundColor = colors.background_color;
		if (backgroundColor) {
			var backgroundRgb = 'rgb(' + backgroundColor + ')';
			html.style.backgroundColor = backgroundRgb;
			if (document.body) {
				document.body.style.backgroundColor = backgroundRgb;
			}
			var bgParts = backgroundColor.split(',').map(function (part) {
				return parseInt(part.trim(), 10);
			});
			var bgLuminance = (0.299 * bgParts[0] + 0.587 * bgParts[1] + 0.114 * bgParts[2]) / 255;
			html.style.colorScheme = bgLuminance < 0.5 ? 'dark' : 'light';
		}
	} catch (e) {}
})();`;
}
