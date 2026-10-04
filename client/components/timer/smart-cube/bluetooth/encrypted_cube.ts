import SmartCube, {
	SmartCubeCallbacks,
	SmartCubeConnectionError,
} from '@/components/timer/smart-cube/bluetooth/smart_cube';
import {SmartCubeConnection} from '@/util/smart-cube/connection';
import {canReadMacAddress, parseMacAddress} from '@/util/smart-cube/mac';
import {SmartCubeEvent} from '@/util/smart-cube/protocol';
import {trpc} from '@/util/trpc';
import Cube from 'cubejs';

const SOLVED_STATE = new Cube().asString();
const STATE_TIMEOUT = 5000;
// Cubes answer within a fraction of a second, and a shorter wait keeps wrong guesses from slowing down connecting
const GUESS_TIMEOUT = 2000;

type VerifiedConnection = {conn: SmartCubeConnection; facelets: string};

/**
 * Cubes that encrypt their messages with a key salted by their MAC address (GAN, MoYu), which browsers don't
 * expose, so it has to be found before connecting
 */
export default abstract class EncryptedSmartCube extends SmartCube {
	private conn: SmartCubeConnection | null = null;
	private batteryTimer: ReturnType<typeof setInterval> | null = null;

	/** How often to ask for the battery level, for cubes that don't report changes on their own */
	protected batteryPollInterval: number | null = null;

	constructor(
		protected device: BluetoothDevice,
		callbacks: SmartCubeCallbacks,
	) {
		super(callbacks);
	}

	protected abstract connectCube(mac: string): Promise<SmartCubeConnection>;

	/** Read the MAC address from the cube's advertisements, null if the browser can't or it wasn't found */
	protected abstract readAdvertisedMacAddress(): Promise<string | null>;

	/** Likely MAC addresses that don't need advertisements, each only used once connecting with it succeeds */
	protected guessMacAddresses(): string[] {
		return [];
	}

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
		const verified = await this.connectWithMacAddress();
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
					id: conn.mac,
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
	private readState = (conn: SmartCubeConnection, timeout: number) =>
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

	/**
	 * A wrong MAC address decrypts to garbage, which never forms a valid cube state. The Bluetooth connection
	 * stays open after a failure so the next MAC address can reuse it, reconnecting right away can race.
	 */
	private connectAndVerify = async (
		mac: string,
		timeout = STATE_TIMEOUT,
	): Promise<VerifiedConnection | null> => {
		const conn = await this.connectCube(mac);
		const facelets = await this.readState(conn, timeout);
		if (facelets) return {conn, facelets};

		await conn.detach();
		return null;
	};

	/**
	 * Try the MAC address saved from a previous connection, then the one from advertisements, then guessed
	 * ones, then ask the user
	 */
	private connectWithMacAddress = async () => {
		const canRead = canReadMacAddress(this.device);
		const tried = new Set<string>();
		const tryMac = async (mac: string | null, timeout?: number) => {
			if (!mac || tried.has(mac) || !this.callbacks.isActive()) return null;
			tried.add(mac);
			return this.connectAndVerify(mac, timeout);
		};

		// A MAC address that worked before skips waiting for advertisements, the slowest step
		const saved = await tryMac(await this.findSavedMacAddress());
		if (saved) return saved;

		if (canRead) {
			// A connected cube doesn't advertise
			this.releaseDevice();
			const advertised = await tryMac(await this.readAdvertisedMacAddress());
			if (advertised) return advertised;
		}

		for (const mac of this.guessMacAddresses()) {
			const guessed = await tryMac(mac, GUESS_TIMEOUT);
			if (guessed) return guessed;
		}

		while (this.callbacks.isActive()) {
			// The prompt can stay open a while, and a connected cube doesn't advertise for a retry
			this.releaseDevice();
			const response = await this.callbacks.requestMacAddress(
				canRead ? 'detection-failed' : 'unsupported',
			);
			if (response.action === 'cancel') return null;

			if (response.action === 'retry') {
				const mac = await this.readAdvertisedMacAddress();
				if (!mac) continue;
				const verified = await this.connectAndVerify(mac);
				if (verified) return verified;
			} else {
				const verified = await this.connectAndVerify(response.macAddress);
				if (verified) return verified;
				throw new SmartCubeConnectionError(
					"Couldn't read your cube's state. Double-check the MAC address you entered.",
				);
			}
		}

		return null;
	};

	/** Cubes are saved with their MAC address as the device ID, matched by the Bluetooth name */
	private findSavedMacAddress = async () => {
		try {
			const devices = await trpc.smartDevice.list.query();
			const macs = devices
				.filter((device) => device.internal_name === this.device.name)
				.map((device) => parseMacAddress(device.device_id))
				.filter((mac) => mac !== null);
			return new Set(macs).size === 1 ? macs[0] : null;
		} catch {
			return null;
		}
	};

	/**
	 * A connected cube stops advertising, so leaving it connected would hide it from the device picker. A newer
	 * attempt may be using the same device though, so only disconnect while this attempt is still current.
	 */
	private releaseDevice = () => {
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
