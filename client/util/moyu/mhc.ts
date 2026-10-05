// Original MoYu AI smart cube connection, protocol details from smartcube-web-bluetooth (MIT) by Pau Oliva and
// csTimer (GPL-3.0) by cs0x7f
import {connectGatt, CubeConnection, GattQueue} from '@/util/smart-cube/connection';
import EventStream from '@/util/smart-cube/events';
import {
	batteryEvent,
	FACES,
	moveEvent,
	SmartCubeCommand,
	SmartCubeEvent,
} from '@/util/smart-cube/protocol';

/** Bluetooth name prefix of the original MoYu AI, MHC_XXXX */
export const MHC_NAME_PREFIX = 'MHC';
export const MHC_SERVICE = '00001000-0000-1000-8000-00805f9b34fb';
const COMMAND_CHARACTERISTIC = '00001001-0000-1000-8000-00805f9b34fb';
const RESPONSE_CHARACTERISTIC = '00001002-0000-1000-8000-00805f9b34fb';
const TURN_CHARACTERISTIC = '00001003-0000-1000-8000-00805f9b34fb';

const COMMAND_BATTERY = 3;
const COMMAND_CUBE_STATE = 10;
const RESPONSE_TIMEOUT = 5000;
// Requests are split into frames of this size, after a send counter byte and a frame index byte
const FRAME_LENGTH = 20;
const FRAME_PAYLOAD_LENGTH = FRAME_LENGTH - 2;

// Face order the cube uses for sticker colors and turns
const MHC_FACES = 'DLBRFU';
// Kociemba facelet index of each sticker, by face in MHC_FACES order
const STICKER_FACELETS = [
	[27, 28, 29, 30, 31, 32, 33, 34, 35],
	[44, 43, 42, 41, 40, 39, 38, 37, 36],
	[53, 52, 51, 50, 49, 48, 47, 46, 45],
	[17, 16, 15, 14, 13, 12, 11, 10, 9],
	[26, 25, 24, 23, 22, 21, 20, 19, 18],
	[0, 1, 2, 3, 4, 5, 6, 7, 8],
];
// Faces report their rotation in ninths of a quarter turn
const ROTATION_STEPS = 9;

type PendingRequest = {resolve: (payload: Uint8Array) => void; reject: (error: Error) => void};
type ResponsePart = {index: number; payload: Uint8Array};

/**
 * 54 stickers as 4 bit color codes, low nibble first, then each face's rotation the same way. Returns null if
 * the stickers aren't a valid cube.
 */
function parseCubeState(payload: Uint8Array) {
	if (payload.length < 30) return null;
	const nibble = (i: number) => (payload[i >> 1] >> ((i % 2) * 4)) & 0xf;

	const facelets = new Array<string>(54).fill('?');
	for (let face = 0; face < 6; face++) {
		for (let i = 0; i < 9; i++) {
			facelets[STICKER_FACELETS[face][i]] = MHC_FACES[nibble(face * 9 + i)] ?? '?';
		}
	}
	const rotations = Array.from({length: 6}, (_, face) => nibble(54 + face) % ROTATION_STEPS);

	const result = facelets.join('');
	const isValid = [...FACES].every((face) => result.split(face).length - 1 === 9);
	return isValid ? {facelets: result, rotations} : null;
}

/** A solved cube state with every face at rest, in the same format parseCubeState reads */
function solvedCubeState() {
	const payload = new Uint8Array(30);
	for (let i = 0; i < 54; i++) {
		payload[i >> 1] |= Math.floor(i / 9) << ((i % 2) * 4);
	}
	return payload;
}

/**
 * MoYu MHC protocol: the original MoYu AI. Turns are notified on their own characteristic, everything else is
 * a request and response split into frames.
 */
export class MhcConnection implements CubeConnection {
	readonly events = new EventStream<SmartCubeEvent>();
	private queue = new GattQueue();
	private sendCount = 0;
	private requestId = 0;
	private pending = new Map<string, PendingRequest>();
	private responseParts: ResponsePart[] = [];
	/** Each face's rotation since it was last at rest, in steps */
	private rotations = [0, 0, 0, 0, 0, 0];
	private serial = 0;

	private constructor(
		private device: BluetoothDevice,
		private commandCharacteristic: BluetoothRemoteGATTCharacteristic,
		private responseCharacteristic: BluetoothRemoteGATTCharacteristic,
		private turnCharacteristic: BluetoothRemoteGATTCharacteristic,
	) {}

	static async connect(device: BluetoothDevice) {
		const gatt = await connectGatt(device);
		try {
			const service = await gatt.getPrimaryService(MHC_SERVICE);
			const conn = new MhcConnection(
				device,
				await service.getCharacteristic(COMMAND_CHARACTERISTIC),
				await service.getCharacteristic(RESPONSE_CHARACTERISTIC),
				await service.getCharacteristic(TURN_CHARACTERISTIC),
			);
			await conn.start();
			return conn;
		} catch (error) {
			gatt.disconnect();
			throw error;
		}
	}

	/** Cubes without a MAC address are saved with the browser's ID for them */
	get id() {
		return this.device.id;
	}

	private async start() {
		this.device.addEventListener('gattserverdisconnected', this.onDisconnect);
		this.responseCharacteristic.addEventListener('characteristicvaluechanged', this.onResponse);
		this.turnCharacteristic.addEventListener('characteristicvaluechanged', this.onTurn);
		await this.queue.run(() => this.responseCharacteristic.startNotifications());
		await this.queue.run(() => this.turnCharacteristic.startNotifications());
	}

