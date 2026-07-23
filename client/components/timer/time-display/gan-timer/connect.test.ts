import {
	connectGanTimer,
	GAN_TIMER_SERVICE,
	GAN_TIMER_STATE_CHARACTERISTIC,
	GAN_TIMER_TIME_CHARACTERISTIC,
	GanTimerConnectionError,
} from '@/components/timer/time-display/gan-timer/connect';
import {crc16ccit, GanTimerState} from '@/components/timer/time-display/gan-timer/protocol';

function buildPacket(state: number, payload: number[] = []): DataView {
	const body = [0xfe, 0x00, 0x00, state, ...payload];
	const crc = crc16ccit(new Uint8Array(body.slice(2)).buffer);
	return new DataView(new Uint8Array([...body, crc & 0xff, (crc >> 8) & 0xff]).buffer);
}

class FakeCharacteristic {
	uuid: string;
	listeners: ((evt: {target: {value: DataView}}) => void)[] = [];
	startNotifications = jest.fn().mockResolvedValue(undefined);
	stopNotifications = jest.fn().mockResolvedValue(undefined);
	readValue = jest.fn();

	constructor(uuid: string) {
		this.uuid = uuid;
	}

	addEventListener(_type: string, cb: (evt: {target: {value: DataView}}) => void) {
		this.listeners.push(cb);
	}

	removeEventListener(_type: string, cb: (evt: {target: {value: DataView}}) => void) {
		this.listeners = this.listeners.filter((l) => l !== cb);
	}

	/** Simulate the timer pushing a notification */
	emit(value: DataView) {
		this.listeners.forEach((cb) => cb({target: {value}}));
	}
}

interface FakeServiceOptions {
	uuid?: string;
	characteristics?: string[];
	failGetCharacteristic?: string[];
}

class FakeService {
	uuid: string;
	characteristics = new Map<string, FakeCharacteristic>();
	private failFor: string[];

	constructor({uuid = GAN_TIMER_SERVICE, characteristics, failGetCharacteristic = []}: FakeServiceOptions = {}) {
		this.uuid = uuid;
		this.failFor = failGetCharacteristic;
		const uuids = characteristics ?? [GAN_TIMER_TIME_CHARACTERISTIC, GAN_TIMER_STATE_CHARACTERISTIC];
		uuids.forEach((u) => this.characteristics.set(u, new FakeCharacteristic(u)));
	}

	async getCharacteristic(uuid: string) {
		if (this.failFor.includes(uuid)) {
			throw new Error(`No Characteristics matching UUID ${uuid} found in Service.`);
		}
		const chr = this.characteristics.get(uuid);
		if (!chr) {
			throw new Error(`No Characteristics matching UUID ${uuid} found in Service.`);
		}
		return chr;
	}
}

interface FakeDeviceOptions {
	services?: FakeService[];
	/** Number of getPrimaryService calls that should fail before succeeding */
	primaryServiceFailures?: number;
	/** Make getPrimaryService always fail, forcing the getPrimaryServices fallback */
	primaryServiceAlwaysFails?: boolean;
	gattConnectFailures?: number;
}

class FakeDevice {
	name = 'GAN Timer';
	listeners: Record<string, (() => void)[]> = {};
	gatt: {
		connected: boolean;
		connect: jest.Mock;
		disconnect: jest.Mock;
		getPrimaryService: jest.Mock;
		getPrimaryServices: jest.Mock;
	};

	constructor(options: FakeDeviceOptions = {}) {
		const services = options.services ?? [new FakeService()];
		let primaryServiceCalls = 0;
		let gattConnectCalls = 0;

		this.gatt = {
			connected: false,
			connect: jest.fn(async () => {
				gattConnectCalls++;
				if (gattConnectCalls <= (options.gattConnectFailures ?? 0)) {
					throw new Error('GATT operation failed for unknown reason.');
				}
				this.gatt.connected = true;
				return this.gatt;
			}),
			disconnect: jest.fn(() => {
				this.gatt.connected = false;
			}),
			getPrimaryService: jest.fn(async (uuid: string) => {
				primaryServiceCalls++;
				if (
					options.primaryServiceAlwaysFails ||
					primaryServiceCalls <= (options.primaryServiceFailures ?? 0)
				) {
					throw new Error(`No Services matching UUID ${uuid} found in Device.`);
				}
				const svc = services.find((s) => s.uuid === uuid);
				if (!svc) {
					throw new Error(`No Services matching UUID ${uuid} found in Device.`);
				}
				return svc;
			}),
			getPrimaryServices: jest.fn(async () => services),
		};
	}

