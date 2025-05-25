import 'ignore-styles';
import 'reflect-metadata';
import express from 'express';
import https from 'https';
import http from 'http';
import fs from 'fs';
import {initPrisma} from './services/database';
import {initLogger, logger} from './services/logger';
import * as Sentry from '@sentry/node';
import '@sentry/tracing';

import {initLLStates} from './utils/solve/ll_states';
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
import {initWebhookListeners, initWebhookListenersRaw} from './webhooks';
import {exposeResourcesForSearchEngines} from './middlewares/search_engines';
import {initSearch} from './services/search';

initPrisma();

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

process.once('SIGUSR2', () => {
	process.kill(process.pid, 'SIGUSR2');
});

process.on('SIGINT', () => {
	process.kill(process.pid, 'SIGINT');
});

// Initialize logging
initSearch();
initLogger();

// This must be before the bodyparser before RAW data needs to be passed to Stripe
initWebhookListenersRaw();

app.use(bodyParser.json({limit: '200mb'}));
app.use(cookieParser());

initWebhookListeners();
exposeResourcesForSearchEngines();

app.use((req, res, next) => {
	req.headers.origin = req.headers.origin || req.headers.host;
	next();
});

if (isDev) {
	app.use('/dist', express.static(`${__dirname}/../dist`));
	app.use('/public', express.static(`${__dirname}/../public`));
}

mapPathToPage();


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
	// Setup code
	initLLStates();
	initMjmlTemplates();

	let server: any;

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

app.use((req, res, next) => {
	res.status(404).sendFile(`${__dirname}/resources/not_found.html`);
});
