import GAN from '@/components/timer/smart-cube/bluetooth/gan';
import Giiker from '@/components/timer/smart-cube/bluetooth/giiker';
import MoYu from '@/components/timer/smart-cube/bluetooth/moyu';
import MoYuMhc from '@/components/timer/smart-cube/bluetooth/moyu_mhc';
import Particula from '@/components/timer/smart-cube/bluetooth/particula';
import QiYi from '@/components/timer/smart-cube/bluetooth/qiyi';
import SmartCube, {
	SmartCubeCallbacks,
	SmartCubeConnectionError,
} from '@/components/timer/smart-cube/bluetooth/smart_cube';
import {GAN_CIC_LIST} from '@/util/gan/cube';
import {MOYU_CIC_LIST, MOYU32_NAME_PREFIX, MOYU32_SERVICE} from '@/util/moyu/cube';
import {MHC_NAME_PREFIX, MHC_SERVICE} from '@/util/moyu/mhc';
import {isQiyiCube, QIYI_CIC_LIST, QIYI_NAME_PREFIXES, QIYI_SERVICE} from '@/util/qiyi/cube';
import {findPermittedDevice, waitForAdvertisement} from '@/util/smart-cube/connection';
import {toastError} from '@/util/toast';

const LAST_DEVICE_KEY = 'smart_cube_last_device_id';

const REQUEST_DEVICE_OPTIONS: RequestDeviceOptions = {
	filters: [
		{namePrefix: 'Gi'},
		{namePrefix: 'Mi Smart Magic Cube'},
		{namePrefix: 'Hi-'},
		{namePrefix: 'GAN'},
		{namePrefix: 'Gan'},
		{namePrefix: 'gan'},
		{namePrefix: 'MG'},
		{namePrefix: 'AiCube'},
		{namePrefix: 'GoCube'},
		{namePrefix: 'Rubiks'},
		{namePrefix: MOYU32_NAME_PREFIX},
		{namePrefix: MHC_NAME_PREFIX},
		...QIYI_NAME_PREFIXES.map((namePrefix) => ({namePrefix})),

		// Giiker
		{services: ['0000aadb-0000-1000-8000-00805f9b34fb']},
		{services: ['0000aaaa-0000-1000-8000-00805f9b34fb']},
		{services: ['0000fe95-0000-1000-8000-00805f9b34fb']},

		// Gan
		{services: ['0000fff0-0000-1000-8000-00805f9b34fb']},
		{services: ['00001805-0000-1000-8000-00805f9b34fb']},
	],
	optionalServices: [
		'0000180a-0000-1000-8000-00805f9b34fb',
		'0000180f-0000-1000-8000-00805f9b34fb',
		'9fa480e0-4967-4542-9390-d343dc5d04ae',
		'00001805-0000-1000-8000-00805f9b34fb',
		'd0611e78-bbb4-4591-a5f8-487910ae4366',
		'6e400001-b5a3-f393-e0a9-e50e24dc4179',
		'f95a48e6-a721-11e9-a2a3-022ae2dbcce4',

		'battery_service',
		'generic_access',
		'device_information',
		...Particula.opServices,

		// GAN
		'0000fff0-0000-1000-8000-00805f9b34fb',
		'0000fff5-0000-1000-8000-00805f9b34fb',
		'0000fff7-0000-1000-8000-00805f9b34fb',
		'0000fff2-0000-1000-8000-00805f9b34fb',
		'0000fff3-0000-1000-8000-00805f9b34fb',
		'0000180a-0000-1000-8000-00805f9b34fb',
		'00002a23-0000-1000-8000-00805f9b34fb',
		'00002a28-0000-1000-8000-00805f9b34fb',
		'8653000a-43e6-47b7-9cb0-5fc21d4ae340',
		'00000010-0000-fff7-fff6-fff5fff4fff0',

		'00001805-0000-1000-8000-00805f9b34fb',

		MOYU32_SERVICE,
		MHC_SERVICE,
		QIYI_SERVICE,
	],
	// GAN, MoYu and QiYi cubes advertise their MAC address (needed to talk to them) in manufacturer data
	optionalManufacturerData: [...GAN_CIC_LIST, ...MOYU_CIC_LIST, ...QIYI_CIC_LIST],
};

type Attempt = {isActive: () => boolean; callbacks: SmartCubeCallbacks};

function createCube(device: BluetoothDevice, callbacks: SmartCubeCallbacks) {
	const name = device.name ?? '';
	if (name.startsWith('Gi') || name.startsWith('Mi Smart Magic Cube') || name.startsWith('Hi-')) {
		return new Giiker(device, callbacks);
	}
	if (
		name.toLowerCase().startsWith('gan') ||
		name.startsWith('MG') ||
		name.startsWith('AiCube')
	) {
		return new GAN(device, callbacks);
	}
	if (name.startsWith('GoCube') || name.startsWith('Rubiks')) {
		return new Particula(device, callbacks);
	}
	if (name.startsWith(MOYU32_NAME_PREFIX)) {
		return new MoYu(device, callbacks);
	}
	if (name.startsWith(MHC_NAME_PREFIX)) {
		return new MoYuMhc(device, callbacks);
	}
	if (isQiyiCube(name)) {
		return new QiYi(device, callbacks);
	}
	return null;
}

