import {setSetting} from '../../db/settings/update';
import {getSetting} from '../../db/settings/query';
import {APP_THEME_PRESETS} from '../../util/themes/theme_consts';
import {UserAccount} from '../../../server/schemas/UserAccount.schema';
import {isPro} from '../../util/pro';

export function updateSettingsBasedOnProStatus(me: UserAccount) {
	if (!me || isPro(me)) {
		return;
	}

	const themeIds = Object.keys(APP_THEME_PRESETS);

	let validFreeTheme = false;

	themeLoop: for (const themeId of themeIds) {
		const theme = APP_THEME_PRESETS[themeId];
		const valueKeys = Object.keys(theme.values);

		// We only want to make sure that they have a valid free theme
		if (theme.proOnly) {
			continue;
		}

		for (const valKey of valueKeys) {
			const color = theme.values[valKey];

			// Primary and secondary colors are fine to be changed even in a free theme
			if (valKey === 'primary_color' || valKey === 'secondary_color') {
				continue;
			}

			const settingColor = getSetting(valKey as any);
			if (settingColor !== color) {
				continue themeLoop;
			}
		}

		validFreeTheme = true;
	}

	// If a user's color scheme isn't one of the free ones, reset to dark mode
	if (!validFreeTheme) {
		const defaultTheme = APP_THEME_PRESETS.dark;
		for (const key of Object.keys(defaultTheme.values)) {
			const col = defaultTheme.values[key];

			setSetting(key as any, col);
		}
	}
}
