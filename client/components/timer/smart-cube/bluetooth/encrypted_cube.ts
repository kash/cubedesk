import SmartCube, {
	SmartCubeCallbacks,
	SmartCubeConnectionError,
} from '@/components/timer/smart-cube/bluetooth/smart_cube';
import {SmartCubeConnection} from '@/util/smart-cube/connection';
import {debugLog} from '@/util/smart-cube/debug';
import {canReadMacAddress, parseMacAddress} from '@/util/smart-cube/mac';
import {SmartCubeEvent} from '@/util/smart-cube/protocol';
import {trpc} from '@/util/trpc';
import Cube from 'cubejs';

const SOLVED_STATE = new Cube().asString();

type VerifiedConnection = {conn: SmartCubeConnection; facelets: string};

/**
 * Cubes that encrypt their messages with a key salted by their MAC address (GAN, MoYu), which browsers don't
 * expose, so it has to be found before connecting
 */
export default abstract class EncryptedSmartCube extends SmartCube {
	private conn: SmartCubeConnection | null = null;

	constructor(
		protected device: BluetoothDevice,
		callbacks: SmartCubeCallbacks,
	) {
		super(callbacks);
	}

	protected abstract connectCube(mac: string): Promise<SmartCubeConnection>;

	/** Read the MAC address from the cube's advertisements, null if the browser can't or it wasn't found */
	protected abstract readAdvertisedMacAddress(): Promise<string | null>;

	/** A likely MAC address that doesn't need advertisements, only used once connecting with it succeeds */
	protected guessMacAddress(): string | null {
		return null;
	}

	init = async () => {
		debugLog('Connecting to', this.device.name);
		const verified = await this.connectWithMacAddress();
		if (!verified) throw new SmartCubeConnectionError();
		const {conn, facelets} = verified;

		this.conn = conn;
		conn.events.subscribe(this.handleCubeEvent);
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
			return (await this.readState(this.conn)) === SOLVED_STATE;
		} catch {
			return false;
		}
	};

	private readState = (conn: SmartCubeConnection) =>
		new Promise<string | null>((resolve) => {
			const finish = (facelets: string | null) => {
				clearTimeout(timeout);
				unsubscribe();
				resolve(facelets);
			};
			const unsubscribe = conn.events.subscribe((event) => {
				if (event.type === 'FACELETS') finish(event.facelets);
				if (event.type === 'DISCONNECT') finish(null);
			});
			const timeout = setTimeout(() => finish(null), 5000);
			conn.sendCubeCommand('REQUEST_FACELETS').catch(() => finish(null));
		});

	/** A wrong MAC address decrypts to garbage, which never forms a valid cube state */
	private connectAndVerify = async (mac: string): Promise<VerifiedConnection | null> => {
		debugLog('Trying MAC address', mac);
		const conn = await this.connectCube(mac);
		const facelets = await this.readState(conn);
		debugLog(facelets ? 'MAC address worked' : 'MAC address failed, no valid state', mac);
		if (facelets) return {conn, facelets};

		await conn.disconnect();
		return null;
	};

	/**
	 * Try the MAC address from advertisements, then one saved from a previous connection, then a guessed one,
	 * then ask the user
	 */
	private connectWithMacAddress = async () => {
		const canRead = canReadMacAddress(this.device);
		// Look up in parallel so reading advertisements starts right away
		const savedPromise = this.findSavedMacAddress();

		const tried = new Set<string>();
		const tryMac = async (mac: string | null) => {
			if (!mac || tried.has(mac) || !this.callbacks.isActive()) return null;
			tried.add(mac);
			return this.connectAndVerify(mac);
		};

		const advertised = await this.readAdvertisedMacAddress();
		const saved = await savedPromise;
		const guessed = this.guessMacAddress();
		debugLog('MAC address candidates', {advertised, saved, guessed});
		let verified =
			(await tryMac(advertised)) ?? (await tryMac(saved)) ?? (await tryMac(guessed));

		while (!verified && this.callbacks.isActive()) {
			const response = await this.callbacks.requestMacAddress(
				canRead ? 'detection-failed' : 'unsupported',
			);
			if (response.action === 'cancel') return null;

			if (response.action === 'retry') {
				const mac = await this.readAdvertisedMacAddress();
				if (mac) verified = await this.connectAndVerify(mac);
			} else {
				verified = await this.connectAndVerify(response.macAddress);
				if (!verified) {
					throw new SmartCubeConnectionError(
						"Couldn't read your cube's state. Double-check the MAC address you entered.",
					);
				}
			}
		}

		return verified;
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
				this.alertDisconnected();
				break;
			case 'FACELETS':
				break;
		}
	};
}