	addEventListener(type: string, cb: () => void) {
		(this.listeners[type] ??= []).push(cb);
	}

	removeEventListener(type: string, cb: () => void) {
		this.listeners[type] = (this.listeners[type] ?? []).filter((l) => l !== cb);
	}

	emit(type: string) {
		[...(this.listeners[type] ?? [])].forEach((cb) => cb());
	}
}

/** Node exposes `navigator` as a non-writable accessor, so redefine it outright */
function setNavigator(value: unknown) {
	Object.defineProperty(global, 'navigator', {value, configurable: true, writable: true});
}

function mockBluetooth(device: FakeDevice, requestDevice?: jest.Mock) {
	const request = requestDevice ?? jest.fn().mockResolvedValue(device);
	setNavigator({
		bluetooth: {
			getAvailability: jest.fn().mockResolvedValue(true),
			requestDevice: request,
		},
	});
	return request;
}

// Zero delay so the retry paths don't slow the suite down
const options = {retryDelayMs: 0};

describe('connectGanTimer', () => {
	afterEach(() => {
		jest.restoreAllMocks();
	});

	it('offers the timer service as a device filter, not just name prefixes', async () => {
		const device = new FakeDevice();
		const requestDevice = mockBluetooth(device);

		await connectGanTimer(options);

		const filters = requestDevice.mock.calls[0][0].filters;
		expect(filters).toEqual(
			expect.arrayContaining([
				{namePrefix: 'GAN'},
				{namePrefix: 'Gan'},
				{namePrefix: 'gan'},
				{services: [GAN_TIMER_SERVICE]},
			])
		);
		expect(requestDevice.mock.calls[0][0].optionalServices).toContain(GAN_TIMER_SERVICE);
	});

	it('connects when the timer only exposes the state characteristic', async () => {
		// The time characteristic is optional: CubeDesk never reads recorded times,
		// so a timer that does not expose fff2 must still connect.
		const service = new FakeService({characteristics: [GAN_TIMER_STATE_CHARACTERISTIC]});
		const device = new FakeDevice({services: [service]});
		mockBluetooth(device);

		const conn = await connectGanTimer(options);

		expect(conn).toBeTruthy();
		await expect(conn.getRecordedTimes()).rejects.toBeInstanceOf(GanTimerConnectionError);
	});

	it('retries service discovery when the first lookup fails', async () => {
		const device = new FakeDevice({primaryServiceFailures: 2});
		mockBluetooth(device);

		const conn = await connectGanTimer(options);

		expect(conn).toBeTruthy();
		expect(device.gatt.getPrimaryService).toHaveBeenCalledTimes(3);
	});

	it('falls back to enumerating services when lookup by UUID never succeeds', async () => {
		// Chrome on macOS can report the service with a different UUID casing or
		// refuse a direct lookup while still listing it.
		const service = new FakeService({uuid: GAN_TIMER_SERVICE.toUpperCase()});
		const device = new FakeDevice({services: [service], primaryServiceAlwaysFails: true});
		mockBluetooth(device);

		const conn = await connectGanTimer(options);

		expect(conn).toBeTruthy();
		expect(device.gatt.getPrimaryServices).toHaveBeenCalled();
	});

	it('retries a failed GATT connection', async () => {
		const device = new FakeDevice({gattConnectFailures: 1});
		mockBluetooth(device);

		await connectGanTimer(options);

		expect(device.gatt.connect).toHaveBeenCalledTimes(2);
	});

	it('awaits startNotifications and fails the connect if it never succeeds', async () => {
		const service = new FakeService();
		const state = await service.getCharacteristic(GAN_TIMER_STATE_CHARACTERISTIC);
		state.startNotifications.mockRejectedValue(new Error('GATT operation failed'));
		const device = new FakeDevice({services: [service]});
		mockBluetooth(device);

		await expect(connectGanTimer(options)).rejects.toBeInstanceOf(GanTimerConnectionError);
	});

	it('tears down the GATT link when setup fails, so the timer does not stay connected', async () => {
		// This is the reported symptom: the timer shows connected while the app does not.
		const service = new FakeService({characteristics: []});
		const device = new FakeDevice({services: [service]});
		mockBluetooth(device);

		await expect(connectGanTimer(options)).rejects.toBeInstanceOf(GanTimerConnectionError);
		expect(device.gatt.disconnect).toHaveBeenCalled();
		expect(device.gatt.connected).toBe(false);
	});

	it('emits decoded events from state notifications', async () => {
		const service = new FakeService();
		const device = new FakeDevice({services: [service]});
		mockBluetooth(device);

		const conn = await connectGanTimer(options);
		const events: number[] = [];
		conn.events$.subscribe((e) => events.push(e.state));

		const state = await service.getCharacteristic(GAN_TIMER_STATE_CHARACTERISTIC);
		state.emit(buildPacket(GanTimerState.HANDS_ON));
		state.emit(buildPacket(GanTimerState.RUNNING));

		expect(events).toEqual([GanTimerState.HANDS_ON, GanTimerState.RUNNING]);
	});

	it('drops an invalid packet but keeps the stream alive', async () => {
		// A single corrupt notification must not permanently kill the timer.
		const service = new FakeService();
		const device = new FakeDevice({services: [service]});
		mockBluetooth(device);

		const conn = await connectGanTimer(options);
		const events: number[] = [];
		const errors: unknown[] = [];
		conn.events$.subscribe({next: (e) => events.push(e.state), error: (e) => errors.push(e)});

		const state = await service.getCharacteristic(GAN_TIMER_STATE_CHARACTERISTIC);
		state.emit(new DataView(new Uint8Array([0x00, 0x01, 0x02]).buffer));
		state.emit(buildPacket(GanTimerState.RUNNING));

		expect(errors).toEqual([]);
		expect(events).toEqual([GanTimerState.RUNNING]);
	});

	it('emits DISCONNECT when the device drops the link', async () => {
		const device = new FakeDevice();
		mockBluetooth(device);

		const conn = await connectGanTimer(options);
		const events: number[] = [];
		conn.events$.subscribe((e) => events.push(e.state));

		device.emit('gattserverdisconnected');

		expect(events).toEqual([GanTimerState.DISCONNECT]);
	});

	it('emits DISCONNECT exactly once when disconnect races with the hardware event', async () => {
		const device = new FakeDevice();
		mockBluetooth(device);

		const conn = await connectGanTimer(options);
		const events: number[] = [];
		conn.events$.subscribe((e) => events.push(e.state));

		await conn.disconnect();
		device.emit('gattserverdisconnected');
		await conn.disconnect();

		expect(events).toEqual([GanTimerState.DISCONNECT]);
	});

	it('reads recorded times when the time characteristic is present', async () => {
		const service = new FakeService();
		const time = await service.getCharacteristic(GAN_TIMER_TIME_CHARACTERISTIC);
		const bytes = new Uint8Array(16);
		bytes.set([0, 12, 0x34, 0x01], 0); // 0:12.308
		time.readValue.mockResolvedValue(new DataView(bytes.buffer));

		const device = new FakeDevice({services: [service]});
		mockBluetooth(device);

		const conn = await connectGanTimer(options);
		const times = await conn.getRecordedTimes();

		expect(times.displayTime.asTimestamp).toBe(12308);
		expect(times.previousTimes).toHaveLength(3);
	});

	it('surfaces a cancelled device chooser as a cancellation, not a failure', async () => {
		const abort = new Error('User cancelled the requestDevice() chooser.');
		abort.name = 'NotFoundError';
		mockBluetooth(new FakeDevice(), jest.fn().mockRejectedValue(abort));

		await expect(connectGanTimer(options)).rejects.toMatchObject({cancelled: true});
	});

	it('reports a missing Web Bluetooth implementation clearly', async () => {
		setNavigator({});

		await expect(connectGanTimer(options)).rejects.toBeInstanceOf(GanTimerConnectionError);
	});
});
