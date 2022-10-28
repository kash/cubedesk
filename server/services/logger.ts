import winston, {Logger} from 'winston';
import {ElasticsearchTransport} from 'winston-elasticsearch';
import {getSearchClient} from './search';

let logger: Logger;

export function initLogger() {
	const transports = [];
	const isDev = process.env.ENV === 'development';

	const addFormats = [];
	if (isDev) {
		transports.push(new winston.transports.Console());
		addFormats.push(
			winston.format.timestamp({
				format: 'YYYY-MM-DD HH:MM:SS',
			})
		);
		addFormats.push(
			winston.format.colorize({
				level: true,
				message: true,
			}),
			winston.format.printf((info) => {
				const meta = info.metadata;
				const metaStr = meta && Object.keys(meta).length ? ' | ' + `${JSON.stringify(meta)}` : '';
				return `${info.level} ${info.timestamp}: ${info.message}${metaStr}`;
			})
		);
	} else {
		transports.push(
			new ElasticsearchTransport({
				client: getSearchClient(),
				level: process.env.LOG_LEVEL,
			})
		);

		addFormats.push(winston.format.json());
	}

	const defaultFormats = [
		winston.format.errors({stack: true}),
		winston.format.splat(),
		winston.format.metadata({fillExcept: ['message', 'level', 'timestamp', 'label']}),
		...addFormats,
	];

	logger = winston.createLogger({
		level: process.env.LOG_LEVEL,
		defaultMeta: {
			env: process.env.ENV,
		},
		exitOnError: false,
		format: winston.format.combine(...defaultFormats),
		transports,
	});
}

export {logger};
