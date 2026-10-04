// GAN smart cube connection, adapted from gan-web-bluetooth (MIT) by Andy Fedotov
import Aes128 from '@/util/gan/aes';
import EventStream from '@/util/gan/events';
import {
	GanCubeCommand,
	GanCubeEvent,
	GanCubeTransport,
	GanGen2ProtocolDriver,
	GanGen3ProtocolDriver,
	GanGen4ProtocolDriver,
	GanProtocolDriver,
} from '@/util/gan/protocol';

export type {GanCubeEvent} from '@/util/gan/protocol';

/** Company Identifier Codes GAN cubes may advertise with, every value from 0x0001 to 0xFF01 */
export const GAN_CIC_LIST = Array.from({length: 256}, (_, i) => (i << 8) | 0x01);

type EncryptionKey = {key: number[]; iv: number[]};

const GAN_ENCRYPTION_KEYS: EncryptionKey[] = [
	{
		key: [
			0x01, 0x02, 0x42, 0x28, 0x31, 0x91, 0x16, 0x07, 0x20, 0x05, 0x18, 0x54, 0x42, 0x11,
			0x12, 0x53,
		],
		iv: [
			0x11, 0x03, 0x32, 0x28, 0x21, 0x01, 0x76, 0x27, 0x20, 0x95, 0x78, 0x14, 0x32, 0x12,
			0x02, 0x43,
		],
	},
	{
		key: [
			0x05, 0x12, 0x02, 0x45, 0x02, 0x01, 0x29, 0x56, 0x12, 0x78, 0x12, 0x76, 0x81, 0x01,
			0x08, 0x03,
		],
		iv: [
			0x01, 0x44, 0x28, 0x06, 0x86, 0x21, 0x22, 0x28, 0x51, 0x05, 0x08, 0x31, 0x82, 0x02,
			0x21, 0x06,
		],
	},
];

const GAN_PROTOCOLS: {
	service: string;
	commandCharacteristic: string;
	stateCharacteristic: string;
	encryptionKey: (device: BluetoothDevice) => EncryptionKey;
	createDriver: () => GanProtocolDriver;
}[] = [
	{
		service: '6e400001-b5a3-f393-e0a9-e50e24dc4179',
		commandCharacteristic: '28be4a4a-cd67-11e9-a32f-2a2ae2dbcce4',
		stateCharacteristic: '28be4cb6-cd67-11e9-a32f-2a2ae2dbcce4',
		encryptionKey: (device) =>
			device.name?.startsWith('AiCube') ? GAN_ENCRYPTION_KEYS[1] : GAN_ENCRYPTION_KEYS[0],
		createDriver: () => new GanGen2ProtocolDriver(),
	},
	{
		service: '8653000a-43e6-47b7-9cb0-5fc21d4ae340',
		commandCharacteristic: '8653000c-43e6-47b7-9cb0-5fc21d4ae340',
		stateCharacteristic: '8653000b-43e6-47b7-9cb0-5fc21d4ae340',
		encryptionKey: () => GAN_ENCRYPTION_KEYS[0],
		createDriver: () => new GanGen3ProtocolDriver(),
	},
	{
		service: '00000010-0000-fff7-fff6-fff5fff4fff0',
		commandCharacteristic: '0000fff5-0000-1000-8000-00805f9b34fb',
		stateCharacteristic: '0000fff6-0000-1000-8000-00805f9b34fb',
		encryptionKey: () => GAN_ENCRYPTION_KEYS[0],
		createDriver: () => new GanGen4ProtocolDriver(),
	},
];

/**
 * Messages are encrypted by running AES-128-CBC over a 16 byte chunk aligned to the start of the message,
 * then over another one aligned to the end of the message, each as a standalone single block
 */
class GanCubeEncrypter {
	private aes: Aes128;
	private iv: Uint8Array;

	constructor({key, iv}: EncryptionKey, salt: number[]) {
		const saltedKey = new Uint8Array(key);
		const saltedIv = new Uint8Array(iv);
		for (let i = 0; i < 6; i++) {
			saltedKey[i] = (key[i] + salt[i]) % 0xff;
			saltedIv[i] = (iv[i] + salt[i]) % 0xff;
		}
		this.aes = new Aes128(saltedKey);
		this.iv = saltedIv;
	}

	private encryptChunk(buffer: Uint8Array, offset: number) {
		const block = buffer.slice(offset, offset + 16);
		for (let i = 0; i < 16; i++) block[i] ^= this.iv[i];
		buffer.set(this.aes.encryptBlock(block), offset);
	}

	private decryptChunk(buffer: Uint8Array, offset: number) {
		const block = this.aes.decryptBlock(buffer.subarray(offset, offset + 16));
		for (let i = 0; i < 16; i++) block[i] ^= this.iv[i];
		buffer.set(block, offset);
	}

	encrypt(data: Uint8Array) {
		if (data.length < 16) throw new Error('Data must be at least 16 bytes long');
		const res = new Uint8Array(data);
		this.encryptChunk(res, 0);
		if (res.length > 16) this.encryptChunk(res, res.length - 16);
		return res;
	}

	decrypt(data: Uint8Array) {
		if (data.length < 16) throw new Error('Data must be at least 16 bytes long');
		const res = new Uint8Array(data);
		if (res.length > 16) this.decryptChunk(res, res.length - 16);
		this.decryptChunk(res, 0);
		return res;
	}
}

export class GanCubeConnection implements GanCubeTransport {
	readonly events = new EventStream<GanCubeEvent>();

