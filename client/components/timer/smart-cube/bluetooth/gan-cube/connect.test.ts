import {SmartCubeConnectionError} from '@/components/timer/smart-cube/bluetooth/errors';
import {
	connectGanCubeDevice,
	createMacAddressProvider,
	forgetStoredMacAddress,
	GAN_COMPANY_IDENTIFIERS,
	GanCubeConnectionError,
	isGanCubeName,
	normalizeMacAddress,
	readStoredMacAddress,
	storeMacAddress,
} from '@/components/timer/smart-cube/bluetooth/gan-cube/connect';
import {connectGanCube} from 'gan-web-bluetooth';

jest.mock('gan-web-bluetooth', () => ({
	connectGanCube: jest.fn(),
}));

const mockedConnectGanCube = connectGanCube as jest.MockedFunction<typeof connectGanCube>;

/** Node exposes `navigator` as a non-writable accessor, so redefine it outright */
function setNavigator(value: unknown) {
	Object.defineProperty(global, 'navigator', {value, configurable: true, writable: true});
}

function setLocalStorage() {
	const store = new Map<string, string>();
	Object.defineProperty(global, 'window', {
		configurable: true,
		writable: true,
		value: {
			localStorage: {
				getItem: (k: string) => store.get(k) ?? null,
				setItem: (k: string, v: string) => void store.set(k, v),
				removeItem: (k: string) => void store.delete(k),
			},
		},
	});
	return store;
}

function fakeDevice(overrides: Partial<BluetoothDevice> = {}): BluetoothDevice {
	return {
		id: 'device-id',
		name: 'GAN-1a2b3c',
		...overrides,
	} as BluetoothDevice;
}

const fakeConnection = {deviceName: 'GAN356 i3', deviceMAC: 'AB:CD:EF:12:34:56'};

describe('connectGanCubeDevice', () => {
	afterEach(() => {
		jest.clearAllMocks();
		delete (global as any).navigator;
		delete (global as any).window;
	});

	/**
	 * The bug behind issue #185: the library opens its own device chooser, and a
	 * second requestDevice() outside of a user gesture is rejected by Chrome, so
	 * cubes bonded with the OS ("paired") but never connected to CubeDesk.
	 */
	it('gives the library the already-selected device instead of opening a second chooser', async () => {
		const realRequestDevice = jest.fn().mockRejectedValue(
			Object.assign(new Error('Must be handling a user gesture to show a permission request.'), {
				name: 'SecurityError',
			})
		);
		setNavigator({bluetooth: {requestDevice: realRequestDevice}});

		const device = fakeDevice();
		let deviceSeenByLibrary: BluetoothDevice | null = null;

		mockedConnectGanCube.mockImplementation(async () => {
			// Stand in for what the library does internally.
			deviceSeenByLibrary = await navigator.bluetooth!.requestDevice({});
			return fakeConnection as any;
		});

		await expect(connectGanCubeDevice(device)).resolves.toBe(fakeConnection);

		expect(deviceSeenByLibrary).toBe(device);
		expect(realRequestDevice).not.toHaveBeenCalled();
	});

	it('restores the real requestDevice once the library has taken the device', async () => {
		const realRequestDevice = jest.fn();
		const bluetooth = {requestDevice: realRequestDevice};
		setNavigator({bluetooth});

		mockedConnectGanCube.mockImplementation(async () => {
			await navigator.bluetooth!.requestDevice({});
			// A later call - anything else on the page - must reach the real chooser.
			expect(navigator.bluetooth!.requestDevice).toBe(realRequestDevice);
			return fakeConnection as any;
		});

		await connectGanCubeDevice(fakeDevice());

		expect(bluetooth.requestDevice).toBe(realRequestDevice);
	});

	it('restores the real requestDevice when the library throws before using it', async () => {
		const realRequestDevice = jest.fn();
		const bluetooth = {requestDevice: realRequestDevice};
		setNavigator({bluetooth});

		mockedConnectGanCube.mockRejectedValue(new Error('boom'));

		await expect(connectGanCubeDevice(fakeDevice())).rejects.toThrow(GanCubeConnectionError);
		expect(bluetooth.requestDevice).toBe(realRequestDevice);
	});

	it('reports a helpful message when the cube exposes no GAN services', async () => {
		setNavigator({bluetooth: {requestDevice: jest.fn()}});
		mockedConnectGanCube.mockRejectedValue(
			new Error("Can't find target BLE services - wrong or unsupported cube device model")
		);

		await expect(connectGanCubeDevice(fakeDevice())).rejects.toThrow(
			/does not expose any of the GAN smart cube Bluetooth services/i
		);
	});

	it('reports a helpful message when the MAC address could not be determined', async () => {
		setNavigator({bluetooth: {requestDevice: jest.fn()}});
		mockedConnectGanCube.mockRejectedValue(
			new Error('Unable to determine cube MAC address, connection is not possible!')
		);

		await expect(connectGanCubeDevice(fakeDevice())).rejects.toThrow(/MAC address/i);
	});

	it('surfaces GATT drops as a retryable message', async () => {
		setNavigator({bluetooth: {requestDevice: jest.fn()}});
		mockedConnectGanCube.mockRejectedValue(
			Object.assign(new Error('GATT Server is disconnected.'), {name: 'NetworkError'})
		);

		await expect(connectGanCubeDevice(fakeDevice())).rejects.toThrow(/Lost the Bluetooth connection/i);
	});

	it('fails cleanly when Web Bluetooth is unavailable', async () => {
		setNavigator({});

		await expect(connectGanCubeDevice(fakeDevice())).rejects.toThrow(/Web Bluetooth is not available/i);
		expect(mockedConnectGanCube).not.toHaveBeenCalled();
	});

	it('errors are recognisable as smart cube connection errors', async () => {
		setNavigator({});

		await expect(connectGanCubeDevice(fakeDevice())).rejects.toBeInstanceOf(SmartCubeConnectionError);
	});
});

