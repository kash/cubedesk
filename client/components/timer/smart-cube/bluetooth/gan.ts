import {
	connectGanCubeDevice,
	createMacAddressProvider,
} from '@/components/timer/smart-cube/bluetooth/gan-cube/connect';
import SmartCube from '@/components/timer/smart-cube/bluetooth/smart_cube';
import {GanCubeConnection, GanCubeEvent, MacAddressProvider} from 'gan-web-bluetooth';
import {SubscriptionLike} from 'rxjs';

/**
 * How long to wait for the cube to answer REQUEST_HARDWARE before connecting
 * anyway. The reply comes back asynchronously on the event stream, so the name
 * is never available immediately after sending the command — reading it straight
 * away registered every cube under an undefined name.
 */
const HARDWARE_INFO_TIMEOUT_MS = 2000;

export default class GAN extends SmartCube {
	device: BluetoothDevice;
	conn: GanCubeConnection | null = null;
	subscription: SubscriptionLike | null = null;

	hardwareName: string | null = null;
	hardwareVersion: string | null = null;
	softwareVersion: string | null = null;
	productDate: string | null = null;
	gyroSupported = false;

	/** Resolves the in-flight wait in `waitForHardwareInfo`, if there is one. */
	private onHardwareInfo: (() => void) | null = null;

	private readonly macAddressProvider: MacAddressProvider;

	constructor(device: BluetoothDevice, macAddressProvider: MacAddressProvider = createMacAddressProvider()) {
		super();

		this.device = device;
		this.macAddressProvider = macAddressProvider;
	}

	init = async (): Promise<void> => {
		const conn = await connectGanCubeDevice(this.device, this.macAddressProvider);
		this.conn = conn;

		// From here on we hold a live GATT link. Anything that fails during setup
		// has to hang it up again, otherwise the cube sits there connected to
		// nothing and refuses to pair with the next attempt.
		try {
			this.subscription = conn.events$.subscribe({
				next: this.handleCubeEvent,
				error: (err: unknown) => {
					console.error('[GanCube] event stream error', err);
					this.alertDisconnected();
				},
			});

			// Ask for the hardware name first — `alertConnected` needs it to
			// register the cube — then battery and the current facelet state.
			await conn.sendCubeCommand({type: 'REQUEST_HARDWARE'});
			await conn.sendCubeCommand({type: 'REQUEST_BATTERY'});
			await conn.sendCubeCommand({type: 'REQUEST_FACELETS'});

			await this.waitForHardwareInfo();

			await this.alertConnected({
				device: {
					name: this.hardwareName || conn.deviceName || this.device.name || 'GAN Smart Cube',
					id: this.device.id,
				},
			});
		} catch (err) {
			await this.disconnect();
			throw err;
		}
	};

	/**
	 * Wait for the cube to report its hardware details, but never block the
	 * connection on it — a cube that stays quiet is still perfectly usable, it
	 * just gets registered under its advertised name instead.
	 */
	private waitForHardwareInfo = (): Promise<void> => {
		if (this.hardwareName) {
			return Promise.resolve();
		}

		return new Promise<void>((resolve) => {
			const finish = () => {
				clearTimeout(timeout);
				this.onHardwareInfo = null;
				resolve();
			};

			const timeout = setTimeout(finish, HARDWARE_INFO_TIMEOUT_MS);
			this.onHardwareInfo = finish;
		});
	};

	handleCubeEvent = (event: GanCubeEvent): void => {
		switch (event.type) {
			case 'MOVE': {
				this.alertTurnCube(event.move);
				break;
			}
			case 'FACELETS': {
				// Kociemba notation, which is what the visual cube expects.
				this.alertCubeState(event.facelets);
				break;
			}
			case 'HARDWARE': {
				this.hardwareName = event.hardwareName ?? null;
				this.hardwareVersion = event.hardwareVersion ?? null;
				this.softwareVersion = event.softwareVersion ?? null;
				this.productDate = event.productDate ?? null;
				this.gyroSupported = event.gyroSupported ?? false;

				this.onHardwareInfo?.();
				break;
			}
			case 'BATTERY': {
				// The level rides on the event. Reading it off `this` instead left
				// the battery indicator permanently empty.
				this.alertBatteryLevel(event.batteryLevel);
				break;
			}
			case 'GYRO': {
				// Orientation updates, streamed continuously. Nothing uses them yet,
				// and they must never reach the move handler.
				break;
			}
			case 'DISCONNECT': {
				this.alertDisconnected();
				break;
			}
		}
	};

	/**
	 * Close the connection. Unsubscribes first so an intentional disconnect does
	 * not surface as a "Smart cube disconnected" error toast.
	 */
	disconnect = async (): Promise<void> => {
		this.subscription?.unsubscribe();
		this.subscription = null;

		this.onHardwareInfo?.();

		const conn = this.conn;
		this.conn = null;

		if (conn) {
			await conn.disconnect().catch(() => undefined);
		}
	};
}
