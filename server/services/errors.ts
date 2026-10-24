import {logger} from '@/server/services/logger';
import * as Sentry from '@sentry/node';

export function reportError(message: string, error: unknown, tags: Record<string, string> = {}) {
	const details = error instanceof Error ? {message: error.message, stack: error.stack} : error;

	logger.error(message, {error: details, ...tags});
	Sentry.captureException(error, {tags});
}
