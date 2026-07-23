import {
	buildTimerEvent,
	GanTimerEvent,
	GanTimerRecordedTimes,
	GanTimerState,
	hexdump,
	isValidEventData,
	makeTimeFromRaw,
	normalizeUuid,
} from '@/components/timer/time-display/gan-timer/protocol';
import {Observable, Subject} from 'rxjs';

// GAN Smart Timer bluetooth service and characteristic UUIDs
export const GAN_TIMER_SERVICE = '0000fff0-0000-1000-8000-00805f9b34fb';
export const GAN_TIMER_TIME_CHARACTERISTIC = '0000fff2-0000-1000-8000-00805f9b34fb';
export const GAN_TIMER_STATE_CHARACTERISTIC = '0000fff5-0000-1000-8000-00805f9b34fb';

// GAN timers report themselves under a handful of casings depending on the OS.
// macOS in particular has been seen advertising the lowercase variant.
const NAME_PREFIXES = ['GAN', 'Gan', 'gan'];

const DEFAULT_RETRIES = 3;
const DEFAULT_RETRY_DELAY_MS = 250;

export interface GanTimerConnectOptions {
	/** Attempts made for each flaky GATT operation. Exposed for tests. */
	retries?: number;
	/** Delay between attempts. Exposed for tests. */
	retryDelayMs?: number;
}

/**
 * Error raised when we cannot establish a usable connection to the timer.
 *
 * `cancelled` marks the case where the user simply dismissed the browser's
 * device chooser, which should not be reported to them as a failure.
 */
export class GanTimerConnectionError extends Error {
	readonly cancelled: boolean;
	readonly cause?: unknown;

	constructor(message: string, {cancelled = false, cause}: {cancelled?: boolean; cause?: unknown} = {}) {
		super(message);
		this.name = 'GanTimerConnectionError';
		this.cancelled = cancelled;
		this.cause = cause;
	}
}

/** Connection object representing the timer connection API and state */
export interface GanTimerConnection {
	/** Stream of timer state events */
	events$: Observable<GanTimerEvent>;
	/** Retrieve the last times recorded by the timer */
	getRecordedTimes(): Promise<GanTimerRecordedTimes>;
	/** Disconnect from the timer */
	disconnect(): Promise<void>;
}

