import SmartCube, {
	SmartCubeCallbacks,
	SmartCubeConnectionError,
} from '@/components/timer/smart-cube/bluetooth/smart_cube';
import {
	canReadMacAddress,
	connectGanCube,
	GanCubeConnection,
	GanCubeEvent,
	parseMacAddress,
	readMacAddress,
} from '@/util/gan/cube';
import {trpc} from '@/util/trpc';
import Cube from 'cubejs';

const SOLVED_STATE = new Cube().asString();

export default class GAN extends SmartCube {
	private conn: GanCubeConnection | null = null;
	constructor(
		private device: BluetoothDevice,
		callbacks: SmartCubeCallbacks,
	) {
		super(callbacks);
	}

	init = async () => {
		const mac = await this.resolveMacAddress();
		if (!mac) throw new SmartCubeConnectionError();

		const conn = await connectGanCube(this.device, mac);
		// A wrong MAC address decrypts to garbage, which never forms a valid cube state
		const facelets = await this.readState(conn);
		if (!facelets) {
			await conn.disconnect();
			throw new SmartCubeConnectionError(
				"Couldn't read your cube's state. If you entered its MAC address manually, double-check it.",
			);
		}

		this.conn = conn;
		conn.events.subscribe(this.handleCubeEvent);
		await conn.sendCubeCommand('REQUEST_BATTERY');

		console.info('[GAN] Cube reported state', facelets);
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
			await this.conn.sendCubeCommand('REQUEST_RESET');
			return (await this.readState(this.conn)) === SOLVED_STATE;
		} catch {
			return false;
		}
	};

	private readState = (conn: GanCubeConnection) =>
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

	/** Prefer reading the MAC from the cube, then one saved from a previous connection, then ask the user */
	private resolveMacAddress = async () => {
		const canRead = canReadMacAddress(this.device);
		// Look up in parallel so reading advertisements starts right away
		const savedPromise = this.findSavedMacAddress();

		while (this.callbacks.isActive()) {
			if (canRead) {
				const mac = await readMacAddress(this.device);
				if (mac) return mac;
			}
			const saved = await savedPromise;
			if (saved) return saved;

			const response = await this.callbacks.requestMacAddress(
				canRead ? 'detection-failed' : 'unsupported',
			);
			if (response.action === 'submit') return response.macAddress;
			if (response.action === 'cancel') return null;
		}

		return null;
	};

	/** GAN cubes are saved with their MAC address as the device ID, matched by the Bluetooth name */
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

	handleCubeEvent = (event: GanCubeEvent) => {
		switch (event.type) {
			case 'MOVE':
				this.alertTurnCube(event.move);
				break;
			case 'BATTERY':
				this.alertBatteryLevel(event.batteryLevel);
				break;
			case 'GYRO': {
				// GAN axes point to R, B and U, swap them to point to R, U and F
				const {x, y, z, w} = event.orientation;
				this.alertOrientation({x, y: z, z: -y, w});
				break;
			}
			case 'DISCONNECT':
				this.alertDisconnected();
				break;
			case 'FACELETS':
				break;
		}
	};
}
