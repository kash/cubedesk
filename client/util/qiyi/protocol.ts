// Protocol driver for QiYi smart cubes, protocol details from csTimer (GPL-3.0) by cs0x7f and qiyi_smartcube_protocol by Flying-Toast
import {
	batteryEvent,
	FACES,
	moveEvent,
	SmartCubeCommand,
	SmartCubeEvent,
	SmartCubeProtocolDriver,
	SmartCubeTransport,
} from '@/util/smart-cube/protocol';

// TODO: remove before merging
const debug = (...args: unknown[]) => console.info('[QiYi debug]', ...args);
const hex = (bytes: Uint8Array) =>
	Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join(' ');
let gyroBasis: number[] | null = null;
let lastGyroLog = 0;

// Face order QiYi uses for both facelet colors and move codes
const QIYI_FACES = 'LRDUFB';
const SOLVED_FACELETS = [...FACES].map((face) => face.repeat(9)).join('');
const OPCODE_HELLO = 0x02;
const OPCODE_STATE_CHANGE = 0x03;
const OPCODE_SYNC = 0x04;
const OPCODE_STATE = 0x05;
// State changes carry this many of the most recent moves
const MOVE_HISTORY_LENGTH = 10;

function crc16modbus(data: Uint8Array) {
	let crc = 0xffff;
	for (const byte of data) {
		crc ^= byte;
		for (let i = 0; i < 8; i++) {
			crc = crc & 1 ? (crc >> 1) ^ 0xa001 : crc >> 1;
		}
	}
	return crc;
}

/** Messages start with 0xFE and their length, and end with a little endian CRC-16/MODBUS checksum */
function createMessage(content: number[]) {
	const message = [0xfe, content.length + 4, ...content];
	const crc = crc16modbus(new Uint8Array(message));
	return new Uint8Array([...message, crc & 0xff, crc >> 8]);
}

/**
 * 54 facelets in Kociemba order as 4 bit color codes, low nibble first. Returns null if the result isn't a
 * valid cube.
 */
function readFacelets(message: Uint8Array, start: number) {
	let facelets = '';
	for (let i = 0; i < 54; i++) {
		const color = QIYI_FACES[(message[start + (i >> 1)] >> ((i % 2) * 4)) & 0xf];
		if (!color) return null;
		facelets += color;
	}

	const isValid = [...FACES].every((face) => facelets.split(face).length - 1 === 9);
	return isValid ? facelets : null;
}

function encodeFacelets(facelets: string) {
	const bytes = new Array<number>(27).fill(0);
	for (let i = 0; i < 54; i++) {
		bytes[i >> 1] |= QIYI_FACES.indexOf(facelets[i]) << ((i % 2) * 4);
	}
	return bytes;
}

/** Orientation quaternion as big endian 16 bit integers in x, y, z, w order, scaled by 1000 */
function gyroEvent(message: Uint8Array): SmartCubeEvent[] {
	if (message.length < 16 || crc16modbus(message.subarray(0, 16)) !== 0) return [];

	const view = new DataView(message.buffer, message.byteOffset, message.byteLength);
	const [x, y, z, w] = [6, 8, 10, 12].map((offset) => view.getInt16(offset) / 1000);
	logGyro(x, y, z, w);
	const length = Math.hypot(w, x, y, z) || 1;
	return [
		{type: 'GYRO', orientation: {w: w / length, x: x / length, y: y / length, z: z / length}},
	];
}

/** Rotation since the first reading as an axis in the cube's raw axes, the same way the 3D cube applies it */
function logGyro(x: number, y: number, z: number, w: number) {
	if (!gyroBasis) gyroBasis = [x, y, z, w];
	const now = Date.now();
	if (now - lastGyroLog < 1000) return;
	lastGyroLog = now;

	// conj(basis) * q
	const [bx, by, bz, bw] = [-gyroBasis[0], -gyroBasis[1], -gyroBasis[2], gyroBasis[3]];
	let rw = bw * w - bx * x - by * y - bz * z;
	let rx = bw * x + bx * w + by * z - bz * y;
	let ry = bw * y - bx * z + by * w + bz * x;
	let rz = bw * z + bx * y - by * x + bz * w;
	if (rw < 0) [rw, rx, ry, rz] = [-rw, -rx, -ry, -rz];
	const angle = (2 * Math.acos(Math.min(1, rw)) * 180) / Math.PI;
	const s = Math.hypot(rx, ry, rz) || 1;
	const f = (n: number) => n.toFixed(2);
	debug(
		`gyro raw x=${f(x)} y=${f(y)} z=${f(z)} w=${f(w)} | since connect: ${angle.toFixed(0)}° around raw axis (${f(rx / s)}, ${f(ry / s)}, ${f(rz / s)})`,
	);
}

