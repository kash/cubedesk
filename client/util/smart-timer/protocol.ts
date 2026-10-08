// Shared types for Bluetooth smart timers, each brand's driver translates its own protocol into these events
import EventStream from '@/util/smart-cube/events';

export type SmartTimerBrand = 'gan';

export type SmartTimerEvent =
	| {type: 'HANDS_ON'}
	/** Hands came off before the timer was ready to start */
	| {type: 'HANDS_OFF'}
	/** Hands have been held long enough, lifting them starts the timer */
	| {type: 'READY'}
	| {type: 'RUNNING'}
	/** time is what the timer recorded, in milliseconds */
	| {type: 'STOPPED'; time: number}
	/** The timer's reset button was pressed */
	| {type: 'RESET'}
	/** The connection dropped without being asked to */
	| {type: 'DISCONNECT'};

export interface SmartTimerConnection {
	readonly events: EventStream<SmartTimerEvent>;
	/** Closes the connection without emitting DISCONNECT */
	disconnect(): void;
}

export interface SmartTimerDriver {
	brand: SmartTimerBrand;
	/** Bluetooth name prefixes the device picker shows, the longest match picks the driver */
	namePrefixes: string[];
	services: string[];
	/** Manufacturer data the driver reads from advertisements, it has to be requested along with the device */
	manufacturerData?: number[];
	/** Pressing reset on an idle timer starts inspection, for timers that can't run inspection themselves */
	resetStartsInspection: boolean;
	connect(device: BluetoothDevice): Promise<SmartTimerConnection>;
}

/** Connection failure whose message is safe to show the user */
export class SmartTimerConnectionError extends Error {}
