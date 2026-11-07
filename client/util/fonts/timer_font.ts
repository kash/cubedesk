export const DEFAULT_TIMER_FONT_FAMILY = 'Roboto Mono';

export const TIMER_FONT_FAMILIES = [
	DEFAULT_TIMER_FONT_FAMILY,
	'Fira Sans',
	'Fira Mono',
	'Kiwi Maru',
	'JetBrains Mono',
	'Poppins',
	'Montserrat',
	'Space Mono',
	'Arial',
	'monospace',
];

const GOOGLE_FONT_FAMILIES = TIMER_FONT_FAMILIES.filter(
	(font) => font !== 'Arial' && font !== 'monospace',
);

const GOOGLE_FONTS_ORIGIN = 'https://fonts.googleapis.com';
const LOADED_FONT_ATTRIBUTE = 'data-google-fonts';

function getGoogleFontsUrl(families: string[]): string {
	const params = families.map((family) => `family=${family.replace(/ /g, '+')}`).join('&');
	return `${GOOGLE_FONTS_ORIGIN}/css2?${params}&display=swap`;
}

function loadGoogleFonts(families: string[]) {
	if (typeof document === 'undefined') {
		return;
	}

	const fonts = families.filter((family) => GOOGLE_FONT_FAMILIES.includes(family));
	if (!fonts.length) {
		return;
	}

	const key = fonts.join('|');
	const loaded = document.querySelectorAll(`link[${LOADED_FONT_ATTRIBUTE}]`);
	for (const link of Array.from(loaded)) {
		const loadedFonts = link.getAttribute(LOADED_FONT_ATTRIBUTE)?.split('|') || [];
		if (fonts.every((font) => loadedFonts.includes(font))) {
			return;
		}
	}

	const link = document.createElement('link');
	link.rel = 'stylesheet';
	link.href = getGoogleFontsUrl(fonts);
	link.setAttribute(LOADED_FONT_ATTRIBUTE, key);
	document.head.appendChild(link);
}

export function loadTimerFont(family: string) {
	loadGoogleFonts([family]);
}

export function loadAllTimerFonts() {
	loadGoogleFonts(GOOGLE_FONT_FAMILIES);
}

export function getTimerFontHeadTags(): string {
	const googleFonts = JSON.stringify(GOOGLE_FONT_FAMILIES);
	const defaultFont = JSON.stringify(DEFAULT_TIMER_FONT_FAMILY);
	const origin = JSON.stringify(GOOGLE_FONTS_ORIGIN);
	const attribute = JSON.stringify(LOADED_FONT_ATTRIBUTE);

	return `<link rel="preconnect" href="${GOOGLE_FONTS_ORIGIN}">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<script type="text/javascript" data-cfasync="false">
			(function () {
				try {
					var font = ${defaultFont};
					var userId = null;
					try {
						var store = window.__STORE__;
						if (typeof store === 'string') store = JSON.parse(store);
						userId = store && store.account && store.account.me && store.account.me.id;
					} catch (e) {}
					try {
						var settings = JSON.parse(localStorage.getItem('settings') || 'null');
						var userSettings = settings && settings[userId || 'demo'];
						if (userSettings && typeof userSettings.timer_font_family === 'string') {
							font = userSettings.timer_font_family;
						}
					} catch (e) {}
					if (${googleFonts}.indexOf(font) === -1) return;
					var link = document.createElement('link');
					link.rel = 'stylesheet';
					link.href = ${origin} + '/css2?family=' + font.replace(/ /g, '+') + '&display=swap';
					link.setAttribute(${attribute}, font);
					document.head.appendChild(link);
				} catch (e) {}
			})();
		</script>`;
}