function delay(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Retry a flaky GATT operation.
 *
 * Chrome's Web Bluetooth stack — especially on macOS, where CoreBluetooth caches
 * GATT attributes — regularly fails the first service or characteristic lookup
 * right after connecting, then succeeds on a second attempt.
 */
async function withRetry<T>(operation: () => Promise<T>, retries: number, retryDelayMs: number): Promise<T> {
	let lastError: unknown;

	for (let attempt = 0; attempt < retries; attempt++) {
		try {
			return await operation();
		} catch (err) {
			lastError = err;
			if (attempt < retries - 1) {
				await delay(retryDelayMs);
			}
		}
	}

	throw lastError;
}

/** True when the rejection means "the user closed the device chooser" */
function isChooserCancellation(err: unknown): boolean {
	const name = (err as Error)?.name;
	const message = (err as Error)?.message ?? '';
	return (
		name === 'AbortError' ||
		(name === 'NotFoundError' && /cancell?ed|chooser|user/i.test(message))
	);
}

async function requestTimerDevice(): Promise<BluetoothDevice> {
	if (typeof navigator === 'undefined' || !navigator.bluetooth) {
		throw new GanTimerConnectionError(
			'Web Bluetooth is not available in this browser. Try Chrome on desktop or Android, or Bluefy on iOS.'
		);
	}

	try {
		return await navigator.bluetooth.requestDevice({
			filters: [
				...NAME_PREFIXES.map((namePrefix) => ({namePrefix})),
				// Match on the advertised service too. Not every timer presents a
				// name the browser will surface, and without this they never show
				// up in the chooser at all.
				{services: [GAN_TIMER_SERVICE]},
			],
			optionalServices: [GAN_TIMER_SERVICE],
		});
	} catch (err) {
		if (isChooserCancellation(err)) {
			throw new GanTimerConnectionError('Timer selection was cancelled.', {
				cancelled: true,
				cause: err,
			});
		}
		throw new GanTimerConnectionError(
			'Could not open the Bluetooth device chooser. Make sure Bluetooth is turned on and this page is served over HTTPS.',
			{cause: err}
		);
	}
}

/**
 * Locate the timer service.
 *
 * Looking the service up by UUID is the fast path, but it is also the operation
 * that fails most often in the wild, so fall back to enumerating every primary
 * service and matching the UUID ourselves.
 */
async function resolveTimerService(
	server: BluetoothRemoteGATTServer,
	{retries, retryDelayMs}: Required<GanTimerConnectOptions>
): Promise<BluetoothRemoteGATTService> {
	try {
		return await withRetry(() => server.getPrimaryService(GAN_TIMER_SERVICE), retries, retryDelayMs);
	} catch (lookupError) {
		let services: BluetoothRemoteGATTService[];
		try {
			services = await withRetry(() => server.getPrimaryServices(), retries, retryDelayMs);
		} catch {
			throw new GanTimerConnectionError(
				'Connected to the timer, but its Bluetooth services could not be read. Turn the timer off and on, then try again.',
				{cause: lookupError}
			);
		}

		const service = services.find((s) => normalizeUuid(s.uuid) === GAN_TIMER_SERVICE);
		if (!service) {
			const found = services.map((s) => normalizeUuid(s.uuid)).join(', ') || 'none';
			throw new GanTimerConnectionError(
				`This device does not expose the GAN Smart Timer service. Services found: ${found}.`,
				{cause: lookupError}
			);
		}

		return service;
	}
}

/**
 * Connect to a GAN Smart Timer over Web Bluetooth.
 *
 * Written against the same protocol as `gan-web-bluetooth`, but deliberately
 * more forgiving about how the device presents itself: the time characteristic
 * is optional, service discovery is retried, and a malformed notification is
 * dropped rather than tearing down the event stream.
 */
export async function connectGanTimer(
	options: GanTimerConnectOptions = {}
): Promise<GanTimerConnection> {
	const settings: Required<GanTimerConnectOptions> = {
		retries: options.retries ?? DEFAULT_RETRIES,
		retryDelayMs: options.retryDelayMs ?? DEFAULT_RETRY_DELAY_MS,
	};

	const device = await requestTimerDevice();

	if (!device.gatt) {
		throw new GanTimerConnectionError('The selected device does not support GATT connections.');
	}
	const gatt = device.gatt;

	let server: BluetoothRemoteGATTServer;
	try {
		server = await withRetry(() => gatt.connect(), settings.retries, settings.retryDelayMs);
	} catch (err) {
		throw new GanTimerConnectionError(
			'Could not connect to the timer. Make sure it is switched on and not already paired with another app or tab.',
			{cause: err}
		);
	}

	// From here on the device is connected, and will show itself as connected on
	// its own display. Anything that goes wrong has to hang the link up again,
	// otherwise the timer sits there looking connected while CubeDesk is not.
	try {
		const service = await resolveTimerService(server, settings);

		const stateCharacteristic = await withRetry(
			() => service.getCharacteristic(GAN_TIMER_STATE_CHARACTERISTIC),
			settings.retries,
			settings.retryDelayMs
		).catch((err) => {
			throw new GanTimerConnectionError(
				'The timer did not expose its state characteristic, so CubeDesk cannot receive solve events from it.',
				{cause: err}
			);
		});

		// Only used by getRecordedTimes(). A timer that does not expose it is
		// still perfectly usable, so never let this block the connection.
		const timeCharacteristic = await service
			.getCharacteristic(GAN_TIMER_TIME_CHARACTERISTIC)
			.catch(() => null);

		const eventSubject = new Subject<GanTimerEvent>();

		const onStateChanged = (evt: Event) => {
			const data = (evt.target as BluetoothRemoteGATTCharacteristic)?.value;
			if (!isValidEventData(data)) {
				// Log and move on. Erroring the stream here would permanently kill
				// the timer over a single corrupt packet.
				console.warn('[GanTimer] discarding invalid packet from timer:', hexdump(data));
				return;
			}

			const event = buildTimerEvent(data as DataView);
			if (event) {
				eventSubject.next(event);
			}
		};

		stateCharacteristic.addEventListener('characteristicvaluechanged', onStateChanged);

		try {
			await withRetry(
				() => stateCharacteristic.startNotifications(),
				settings.retries,
				settings.retryDelayMs
			);
		} catch (err) {
			stateCharacteristic.removeEventListener('characteristicvaluechanged', onStateChanged);
			throw new GanTimerConnectionError(
				'Connected to the timer, but CubeDesk could not subscribe to its updates. Turn the timer off and on, then try again.',
				{cause: err}
			);
		}

		let closed = false;
		const teardown = async () => {
			if (closed) {
				return;
			}
			closed = true;

			device.removeEventListener('gattserverdisconnected', onGattDisconnected);
			stateCharacteristic.removeEventListener('characteristicvaluechanged', onStateChanged);

			// Announce the disconnect synchronously so the UI reacts immediately,
			// then let the GATT teardown finish in the background.
			eventSubject.next({state: GanTimerState.DISCONNECT});
			eventSubject.complete();

			if (gatt.connected) {
				await stateCharacteristic.stopNotifications().catch(() => undefined);
				gatt.disconnect();
			}
		};

		function onGattDisconnected() {
			void teardown();
		}

		device.addEventListener('gattserverdisconnected', onGattDisconnected);

		return {
			events$: eventSubject.asObservable(),
			disconnect: teardown,
			getRecordedTimes: async (): Promise<GanTimerRecordedTimes> => {
				if (!timeCharacteristic) {
					throw new GanTimerConnectionError(
						'This timer does not expose its recorded times.'
					);
				}

				const data = await timeCharacteristic.readValue();
				if (!data || data.byteLength < 16) {
					throw new GanTimerConnectionError(
						'Invalid time value received from the timer.'
					);
				}

				return {
					displayTime: makeTimeFromRaw(data, 0),
					previousTimes: [
						makeTimeFromRaw(data, 4),
						makeTimeFromRaw(data, 8),
						makeTimeFromRaw(data, 12),
					],
				};
			},
		};
	} catch (err) {
		if (gatt.connected) {
			gatt.disconnect();
		}
		throw err instanceof GanTimerConnectionError
			? err
			: new GanTimerConnectionError('Could not set up the timer connection.', {cause: err});
	}
}
