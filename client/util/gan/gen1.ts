// GAN Gen1 smart cube connection, protocol details from csTimer (GPL-3.0) by cs0x7f
import Aes128 from '@/util/smart-cube/aes';
import {CubeConnection, GattQueue} from '@/util/smart-cube/connection';
import EventStream from '@/util/smart-cube/events';
import {
	batteryEvent,
	FACES,
	moveEvent,
	SmartCubeCommand,
	SmartCubeEvent,
} from '@/util/smart-cube/protocol';

export const GAN_GEN1_SERVICE = '0000fff0-0000-1000-8000-00805f9b34fb';
export const GAN_GEN1_DEVICE_INFO_SERVICE = '0000180a-0000-1000-8000-00805f9b34fb';
const FIRMWARE_CHARACTERISTIC = '00002a28-0000-1000-8000-00805f9b34fb';
const HARDWARE_CHARACTERISTIC = '00002a23-0000-1000-8000-00805f9b34fb';
const FACELETS_CHARACTERISTIC = '0000fff2-0000-1000-8000-00805f9b34fb';
const STATE_CHARACTERISTIC = '0000fff5-0000-1000-8000-00805f9b34fb';
const BATTERY_CHARACTERISTIC = '0000fff7-0000-1000-8000-00805f9b34fb';

// Indexed by the firmware's minor version, salted with the hardware ID
const GAN_GEN1_KEYS = [
	[
		0xc6, 0xca, 0x15, 0xdf, 0x4f, 0x6e, 0x13, 0xb6, 0x77, 0x0d, 0xe6, 0x59, 0x3a, 0xaf, 0xba,
		0xa2,
	],
	[
		0x43, 0xe2, 0x5b, 0xd6, 0x7d, 0xdc, 0x78, 0xd8, 0x07, 0x60, 0xa3, 0xda, 0x82, 0x3c, 0x01,
		0xf1,
	],
];
// The state only holds this many of the most recent moves
const MOVE_HISTORY_LENGTH = 6;
const POLL_RETRY_DELAY = 500;
const BATTERY_POLL_INTERVAL = 60_000;

/** Firmware 1.0.8 and up of 1.0.x and 1.1.x encrypt with a known key, earlier versions don't encrypt */
async function readEncryptionKey(gatt: BluetoothRemoteGATTServer) {
	const info = await gatt.getPrimaryService(GAN_GEN1_DEVICE_INFO_SERVICE);
	const firmware = await (await info.getCharacteristic(FIRMWARE_CHARACTERISTIC)).readValue();
	const version =
		(firmware.getUint8(0) << 16) | (firmware.getUint8(1) << 8) | firmware.getUint8(2);
	if (version <= 0x010007 || (version & 0xfffe00) !== 0x010000) return null;

	const hardware = await (await info.getCharacteristic(HARDWARE_CHARACTERISTIC)).readValue();
	const key = [...GAN_GEN1_KEYS[(version >> 8) & 0xff]];
	for (let i = 0; i < 6; i++) {
		key[i] = (key[i] + hardware.getUint8(5 - i)) & 0xff;
	}
	return new Aes128(new Uint8Array(key));
}

/**
 * 8 facelets per face as 3 bit color codes, the centers aren't included. Bytes are swapped in pairs. Returns
 * null if the result isn't a valid cube.
 */
function parseFacelets(data: Uint8Array) {
	if (data.length < 18) return null;
	let facelets = '';
	for (let face = 0; face < 6; face++) {
		const i = face * 3;
		const bits = (data[i ^ 1] << 16) | (data[(i + 1) ^ 1] << 8) | data[(i + 2) ^ 1];
		for (let shift = 21; shift >= 0; shift -= 3) {
			facelets += FACES[(bits >> shift) & 7] ?? '?';
			if (shift === 12) facelets += FACES[face];
		}
	}

	const isValid = [...FACES].every((face) => facelets.split(face).length - 1 === 9);
	return isValid ? facelets : null;
}

/** GAN Gen1 protocol: the original GAN356 i. The cube doesn't notify, so its state has to be polled. */
export class GanGen1Connection implements CubeConnection {
	readonly events = new EventStream<SmartCubeEvent>();
	private queue = new GattQueue();
	private polling = true;
	/** The cube's move counter at the last poll, null until the first one */
	private moveCount: number | null = null;
	private serial = 0;
	private lastBatteryRead = Date.now();

