/**
 * Error raised when a smart cube cannot be connected.
 *
 * `cancelled` marks the cases where the user simply dismissed the browser's
 * device chooser or a prompt, which should not be reported back as a failure.
 */
export class SmartCubeConnectionError extends Error {
	readonly cancelled: boolean;
	readonly cause?: unknown;

	constructor(message: string, {cancelled = false, cause}: {cancelled?: boolean; cause?: unknown} = {}) {
		super(message);
		this.name = 'SmartCubeConnectionError';
		this.cancelled = cancelled;
		this.cause = cause;
	}
}

/** True when a rejection means "the user closed the device chooser". */
export function isChooserCancellation(err: unknown): boolean {
	const name = (err as Error)?.name;
	const message = (err as Error)?.message ?? '';
	return name === 'AbortError' || (name === 'NotFoundError' && /cancell?ed|chooser|user/i.test(message));
}
