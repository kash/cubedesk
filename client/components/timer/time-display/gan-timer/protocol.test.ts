import {
	buildTimerEvent,
	crc16ccit,
	GanTimerState,
	isValidEventData,
	makeTimeFromRaw,
	normalizeUuid,
} from '@/components/timer/time-display/gan-timer/protocol';

/**
 * Build a well-formed GAN Smart Timer state packet.
 *
 * Layout: [0]=0xFE magic, [1]=length, [2]=?, [3]=state, [4..]=payload, last 2 bytes=CRC16.
 * The CRC is computed over the packet starting at offset 2, excluding the trailing CRC.
 */
function buildPacket(state: number, payload: number[] = []): DataView {
	const body = [0xfe, 0x00, 0x00, state, ...payload];
	const crcInput = new Uint8Array(body.slice(2));
	const crc = crc16ccit(crcInput.buffer);

	const bytes = new Uint8Array([...body, crc & 0xff, (crc >> 8) & 0xff]);
	return new DataView(bytes.buffer);
}

describe('gan timer protocol', () => {
	describe('isValidEventData', () => {
		it('accepts a packet with the right magic byte and CRC', () => {
			expect(isValidEventData(buildPacket(GanTimerState.IDLE))).toBe(true);
		});

		it('rejects a packet with a bad magic byte', () => {
			const packet = buildPacket(GanTimerState.IDLE);
			packet.setUint8(0, 0x00);
			expect(isValidEventData(packet)).toBe(false);
		});

		it('rejects a packet with a corrupted CRC', () => {
			const packet = buildPacket(GanTimerState.IDLE);
			packet.setUint8(packet.byteLength - 1, 0xff);
			packet.setUint8(packet.byteLength - 2, 0xff);
			expect(isValidEventData(packet)).toBe(false);
		});

		it('rejects empty and missing data instead of throwing', () => {
			expect(isValidEventData(new DataView(new ArrayBuffer(0)))).toBe(false);
			expect(isValidEventData(null)).toBe(false);
			expect(isValidEventData(undefined)).toBe(false);
		});

		it('validates a packet backed by a buffer with a non-zero byte offset', () => {
			// Some Web Bluetooth implementations hand back a DataView into a
			// larger pooled buffer. CRC must be computed over the view, not the buffer.
			const source = buildPacket(GanTimerState.RUNNING);
			const padded = new Uint8Array(4 + source.byteLength);
			padded.set(new Uint8Array(source.buffer), 4);

			const offsetView = new DataView(padded.buffer, 4, source.byteLength);
			expect(isValidEventData(offsetView)).toBe(true);
		});
	});

	describe('buildTimerEvent', () => {
		it.each([
			['HANDS_ON', GanTimerState.HANDS_ON],
			['HANDS_OFF', GanTimerState.HANDS_OFF],
			['GET_SET', GanTimerState.GET_SET],
			['RUNNING', GanTimerState.RUNNING],
			['IDLE', GanTimerState.IDLE],
			['FINISHED', GanTimerState.FINISHED],
		])('decodes the %s state', (_name, state) => {
			expect(buildTimerEvent(buildPacket(state))).toEqual({state});
		});

		it('decodes the recorded time on a STOPPED event', () => {
			// 1 minute, 23 seconds, 456 milliseconds
			const packet = buildPacket(GanTimerState.STOPPED, [1, 23, 456 & 0xff, 456 >> 8]);
			const event = buildTimerEvent(packet);

			expect(event?.state).toBe(GanTimerState.STOPPED);
			expect(event?.recordedTime?.asTimestamp).toBe(83456);
			expect(event?.recordedTime?.toString()).toBe('1:23.456');
		});

		it('drops packets carrying an unknown state rather than emitting garbage', () => {
			expect(buildTimerEvent(buildPacket(42))).toBeNull();
		});

		it('drops a STOPPED packet that is too short to hold a time', () => {
			expect(buildTimerEvent(buildPacket(GanTimerState.STOPPED))).toBeNull();
		});
	});

	describe('makeTimeFromRaw', () => {
		it('reads minutes, seconds and little-endian milliseconds', () => {
			const bytes = new Uint8Array([2, 5, 7 & 0xff, 7 >> 8]);
			const time = makeTimeFromRaw(new DataView(bytes.buffer), 0);

			expect(time.minutes).toBe(2);
			expect(time.seconds).toBe(5);
			expect(time.milliseconds).toBe(7);
			expect(time.asTimestamp).toBe(125007);
			expect(time.toString()).toBe('2:05.007');
		});
	});

	describe('normalizeUuid', () => {
		it('expands a 16 bit UUID to its full 128 bit form', () => {
			expect(normalizeUuid('fff0')).toBe('0000fff0-0000-1000-8000-00805f9b34fb');
		});

		it('lowercases a full UUID so comparisons are case insensitive', () => {
			expect(normalizeUuid('0000FFF0-0000-1000-8000-00805F9B34FB')).toBe(
				'0000fff0-0000-1000-8000-00805f9b34fb'
			);
		});

		it('accepts a numeric 16 bit UUID as reported by some browsers', () => {
			expect(normalizeUuid(0xfff0)).toBe('0000fff0-0000-1000-8000-00805f9b34fb');
		});
	});
});