	constructor(
		private device: BluetoothDevice,
		readonly mac: string,
		private commandCharacteristic: BluetoothRemoteGATTCharacteristic,
		private stateCharacteristic: BluetoothRemoteGATTCharacteristic,
		private encrypter: GanCubeEncrypter,
		private driver: GanProtocolDriver,
	) {}

	async start() {
		this.device.addEventListener('gattserverdisconnected', this.onDisconnect);
		this.stateCharacteristic.addEventListener('characteristicvaluechanged', this.onStateUpdate);
		await this.stateCharacteristic.startNotifications();
	}

	private onStateUpdate = async () => {
		const value = this.stateCharacteristic.value;
		if (!value || value.byteLength < 16) return;

		const message = this.encrypter.decrypt(
			new Uint8Array(value.buffer, value.byteOffset, value.byteLength),
		);
		const events = await this.driver.handleStateEvent(this, message);
		events.forEach((event) => this.events.emit(event));
	};

	private onDisconnect = async () => {
		this.device.removeEventListener('gattserverdisconnected', this.onDisconnect);
		this.stateCharacteristic.removeEventListener(
			'characteristicvaluechanged',
			this.onStateUpdate,
		);
		this.events.emit({type: 'DISCONNECT'});
		this.events.clear();
		await this.stateCharacteristic.stopNotifications().catch(() => {});
	};

	sendCommandMessage = async (message: Uint8Array) => {
		await this.commandCharacteristic.writeValue(this.encrypter.encrypt(message));
	};

	sendCubeCommand = (command: GanCubeCommand) => {
		return this.sendCommandMessage(this.driver.createCommandMessage(command));
	};

	disconnect = async () => {
		await this.onDisconnect();
		if (this.device.gatt?.connected) {
			this.device.gatt.disconnect();
		}
	};
}

/** Normalize a MAC address to the AA:BB:CC:DD:EE:FF format, or null if it isn't a valid one */
export function parseMacAddress(input: string) {
	const hex = input.replace(/[:\-\s]/g, '').toUpperCase();
	if (!/^[0-9A-F]{12}$/.test(hex)) return null;
	return hex.replace(/(..)(?!$)/g, '$1:');
}

function getManufacturerDataBytes(manufacturerData: BluetoothManufacturerData) {
	// Bluefy browser returns a raw DataView instead of a Map
	if (manufacturerData instanceof DataView) {
		return new DataView(manufacturerData.buffer.slice(2, 11));
	}
	for (const id of GAN_CIC_LIST) {
		const data = manufacturerData.get(id);
		if (data) {
			return new DataView(data.buffer, data.byteOffset, Math.min(data.byteLength, 9));
		}
	}
	return null;
}

/** MAC address is stored in reverse byte order in the last 6 bytes of manufacturer data */
function extractMac(manufacturerData: BluetoothManufacturerData) {
	const data = getManufacturerDataBytes(manufacturerData);
	if (!data || data.byteLength < 6) return null;

	const mac: string[] = [];
	for (let i = 1; i <= 6; i++) {
		mac.push(
			data
				.getUint8(data.byteLength - i)
				.toString(16)
				.toUpperCase()
				.padStart(2, '0'),
		);
	}
	return mac.join(':');
}

/**
 * Reading advertisements is behind a Chrome flag, either the new Web Bluetooth permissions backend or
 * experimental web platform features
 */
export function canReadMacAddress(device: BluetoothDevice) {
	return typeof device.watchAdvertisements === 'function';
}

/** Read the MAC address from advertisements, requires the device to be requested with optionalManufacturerData */
export function readMacAddress(device: BluetoothDevice): Promise<string | null> {
	if (!canReadMacAddress(device)) return Promise.resolve(null);

	return new Promise((resolve) => {
		const abortController = new AbortController();
		const finish = (mac: string | null) => {
			clearTimeout(timeout);
			device.removeEventListener('advertisementreceived', onAdvertisement);
			abortController.abort();
			resolve(mac);
		};
		const onAdvertisement = (event: BluetoothAdvertisingEvent) =>
			finish(extractMac(event.manufacturerData));
		const timeout = setTimeout(() => finish(null), 10000);

		device.addEventListener('advertisementreceived', onAdvertisement);
		device.watchAdvertisements({signal: abortController.signal}).catch(() => finish(null));
	});
}

export async function connectGanCube(device: BluetoothDevice, macAddress: string) {
	const mac = parseMacAddress(macAddress);
	if (!mac) throw new Error(`Invalid cube MAC address: ${macAddress}`);

	// MAC address bytes in reverse order are used to salt the encryption key
	const salt = mac
		.split(':')
		.map((byte) => parseInt(byte, 16))
		.reverse();

	if (!device.gatt) throw new Error('Bluetooth GATT is unavailable for this device');
	const gatt = await device.gatt.connect();
	const services = await gatt.getPrimaryServices();

	for (const service of services) {
		const protocol = GAN_PROTOCOLS.find((p) => p.service === service.uuid.toLowerCase());
		if (!protocol) continue;

		const conn = new GanCubeConnection(
			device,
			mac,
			await service.getCharacteristic(protocol.commandCharacteristic),
			await service.getCharacteristic(protocol.stateCharacteristic),
			new GanCubeEncrypter(protocol.encryptionKey(device), salt),
			protocol.createDriver(),
		);
		await conn.start();
		return conn;
	}

	throw new Error('Unsupported GAN cube model');
}
