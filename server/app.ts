import 'dotenv/config';
import 'ignore-styles';
import express from 'express';
import https from 'https';
import http from 'http';
import fs from 'fs';
import {initLogger, logger} from './services/logger';
import * as Sentry from '@sentry/node';
import '@sentry/tracing';

import {initLLStates} from './util/solve/ll_states';
import {initSocket} from './match/init';
import 'seedrandom';
import {initMjmlTemplates} from './services/ses';
import colors from 'colors';
import {mapPathToPage} from './router';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import {initRedisClient} from './services/redis';
import Discord from './services/discord';
import {initCronJobs} from './services/cron';
import {exposeResourcesForSearchEngines} from './middlewares/search_engines';
import {createExpressMiddleware} from '@trpc/server/adapters/express';
import {appRouter} from './trpc/router';
import {createTRPCContext} from './trpc/context';

// initPrisma();

colors.enable();
global.colors = colors;

const port = process.env.PORT || 3000;
const env = process.env.ENV || 'development';
const isDev = env === 'development';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
BigInt.prototype.toJSON = function() {
	return this.toString();
};

const app = express();
global.app = app;

async function setupViteMiddleware() {
	if (!isDev) {
		return;
	}

	const {createServer: createViteServer} = await import('vite');
	const vite = await createViteServer({
		appType: 'custom',
		server: {middlewareMode: true},
	});

	app.use(vite.middlewares);
}

function setupNotFoundHandler() {
	app.use((req, res, next) => {
		if (req.path.startsWith('/trpc')) {
			return next();
		}

		res.status(404).sendFile(`${__dirname}/resources/not_found.html`);
	});
}

process.once('SIGUSR2', () => {
	process.kill(process.pid, 'SIGUSR2');
});

process.on('SIGINT', () => {
	process.kill(process.pid, 'SIGINT');
});

// Initialize logging
initLogger();

app.use(bodyParser.json({limit: '200mb'}));
app.use(cookieParser());

exposeResourcesForSearchEngines();

app.use((req, res, next) => {
	req.headers.origin = req.headers.origin || req.headers.host;
	next();
});

if (isDev) {
	app.use('/public', express.static(`${__dirname}/../public`));
}

process.on('SIGINT', () => process.exit(1));
process.on('SIGTERM', () => process.exit());

app.set('port', port);

global.siteUrl = process.env.BASE_URI;

if (!isDev) {
	Sentry.init({
		dsn: 'https://2f30d529a6b242449dc1f86ec18c1ba3@o637154.ingest.sentry.io/5770453',
		release: process.env.RELEASE_NAME,
		tracesSampleRate: 1.0,
		environment: env
	});
}

(async () => {
	let server: any;

	app.use(
		'/trpc',
		createExpressMiddleware({
			router: appRouter,
			createContext: createTRPCContext,
		})
	);

	// Setup code
	initLLStates();
	initMjmlTemplates();

	await setupViteMiddleware();
	mapPathToPage();
	setupNotFoundHandler();

	if (isDev && process.env.HTTPS === 'true') {
		const options = {
			key: fs.readFileSync('./certs/server.key'),
			cert: fs.readFileSync('./certs/server.cert')
		};

		server = https.createServer(options, app);
		server.listen(port, () => console.info(`Listening on port ${port}!`.magenta));
	} else {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		server = http.Server(app);
		server.listen(port, () => console.info(`Listening on port ${port}!`.magenta));
	}

	// Initiate services
	try {
		await initRedisClient();
		await Discord.init();
		initCronJobs();
		initSocket(server);
	} catch (e) {
		logger.error('Could not initiate critical service', {
			error: e
		});
	}
})();