/**
 * QiYi protocol: QiYi AI and X-Man Tornado V4 AI. Messages are encrypted with a fixed key, but the cube only
 * responds after a hello containing its MAC address.
 */
export class QiyiProtocolDriver implements SmartCubeProtocolDriver {
	/** Cube timestamp of the newest move handled, null until the cube responds to the hello */
	private lastTimestamp: number | null = null;
	private serial = 0;

	constructor(private mac: string) {
		gyroBasis = null;
	}

	createStartupMessages() {
		// The MAC address goes in reverse byte order, the bytes before it don't seem to matter
		const mac = this.mac
			.split(':')
			.map((byte) => parseInt(byte, 16))
			.reverse();
		debug('sending hello for MAC', this.mac);
		return [
			createMessage([
				0x00,
				0x6b,
				0x01,
				0x00,
				0x00,
				0x22,
				0x06,
				0x00,
				0x02,
				0x08,
				0x00,
				...mac,
			]),
		];
	}

	createCommandMessage(command: SmartCubeCommand) {
		debug('command', command);
		switch (command) {
			// The battery level is sent along with the state
			case 'REQUEST_FACELETS':
			case 'REQUEST_BATTERY':
				return createMessage([OPCODE_STATE, 0x05, 0x05, 0x05, 0x05]);
			case 'REQUEST_RESET':
				return createMessage([
					OPCODE_SYNC,
					0x17,
					0x88,
					0x8b,
					0x31,
					...encodeFacelets(SOLVED_FACELETS),
					0x00,
					0x00,
				]);
		}
	}

	async handleStateEvent(conn: SmartCubeTransport, message: Uint8Array) {
		if (message[0] === 0xcc && message[1] === 0x10) return gyroEvent(message);

		const length = message[1];
		if (message[0] !== 0xfe || length < 9 || length > message.length) {
			debug('ignored message', hex(message));
			return [];
		}
		const msg = message.subarray(0, length);
		if (crc16modbus(msg) !== 0) {
			debug('bad checksum', hex(message));
			return [];
		}

		const opcode = msg[2];
		const timestamp = new DataView(msg.buffer, msg.byteOffset, msg.byteLength).getUint32(3);
		debug(`opcode 0x${opcode.toString(16)}`, hex(msg));
		// Messages are acknowledged by sending back their opcode and timestamp
		const acknowledge = () => {
			conn.sendCommandMessage(createMessage([...msg.subarray(2, 7)])).catch(() => {});
		};

		const events: SmartCubeEvent[] = [];
		switch (opcode) {
			case OPCODE_HELLO:
				acknowledge();
				this.lastTimestamp = timestamp;
				break;
			case OPCODE_STATE_CHANGE:
				// Only state changes into a solved state ask to be acknowledged
				if (msg[91] === 1) acknowledge();
				events.push(...this.readMoves(msg, timestamp));
				break;
			case OPCODE_SYNC:
			case OPCODE_STATE:
				break;
			default:
				return [];
		}

		// Sent with every state change, but only applied on its own when nothing else describes the state
		const facelets = readFacelets(msg, 7);
		if (facelets && opcode !== OPCODE_STATE_CHANGE) {
			events.push({type: 'FACELETS', serial: this.serial, facelets});
		}
		events.push(batteryEvent(msg[35]));
		debug('events', JSON.stringify(events));
		return events;
	}

	/** Moves since the last state change, oldest first, from the newest move and the ones before it */
	private readMoves(msg: Uint8Array, timestamp: number) {
		const lastTimestamp = this.lastTimestamp;
		// Moves are only accepted after the cube's hello
		if (lastTimestamp === null) return [];

		const view = new DataView(msg.buffer, msg.byteOffset, msg.byteLength);
		const moves: {code: number; timestamp: number}[] = [{code: msg[34], timestamp}];
		// Earlier moves are listed newest first before the acknowledgement byte, unused slots are filled with 0xFF
		for (let i = 1; i < MOVE_HISTORY_LENGTH; i++) {
			const offset = 91 - 5 * i;
			moves.push({code: msg[offset + 4], timestamp: view.getUint32(offset)});
		}

		const newCodes: number[] = [];
		for (const move of moves) {
			if (move.code < 1 || move.code > 12 || move.timestamp <= lastTimestamp) break;
			newCodes.unshift(move.code);
		}
		this.lastTimestamp = timestamp;

		return newCodes.map((code) => {
			this.serial = (this.serial + 1) & 0xff;
			// Each code is 1 plus a face index into QIYI_FACES times 2, plus 1 if counterclockwise
			const face = FACES.indexOf(QIYI_FACES[(code - 1) >> 1]);
			return moveEvent(this.serial, face, code & 1);
		});
	}
}
