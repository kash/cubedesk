import React, {ComponentType, Suspense} from 'react';

type AnyComponent = ComponentType<any>;

export type LazyPage = AnyComponent & {
	load: () => Promise<AnyComponent>;
};

/**
 * A page component whose code lives in its own chunk. Call load() before rendering (the server does
 * this for every request and the client before hydrating) so the page renders without suspending and
 * the server markup matches the first client render. Pages reached later through client-side navigation
 * suspend while their chunk loads.
 */
export function lazyPage(loader: () => Promise<{default: AnyComponent}>): LazyPage {
	let Loaded: AnyComponent | null = null;
	let loading: Promise<AnyComponent> | null = null;

	function load() {
		loading ??= loader().then(
			(mod) => {
				Loaded = mod.default;
				return mod.default;
			},
			(error) => {
				// Allow a retry, e.g. after a network error
				loading = null;
				throw error;
			},
		);

		return loading;
	}

	const Suspending = React.lazy(() => load().then((component) => ({default: component})));

	function Page(props: any) {
		if (Loaded) {
			return <Loaded {...props} />;
		}

		return (
			<Suspense fallback={null}>
				<Suspending {...props} />
			</Suspense>
		);
	}

	return Object.assign(Page, {load});
}

export function isLazyPage(component: unknown): component is LazyPage {
	return typeof component === 'function' && 'load' in component;
}
