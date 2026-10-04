// Encrypted smart cube connection shared by GAN and MoYu cubes, adapted from gan-web-bluetooth (MIT) by Andy Fedotov
import Aes128 from '@/util/smart-cube/aes';
import EventStream from '@/util/smart-cube/events';
import {parseMacAddress} from '@/util/smart-cube/mac';
import {
	SmartCubeCommand,
	SmartCubeEvent,
	SmartCubeProtocolDriver,
	SmartCubeTransport,
} from '@/util/smart-cube/protocol';

export type EncryptionKey = {key: number[]; iv: number[]};

export type SmartCubeProtocol = {
	service: string;
	commandCharacteristic: string;
	stateCharacteristic: string;
	encryptionKey: (device: BluetoothDevice) => EncryptionKey;
	createDriver: () => SmartCubeProtocolDriver;
};

/**
 * Messages are encrypted by running AES-128-CBC over a 16 byte chunk aligned to the start of the message,
 * then over another one aligned to the end of the message, each as a standalone single block
 */
class CubeEncrypter {
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

export class SmartCubeConnection implements SmartCubeTransport {
	readonly events = new EventStream<SmartCubeEvent>();
	private pendingWrite = Promise.resolve();

	constructor(
		private device: BluetoothDevice,
		readonly mac: string,
		private commandCharacteristic: BluetoothRemoteGATTCharacteristic,
		private stateCharacteristic: BluetoothRemoteGATTCharacteristic,
		private encrypter: CubeEncrypter,
		private driver: SmartCubeProtocolDriver,
	) {}

	async start() {
		this.device.addEventListener('gattserverdisconnected', this.onDisconnect);
		this.stateCharacteristic.addEventListener('characteristicvaluechanged', this.onStateUpdate);
		await this.stateCharacteristic.startNotifications();
		for (const message of this.driver.createStartupMessages?.() ?? []) {
			await this.sendCommandMessage(message);
		}
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
		this.events.emit({type: 'DISCONNECT'});
		await this.detach();
	};

	/** Stop listening without closing the Bluetooth connection, so it can be reused with another MAC address */
	detach = async () => {
		this.device.removeEventListener('gattserverdisconnected', this.onDisconnect);
		this.stateCharacteristic.removeEventListener(
			'characteristicvaluechanged',
			this.onStateUpdate,
		);
		this.events.clear();
		await this.stateCharacteristic.stopNotifications().catch(() => {});
	};

	/** Writes are queued because Web Bluetooth rejects one while another is still in progress */
	sendCommandMessage = (message: Uint8Array) => {
		const write = this.pendingWrite.then(() => {
			return this.commandCharacteristic.writeValue(this.encrypter.encrypt(message));
		});
		// A failed write shouldn't block the ones after it
		this.pendingWrite = write.catch(() => {});
		return write;
	};

	/** Resolves false if the cube doesn't support the command */
	sendCubeCommand = async (command: SmartCubeCommand) => {
		const message = this.driver.createCommandMessage(command);
		if (!message) return false;
		await this.sendCommandMessage(message);
		return true;
	};

	disconnect = async () => {
		await this.onDisconnect();
		if (this.device.gatt?.connected) {
			this.device.gatt.disconnect();
		}
	};
}

/** Connect using whichever of the protocols the cube exposes a service for */
export async function connectSmartCube(
	device: BluetoothDevice,
	macAddress: string,
	protocols: SmartCubeProtocol[],
) {
	const mac = parseMacAddress(macAddress);
	if (!mac) throw new Error(`Invalid cube MAC address: ${macAddress}`);

	// MAC address bytes in reverse order are used to salt the encryption key
	const salt = mac
		.split(':')
		.map((byte) => parseInt(byte, 16))
		.reverse();

	if (!device.gatt) throw new Error('Bluetooth GATT is unavailable for this device');
	// Connecting finds the cube far faster while actively scanning, about 2s instead of 5-10s on macOS
	const scan = new AbortController();
	device.watchAdvertisements?.({signal: scan.signal}).catch(() => {});
	let gatt: BluetoothRemoteGATTServer;
	try {
		gatt = await device.gatt.connect();
	} finally {
		scan.abort();
	}
	try {
		const services = await gatt.getPrimaryServices();

		for (const service of services) {
			const protocol = protocols.find((p) => p.service === service.uuid.toLowerCase());
			if (!protocol) continue;

			const conn = new SmartCubeConnection(
				device,
				mac,
				await service.getCharacteristic(protocol.commandCharacteristic),
				await service.getCharacteristic(protocol.stateCharacteristic),
				new CubeEncrypter(protocol.encryptionKey(device), salt),
				protocol.createDriver(),
			);
			await conn.start();
			return conn;
		}
	} catch (error) {
		gatt.disconnect();
		throw error;
	}

	// A connected cube stops advertising, so leaving it connected would hide it from the device picker
	gatt.disconnect();
	throw new Error('Unsupported smart cube model');
}
