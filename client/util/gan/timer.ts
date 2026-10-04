// GAN smart timer connection, adapted from gan-web-bluetooth (MIT) by Andy Fedotov
import EventStream from '@/util/gan/events';

const GAN_TIMER_SERVICE = '0000fff0-0000-1000-8000-00805f9b34fb';
const GAN_TIMER_STATE_CHARACTERISTIC = '0000fff5-0000-1000-8000-00805f9b34fb';

export enum GanTimerState {
	/** Timer is disconnected from bluetooth */
	DISCONNECT = 0,
	/** Grace delay expired and timer is ready to start */
	GET_SET = 1,
	/** Hands removed from the timer before grace delay expired */
	HANDS_OFF = 2,
	RUNNING = 3,
	/** Timer is stopped, event includes the recorded time */
	STOPPED = 4,
	/** Timer is reset and idle */
	IDLE = 5,
	/** Hands are placed on the timer */
	HANDS_ON = 6,
	/** Sent immediately after STOPPED */
	FINISHED = 7,
}

export interface GanTimerEvent {
	state: GanTimerState;
	/** Recorded time in milliseconds, only set for STOPPED */
	recordedTime?: number;
}

export interface GanTimerConnection {
	events: EventStream<GanTimerEvent>;
	disconnect: () => Promise<void>;
}

/** CRC-16/CCITT-FALSE */
function crc16ccitt(bytes: Uint8Array) {
	let crc = 0xffff;
	for (const byte of bytes) {
		crc ^= byte << 8;
		for (let i = 0; i < 8; i++) {
			crc = crc & 0x8000 ? (crc << 1) ^ 0x1021 : crc << 1;
		}
	}
	return crc & 0xffff;
}

/** Events start with a 0xFE magic byte and end with a CRC of everything after the first 2 bytes */
function isValidEvent(data: DataView) {
	if (data.byteLength < 4 || data.getUint8(0) !== 0xfe) return false;
	const crc = crc16ccitt(new Uint8Array(data.buffer, data.byteOffset + 2, data.byteLength - 4));
	return data.getUint16(data.byteLength - 2, true) === crc;
}

function parseEvent(data: DataView): GanTimerEvent {
	const state: GanTimerState = data.getUint8(3);
	if (state !== GanTimerState.STOPPED || data.byteLength < 8) return {state};

	const minutes = data.getUint8(4);
	const seconds = data.getUint8(5);
	const milliseconds = data.getUint16(6, true);
	return {state, recordedTime: 60000 * minutes + 1000 * seconds + milliseconds};
}

/** Must be called from a user gesture since it shows the device picker */
export async function connectGanTimer(): Promise<GanTimerConnection> {
	const device = await navigator.bluetooth.requestDevice({
		filters: [{namePrefix: 'GAN'}, {namePrefix: 'gan'}, {namePrefix: 'Gan'}],
		optionalServices: [GAN_TIMER_SERVICE],
	});
	if (!device.gatt) throw new Error('Bluetooth GATT is unavailable for this device');

	const server = await device.gatt.connect();
	const service = await server.getPrimaryService(GAN_TIMER_SERVICE);
	const stateCharacteristic = await service.getCharacteristic(GAN_TIMER_STATE_CHARACTERISTIC);
	const events = new EventStream<GanTimerEvent>();

	const onStateChanged = () => {
		const data = stateCharacteristic.value;
		if (data && isValidEvent(data)) {
			events.emit(parseEvent(data));
		}
	};

	const disconnect = async () => {
		device.removeEventListener('gattserverdisconnected', disconnect);
		stateCharacteristic.removeEventListener('characteristicvaluechanged', onStateChanged);
		await stateCharacteristic.stopNotifications().catch(() => {});
		events.emit({state: GanTimerState.DISCONNECT});
		events.clear();
		if (server.connected) server.disconnect();
	};

	stateCharacteristic.addEventListener('characteristicvaluechanged', onStateChanged);
	await stateCharacteristic.startNotifications();
	device.addEventListener('gattserverdisconnected', disconnect);

	return {events, disconnect};
}
