// Shared protocol types and helpers for encrypted smart cubes (GAN, MoYu)

/** REQUEST_RESET makes the cube treat its current state as solved, to fix drift in its move tracking */
export type SmartCubeCommand = 'REQUEST_FACELETS' | 'REQUEST_BATTERY' | 'REQUEST_RESET';

export type SmartCubeMoveEvent = {type: 'MOVE'; serial: number; move: string};

/** Orientation quaternion with +x toward the R face, +y toward U and +z toward F */
export type SmartCubeOrientation = {x: number; y: number; z: number; w: number};

export type SmartCubeEvent =
	| SmartCubeMoveEvent
	/** Facelets are in Kociemba order (URFDLB faces), the same format cubejs uses */
	| {type: 'FACELETS'; serial: number; facelets: string}
	/** Only sent by cubes with a gyroscope */
	| {type: 'GYRO'; orientation: SmartCubeOrientation}
	| {type: 'BATTERY'; batteryLevel: number}
	| {type: 'DISCONNECT'};

export interface SmartCubeTransport {
	sendCommandMessage(message: Uint8Array): Promise<void>;
	disconnect(): Promise<void>;
}

export interface SmartCubeProtocolDriver {
	/** Null if the cube doesn't support the command */
	createCommandMessage(command: SmartCubeCommand): Uint8Array | null;
	handleStateEvent(conn: SmartCubeTransport, message: Uint8Array): Promise<SmartCubeEvent[]>;
}

export const FACES = 'URFDLB';

/** Reads arbitrary length bit words from a message, bits are numbered from the MSB of the first byte */
export class BitReader {
	constructor(private bytes: Uint8Array) {}

	bits(start: number, length: number) {
		let value = 0;
		for (let i = start; i < start + length; i++) {
			value = value * 2 + ((this.bytes[i >> 3] >> (7 - (i & 7))) & 1);
		}
		return value;
	}

	uintLE(start: number, byteLength: number) {
		let value = 0;
		for (let i = byteLength - 1; i >= 0; i--) {
			value = value * 256 + this.bits(start + i * 8, 8);
		}
		return value;
	}
}

export function commandMessage(length: number, bytes: number[]) {
	const msg = new Uint8Array(length);
	msg.set(bytes);
	return msg;
}

/** face is an index into FACES, direction is 1 for counterclockwise */
export function moveEvent(serial: number, face: number, direction: number): SmartCubeMoveEvent {
	return {type: 'MOVE', serial, move: FACES[face] + (direction === 1 ? "'" : '')};
}

export function batteryEvent(level: number): SmartCubeEvent {
	return {type: 'BATTERY', batteryLevel: Math.min(level, 100)};
}
