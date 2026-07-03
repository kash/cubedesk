import React, {ReactNode} from 'react';
import {thunk} from 'redux-thunk';
import ReactDOM from 'react-dom/server';
import promise from 'redux-promise-middleware';
import {applyMiddleware, createStore, Store} from 'redux';
import {Provider} from 'react-redux';
import {StaticRouter, Switch} from 'react-router-dom';
import {minify} from 'html-minifier';
import {PageContext, routes} from '../client/components/layout/Routes';
import htmlTemplate, {HtmlPagePayload} from './html_template';
import reducers from '../client/reducers/reducers';
import {initUserAccount} from './models/store';

import {HelmetProvider, HelmetServerState} from 'react-helmet-async';
import {mapSingleRoute} from '../client/components/map-route';
import {TRPCProvider} from '../client/util/api';
import {logger} from './services/logger';
import {ErrorCode} from './constants/errors';
import type {Request} from 'express';

const mappedRoutes: ReactNode[] = [];

function createEmptyHelmetState(): HelmetServerState {
	const emptyDatum = {
		toString: () => '',
		toComponent: () => [],
	};
	const emptyAttributes = {
		toString: () => '',
		toComponent: () => ({}),
	};

	return {
		base: emptyDatum,
		bodyAttributes: emptyAttributes,
		htmlAttributes: emptyAttributes,
		link: emptyDatum,
		meta: emptyDatum,
		noscript: emptyDatum,
		script: emptyDatum,
		style: emptyDatum,
		title: emptyDatum,
		priority: emptyDatum,
	};
}

function safeStringify(object) {
	return JSON.stringify(object)
		.replace(/<\/(script)/gi, '<\\/$1')
		.replace(/<!--/g, '<\\!--')
		.replace(/\u2028/g, '\\u2028')
		.replace(/\u2029/g, '\\u2029');
}

function renderFullPage(html, helmet, preloadedState) {
	let cleanState = JSON.stringify(preloadedState).replace(/</g, '\\u003c');
	cleanState = safeStringify(cleanState);

	const deploymentId = process.env.DEPLOYMENT_ID || 'app';

	const payload: HtmlPagePayload = {
		html,
		helmet,
		cleanState,
		distBase: process.env.DIST_BASE_URI || '',
		resourceBase: process.env.RESOURCES_BASE_URI || '',
		jsFileName: `${deploymentId}.min.js`,
		cssFileName: `${deploymentId}.min.css`,
	};

	return htmlTemplate(payload);
}

const isDev = (process.env.ENV || 'development') === 'development';

function createComponents(req, store) {
	// In dev we skip server-side rendering entirely and ship an empty shell. The
	// client bundle renders everything (see App.tsx using createRoot in dev). This
	// keeps client component code out of the render path so editing a component no
	// longer forces a full server restart — only esbuild rebuilds + browser reloads.
	if (isDev) {
		const preloaded = store.getState();
		const fullHtml = renderFullPage('', createEmptyHelmetState(), preloaded);
		return minify(fullHtml, {collapseWhitespace: true, minifyJS: true, minifyCSS: true});
	}

	const helmetContext: {helmet?: HelmetServerState | null} = {};

	const staticRouter = (
		<StaticRouter location={req.url} context={{}}>
			<HelmetProvider context={helmetContext}>
				<TRPCProvider>
					<Provider store={store}>
						<Switch>
							{routes.map((route: {[key: string]: any}) => {
								route.exact = true;
								return mapSingleRoute(route);
							})}
						</Switch>
					</Provider>
				</TRPCProvider>
			</HelmetProvider>
		</StaticRouter>
	);

	const markup = ReactDOM.renderToString(staticRouter);
	const helmet = helmetContext.helmet || createEmptyHelmetState();
	const preloaded = store.getState();

	// Get html and minify it
	const fullHtml = renderFullPage(markup, helmet, preloaded);
	return minify(fullHtml, {collapseWhitespace: true, minifyJS: true, minifyCSS: true});
}

function appUseRouteForPage(routePath, route: PageContext) {
	global.app.all(routePath, async (req, res) => {
		const store = createStore(reducers, {}, applyMiddleware(promise, thunk));
		const promises: ((store: Store<any>, req: Request) => Promise<any>)[] = route.prefetchData || [];
		const me = await initUserAccount(store, req);

		// Redirect to /home if user is not logged in and trying to access /
		if (routePath === '/' && !me) {
			res.status(401).redirect('/home');
			return;
		}

		// Redirect from demo to timer if logged in
		if (routePath === '/demo' && me) {
			res.status(302).redirect('/');
			return;
		}

		// Redirect to /login if page is restricted and user is not logged in
		if (route.restricted && !me) {
			res.status(401).redirect('/login?redirect=' + encodeURIComponent(req.url));
			return;
		}

		// Redirect to home page if user is logged in and on login page
		if (me && (routePath === '/login' || routePath === '/signup')) {
			res.status(302).redirect('/');
			return;
		}

		let code = 200;
		try {
			await Promise.all(promises.map((f) => f(store, req)));
		} catch (e: any) {
			// TRPCClientError from an SSR prefetch (e.g. unknown profile or solve)
			if (e?.data?.code === ErrorCode.NOT_FOUND) {
				res.status(404).sendFile(`${__dirname}/resources/not_found.html`);
				return;
			}
		}

		// Initiates the whole store
		const html = createComponents(req, store);

		if (!code) {
			code = 500;
			logger.warn('Invalid status code when trying to generate page', {
				path: routePath,
			});
		}

		if (!res.headersSent) {
			res.status(code).send(html);
		}
	});
}

export function mapPathToPage() {
	for (const route of routes) {
		mappedRoutes.push(mapSingleRoute(route));

		const routePath = route.path.replace(/\s/g, '');
		if ('redirect' in route && route.redirect) {
			redirectPage(routePath, route);
			continue;
		}

		appUseRouteForPage(routePath, route as PageContext);
	}
}

function redirectPage(routePath, route) {
	global.app.get(routePath, (req, res) => {
		let redirect = route.redirect;
		const keys = Object.keys(req.params);
		for (const key of keys) {
			redirect = redirect.replace(`:${key}`, req.params[key]);
		}

		res.status(301).redirect(redirect);
	});
}
