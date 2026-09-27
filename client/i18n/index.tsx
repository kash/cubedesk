import {DEFAULT_LOCALE, LOCALE_COOKIE, Locale, isLocale, SUPPORTED_LOCALES} from '@/shared/i18n';
import {translations} from '@/i18n/messages';
import i18next, {i18n as I18nInstance} from 'i18next';
import {initReactI18next, I18nextProvider} from 'react-i18next';
import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';

export {DEFAULT_LOCALE, LOCALE_COOKIE, SUPPORTED_LOCALES};
export type {Locale};

function getCookieValue(name: string): string | undefined {
	if (typeof document === 'undefined') return undefined;
	return document.cookie
		.split(';')
		.map((part) => part.trim().split('=', 2))
		.find(([key]) => key === name)?.[1];
}

export function getInitialLocale(): Locale {
	const serverLocale =
		typeof document === 'undefined' ? undefined : document.documentElement.lang;
	if (isLocale(serverLocale)) return serverLocale;

	const cookieLocale = getCookieValue(LOCALE_COOKIE);
	if (isLocale(cookieLocale)) return cookieLocale;

	if (typeof navigator !== 'undefined' && navigator.language.toLowerCase().startsWith('es')) {
		return 'es';
	}

	return DEFAULT_LOCALE;
}

function saveLocale(locale: Locale) {
	if (typeof document === 'undefined') return;
	const secure = window.location.protocol === 'https:' ? '; Secure' : '';
	document.cookie = `${LOCALE_COOKIE}=${locale}; Max-Age=31536000; Path=/; SameSite=Lax${secure}`;
}

function createI18nInstance(locale: Locale): I18nInstance {
	const instance = i18next.createInstance();
	instance.use(initReactI18next).init({
		resources: Object.fromEntries(
			Object.entries(translations).map(([language, dictionary]) => [
				language,
				{translation: dictionary},
			]),
		),
		lng: locale,
		fallbackLng: DEFAULT_LOCALE,
		keySeparator: false,
		interpolation: {escapeValue: false, prefix: '{', suffix: '}'},
		returnNull: false,
		initAsync: false,
	});
	return instance;
}

export interface I18nContextValue {
	locale: Locale;
	locales: readonly Locale[];
	setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
	children,
	initialLocale,
}: {
	children: React.ReactNode;
	initialLocale?: Locale;
}) {
	const [locale, setLocaleState] = useState<Locale>(initialLocale ?? getInitialLocale);
	const [instance] = useState(() => createI18nInstance(locale));

	const setLocale = (nextLocale: Locale) => {
		if (!isLocale(nextLocale)) return;
		setLocaleState(nextLocale);
		void instance.changeLanguage(nextLocale);
		saveLocale(nextLocale);
	};

	useEffect(() => {
		document.documentElement.lang = locale;
	}, [locale]);

	const value = useMemo<I18nContextValue>(
		() => ({
			locale,
			locales: SUPPORTED_LOCALES,
			setLocale,
		}),
		[locale],
	);

	return (
		<I18nContext.Provider value={value}>
			<I18nextProvider i18n={instance}>{children}</I18nextProvider>
		</I18nContext.Provider>
	);
}

export function useLocale() {
	const context = useContext(I18nContext);
	if (!context) throw new Error('useLocale must be used inside I18nProvider');
	return context;
}
