import {resolveModuleVisual} from '@/components/timer/footer/helpers/resolveModuleVisual';

describe('resolveModuleVisual', () => {
	type ModuleData = {module: string | null};
	const fallback: ModuleData = {module: null};

	it('returns the matching entry for a known module type', () => {
		const moduleMap: Record<string, ModuleData> = {history: {module: 'history-module'}};

		expect(resolveModuleVisual(moduleMap, 'history', fallback)).toEqual({module: 'history-module'});
	});

	// Regression test for #193 ("the screen goes grey mid solve randomly"): a user with a
	// legacy `timer_modules` value referencing a since-removed module type (e.g. the old
	// "chat" module) would get `undefined` back here. TimerModule then dereferenced
	// `visual.module` on that `undefined`, throwing during render with no error boundary
	// to catch it, which unmounted the whole app and left a blank/grey screen.
	it('falls back instead of returning undefined for an orphaned/unknown module type', () => {
		const moduleMap: Record<string, ModuleData> = {history: {module: 'history-module'}};

		expect(resolveModuleVisual(moduleMap, 'chat', fallback)).toEqual(fallback);
	});
});
