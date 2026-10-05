// Protocol drivers for GAN smart cubes, adapted from gan-web-bluetooth (MIT) by Andy Fedotov
import {
	batteryEvent,
	BitReader,
	commandMessage,
	FACES,
	moveEvent,
	SmartCubeCommand,
	SmartCubeEvent,
	SmartCubeMoveEvent,
	SmartCubeProtocolDriver,
	SmartCubeTransport,
} from '@/util/smart-cube/protocol';

// Solved cube state sent with a reset command, the same for every protocol generation
const SOLVED_STATE_PAYLOAD = [0x05, 0x39, 0x77, 0x00, 0x00, 0x01, 0x23, 0x45, 0x67, 0x89, 0xab];
// Face bit masks used by Gen3/Gen4 move events, and face codes used by their move history events
const MOVE_FACE_MASKS = [2, 32, 8, 1, 16, 4];
const HISTORY_FACE_CODES = [1, 5, 3, 0, 4, 2];

// Facelet indices of each corner (URF, UFL, ULB, UBR, DFR, DLF, DBL, DRB) and edge
// (UR, UF, UL, UB, DR, DF, DL, DB, FR, FL, BL, BR) position
const CORNER_FACELETS = [
	[8, 9, 20],
	[6, 18, 38],
	[0, 36, 47],
	[2, 45, 11],
	[29, 26, 15],
	[27, 44, 24],
	[33, 53, 42],
	[35, 17, 51],
];
const EDGE_FACELETS = [
	[5, 10],
	[7, 19],
	[3, 37],
	[1, 46],
	[32, 16],
	[28, 25],
	[30, 43],
	[34, 52],
	[23, 12],
	[21, 41],
	[50, 39],
	[48, 14],
];

const sum = (values: number[]) => values.reduce((a, v) => a + v, 0);
const isPermutation = (values: number[]) =>
	new Set(values).size === values.length && values.every((v) => v >= 0 && v < values.length);

/**
 * Read corner/edge permutation and orientation, the last piece of each is implied by the others. Edges are left
 * solved when cornersOnly is set, for 2x2 cubes, which send dummy edge data.
 * Returns null if the result isn't a valid cube, e.g. when decrypted with the wrong MAC address.
 */
function readFacelets(
	msg: BitReader,
	cpStart: number,
	coStart: number,
	epStart: number,
	eoStart: number,
	cornersOnly = false,
) {
	const cp: number[] = [];
	const co: number[] = [];
	const ep: number[] = [];
	const eo: number[] = [];
	for (let i = 0; i < 7; i++) {
		cp.push(msg.bits(cpStart + i * 3, 3));
		co.push(msg.bits(coStart + i * 2, 2));
	}
	cp.push(28 - sum(cp));
	co.push((3 - (sum(co) % 3)) % 3);
	for (let i = 0; i < 11; i++) {
		ep.push(cornersOnly ? i : msg.bits(epStart + i * 4, 4));
		eo.push(cornersOnly ? 0 : msg.bits(eoStart + i, 1));
	}
	ep.push(66 - sum(ep));
	eo.push((2 - (sum(eo) % 2)) % 2);

	if (!isPermutation(cp) || !isPermutation(ep) || co.some((o) => o > 2)) return null;

	const facelets = Array.from({length: 54}, (_, i) => FACES[Math.floor(i / 9)]);
	for (let i = 0; i < 8; i++) {
		for (let p = 0; p < 3; p++) {
			facelets[CORNER_FACELETS[i][(p + co[i]) % 3]] =
				FACES[Math.floor(CORNER_FACELETS[cp[i]][p] / 9)];
		}
	}
	for (let i = 0; i < 12; i++) {
		for (let p = 0; p < 2; p++) {
			facelets[EDGE_FACELETS[i][(p + eo[i]) % 2]] =
				FACES[Math.floor(EDGE_FACELETS[ep[i]][p] / 9)];
		}
	}
	return facelets.join('');
}

