import {SmartCubeConnectionError} from '@/components/timer/smart-cube/bluetooth/errors';
import {connectGanCube, GanCubeConnection, MacAddressProvider} from 'gan-web-bluetooth';

/**
 * Primary services for the three GAN cube protocol generations.
 *
 * Gen2 covers the GAN356 i3 and the rest of the i Carry family, Gen3 the
 * i Carry 2, and Gen4 the 12 ui Maglev / 14 ui FreePlay. All three have to be
 * declared as optional services up front, otherwise `getPrimaryServices()`
 * hides them and the library decides the cube is an unsupported model.
 */
export const GAN_CUBE_SERVICES = [
	// Gen2 — GAN Mini ui FreePlay, GAN12 ui, GAN356 i Carry / i Carry S, GAN356 i3, Monster Go 3Ai
	'6e400001-b5a3-f393-e0a9-e50e24dc4179',
	// Gen3 — GAN356 i Carry 2
	'8653000a-43e6-47b7-9cb0-5fc21d4ae340',
	// Gen4 — GAN12 ui Maglev, GAN14 ui FreePlay
	'00000010-0000-fff7-fff6-fff5fff4fff0',
];

/**
 * GAN hardware advertises under a few different brands: "GAN-xxxx" for the
 * mainline cubes, "MG" for Monster Go, and "AiCube" for the MoYu-branded AI
 * cube. Casing varies by platform — macOS has been seen advertising lowercase.
 */
export const GAN_CUBE_NAME_PREFIXES = ['GAN', 'MG', 'AiCube'];

/**
 * GAN puts the cube's MAC address in the manufacturer-specific section of its
 * BLE advertisement, under a company identifier whose low byte is always 0x01.
 *
 * Chrome strips manufacturer data for any company identifier that was not
 * declared in `requestDevice()`, so the whole range has to be listed or the
 * automatic MAC lookup comes back empty and every user gets asked to type their
 * cube's MAC address in by hand.
 */
export const GAN_COMPANY_IDENTIFIERS = Array.from({length: 256}, (_, i) => (i << 8) | 0x01);

/** Key prefix for MAC addresses the user had to enter manually. */
const MAC_STORAGE_PREFIX = 'smart-cube-mac:';

/** Attempts the user gets at typing a well-formed MAC address before we give up. */
const MAC_PROMPT_ATTEMPTS = 3;

/** Error raised when we cannot establish a usable connection to a GAN cube. */
export class GanCubeConnectionError extends SmartCubeConnectionError {
	constructor(message: string, options: {cancelled?: boolean; cause?: unknown} = {}) {
		super(message, options);
		this.name = 'GanCubeConnectionError';
	}
}

/** True when `name` looks like one of the GAN smart cubes we can drive. */
export function isGanCubeName(name: string | null | undefined): boolean {
	if (!name) {
		return false;
	}

	const lowered = name.toLowerCase();
	return GAN_CUBE_NAME_PREFIXES.some((prefix) => lowered.startsWith(prefix.toLowerCase()));
}

/**
 * Accept a MAC address in any of the shapes people actually paste — colons,
 * dashes, spaces or nothing at all — and return the canonical `AB:CD:EF:12:34:56`
 * form, or null when it is not a MAC address at all.
 *
 * Worth being strict about: the library turns the MAC into the salt for the
 * cube's AES key, so a malformed one does not fail loudly, it just decrypts every
 * packet into noise.
 */
export function normalizeMacAddress(value: string | null | undefined): string | null {
	if (!value) {
		return null;
	}

	const hex = value.trim().replace(/[^0-9a-f]/gi, '');
	if (hex.length !== 12 || !/^[0-9a-f]{12}$/i.test(hex)) {
		return null;
	}

	return (hex.toUpperCase().match(/.{2}/g) as string[]).join(':');
}

/** Read back a MAC address the user previously entered for this device. */
export function readStoredMacAddress(deviceId: string): string | null {
	if (!deviceId) {
		return null;
	}

	try {
		return normalizeMacAddress(window.localStorage.getItem(MAC_STORAGE_PREFIX + deviceId));
	} catch {
		// Storage can be unavailable in private windows. Not fatal, just means
		// the user is asked again next time.
		return null;
	}
}

/** Remember a MAC address so the user only ever types it once per cube. */
export function storeMacAddress(deviceId: string, mac: string): void {
	if (!deviceId) {
		return;
	}

	try {
		window.localStorage.setItem(MAC_STORAGE_PREFIX + deviceId, mac);
	} catch {
		// See readStoredMacAddress — nothing we can do, and nothing worth failing for.
	}
}

/** Forget a stored MAC address, so a bad entry can be corrected on the next attempt. */
export function forgetStoredMacAddress(deviceId: string): void {
	if (!deviceId) {
		return;
	}

	try {
		window.localStorage.removeItem(MAC_STORAGE_PREFIX + deviceId);
	} catch {
		// See readStoredMacAddress.
	}
}

function manualMacPromptMessage(device: BluetoothDevice, attempt: number): string {
	const lines: string[] = [];

	if (attempt > 0) {
		lines.push("That doesn't look like a MAC address. It should be 6 pairs of hex digits.");
		lines.push('');
	}

	lines.push(`CubeDesk could not read the MAC address of "${device.name || 'your cube'}".`);
	lines.push('GAN cubes need it before their Bluetooth data can be decoded.');
	lines.push('');
	lines.push('You can find it in the GAN Cube Station app under the cube’s details,');
	lines.push('or on the sticker inside the battery compartment.');

	if (typeof device.watchAdvertisements !== 'function') {
		lines.push('');
		lines.push('To let CubeDesk read it automatically instead, enable this Chrome flag');
		lines.push('and reload: chrome://flags/#enable-experimental-web-platform-features');
	}

	lines.push('');
	lines.push('MAC address (e.g. AB:CD:EF:12:34:56):');

	return lines.join('\n');
}

