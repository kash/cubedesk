import React from 'react';
import 'seedrandom';
import {thunk} from 'redux-thunk';
import {hydrateRoot} from 'react-dom/client';
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
import {initApollo} from './api';

import 'react-toastify/dist/ReactToastify.css';

const preloadedState = JSON.parse(window.__STORE__);
const store = createStore(reducers, preloadedState, applyMiddleware(promise, thunk));

const apolloClient = initApollo();
setStore(store);

delete window.__STORE__;

import '../styles/index.scss';
import {mapSingleRoute} from './map_route';
import {ApolloProvider} from '@apollo/client';

Sentry.init({
	dsn: 'https://feee16c821834f408ae2453577b10f9e@o637154.ingest.sentry.io/5756098',
	release: process.env.RELEASE_NAME,
	environment: process.env.ENV,
	integrations: [new Integrations.BrowserTracing()],
	tracesSampleRate: 1.0,
});

hydrateRoot(
	document.getElementById('app')!,
	<ApolloProvider client={apolloClient}>
		<HelmetProvider>
			<Provider store={store as any}>
				<BrowserRouter>
					<Switch>{routes.map((route) => mapSingleRoute(route))}</Switch>
				</BrowserRouter>
			</Provider>
		</HelmetProvider>
	</ApolloProvider>
);
/* eslint-enable */