/** Orientation quaternion as four 16 bit words in w, x, y, z order, each a sign bit and a 15 bit magnitude */
function gyroEvent(msg: BitReader, start: number): SmartCubeEvent {
	const component = (index: number) => {
		const value = msg.bits(start + index * 16, 16);
		return ((value >> 15 ? -1 : 1) * (value & 0x7fff)) / 0x7fff;
	};
	// GAN axes point to R, B and U, swap them to point to R, U and F
	return {
		type: 'GYRO',
		orientation: {w: component(0), x: component(1), y: component(3), z: -component(2)},
	};
}

/**
 * GAN Gen2 protocol: GAN Mini ui FreePlay, GAN12 ui (FreePlay), GAN356 i Carry (S), GAN356 i 3, Monster Go 3Ai,
 * MoYu AI 2023
 */
export class GanGen2ProtocolDriver implements SmartCubeProtocolDriver {
	private lastSerial = -1;

	createCommandMessage(command: SmartCubeCommand) {
		const bytes = {
			REQUEST_FACELETS: [0x04],
			REQUEST_BATTERY: [0x09],
			REQUEST_RESET: [0x0a, ...SOLVED_STATE_PAYLOAD],
		};
		return commandMessage(20, bytes[command]);
	}

	async handleStateEvent(conn: SmartCubeTransport, message: Uint8Array) {
		const msg = new BitReader(message);
		const events: SmartCubeEvent[] = [];

		switch (msg.bits(0, 4)) {
			case 0x01:
				events.push(gyroEvent(msg, 4));
				break;
			case 0x02: {
				// Moves are only accepted after the first facelets event
				if (this.lastSerial === -1) break;
				const serial = msg.bits(4, 8);
				// Each move event carries the last 7 moves, so recently missed moves are recovered too
				const diff = Math.min((serial - this.lastSerial) & 0xff, 7);
				this.lastSerial = serial;
				for (let i = diff - 1; i >= 0; i--) {
					const face = msg.bits(12 + 5 * i, 4);
					if (face < FACES.length) {
						events.push(moveEvent((serial - i) & 0xff, face, msg.bits(16 + 5 * i, 1)));
					}
				}
				break;
			}
			case 0x04: {
				const facelets = readFacelets(msg, 12, 33, 47, 91);
				if (!facelets) break;
				const serial = msg.bits(4, 8);
				if (this.lastSerial === -1) this.lastSerial = serial;
				events.push({type: 'FACELETS', serial, facelets});
				break;
			}
			case 0x09:
				events.push(batteryEvent(msg.bits(8, 8)));
				break;
			case 0x0d:
				await conn.disconnect();
				break;
		}

		return events;
	}
}

/**
 * Gen3 and Gen4 cubes send one event per move. Moves go through a FIFO buffer so that any gap in serial
 * numbers can be filled by requesting move history from the cube before the moves are emitted.
 */
abstract class GanBufferedProtocolDriver implements SmartCubeProtocolDriver {
	private serial = -1;
	private lastSerial = -1;
	private lastMoveTime: number | null = null;
	private moveBuffer: SmartCubeMoveEvent[] = [];

	protected abstract messageLength: number;
	protected abstract moveHistoryCommand: number[];

	abstract createCommandMessage(command: SmartCubeCommand): Uint8Array;
	abstract handleStateEvent(
		conn: SmartCubeTransport,
		message: Uint8Array,
	): Promise<SmartCubeEvent[]>;

	protected async handleMove(
		conn: SmartCubeTransport,
		serial: number,
		face: number,
		direction: number,
	) {
		// Moves are only accepted after the first facelets event
		if (this.lastSerial === -1) return [];

		this.lastMoveTime = performance.now();
		this.serial = serial & 0xff;
		if (face >= 0) {
			this.moveBuffer.push(moveEvent(this.serial, face, direction));
		}
		return this.evictMoveBuffer(conn);
	}

