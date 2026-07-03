import winston, {Logger, Format} from 'winston';

let logger: Logger;

export function initLogger() {
	const isDev = process.env.ENV === 'development';

	const addFormats: Format[] = [];
	if (isDev) {
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
		addFormats.push(winston.format.timestamp(), winston.format.json());
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
		transports: [new winston.transports.Console()],
	});
}

export {logger};