	/** The header byte has the command in the low 4 bits, then whether there's a payload, then the request ID */
	private async request(command: number, payload?: Uint8Array) {
		this.requestId = (this.requestId + 1) % 8;
		const key = `${command}:${this.requestId}`;
		const body = new Uint8Array([
			command | (payload ? 0x10 : 0) | (this.requestId << 5),
			...(payload ?? []),
		]);

		const response = new Promise<Uint8Array>((resolve, reject) => {
			const timer = setTimeout(() => {
				this.pending.delete(key);
				reject(new Error(`MoYu MHC command ${command} timed out`));
			}, RESPONSE_TIMEOUT);
			const finish = () => {
				clearTimeout(timer);
				this.pending.delete(key);
			};
			this.pending.set(key, {
				resolve: (value) => {
					finish();
					resolve(value);
				},
				reject: (error) => {
					finish();
					reject(error);
				},
			});
		});

		const frameCount = Math.ceil(body.length / FRAME_PAYLOAD_LENGTH);
		try {
			for (let i = 0; i < frameCount; i++) {
				const frame = new Uint8Array(FRAME_LENGTH);
				frame[0] = this.sendCount;
				frame[1] = i | (frameCount << 4);
				frame.set(
					body.subarray(i * FRAME_PAYLOAD_LENGTH, (i + 1) * FRAME_PAYLOAD_LENGTH),
					2,
				);
				this.sendCount = (this.sendCount + 1) & 0xff;
				await this.queue.run(() => this.commandCharacteristic.writeValue(frame));
			}
		} catch (error) {
			this.pending
				.get(key)
				?.reject(error instanceof Error ? error : new Error(String(error)));
		}
		return response;
	}

	/** Responses come in parts with their index and the part count, then the same header byte as the request */
	private onResponse = () => {
		const value = this.responseCharacteristic.value;
		if (!value || value.byteLength < 2) return;

		const data = new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
		const index = data[1] & 0xf;
		const total = data[1] >> 4;
		this.responseParts.push({index, payload: data.slice(2)});
		if (index !== total - 1) return;

		const parts = this.responseParts.sort((a, b) => a.index - b.index);
		this.responseParts = [];
		const merged = new Uint8Array(parts.flatMap((part) => [...part.payload]));
		if (!merged.length) return;

		const header = merged[0];
		const request = this.pending.get(`${header & 0xf}:${header >> 5}`);
		if (!request) return;
		if (header & 0x10) request.resolve(merged.subarray(1));
		else request.reject(new Error(`MoYu MHC command ${header & 0xf} failed`));
	};

	/**
	 * A count, then 6 bytes per turn with the face at byte 4 and how far it turned at byte 5. A move counts once
	 * a face turns past halfway between two rest positions.
	 */
	private onTurn = () => {
		const value = this.turnCharacteristic.value;
		if (!value || value.byteLength < 1) return;

		const count = value.getUint8(0);
		if (value.byteLength < 1 + count * 6) return;
		for (let i = 0; i < count; i++) {
			const offset = 1 + i * 6;
			const face = value.getUint8(offset + 4);
			if (face >= MHC_FACES.length) continue;

			const before = this.rotations[face];
			const after = before + Math.round(value.getInt8(offset + 5) / 36);
			this.rotations[face] = (after + ROTATION_STEPS) % ROTATION_STEPS;

			const half = Math.floor(ROTATION_STEPS / 2);
			let direction: number;
			if (before <= half && after > half) direction = 0;
			else if (before > half && after <= half) direction = 1;
			else continue;

			this.serial = (this.serial + 1) & 0xff;
			this.events.emit(moveEvent(this.serial, FACES.indexOf(MHC_FACES[face]), direction));
		}
	};

	private onDisconnect = async () => {
		this.events.emit({type: 'DISCONNECT'});
		await this.detach();
	};

	detach = async () => {
		this.device.removeEventListener('gattserverdisconnected', this.onDisconnect);
		this.responseCharacteristic.removeEventListener(
			'characteristicvaluechanged',
			this.onResponse,
		);
		this.turnCharacteristic.removeEventListener('characteristicvaluechanged', this.onTurn);
		this.events.clear();
		await this.responseCharacteristic.stopNotifications().catch(() => {});
		await this.turnCharacteristic.stopNotifications().catch(() => {});
	};

	sendCubeCommand = async (command: SmartCubeCommand) => {
		switch (command) {
			case 'REQUEST_FACELETS': {
				const state = parseCubeState(await this.request(COMMAND_CUBE_STATE));
				if (state) {
					this.rotations = state.rotations;
					this.events.emit({
						type: 'FACELETS',
						serial: this.serial,
						facelets: state.facelets,
					});
				}
				return true;
			}
			case 'REQUEST_BATTERY': {
				const battery = await this.request(COMMAND_BATTERY);
				this.events.emit(batteryEvent(battery[2] | (battery[3] << 8)));
				return true;
			}
			case 'REQUEST_RESET':
				await this.request(COMMAND_CUBE_STATE, solvedCubeState());
				this.rotations = [0, 0, 0, 0, 0, 0];
				return true;
		}
	};
}
