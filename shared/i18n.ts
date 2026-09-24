export const LOCALE_COOKIE = 'cubedesk_locale';
export const DEFAULT_LOCALE = 'en' as const;
export const SUPPORTED_LOCALES = ['en', 'es'] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export function isLocale(value: unknown): value is Locale {
	return typeof value === 'string' && SUPPORTED_LOCALES.includes(value as Locale);
}

export function localeFromCookieHeader(cookieHeader?: string, acceptLanguage?: string): Locale {
	const locale = cookieHeader
		?.split(';')
		.map((part) => part.trim().split('=', 2))
		.find(([key]) => key === LOCALE_COOKIE)?.[1];

	if (isLocale(locale)) return locale;

	const browserLocale = acceptLanguage?.split(',')[0]?.split('-')[0];
	return isLocale(browserLocale) ? browserLocale : DEFAULT_LOCALE;
}