	private constructor(
		private device: BluetoothDevice,
		private aes: Aes128 | null,
		private faceletsCharacteristic: BluetoothRemoteGATTCharacteristic,
		private stateCharacteristic: BluetoothRemoteGATTCharacteristic,
		private batteryCharacteristic: BluetoothRemoteGATTCharacteristic,
	) {}

	static async connect(device: BluetoothDevice, gatt: BluetoothRemoteGATTServer) {
		const aes = await readEncryptionKey(gatt);
		const service = await gatt.getPrimaryService(GAN_GEN1_SERVICE);
		const conn = new GanGen1Connection(
			device,
			aes,
			await service.getCharacteristic(FACELETS_CHARACTERISTIC),
			await service.getCharacteristic(STATE_CHARACTERISTIC),
			await service.getCharacteristic(BATTERY_CHARACTERISTIC),
		);
		device.addEventListener('gattserverdisconnected', conn.onDisconnect);
		conn.poll();
		return conn;
	}

	/** Cubes without a MAC address are saved with the browser's ID for them */
	get id() {
		return this.device.id;
	}

	/** Each message is encrypted the same way as GAN Gen2, without an IV */
	private decrypt(value: DataView) {
		const data = new Uint8Array(
			value.buffer.slice(value.byteOffset, value.byteOffset + value.byteLength),
		);
		if (!this.aes || data.length < 16) return data;
		if (data.length > 16) {
			data.set(this.aes.decryptBlock(data.subarray(data.length - 16)), data.length - 16);
		}
		data.set(this.aes.decryptBlock(data.subarray(0, 16)), 0);
		return data;
	}

	private read = async (characteristic: BluetoothRemoteGATTCharacteristic) =>
		this.decrypt(await this.queue.run(() => characteristic.readValue()));

	private poll = async () => {
		while (this.polling) {
			try {
				this.handleState(await this.read(this.stateCharacteristic));
				if (Date.now() - this.lastBatteryRead > BATTERY_POLL_INTERVAL) {
					await this.sendCubeCommand('REQUEST_BATTERY');
				}
			} catch {
				// Keeps a failing read from spinning, polling stops on its own once the cube disconnects
				await new Promise((resolve) => setTimeout(resolve, POLL_RETRY_DELAY));
			}
		}
	};

	/** Byte 12 counts moves, followed by the most recent ones oldest first */
	private handleState(state: Uint8Array) {
		const count = state[12];
		if (this.moveCount !== null) {
			// Moves older than the history are lost if more were made since the last poll
			const newMoves = Math.min((count - this.moveCount) & 0xff, MOVE_HISTORY_LENGTH);
			for (let i = MOVE_HISTORY_LENGTH - newMoves; i < MOVE_HISTORY_LENGTH; i++) {
				this.emitMove(state[13 + i]);
			}
		}
		this.moveCount = count;
	}

	/** Each code is a face index times 3, plus 0 for clockwise, 1 for a double turn or 2 for counterclockwise */
	private emitMove(code: number) {
		const face = Math.floor(code / 3);
		if (face >= FACES.length) return;

		const power = code % 3;
		// Double turns are sent as two quarter turns, like every other cube reports them
		const turns = power === 1 ? 2 : 1;
		for (let i = 0; i < turns; i++) {
			this.serial = (this.serial + 1) & 0xff;
			this.events.emit(moveEvent(this.serial, face, power === 2 ? 1 : 0));
		}
	}

	private onDisconnect = async () => {
		this.events.emit({type: 'DISCONNECT'});
		await this.detach();
	};

	detach = async () => {
		this.polling = false;
		this.device.removeEventListener('gattserverdisconnected', this.onDisconnect);
		this.events.clear();
	};

	sendCubeCommand = async (command: SmartCubeCommand) => {
		switch (command) {
			case 'REQUEST_FACELETS': {
				const facelets = parseFacelets(await this.read(this.faceletsCharacteristic));
				if (facelets) this.events.emit({type: 'FACELETS', serial: this.serial, facelets});
				return true;
			}
			case 'REQUEST_BATTERY': {
				this.lastBatteryRead = Date.now();
				const battery = await this.read(this.batteryCharacteristic);
				this.events.emit(batteryEvent(battery[7]));
				return true;
			}
			case 'REQUEST_RESET':
				return false;
		}
	};
}
