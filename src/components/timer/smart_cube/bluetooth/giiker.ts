import GiikerUtil from './giiker_util';
import SmartCube from './smart_cube';

export default class Giiker extends SmartCube {
	device: BluetoothDevice;
	connected: boolean = false;
	batteryInterval: NodeJS.Timeout | null = null;
	giiker: GiikerUtil | null = null;

	constructor(device: BluetoothDevice) {
		super();
		this.device = device;
	}

	static SERVICE_UUID = '0000aadb-0000-1000-8000-00805f9b34fb';
	static opServices = [Giiker.SERVICE_UUID];

	init = async (): Promise<void> => {
		const giiker = new GiikerUtil(this.device);
		await giiker.connect();

		giiker.on('move', (move: string) => {
			if (this.connected) {
				this.alertTurnCube(move);
			}
		});

		giiker.on('connected', (server: any) => {
			this.connected = true;
			const state = giiker.stateString;
			this.alertConnected(server);
			this.alertCubeState(state);
			this.updateBattery();
		});

		giiker.on('disconnected', () => {
			if (this.batteryInterval) {
				clearInterval(this.batteryInterval);
				this.batteryInterval = null;
			}

			this.alertDisconnected();
		});

		this.batteryInterval = setInterval(() => {
			this.updateBattery();
		}, 10000);

		this.giiker = giiker;
	};

	updateBattery = async (): Promise<void> => {
		if (!this.giiker) return;

		const level = await this.giiker.getBatteryLevel();
		this.alertBatteryLevel(level);
	};
}
