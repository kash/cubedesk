
import tinycolor from 'tinycolor2';
import {AllSettings, getSetting} from '../../db/settings/query';
import {getAnyColorStringAsRawRgbString, getAnyColorStringAsRgbString} from '../../util/themes/theme_util';

const userDefinedColorsVar: Partial<Record<string, string>> = {
	primary_color: '--primary-color',
	secondary_color: '--secondary-color',
	background_color: '--background-color',
	module_color: '--module-color',
	text_color: '--text-color',
	button_color: '--button-color',
};

function getHtmlTag() {
	return document.getElementsByTagName('html')[0];
}

function setDocProp(key: string, value: string) {
	getHtmlTag().style.setProperty(key, value);
}

export function updateThemeColors() {
	getHtmlTag().classList.add('app-html');

	const colorKeys = Object.keys(userDefinedColorsVar) as (keyof AllSettings)[];

	for (const key of colorKeys) {
		const color = getSetting(key) as string;

		if (!color || color === 'undefined') {
			continue; // Something probably went wrong. Skip otherwise we get runtime errors.
		}

		const cssVar = userDefinedColorsVar[key];
		const currentPc = getHtmlTag().style.getPropertyValue(cssVar);

		if (color !== currentPc) {
			setDocProp(cssVar, getAnyColorStringAsRawRgbString(color));

			const themeKeys = [
				'background_color',
				'module_color',
				'button_color',
				'text_color',
				'primary_color',
				'secondary_color',
			];
			if (themeKeys.includes(key)) {
				const tc = tinycolor(getAnyColorStringAsRgbString(color));

				const themeColor = getThemeBackgroundColor(tc);
				const themeColorOpposite = getThemeBackgroundColor(tc, true);
				const themeKey = key.replace('_color', '');

				setDocProp(`--theme-${themeKey}`, themeColor);
				setDocProp(`--theme-${themeKey}-opposite`, themeColorOpposite);
			}
		}
	}
}

function getThemeBackgroundColor(color: tinycolorInstance, opposite: boolean = false): string {
	if ((color.isDark() && !opposite) || (!color.isDark() && opposite)) {
		return '0, 0, 0';
	} else {
		return '255, 255, 255';
	}
}
