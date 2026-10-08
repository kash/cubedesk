import {findPermittedDevice, waitForAdvertisement} from '@/util/smart-cube/connection';
import EventStream from '@/util/smart-cube/events';
import {findSmartTimerDriver, SMART_TIMER_REQUEST_OPTIONS} from '@/util/smart-timer/drivers';
import {
	SmartTimerBrand,
	SmartTimerConnection,
	SmartTimerConnectionError,
	SmartTimerEvent,
} from '@/util/smart-timer/protocol';
import {toastError} from '@/util/toast';

const LAST_DEVICE_KEY = 'smart_timer_last_device_id';
/** Without advertisement watching there's no way to tell when the timer is back, so try once after a moment */
const BLIND_RECONNECT_DELAY = 2500;

/** reconnecting: waiting for the last timer to be turned on or come back in range */
export type SmartTimerStatus = 'disconnected' | 'reconnecting' | 'connecting' | 'connected';

export type SmartTimerConnectorState = {status: SmartTimerStatus; brand: SmartTimerBrand | null};

function readLastDeviceId() {
	try {
		return localStorage.getItem(LAST_DEVICE_KEY);
	} catch {
		return null;
	}
}

function writeLastDeviceId(id: string | null) {
	try {
		if (id) localStorage.setItem(LAST_DEVICE_KEY, id);
		else localStorage.removeItem(LAST_DEVICE_KEY);
	} catch {
		// Storage can be unavailable, auto-reconnect just won't happen
	}
}

/** Resolves true once the device can be connected to, or false if aborted */
function waitForDevice(device: BluetoothDevice, signal: AbortSignal) {
	if (typeof device.watchAdvertisements === 'function') {
		return waitForAdvertisement(device, signal);
	}
	return new Promise<boolean>((resolve) => {
		const timeout = setTimeout(() => resolve(!signal.aborted), BLIND_RECONNECT_DELAY);
		signal.addEventListener('abort', () => {
			clearTimeout(timeout);
			resolve(false);
		});
	});
}

/**
 * Owns the smart timer connection. It outlives the timer page, so the timer stays connected while browsing the
 * rest of the site, and reconnects on its own when the timer drops out or is turned back on.
 */
class SmartTimerConnector {
	readonly events = new EventStream<SmartTimerEvent>();
	readonly stateChanges = new EventStream<SmartTimerConnectorState>();
	state: SmartTimerConnectorState = {status: 'disconnected', brand: null};

	private generation = 0;
	private connection: SmartTimerConnection | null = null;
	private reconnectController: AbortController | null = null;

	private setState(status: SmartTimerStatus, brand: SmartTimerBrand | null = null) {
		this.state = {status, brand};
		this.stateChanges.emit(this.state);
	}

	/** Starting a new attempt cancels the current connection and any earlier attempt, including a pending reconnect */
	private beginAttempt() {
		this.reconnectController?.abort();
		this.reconnectController = null;
		this.connection?.disconnect();
		this.connection = null;

		const generation = ++this.generation;
		return () => generation === this.generation;
	}

	/** Must be called from a user gesture since it shows the device picker */
	connect = async () => {
		const isActive = this.beginAttempt();
		this.setState('disconnected');

		let device: BluetoothDevice;
		try {
			device = await navigator.bluetooth.requestDevice(SMART_TIMER_REQUEST_OPTIONS);
		} catch (error) {
			if (!isActive()) return;
			this.setState('disconnected');
			// NotFoundError means the device picker was closed
			if (!(error instanceof DOMException && error.name === 'NotFoundError')) {
				console.error('Smart timer device picker failed', error);
				toastError("Couldn't open the Bluetooth device picker");
			}
			return;
		}

		await this.open(device, isActive, false);
	};

	/** Reconnect to the last timer without the device picker, once it's on and in range */
	autoReconnect = async () => {
		if (this.state.status !== 'disconnected') return;

		const generation = this.generation;
		const device = await findPermittedDevice(readLastDeviceId());
		// Skip if the user started connecting while looking up the device
		if (!device || generation !== this.generation) return;

		await this.reconnect(device);
	};

	private reconnect = async (device: BluetoothDevice) => {
		const isActive = this.beginAttempt();
		const controller = new AbortController();
		this.reconnectController = controller;
		this.setState('reconnecting');

		const available = await waitForDevice(device, controller.signal);
		if (!isActive()) return;
		this.reconnectController = null;
		if (!available) {
			this.setState('disconnected');
			return;
		}

		await this.open(device, isActive, true);
	};

	/** quiet: failures aren't shown, for reconnects the user didn't ask for */
	private open = async (device: BluetoothDevice, isActive: () => boolean, quiet: boolean) => {
		this.setState('connecting');

		try {
			const driver = findSmartTimerDriver(device.name ?? '');
			if (!driver)
				throw new SmartTimerConnectionError("This smart timer isn't supported yet.");

			const connection = await driver.connect(device);
			if (!isActive()) {
				connection.disconnect();
				return;
			}

			this.connection = connection;
			writeLastDeviceId(device.id);
			connection.events.subscribe((event) => {
				if (!isActive()) return;
				this.events.emit(event);
				if (event.type === 'DISCONNECT') {
					this.connection = null;
					toastError('Smart timer disconnected');
					this.reconnect(device);
				}
			});
			this.setState('connected', driver.brand);
		} catch (error) {
			if (!isActive()) return;
			this.setState('disconnected');
			if (quiet) return;

			if (error instanceof SmartTimerConnectionError) {
				toastError(error.message);
			} else {
				console.error('Smart timer connection failed', error);
				toastError("Couldn't connect to your smart timer");
			}
		}
	};

	/** forget: stop auto-reconnecting to this timer, for when the user disconnects it on purpose */
	disconnect = ({forget}: {forget: boolean}) => {
		this.beginAttempt();
		if (forget) writeLastDeviceId(null);
		this.setState('disconnected');
	};
}

export const smartTimer = new SmartTimerConnector();
