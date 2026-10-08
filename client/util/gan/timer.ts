// GAN Smart Timer and GAN Halo connection, adapted from gan-web-bluetooth (MIT) by Andy Fedotov
import {connectGatt} from '@/util/smart-cube/connection';
import EventStream from '@/util/smart-cube/events';
import {
	SmartTimerConnection,
	SmartTimerConnectionError,
	SmartTimerDriver,
	SmartTimerEvent,
} from '@/util/smart-timer/protocol';

const GAN_TIMER_SERVICE = '0000fff0-0000-1000-8000-00805f9b34fb';
const GAN_TIMER_STATE_CHARACTERISTIC = '0000fff5-0000-1000-8000-00805f9b34fb';

/** State byte of a GAN timer event */
enum GanTimerState {
	/** Hands held long enough, the timer starts when they're lifted */
	GET_SET = 1,
	/** Hands lifted before the timer was ready */
	HANDS_OFF = 2,
	RUNNING = 3,
	/** The only event with a time, the one the timer recorded */
	STOPPED = 4,
	/** Reset button pressed */
	IDLE = 5,
	HANDS_ON = 6,
	/** Always sent right after STOPPED, so it's ignored */
	FINISHED = 7,
}

/**
 * Events are a 0xFE magic byte, the length of the rest of the event, then the state and an optional time. They
 * end with a CRC, but it isn't checked: STOPPED events from some timers carry a CRC that doesn't match, and Bluetooth
 * already checksums every packet. csTimer doesn't reject them either.
 */
function isValidEvent(data: DataView) {
	return (
		data.byteLength >= 4 &&
		data.getUint8(0) === 0xfe &&
		data.getUint8(1) === data.byteLength - 2
	);
}

/** Null for states that don't need handling, and for ones this driver doesn't know */
function parseEvent(data: DataView): SmartTimerEvent | null {
	switch (data.getUint8(3)) {
		case GanTimerState.HANDS_ON:
			return {type: 'HANDS_ON'};
		case GanTimerState.HANDS_OFF:
			return {type: 'HANDS_OFF'};
		case GanTimerState.GET_SET:
			return {type: 'READY'};
		case GanTimerState.RUNNING:
			return {type: 'RUNNING'};
		case GanTimerState.IDLE:
			return {type: 'RESET'};
		case GanTimerState.STOPPED: {
			if (data.byteLength < 8) return null;
			const minutes = data.getUint8(4);
			const seconds = data.getUint8(5);
			const milliseconds = data.getUint16(6, true);
			return {type: 'STOPPED', time: 60000 * minutes + 1000 * seconds + milliseconds};
		}
		default:
			return null;
	}
}

class GanTimerConnection implements SmartTimerConnection {
	readonly events = new EventStream<SmartTimerEvent>();

	constructor(
		private device: BluetoothDevice,
		private stateCharacteristic: BluetoothRemoteGATTCharacteristic,
	) {}

	async start() {
		this.device.addEventListener('gattserverdisconnected', this.onDisconnect);
		this.stateCharacteristic.addEventListener(
			'characteristicvaluechanged',
			this.onStateChanged,
		);
		await this.stateCharacteristic.startNotifications();
	}

	private onStateChanged = () => {
		const data = this.stateCharacteristic.value;
		if (!data || !isValidEvent(data)) return;

		const event = parseEvent(data);
		if (event) this.events.emit(event);
	};

	private removeListeners() {
		this.device.removeEventListener('gattserverdisconnected', this.onDisconnect);
		this.stateCharacteristic.removeEventListener(
			'characteristicvaluechanged',
			this.onStateChanged,
		);
	}

	private onDisconnect = () => {
		this.removeListeners();
		this.events.emit({type: 'DISCONNECT'});
		this.events.clear();
	};

	disconnect() {
		this.removeListeners();
		this.events.clear();
		this.device.gatt?.disconnect();
	}
}

const NOT_A_TIMER =
	"This doesn't look like a GAN Smart Timer. Pick the timer in the device list, not a cube.";

export const GAN_TIMER_DRIVER: SmartTimerDriver = {
	brand: 'gan',
	// Some timers show up with a differently cased name on macOS
	namePrefixes: ['GAN', 'Gan', 'gan'],
	services: [GAN_TIMER_SERVICE],
	resetStartsInspection: true,

	async connect(device) {
		const server = await connectGatt(device);
		try {
			// GAN cubes share the name prefix, so they get this far before turning out not to be a timer
			const service = await server.getPrimaryService(GAN_TIMER_SERVICE).catch(() => {
				throw new SmartTimerConnectionError(NOT_A_TIMER);
			});
			const stateCharacteristic = await service
				.getCharacteristic(GAN_TIMER_STATE_CHARACTERISTIC)
				.catch(() => {
					throw new SmartTimerConnectionError(NOT_A_TIMER);
				});
			// Gen1 GAN cubes have the same characteristic, but it can only be polled
			if (!stateCharacteristic.properties.notify) {
				throw new SmartTimerConnectionError(NOT_A_TIMER);
			}

			const connection = new GanTimerConnection(device, stateCharacteristic);
			await connection.start();
			return connection;
		} catch (error) {
			server.disconnect();
			throw error;
		}
	},
};
