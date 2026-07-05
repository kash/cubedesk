import {initThemeFromLocalStorage} from '@/util/themes/theme_init';
import 'seedrandom';
import * as Sentry from '@sentry/browser';
import {Integrations} from '@sentry/tracing';
import React from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import {HelmetProvider} from 'react-helmet-async';
import {Provider} from 'react-redux';
import {BrowserRouter, Switch} from 'react-router-dom';
import {applyMiddleware, createStore} from 'redux';
import promise from 'redux-promise-middleware';
import {thunk} from 'redux-thunk';
import reducers from '../reducers/reducers';
import {TRPCProvider} from '../util/api';
import {routes} from './layout/Routes';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/index.css';
import {setStore} from './store';

const preloadedState = JSON.parse(window.__STORE__);
initThemeFromLocalStorage(preloadedState?.account?.me?.id);
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
 
