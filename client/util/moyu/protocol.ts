// Protocol driver for MoYu smart cubes, protocol details from csTimer (GPL-3.0) by cs0x7f
import {
	batteryEvent,
	BitReader,
	commandMessage,
	FACES,
	moveEvent,
	SmartCubeCommand,
	SmartCubeEvent,
	SmartCubeProtocolDriver,
	SmartCubeTransport,
} from '@/util/smart-cube/protocol';

// Face order MoYu uses for both facelet colors and move codes
const MOYU_FACES = 'FBUDLR';
// Move events carry this many of the most recent moves
const MOVE_HISTORY_LENGTH = 5;
const OPCODE_INFO = 0xa1;
const OPCODE_FACELETS = 0xa3;
const OPCODE_BATTERY = 0xa4;
const OPCODE_MOVE = 0xa5;
const OPCODE_GYRO = 0xab;
const OPCODE_GYRO_ENABLE = 0xac;

/**
 * Faces in FBUDLR order with 8 stickers each as 3 bit color codes, centers are implied. Returns null if
 * the result isn't a valid cube, e.g. when decrypted with the wrong MAC address.
 */
function readFacelets(msg: BitReader, start: number) {
	let facelets = '';
	for (const face of FACES) {
		const faceStart = start + MOYU_FACES.indexOf(face) * 24;
		for (let i = 0; i < 8; i++) {
			if (i === 4) facelets += face;
			const color = MOYU_FACES[msg.bits(faceStart + i * 3, 3)];
			if (!color) return null;
			facelets += color;
		}
	}

	const isValid = [...FACES].every((face) => facelets.split(face).length - 1 === 9);
	return isValid ? facelets : null;
}

/** Orientation quaternion as four little endian 32 bit integers in w, x, y, z order, scaled by 2^30 */
function gyroEvent(message: Uint8Array): SmartCubeEvent {
	const view = new DataView(message.buffer, message.byteOffset, message.byteLength);
	const [w, x, y, z] = [1, 5, 9, 13].map((offset) => view.getInt32(offset, true) / 2 ** 30);
	const length = Math.hypot(w, x, y, z) || 1;
	// MoYu axes point to R, B and U like GAN's, swap them to point to R, U and F
	return {
		type: 'GYRO',
		orientation: {w: w / length, x: x / length, y: z / length, z: -y / length},
	};
}

/**
 * MoYu32 protocol: WeiLong V10 AI and V11 AI. 20 byte messages with the opcode in the first byte, encrypted the
 * same way as GAN Gen2 with a different key.
 */
export class Moyu32ProtocolDriver implements SmartCubeProtocolDriver {
	private lastSerial = -1;

	createCommandMessage(command: SmartCubeCommand) {
		// There's no known command to reset the cube's state to solved
		const opcodes: Partial<Record<SmartCubeCommand, number>> = {
			REQUEST_FACELETS: OPCODE_FACELETS,
			REQUEST_BATTERY: OPCODE_BATTERY,
		};
		const opcode = opcodes[command];
		return opcode === undefined ? null : commandMessage(20, [opcode]);
	}

	/**
	 * Some cubes, like the WeiLong V11 AI, stay silent until they get the info, facelets and battery requests
	 * twice. Gyro notifications are off until enabled.
	 */
	createStartupMessages() {
		const burst = [OPCODE_INFO, OPCODE_FACELETS, OPCODE_BATTERY].map((opcode) =>
			commandMessage(20, [opcode]),
		);
		return [...burst, ...burst, commandMessage(20, [OPCODE_GYRO_ENABLE, 0x00, 0x01])];
	}

	async handleStateEvent(_conn: SmartCubeTransport, message: Uint8Array) {
		const msg = new BitReader(message);
		const events: SmartCubeEvent[] = [];

		switch (msg.bits(0, 8)) {
			case OPCODE_FACELETS: {
				const facelets = readFacelets(msg, 8);
				if (!facelets) break;
				const serial = msg.bits(152, 8);
				if (this.lastSerial === -1) this.lastSerial = serial;
				events.push({type: 'FACELETS', serial, facelets});
				break;
			}
			case OPCODE_BATTERY:
				events.push(batteryEvent(msg.bits(8, 8)));
				break;
			case OPCODE_MOVE: {
				// Moves are only accepted after the first facelets event
				if (this.lastSerial === -1) break;
				const serial = msg.bits(88, 8);
				// Moves are listed newest first, so recently missed moves are recovered too
				const diff = Math.min((serial - this.lastSerial) & 0xff, MOVE_HISTORY_LENGTH);
				this.lastSerial = serial;
				for (let i = diff - 1; i >= 0; i--) {
					// Each code is a face index into MOYU_FACES times 2, plus 1 if counterclockwise
					const code = msg.bits(96 + 5 * i, 5);
					if (code >= 12) continue;
					const face = FACES.indexOf(MOYU_FACES[code >> 1]);
					events.push(moveEvent((serial - i) & 0xff, face, code & 1));
				}
				break;
			}
			case OPCODE_GYRO:
				events.push(gyroEvent(message));
				break;
		}

		return events;
	}
}
