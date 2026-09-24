import {
	DEFAULT_LOCALE,
	LOCALE_COOKIE,
	Locale,
	isLocale,
	SUPPORTED_LOCALES,
} from '@/shared/i18n';
import {translations} from '@/i18n/messages';
import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';

export {DEFAULT_LOCALE, LOCALE_COOKIE, SUPPORTED_LOCALES};
export type {Locale};

type TranslationValues = Record<string, string | number>;

function getCookieValue(name: string): string | undefined {
	if (typeof document === 'undefined') return undefined;
	return document.cookie
		.split(';')
		.map((part) => part.trim().split('=', 2))
		.find(([key]) => key === name)?.[1];
}

export function getInitialLocale(): Locale {
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

function interpolate(value: string, values?: TranslationValues) {
	if (!values) return value;
	return value.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? `{${key}}`));
}

function translateTextNode(value: string, t: (key: string) => string) {
	const trimmed = value.trim();
	if (!trimmed) return value;

	const translated = t(trimmed);
	if (translated === trimmed) return value;

	const start = value.indexOf(trimmed);
	return `${value.slice(0, start)}${translated}${value.slice(start + trimmed.length)}`;
}

function translateReactTree(node: React.ReactNode, t: (key: string) => string): React.ReactNode {
	if (typeof node === 'string') return translateTextNode(node, t);
	if (!React.isValidElement(node)) {
		if (Array.isArray(node)) return node.map((child) => translateReactTree(child, t));
		return node;
	}

	const element = node as React.ReactElement<Record<string, any>>;
	const translatedProps = {...element.props};
	for (const prop of ['aria-label', 'aria-description', 'title', 'placeholder', 'alt', 'label']) {
		if (typeof translatedProps[prop] === 'string') {
			translatedProps[prop] = translateTextNode(translatedProps[prop], t);
		}
	}

	if (element.props.children === undefined) return React.cloneElement(element, translatedProps);
	return React.cloneElement(
		element,
		translatedProps,
		translateReactTree(element.props.children, t),
	);
}

export interface I18nContextValue {
	locale: Locale;
	locales: readonly Locale[];
	setLocale: (locale: Locale) => void;
	t: (key: string, values?: TranslationValues) => string;
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

	const setLocale = (nextLocale: Locale) => {
		if (!isLocale(nextLocale)) return;
		setLocaleState(nextLocale);
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
			t: (key, values) => interpolate(translations[locale][key] ?? key, values),
		}),
		[locale],
	);

	return (
		<I18nContext.Provider value={value}>
			{translateReactTree(children, value.t)}
		</I18nContext.Provider>
	);
}

export function useI18n() {
	const context = useContext(I18nContext);
	if (!context) throw new Error('useI18n must be used inside I18nProvider');
	return context;
}

const fallbackI18n: I18nContextValue = {
	locale: DEFAULT_LOCALE,
	locales: SUPPORTED_LOCALES,
	setLocale: () => undefined,
	t: (key) => key,
};

export function useOptionalI18n() {
	return useContext(I18nContext) ?? fallbackI18n;
}

export function translateNode(node: React.ReactNode, t: I18nContextValue['t']) {
	if (typeof node === 'string') return translateTextNode(node, t);

	// Radix Slot (used by Button asChild) requires the original single element,
	// not the array returned by React.Children.map for a one-item collection.
	const children = React.Children.toArray(node);
	if (children.length === 1) return children[0];

	return React.Children.map(node, (child) =>
		typeof child === 'string' ? translateTextNode(child, t) : child,
	);
}