function readLastDeviceId() {
	try {
		return localStorage.getItem(LAST_DEVICE_KEY);
	} catch {
		return null;
	}
}

function writeLastDeviceId(id: string | null) {
	try {
		if (id) localStorage.setItem(LAST_DEVICE_KEY, id);
		else localStorage.removeItem(LAST_DEVICE_KEY);
	} catch {
		// Storage can be unavailable, auto-reconnect just won't happen
	}
}

export default class Connect extends SmartCube {
	device: BluetoothDevice | null = null;
	private generation = 0;
	private reconnectController: AbortController | null = null;
	private cube: SmartCube | null = null;

	/** Starting a new attempt invalidates any earlier one, including a pending reconnect */
	private beginAttempt(): Attempt {
		this.reconnectController?.abort();
		this.reconnectController = null;

		const generation = ++this.generation;
		const isActive = () => generation === this.generation && this.callbacks.isActive();
		return {
			isActive,
			callbacks: {
				...this.callbacks,
				isActive,
				onDisconnected: () => {
					if (isActive()) {
						++this.generation;
						this.callbacks.onDisconnected();
					}
				},
			},
		};
	}

	connect = () => {
		if (!window.navigator || !window.navigator.bluetooth) {
			throw new Error();
		}

		const attempt = this.beginAttempt();
		window.navigator.bluetooth
			.requestDevice(REQUEST_DEVICE_OPTIONS)
			.then((device) => this.startCube(device, attempt))
			.catch((error) => this.handleFailure(error, attempt));
	};

	/**
	 * Reconnect to the last connected cube without the device picker. onWaiting is called if there's a cube
	 * to wait for, and the promise resolves once connecting starts or the reconnect is cancelled.
	 */
	autoReconnect = async (onWaiting: () => void) => {
		const generation = this.generation;
		const device = await findPermittedDevice(readLastDeviceId());
		// Skip if the user started connecting or left while looking up the device
		if (!device || generation !== this.generation || !this.callbacks.isActive()) return;

		onWaiting();
		await this.reconnect(device);
	};

	/**
	 * Connect without the device picker once the cube is awake and in range. Resolves when the connection
	 * starts, or when it's cancelled by connect(), disconnect(), or the cube being unreachable.
	 */
	private reconnect = async (device: BluetoothDevice) => {
		const attempt = this.beginAttempt();
		const controller = new AbortController();
		this.reconnectController = controller;

		const advertised =
			typeof device.watchAdvertisements !== 'function' ||
			(await waitForAdvertisement(device, controller.signal));
		if (!advertised || !attempt.isActive()) return;

		this.reconnectController = null;
		// Reconnecting after a reload shouldn't interrupt with the solved confirmation
		const callbacks = {...attempt.callbacks, confirmSolved: async () => true};
		this.startCube(device, {...attempt, callbacks}).catch((error) =>
			this.handleFailure(error, attempt),
		);
	};

	private startCube = async (device: BluetoothDevice, {isActive, callbacks}: Attempt) => {
		if (!isActive()) return;
		this.device = device;
		this.alertConnecting();

		const cube = createCube(device, callbacks);
		if (!cube) throw new SmartCubeConnectionError("This smart cube isn't supported yet.");
		this.cube = cube;

		await cube.init();
		if (isActive()) writeLastDeviceId(device.id);
	};

	private handleFailure = (error: unknown, {isActive}: Attempt) => {
		if (!isActive()) return;
		++this.generation;
		this.callbacks.onDisconnected();

		if (error instanceof SmartCubeConnectionError) {
			if (error.message) toastError(error.message);
		} else if (!(error instanceof DOMException && error.name === 'NotFoundError')) {
			// NotFoundError means the device picker was closed
			console.error('Smart cube connection failed', error);
			toastError("Couldn't connect to your smart cube");
		}
	};

	/** Recalibrate the connected cube's own state tracking to solved, see SmartCube.resetToSolved */
	resetCubeState = () => this.cube?.resetToSolved() ?? Promise.resolve(false);

	/** Stop auto-reconnecting to the last cube, for when the user disconnects it on purpose */
	forgetDevice = () => {
		writeLastDeviceId(null);
	};

	disconnect = () => {
		this.reconnectController?.abort();
		this.reconnectController = null;
		this.cube = null;
		++this.generation;
		if (this.callbacks.isActive()) this.callbacks.onDisconnected();
		if (!this.device) {
			return;
		}
		this.device.gatt?.disconnect();
		this.device = null;
	};
}