describe('isGanCubeName', () => {
	it.each(['GAN-1a2b3c', 'gan-1a2b3c', 'Gan-1a2b3c', 'MG-9f8e7d', 'AiCube-abc'])(
		'matches %s',
		(name) => {
			expect(isGanCubeName(name)).toBe(true);
		}
	);

	it.each(['GoCube-1234', 'Rubiks-1234', 'GiC123', 'Mi Smart Magic Cube', '', null, undefined])(
		'does not match %s',
		(name) => {
			expect(isGanCubeName(name)).toBe(false);
		}
	);
});

describe('normalizeMacAddress', () => {
	it.each([
		['AB:CD:EF:12:34:56', 'AB:CD:EF:12:34:56'],
		['ab:cd:ef:12:34:56', 'AB:CD:EF:12:34:56'],
		['ab-cd-ef-12-34-56', 'AB:CD:EF:12:34:56'],
		['abcdef123456', 'AB:CD:EF:12:34:56'],
		['  AB CD EF 12 34 56  ', 'AB:CD:EF:12:34:56'],
	])('normalizes %s', (input, expected) => {
		expect(normalizeMacAddress(input)).toBe(expected);
	});

	it.each(['', null, undefined, 'not a mac', 'AB:CD:EF:12:34', 'AB:CD:EF:12:34:56:78', 'ZZ:CD:EF:12:34:56'])(
		'rejects %s',
		(input) => {
			expect(normalizeMacAddress(input)).toBeNull();
		}
	);
});

describe('createMacAddressProvider', () => {
	afterEach(() => {
		delete (global as any).window;
	});

	it('returns null on the first call so the automatic lookup can run', async () => {
		setLocalStorage();
		const prompt = jest.fn();

		const provider = createMacAddressProvider(prompt);
		await expect(provider(fakeDevice(), false)).resolves.toBeNull();
		expect(prompt).not.toHaveBeenCalled();
	});

	it('reuses a stored MAC address without prompting again', async () => {
		setLocalStorage();
		storeMacAddress('device-id', 'AB:CD:EF:12:34:56');
		const prompt = jest.fn();

		const provider = createMacAddressProvider(prompt);
		await expect(provider(fakeDevice(), false)).resolves.toBe('AB:CD:EF:12:34:56');
		expect(prompt).not.toHaveBeenCalled();
	});

	it('prompts once the automatic lookup has failed, and remembers the answer', async () => {
		setLocalStorage();
		const prompt = jest.fn().mockReturnValue('abcdef123456');

		const provider = createMacAddressProvider(prompt);
		await expect(provider(fakeDevice(), true)).resolves.toBe('AB:CD:EF:12:34:56');
		expect(prompt).toHaveBeenCalledTimes(1);
		expect(readStoredMacAddress('device-id')).toBe('AB:CD:EF:12:34:56');
	});

	it('re-asks on a malformed MAC address rather than salting the key with garbage', async () => {
		setLocalStorage();
		const prompt = jest
			.fn()
			.mockReturnValueOnce('nonsense')
			.mockReturnValueOnce('AB:CD:EF:12:34:56');

		const provider = createMacAddressProvider(prompt);
		await expect(provider(fakeDevice(), true)).resolves.toBe('AB:CD:EF:12:34:56');
		expect(prompt).toHaveBeenCalledTimes(2);
	});

	it('gives up after repeated malformed entries', async () => {
		setLocalStorage();
		const prompt = jest.fn().mockReturnValue('nonsense');

		const provider = createMacAddressProvider(prompt);
		await expect(provider(fakeDevice(), true)).rejects.toThrow(/MAC address/i);
	});

	it('treats a dismissed prompt as a cancellation, not a failure', async () => {
		setLocalStorage();
		const prompt = jest.fn().mockReturnValue(null);

		const provider = createMacAddressProvider(prompt);
		await expect(provider(fakeDevice(), true)).rejects.toMatchObject({cancelled: true});
		expect(prompt).toHaveBeenCalledTimes(1);
	});

	it('forgets a stored MAC address on request', () => {
		setLocalStorage();
		storeMacAddress('device-id', 'AB:CD:EF:12:34:56');
		forgetStoredMacAddress('device-id');
		expect(readStoredMacAddress('device-id')).toBeNull();
	});

	it('survives storage being unavailable', () => {
		Object.defineProperty(global, 'window', {configurable: true, writable: true, value: {}});
		expect(() => storeMacAddress('device-id', 'AB:CD:EF:12:34:56')).not.toThrow();
		expect(readStoredMacAddress('device-id')).toBeNull();
	});
});

describe('GAN_COMPANY_IDENTIFIERS', () => {
	// Without these on requestDevice(), Chrome hides the manufacturer data that
	// carries the cube's MAC address and every user gets prompted for it by hand.
	it('covers the whole GAN company identifier range', () => {
		expect(GAN_COMPANY_IDENTIFIERS).toHaveLength(256);
		expect(GAN_COMPANY_IDENTIFIERS[0]).toBe(0x0001);
		expect(GAN_COMPANY_IDENTIFIERS[255]).toBe(0xff01);
		expect(GAN_COMPANY_IDENTIFIERS.every((id) => (id & 0xff) === 0x01)).toBe(true);
	});
});
