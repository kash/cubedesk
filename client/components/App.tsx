import React from 'react';
import 'seedrandom';
import {thunk} from 'redux-thunk';
import {createRoot, hydrateRoot} from 'react-dom/client';
import * as Sentry from '@sentry/browser';
import {Integrations} from '@sentry/tracing';
import promise from 'redux-promise-middleware';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {Switch, BrowserRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {routes} from './layout/Routes';
import reducers from '../reducers/reducers';
import {setStore} from './store';
import {TRPCProvider} from '../util/api';

import 'react-toastify/dist/ReactToastify.css';
import '../styles/index.css';

const preloadedState = JSON.parse(window.__STORE__);
const store = createStore(reducers, preloadedState, applyMiddleware(promise, thunk));

setStore(store);

delete window.__STORE__;


import {mapSingleRoute} from './map-route';

Sentry.init({
	dsn: 'https://feee16c821834f408ae2453577b10f9e@o637154.ingest.sentry.io/5756098',
	release: process.env.RELEASE_NAME,
	environment: process.env.ENV,
	integrations: [new Integrations.BrowserTracing()],
	tracesSampleRate: 1.0,
});

const appNode = document.getElementById('app')!;

const tree = (
	<TRPCProvider>
		<HelmetProvider>
			<Provider store={store as any}>
				<BrowserRouter>
					<Switch>{routes.map((route) => mapSingleRoute(route))}</Switch>
				</BrowserRouter>
			</Provider>
		</HelmetProvider>
	</TRPCProvider>
);

// Dev serves an empty shell (no SSR), so client-render instead of hydrate.
if (process.env.ENV === 'development') {
	createRoot(appNode).render(tree);
} else {
	hydrateRoot(appNode, tree);
}
/* eslint-enable */
