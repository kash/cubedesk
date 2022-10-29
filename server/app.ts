import 'ignore-styles';
import 'reflect-metadata';
import express from 'express';
import https from 'https';
import http from 'http';
import fs from 'fs';
import {getPrisma, initPrisma} from './database';
import requestIp from 'request-ip';

initPrisma();

import {initLogger, logger} from './services/logger';
import {ApolloServer} from 'apollo-server-express';
import {baseResolvers, baseScalars} from './graphql';
import * as Sentry from '@sentry/node';
import '@sentry/tracing';

import {initLLStates} from './util/solve/ll_states';
import {initSocket} from './match/init';
import 'seedrandom';
import './services/readme';
import {initMjmlTemplates} from './services/ses';
import GraphQLError from './util/graphql_error';
import colors from 'colors';
import {buildSchema} from 'type-graphql';
import {mergeSchemas} from '@graphql-tools/schema';
import {mapPathToPage} from './router';
import {getMe} from './util/auth';
import * as resolverList from './resolvers/_resolvers';
import * as schemaList from './schemas/_schemas';
import cookieParser from 'cookie-parser';
import * as models from './api/_index';
import bodyParser from 'body-parser';
import {customAuthChecker} from './middlewares/auth';
import {GraphQLUpload, graphqlUploadExpress} from 'graphql-upload';
import {ErrorCode, ErrorMessage} from './constants/errors';
import {printSchema} from 'graphql';
import {initRedisClient} from './services/redis';
import Discord from './services/discord';
import {initCronJobs} from './services/cron';
import {initWebhookListeners, initWebhookListenersRaw} from './webhooks';
import {exposeResourcesForSearchEngines} from './middlewares/search_engines';
import {initSearch} from './services/search';

colors.enable();
global.colors = colors;

const port = process.env.PORT || 3000;
const env = process.env.ENV || 'development';
const isDev = env === 'development';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
BigInt.prototype.toJSON = function () {
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

const gqlTypes: any[] = [];
const gqlQueries: any[] = [];
const gqlMutations: any[] = [];
let gqlMutationActions = {};
let gqlQueryActions = {};

function parseList(l: {[key: string]: any}) {
	const modelKeys = [...Object.keys(l)];

	for (const key of modelKeys) {
		const model = l[key];

		if (!model.gqlType && !model.gqlQuery && !model.gqlMutation && !model.queryActions && !model.mutateActions) {
			parseList(model);
			continue;
		}

		gqlTypes.push(model.gqlType || '');
		gqlQueries.push(model.gqlQuery || '');
		gqlMutations.push(model.gqlMutation || '');
		gqlMutationActions = {
			...gqlMutationActions,
			...(model.mutateActions || {}),
		};
		gqlQueryActions = {
			...gqlQueryActions,
			...(model.queryActions || {}),
		};
	}
}

parseList(models);

process.on('SIGINT', () => process.exit(1));
process.on('SIGTERM', () => process.exit());

app.set('port', port);

global.siteUrl = process.env.BASE_URI;

if (!isDev) {
	Sentry.init({
		dsn: 'https://2f30d529a6b242449dc1f86ec18c1ba3@o637154.ingest.sentry.io/5770453',
		release: process.env.RELEASE_NAME,
		tracesSampleRate: 1.0,
		environment: env,
	});
}

(async () => {
	// TODO remove eventually
	const oldTypeDef = `
		${baseScalars}
		${gqlTypes.join('\n')}
		
		type Query { ${gqlQueries.join('\n')} }
		type Mutation { ${gqlMutations.join('\n')} }
	`;

	const oldResolver = {
		...baseResolvers,
		Upload: GraphQLUpload,
		Query: {...gqlQueryActions},
		Mutation: {...gqlMutationActions},
	};

	const newSchema = await buildSchema({
		resolvers: Object.values(resolverList) as any,
		orphanedTypes: Object.values(schemaList) as any,
		authChecker: customAuthChecker,
		nullableByDefault: true,
	});

	const mergedSchema = mergeSchemas({
		schemas: [newSchema],
		typeDefs: oldTypeDef,
		resolvers: oldResolver,
	});

	// Start server
	let server: any = new ApolloServer({
		uploads: false,
		schema: mergedSchema,
		playground: isDev,
		context: async ({req, res}) => {
			const user = await getMe(req);
			const ipAddress = requestIp.getClientIp(req);

			if (user && (user.banned_until || user.banned_forever)) {
				throw new GraphQLError(ErrorCode.FORBIDDEN, ErrorMessage.BANNED);
			}

			return {user, ipAddress, req, res, prisma: getPrisma()};
		},
	});

	const path = '/graphql';

	app.use(graphqlUploadExpress());
	server.applyMiddleware({app, path});

	// Setup code
	initLLStates();
	initMjmlTemplates();

	if (isDev) {
		const schemaStr = printSchema(mergedSchema);
		fs.writeFile('schema.graphql', schemaStr, (err) => {
			if (err) {
				logger.error('Error writing GraphQL schema to file', {
					error: err,
				});
			}
		});
	}

	if (isDev && process.env.HTTPS === 'true') {
		const options = {
			key: fs.readFileSync('./certs/server.key'),
			cert: fs.readFileSync('./certs/server.cert'),
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
			error: e,
		});
	}
})();

app.use((req, res, next) => {
	if (req.path.startsWith('/graphql')) {
		return next();
	}

	res.status(404).sendFile(`${__dirname}/resources/not_found.html`);
});
