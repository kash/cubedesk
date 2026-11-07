import type {BrowserOptions} from '@sentry/browser';

type SentryModule = typeof import('@sentry/browser');

let sentry: Promise<SentryModule | null> | null = null;

export function initSentry(options: Omit<BrowserOptions, 'integrations'>) {
	sentry = import('@sentry/browser').then(
		(module) => {
			module.init({...options, integrations: [module.browserTracingIntegration()]});
			return module;
		},
		(error) => {
			console.error('Could not load Sentry', error);
			return null;
		},
	);
}

export function captureException(...args: Parameters<SentryModule['captureException']>) {
	sentry?.then((module) => module?.captureException(...args));
}