	protected handleMoveHistory(
		msg: BitReader,
		startBit: number,
		startSerial: number,
		count: number,
	) {
		for (let i = 0; i < count; i++) {
			const face = HISTORY_FACE_CODES.indexOf(msg.bits(startBit + 4 * i, 3));
			if (face >= 0) {
				const direction = msg.bits(startBit + 3 + 4 * i, 1);
				this.injectMissedMove(moveEvent((startSerial - i) & 0xff, face, direction));
			}
		}
		return this.evictMoveBuffer();
	}

	protected async handleFacelets(
		conn: SmartCubeTransport,
		serial: number,
		facelets: string | null,
	): Promise<SmartCubeEvent[]> {
		if (!facelets) return [];
		this.serial = serial & 0xff;
		// The cube sends facelets periodically, use them to detect missed moves once turning has settled
		if (
			this.lastSerial !== -1 &&
			this.lastMoveTime !== null &&
			performance.now() - this.lastMoveTime > 500
		) {
			await this.checkIfMoveMissed(conn);
		}
		if (this.lastSerial === -1) this.lastSerial = this.serial;
		return [{type: 'FACELETS', serial: this.serial, facelets}];
	}

	private async requestMoveHistory(conn: SmartCubeTransport, serial: number, count: number) {
		// History responses are byte aligned and always start at an odd serial, so request an
		// odd-aligned window with an even number of moves
		if (serial % 2 === 0) serial = (serial - 1) & 0xff;
		if (count % 2 === 1) count++;
		// Never request past the 255 -> 0 serial wrap, firmware spoofs those moves as 'D'
		count = Math.min(count, serial + 1);

		const msg = commandMessage(this.messageLength, [
			...this.moveHistoryCommand,
			serial,
			0,
			count,
			0,
		]);
		// Write errors are safe to ignore, the request is retried on the next move event
		await conn.sendCommandMessage(msg).catch(() => {});
	}

	/** Emit buffered moves until a gap is found, then request history to fill the gap if conn is given */
	private async evictMoveBuffer(conn?: SmartCubeTransport) {
		const evicted: SmartCubeEvent[] = [];
		while (this.moveBuffer.length > 0) {
			const head = this.moveBuffer[0];
			const diff = this.lastSerial === -1 ? 1 : (head.serial - this.lastSerial) & 0xff;
			if (diff > 1) {
				if (conn) await this.requestMoveHistory(conn, head.serial, diff);
				break;
			}
			this.moveBuffer.shift();
			evicted.push(head);
			this.lastSerial = head.serial;
		}

		// The gap was never filled, so something went wrong
		if (conn && this.moveBuffer.length > 16) {
			await conn.disconnect();
		}
		return evicted;
	}

	/** Whether circular (mod 256) serial falls in the range between start and end, open unless specified */
	private isSerialInRange(
		start: number,
		end: number,
		serial: number,
		closedStart = false,
		closedEnd = false,
	) {
		return (
			((end - start) & 0xff) >= ((serial - start) & 0xff) &&
			(closedStart || ((start - serial) & 0xff) > 0) &&
			(closedEnd || ((end - serial) & 0xff) > 0)
		);
	}

	private injectMissedMove(move: SmartCubeMoveEvent) {
		if (this.moveBuffer.length > 0) {
			const head = this.moveBuffer[0];
			if (this.moveBuffer.some((e) => e.serial === move.serial)) return;
			// Must be one of the moves missed between the last emitted move and the buffer head
			if (!this.isSerialInRange(this.lastSerial, head.serial, move.serial)) return;
			// History arrives newest first, so only the move right before the head can be placed
			if (move.serial === ((head.serial - 1) & 0xff)) {
				this.moveBuffer.unshift(move);
			}
		} else if (this.isSerialInRange(this.lastSerial, this.serial, move.serial, false, true)) {
			// Move missed entirely and recovered from a periodic facelets event
			this.moveBuffer.unshift(move);
		}
	}

	private async checkIfMoveMissed(conn: SmartCubeTransport) {
		const diff = (this.serial - this.lastSerial) & 0xff;
		// Skip serial 0 to avoid a firmware bug with the facelets event at the 255 move counter
		if (diff > 0 && this.serial !== 0) {
			const head = this.moveBuffer[0];
			const startSerial = head ? head.serial : (this.serial + 1) & 0xff;
			await this.requestMoveHistory(conn, startSerial, diff + 1);
		}
	}
}

