import {getInitialLocale, I18nProvider} from '@/i18n';
import Privacy from '@/components/landing/legal/Privacy';
import Terms from '@/components/landing/legal/Terms';
import {localeFromCookieHeader} from '@/shared/i18n';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {useTranslation} from 'react-i18next';

function Sample() {
	const {t} = useTranslation();
	return (
		<>
			<span>{t('timer.options.inspection')}</span>
			<span>{t('community.players', {count: 1})}</span>
			<span>{t('community.players', {count: 3})}</span>
			<span>{t('community.won', {name: 'Ana'})}</span>
		</>
	);
}

test('SSR uses a separate catalog instance for each locale', () => {
	const spanish = renderToString(
		<I18nProvider initialLocale="es">
			<Sample />
		</I18nProvider>,
	);
	const english = renderToString(
		<I18nProvider initialLocale="en">
			<Sample />
		</I18nProvider>,
	);
	const spanishAgain = renderToString(
		<I18nProvider initialLocale="es">
			<Sample />
		</I18nProvider>,
	);

	expect(spanish).toContain('Inspección');
	expect(spanish).toContain('1 jugador');
	expect(spanish).toContain('3 jugadores');
	expect(spanish).toContain('Ana ha ganado');
	expect(english).toContain('Inspection');
	expect(english).toContain('1 player');
	expect(english).toContain('3 players');
	expect(english).toContain('Ana won');
	expect(spanishAgain).toBe(spanish);
});

test('cookie locale overrides the browser language for SSR', () => {
	expect(localeFromCookieHeader('cubedesk_locale=es', 'en-US,en;q=0.9')).toBe('es');
	expect(localeFromCookieHeader(undefined, 'es-ES,es;q=0.9')).toBe('es');
	expect(localeFromCookieHeader('cubedesk_locale=invalid', 'fr-FR,fr;q=0.9')).toBe('en');
});

test('hydration starts with the locale of the server-rendered HTML', () => {
	const previousDocument = globalThis.document;
	Object.defineProperty(globalThis, 'document', {
		configurable: true,
		value: {documentElement: {lang: 'es'}, cookie: 'cubedesk_locale=en'},
	});
	try {
		expect(getInitialLocale()).toBe('es');
	} finally {
		Object.defineProperty(globalThis, 'document', {
			configurable: true,
			value: previousDocument,
		});
	}
});

test('complete legal pages render translated text without visible key names', () => {
	for (const locale of ['en', 'es'] as const) {
		const privacy = renderToString(
			<I18nProvider initialLocale={locale}>
				<Privacy />
			</I18nProvider>,
		);
		const terms = renderToString(
			<I18nProvider initialLocale={locale}>
				<Terms />
			</I18nProvider>,
		);
		expect(privacy).not.toMatch(/legal\.privacy\.block\d+/);
		expect(terms).not.toMatch(/legal\.terms\.block\d+/);
		expect(privacy).toContain(
			locale === 'es' ? 'Interpretación y definiciones' : 'Interpretation and Definitions',
		);
		expect(terms).toContain(locale === 'es' ? 'Términos' : 'Terms');
	}
});
