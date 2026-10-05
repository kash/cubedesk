import SmartCube, {
	SmartCubeCallbacks,
	SmartCubeConnectionError,
} from '@/components/timer/smart-cube/bluetooth/smart_cube';
import {CubeConnection} from '@/util/smart-cube/connection';
import {SmartCubeEvent} from '@/util/smart-cube/protocol';
import Cube from 'cubejs';

const SOLVED_STATE = new Cube().asString();
const STATE_TIMEOUT = 5000;

export type VerifiedConnection = {conn: CubeConnection; facelets: string};

/** Cubes that track their own state and report it on connect, so there's no need to ask if they're solved */
export default abstract class TrackedSmartCube extends SmartCube {
	private conn: CubeConnection | null = null;
	private batteryTimer: ReturnType<typeof setInterval> | null = null;

	/** How often to ask for the battery level, for cubes that don't report changes on their own */
	protected batteryPollInterval: number | null = null;

	constructor(
		protected device: BluetoothDevice,
		callbacks: SmartCubeCallbacks,
	) {
		super(callbacks);
	}

	/** Resolves null if the user cancelled connecting */
	protected abstract connect(): Promise<VerifiedConnection | null>;

	init = async () => {
		try {
			await this.start();
		} catch (error) {
			// Stop listening first, so the disconnect isn't reported as the cube dropping and the error is shown
			this.stopBatteryPolling();
			await this.conn?.detach();
			this.conn = null;
			this.releaseDevice();
			throw error;
		}
	};

	private start = async () => {
		const verified = await this.connect();
		if (!verified) throw new SmartCubeConnectionError();
		const {conn, facelets} = verified;
		if (!this.callbacks.isActive()) {
			// A newer attempt may be connecting to the same cube, so leave the Bluetooth connection to it
			await conn.detach();
			return;
		}

		this.conn = conn;
		conn.events.subscribe(this.handleCubeEvent);
		// Started before any await, so a disconnect from here on also stops it
		if (this.batteryPollInterval) {
			this.batteryTimer = setInterval(() => {
				conn.sendCubeCommand('REQUEST_BATTERY').catch(() => {});
			}, this.batteryPollInterval);
		}
		await conn.sendCubeCommand('REQUEST_BATTERY');

		console.info('[Smart cube] Cube reported state', facelets);
		this.alertInitialState(facelets);
		await this.alertConnected(
			{
				device: {
					name: this.device.name,
					id: conn.id,
				},
			},
			{skipConfirmation: true},
		);
	};

	resetToSolved = async () => {
		if (!this.conn) return false;
		try {
			if (!(await this.conn.sendCubeCommand('REQUEST_RESET'))) return false;
			return (await this.readState(this.conn, STATE_TIMEOUT)) === SOLVED_STATE;
		} catch {
			return false;
		}
	};

	/** Resolves null if the cube doesn't report a valid state within timeout milliseconds */
	private readState = (conn: CubeConnection, timeout: number) =>
		new Promise<string | null>((resolve) => {
			const finish = (facelets: string | null) => {
				clearTimeout(timer);
				unsubscribe();
				resolve(facelets);
			};
			const unsubscribe = conn.events.subscribe((event) => {
				if (event.type === 'FACELETS') finish(event.facelets);
				if (event.type === 'DISCONNECT') finish(null);
			});
			const timer = setTimeout(() => finish(null), timeout);
			conn.sendCubeCommand('REQUEST_FACELETS').catch(() => finish(null));
		});

	/** Resolves null and detaches if the cube doesn't report a valid state */
	protected verify = async (
		conn: CubeConnection,
		timeout = STATE_TIMEOUT,
	): Promise<VerifiedConnection | null> => {
		const facelets = await this.readState(conn, timeout);
		if (facelets) return {conn, facelets};

		await conn.detach();
		return null;
	};

	/** For cubes that don't need anything before connecting, throws if the cube doesn't report its state */
	protected verifyOrThrow = async (conn: CubeConnection) => {
		const verified = await this.verify(conn);
		if (!verified) throw new SmartCubeConnectionError("Couldn't read your cube's state.");
		return verified;
	};

	/**
	 * A connected cube stops advertising, so leaving it connected would hide it from the device picker. A newer
	 * attempt may be using the same device though, so only disconnect while this attempt is still current.
	 */
	protected releaseDevice = () => {
		if (this.callbacks.isActive()) this.device.gatt?.disconnect();
	};

	private stopBatteryPolling = () => {
		if (this.batteryTimer) clearInterval(this.batteryTimer);
		this.batteryTimer = null;
	};

	private handleCubeEvent = (event: SmartCubeEvent) => {
		switch (event.type) {
			case 'MOVE':
				this.alertTurnCube(event.move);
				break;
			case 'BATTERY':
				this.alertBatteryLevel(event.batteryLevel);
				break;
			case 'GYRO':
				this.alertOrientation(event.orientation);
				break;
			case 'DISCONNECT':
				this.stopBatteryPolling();
				this.alertDisconnected();
				break;
			case 'FACELETS':
				break;
		}
	};
}