/**
 * GAN Gen3 protocol: GAN356 i Carry 2
 */
export class GanGen3ProtocolDriver extends GanBufferedProtocolDriver {
	protected messageLength = 16;
	protected moveHistoryCommand = [0x68, 0x03];

	createCommandMessage(command: SmartCubeCommand) {
		const bytes = {
			REQUEST_FACELETS: [0x68, 0x01],
			REQUEST_BATTERY: [0x68, 0x07],
			REQUEST_RESET: [0x68, 0x05, ...SOLVED_STATE_PAYLOAD],
		};
		return commandMessage(16, bytes[command]);
	}

	async handleStateEvent(
		conn: SmartCubeTransport,
		message: Uint8Array,
	): Promise<SmartCubeEvent[]> {
		const msg = new BitReader(message);
		const magic = msg.bits(0, 8);
		const dataLength = msg.bits(16, 8);
		if (magic !== 0x55 || dataLength === 0) return [];

		switch (msg.bits(8, 8)) {
			case 0x01:
				return this.handleMove(
					conn,
					msg.uintLE(56, 2),
					MOVE_FACE_MASKS.indexOf(msg.bits(74, 6)),
					msg.bits(72, 2),
				);
			case 0x06:
				return this.handleMoveHistory(msg, 32, msg.bits(24, 8), (dataLength - 1) * 2);
			case 0x02:
				return this.handleFacelets(
					conn,
					msg.uintLE(24, 2),
					readFacelets(msg, 40, 61, 77, 121),
				);
			case 0x10:
				return [batteryEvent(msg.bits(24, 8))];
			case 0x11:
				await conn.disconnect();
				return [];
			default:
				return [];
		}
	}
}

/**
 * GAN Gen4 protocol: GAN12 ui Maglev, GAN14 ui FreePlay, GAN 251 ui (2x2)
 */
export class GanGen4ProtocolDriver extends GanBufferedProtocolDriver {
	protected messageLength = 20;
	protected moveHistoryCommand = [0xd1, 0x04];
	private cornersOnly: boolean;

	/** cornersOnly is for 2x2 cubes, which only report U, R and F moves relative to a fixed DBL corner */
	constructor({cornersOnly = false}: {cornersOnly?: boolean} = {}) {
		super();
		this.cornersOnly = cornersOnly;
	}

	createCommandMessage(command: SmartCubeCommand) {
		const bytes = {
			REQUEST_FACELETS: [0xdd, 0x04, 0x00, 0xed, 0x00, 0x00],
			REQUEST_BATTERY: [0xdd, 0x04, 0x00, 0xef, 0x00, 0x00],
			REQUEST_RESET: [0xd2, 0x0d, ...SOLVED_STATE_PAYLOAD],
		};
		return commandMessage(20, bytes[command]);
	}

	async handleStateEvent(
		conn: SmartCubeTransport,
		message: Uint8Array,
	): Promise<SmartCubeEvent[]> {
		const msg = new BitReader(message);
		const dataLength = msg.bits(8, 8);

		switch (msg.bits(0, 8)) {
			case 0x01:
				return this.handleMove(
					conn,
					msg.uintLE(48, 2),
					MOVE_FACE_MASKS.indexOf(msg.bits(66, 6)),
					msg.bits(64, 2),
				);
			case 0xd1:
				return this.handleMoveHistory(msg, 24, msg.bits(16, 8), (dataLength - 1) * 2);
			case 0xed:
				return this.handleFacelets(
					conn,
					msg.uintLE(16, 2),
					readFacelets(msg, 32, 53, 69, 113, this.cornersOnly),
				);
			case 0xec:
				return [gyroEvent(msg, 16)];
			case 0xef:
				return [batteryEvent(msg.bits(8 + dataLength * 8, 8))];
			case 0xea:
				await conn.disconnect();
				return [];
			default:
				return [];
		}
	}
}
