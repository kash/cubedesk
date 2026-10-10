import type {Request} from 'express';
import {loadPage, PageContext, routes} from '@/components/layout/Routes';
import {mapSingleRoute} from '@/components/map-route';
import {getNewScramble} from '@/components/timer/helpers/scramble';
import reducers from '@/reducers/reducers';
import {ErrorCode} from '@/server/constants/errors';
import htmlTemplate, {HtmlPagePayload} from '@/server/html_template';
import {initUserAccount} from '@/server/models/store';
import {logger} from '@/server/services/logger';
import {TRPCProvider} from '@/util/api';
import {minify} from 'html-minifier-terser';
import React, {ReactNode} from 'react';
import ReactDOM from 'react-dom/server';
import {HelmetProvider} from 'react-helmet-async';
import {Provider} from 'react-redux';
import {StaticRouter, Switch} from 'react-router-dom';
import {applyMiddleware, createStore, Store} from 'redux';
import promise from 'redux-promise-middleware';
import {thunk} from 'redux-thunk';

const mappedRoutes: ReactNode[] = [];

// React 19 hoists <title>/<meta>/<link> tags to the start of the renderToString
// output instead of populating the react-helmet-async context, so we lift that
// leading block out of the body markup and inject it into the <head> ourselves.
const HOISTED_HEAD_TAGS_PATTERN = /^(?:<title>.*?<\/title>|<(?:meta|link)\b[^>]*\/?>)+/;

function extractHeadTags(markup: string): {headTags: string; bodyMarkup: string} {
	const match = markup.match(HOISTED_HEAD_TAGS_PATTERN);
	if (!match) {
		return {headTags: '', bodyMarkup: markup};
	}

	return {
		headTags: match[0],
		bodyMarkup: markup.slice(match[0].length),
	};
}

function safeStringify(object) {
	return JSON.stringify(object)
		.replace(/<\/(script)/gi, '<\\/$1')
		.replace(/<!--/g, '<\\!--')
		.replace(/\u2028/g, '\\u2028')
		.replace(/\u2029/g, '\\u2029');
}

// Stands in for the React markup while the page is minified. Minifying the markup itself collapses
// whitespace-only text nodes, so it no longer matches the client render and hydration fails.
const APP_HTML_PLACEHOLDER = '<!--app-html-->';

async function renderFullPage(html, headTags, preloadedState) {
	let cleanState = JSON.stringify(preloadedState).replace(/</g, '\\u003c');
	cleanState = safeStringify(cleanState);

	const deploymentId = process.env.DEPLOYMENT_ID || 'app';

	const payload: HtmlPagePayload = {
		html: APP_HTML_PLACEHOLDER,
		headTags,
		cleanState,
		distBase: process.env.DIST_BASE_URI || '',
		resourceBase: process.env.RESOURCES_BASE_URI || '',
		jsFileName: `${deploymentId}.min.js`,
		cssFileName: `${deploymentId}.min.css`,
	};

	const page = await minify(htmlTemplate(payload), {
		collapseWhitespace: true,
		minifyJS: true,
		minifyCSS: true,
	});
	return page.replace(APP_HTML_PLACEHOLDER, () => html);
}

const isDev = (process.env.ENV || 'development') === 'development';

async function createComponents(req, store, route: PageContext) {
	const demoHome = req.path === '/' && !store.getState().account.me;
	// Keep the development shell for other routes; the public demo and pages that render before the
	// app loads (e.g. profiles) render on the server in every environment so they're visible before
	// JavaScript loads.
	if (isDev && !demoHome && !route.renderBeforeAppLoad) {
		const preloaded = store.getState();
		return renderFullPage('', '', preloaded);
	}

	if (demoHome) {
		store.dispatch({type: 'SET_TIMER_PARAM', payload: {params: {scramble: getNewScramble('333')}}});
	}

	// Pages are split into chunks; load this one's so it renders instead of suspending
	await loadPage(route);

	const staticRouter = (
		<StaticRouter location={req.url} context={{}}>
			<HelmetProvider>
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
	const {headTags, bodyMarkup} = extractHeadTags(markup);
	const preloaded = store.getState();

	return renderFullPage(bodyMarkup, headTags, preloaded);
}

function appUseRouteForPage(routePath, route: PageContext) {
	global.app.all(routePath, async (req, res, next) => {
		const store = createStore(reducers, {}, applyMiddleware(promise, thunk));
		const promises: ((store: Store<any>, req: Request) => Promise<any>)[] = route.prefetchData || [];
		const me = await initUserAccount(store, req);

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
		let html: string;
		try {
			html = await createComponents(req, store, route);
		} catch (error) {
			next(error);
			return;
		}

		if (!code) {
			code = 500;
			logger.warn('Invalid status code when trying to generate page', {
				path: routePath,
			});
		}

		if (route.noIndex || route.restricted || route.admin) {
			res.setHeader('X-Robots-Tag', 'noindex');
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
