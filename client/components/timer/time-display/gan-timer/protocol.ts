/**
 * Wire protocol for the GAN Smart Timer.
 *
 * Kept free of any Web Bluetooth types so it can be unit tested directly.
 * Credits to Andy Fedotov (https://github.com/afedotov/gan-web-bluetooth), whose
 * reverse engineering of the protocol this is based on.
 */

/**
 * GAN Smart Timer events/states.
 *
 * Values match the byte the timer puts at offset 3 of a state packet, and are
 * kept identical to the `gan-web-bluetooth` enum this driver replaced.
 */
export enum GanTimerState {
	/** Fired when timer is disconnected from bluetooth */
	DISCONNECT = 0,
	/** Grace delay is expired and timer is ready to start */
	GET_SET = 1,
	/** Hands removed from the timer before grace delay expired */
	HANDS_OFF = 2,
	/** Timer is running */
	RUNNING = 3,
	/** Timer is stopped, this event includes recorded time */
	STOPPED = 4,
	/** Timer is reset and idle */
	IDLE = 5,
	/** Hands are placed on the timer */
	HANDS_ON = 6,
	/** Timer moves to this state immediately after STOPPED */
	FINISHED = 7,
}

const KNOWN_STATES = new Set<number>([
	GanTimerState.DISCONNECT,
	GanTimerState.GET_SET,
	GanTimerState.HANDS_OFF,
	GanTimerState.RUNNING,
	GanTimerState.STOPPED,
	GanTimerState.IDLE,
	GanTimerState.HANDS_ON,
	GanTimerState.FINISHED,
]);

/** Representation of a time value */
export interface GanTimerTime {
	readonly minutes: number;
	readonly seconds: number;
	readonly milliseconds: number;
	readonly asTimestamp: number;
	toString(): string;
}

/** Timer state event */
export interface GanTimerEvent {
	/** Current timer state */
	state: GanTimerState;
	/** Recorded time value, only present on a STOPPED event */
	recordedTime?: GanTimerTime;
}

/** Representation of the time values recorded in the timer's memory */
export interface GanTimerRecordedTimes {
	displayTime: GanTimerTime;
	previousTimes: [GanTimerTime, GanTimerTime, GanTimerTime];
}

export function makeTime(min: number, sec: number, msec: number): GanTimerTime {
	return {
		minutes: min,
		seconds: sec,
		milliseconds: msec,
		asTimestamp: 60000 * min + 1000 * sec + msec,
		toString: () =>
			`${min.toString(10)}:${sec.toString(10).padStart(2, '0')}.${msec
				.toString(10)
				.padStart(3, '0')}`,
	};
}

export function makeTimeFromRaw(data: DataView, offset: number): GanTimerTime {
	return makeTime(data.getUint8(offset), data.getUint8(offset + 1), data.getUint16(offset + 2, true));
}

export function makeTimeFromTimestamp(timestamp: number): GanTimerTime {
	return makeTime(
		Math.trunc(timestamp / 60000),
		Math.trunc((timestamp % 60000) / 1000),
		Math.trunc(timestamp % 1000)
	);
}

/** Calculate ArrayBuffer checksum using a CRC-16/CCITT-FALSE variation */
export function crc16ccit(buff: ArrayBuffer): number {
	const dataView = new DataView(buff);
	let crc = 0xffff;
	for (let i = 0; i < dataView.byteLength; ++i) {
		crc ^= dataView.getUint8(i) << 8;
		for (let j = 0; j < 8; ++j) {
			crc = (crc & 0x8000) > 0 ? (crc << 1) ^ 0x1021 : crc << 1;
		}
	}
	return crc & 0xffff;
}

/** Ensure a received timer packet has valid data: check the magic byte and CRC */
export function isValidEventData(data: DataView | null | undefined): boolean {
	try {
		if (!data || data.byteLength < 6 || data.getUint8(0) !== 0xfe) {
			return false;
		}

		const eventCRC = data.getUint16(data.byteLength - 2, true);
		// Slice relative to the view, not the backing buffer, since some browsers
		// hand back a DataView into a larger pooled ArrayBuffer.
		const payload = new Uint8Array(data.buffer, data.byteOffset + 2, data.byteLength - 4);
		const calculatedCRC = crc16ccit(payload.slice().buffer);

		return eventCRC === calculatedCRC;
	} catch {
		return false;
	}
}

/**
 * Build an event from a raw state packet.
 *
 * Returns null for anything we can't confidently decode, so a single odd packet
 * gets dropped rather than tearing down the whole connection.
 */
export function buildTimerEvent(data: DataView): GanTimerEvent | null {
	try {
		const state = data.getUint8(3);
		if (!KNOWN_STATES.has(state)) {
			return null;
		}

		if (state === GanTimerState.STOPPED) {
			// state byte + 4 time bytes + 2 CRC bytes must all fit
			if (data.byteLength < 10) {
				return null;
			}
			return {state, recordedTime: makeTimeFromRaw(data, 4)};
		}

		return {state};
	} catch {
		return null;
	}
}

/**
 * Expand a UUID to its lowercase 128 bit form so that service and characteristic
 * UUIDs can be compared regardless of how the browser reported them.
 */
export function normalizeUuid(uuid: string | number): string {
	if (typeof uuid === 'number') {
		return `0000${uuid.toString(16).padStart(4, '0')}-0000-1000-8000-00805f9b34fb`;
	}

	const trimmed = uuid.trim().toLowerCase();
	if (/^(0x)?[0-9a-f]{1,4}$/.test(trimmed)) {
		return `0000${trimmed.replace(/^0x/, '').padStart(4, '0')}-0000-1000-8000-00805f9b34fb`;
	}

	return trimmed;
}

/** Render a DataView as a hex string, for logging undecodable packets */
export function hexdump(data: DataView | null | undefined): string {
	if (!data) {
		return '';
	}

	const bytes: string[] = [];
	for (let i = 0; i < data.byteLength; i++) {
		bytes.push(data.getUint8(i).toString(16).padStart(2, '0'));
	}
	return bytes.join(' ');
}