/**
 * Build the MAC address provider handed to `gan-web-bluetooth`.
 *
 * The library calls this twice: once before trying to read the MAC from the
 * cube's advertisement (returning null there lets the automatic lookup run), and
 * once more as a last resort if that came back empty.
 *
 * `promptForMac` is injectable so the prompt can be swapped out in tests.
 */
export function createMacAddressProvider(
	promptForMac: (message: string) => string | null = (message) => window.prompt(message)
): MacAddressProvider {
	return async (device: BluetoothDevice, isFallbackCall?: boolean): Promise<string | null> => {
		const stored = readStoredMacAddress(device.id);

		if (!isFallbackCall) {
			// A MAC we already know beats re-reading the advertisement, which is
			// slow and needs a Chrome flag on most installs. Otherwise return null
			// and let the library try the automatic lookup.
			return stored;
		}

		// The automatic lookup failed. A stored value would already have been
		// returned above, so this really is down to the user.
		for (let attempt = 0; attempt < MAC_PROMPT_ATTEMPTS; attempt++) {
			const entered = promptForMac(manualMacPromptMessage(device, attempt));

			// Null means the user dismissed the prompt — stop asking.
			if (entered === null) {
				throw new GanCubeConnectionError('Cube connection was cancelled.', {cancelled: true});
			}

			const mac = normalizeMacAddress(entered);
			if (mac) {
				storeMacAddress(device.id, mac);
				return mac;
			}
		}

		throw new GanCubeConnectionError(
			'CubeDesk could not determine your cube’s MAC address, which GAN cubes need before their Bluetooth data can be decoded.'
		);
	};
}

/**
 * Temporarily make `bluetooth.requestDevice()` resolve to a device we already
 * have, and hand back a function that undoes it.
 *
 * The override removes itself as soon as it is used, so the global is only
 * patched for the brief synchronous window before the library takes the device,
 * never while we sit awaiting GATT setup.
 */
function overrideRequestDevice(bluetooth: Bluetooth, device: BluetoothDevice): () => void {
	const original = Object.getOwnPropertyDescriptor(bluetooth, 'requestDevice');

	let restored = false;
	const restore = () => {
		if (restored) {
			return;
		}
		restored = true;

		if (original) {
			Object.defineProperty(bluetooth, 'requestDevice', original);
		} else {
			Reflect.deleteProperty(bluetooth, 'requestDevice');
		}
	};

	Object.defineProperty(bluetooth, 'requestDevice', {
		configurable: true,
		writable: true,
		value: () => {
			restore();
			return Promise.resolve(device);
		},
	});

	return restore;
}

/** Turn whatever the library threw into something worth showing a user. */
function asConnectionError(err: unknown): GanCubeConnectionError {
	if (err instanceof GanCubeConnectionError) {
		return err;
	}

	const message = err instanceof Error ? err.message : String(err);
	const name = (err as Error)?.name ?? '';

	if (/unable to determine cube mac address/i.test(message)) {
		return new GanCubeConnectionError(
			'CubeDesk could not determine your cube’s MAC address, which GAN cubes need before their Bluetooth data can be decoded.',
			{cause: err}
		);
	}

	if (/can't find target ble services/i.test(message)) {
		return new GanCubeConnectionError(
			'That device does not expose any of the GAN smart cube Bluetooth services, so CubeDesk cannot read moves from it. Make sure you picked your cube and not a GAN Smart Timer or another nearby device.',
			{cause: err}
		);
	}

	if (name === 'NetworkError' || /gatt (server is disconnected|operation failed)/i.test(message)) {
		return new GanCubeConnectionError(
			'Lost the Bluetooth connection to the cube while setting it up. Give it a turn to wake it, close any other tab or app connected to it, then try again.',
			{cause: err}
		);
	}

	if (name === 'SecurityError' || /user gesture/i.test(message)) {
		return new GanCubeConnectionError(
			'The browser blocked the Bluetooth connection because it was not tied to a click. Press Connect again.',
			{cause: err}
		);
	}

	return new GanCubeConnectionError(
		`Could not set up the cube connection${message ? `: ${message}` : '.'}`,
		{cause: err}
	);
}

/**
 * Connect to a GAN smart cube that the user has already picked from the browser's
 * device chooser.
 *
 * `gan-web-bluetooth` only exposes `connectGanCube()`, which opens a chooser of
 * its own and has never accepted a pre-selected device. Calling it after our own
 * chooser meant a second `requestDevice()` outside of a user gesture, which
 * Chrome rejects outright — leaving the cube bonded with the OS ("paired") but
 * never actually connected to CubeDesk. Feed the library the device it would
 * otherwise have asked for.
 */
export async function connectGanCubeDevice(
	device: BluetoothDevice,
	macAddressProvider: MacAddressProvider = createMacAddressProvider()
): Promise<GanCubeConnection> {
	const bluetooth = typeof navigator === 'undefined' ? undefined : navigator.bluetooth;
	if (!bluetooth) {
		throw new GanCubeConnectionError(
			'Web Bluetooth is not available in this browser. Try Chrome on desktop or Android, or Bluefy on iOS.'
		);
	}

	const restore = overrideRequestDevice(bluetooth, device);

	try {
		return await connectGanCube(macAddressProvider);
	} catch (err) {
		throw asConnectionError(err);
	} finally {
		// No-op when the library already consumed the override, but the library
		// can throw before reaching requestDevice() and the patch must not leak.
		restore();
	}
}
