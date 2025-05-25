import SmartCube from './smart_cube';
import GiikerUtil from './giiker_util';

export default class Giiker extends SmartCube {
	device;
	connected = false;
	batteryInterval = null;
	giiker = null;

	constructor(device) {
		super();

		this.device = device;
	}

	static SERVICE_UUID = '0000aadb-0000-1000-8000-00805f9b34fb';
	static opServices = [Giiker.SERVICE_UUID];

	init = async () => {
		const giiker = new GiikerUtil(this.device);
		await giiker.connect();
		giiker.on('move', (a) => {
			if (this.connected) {
				this.alertTurnCube(a);
			}
		});

		giiker.on('connected', (server) => {
			this.connected = true;
			const ate = giiker.stateString;
			this.alertConnected(server);
			this.alertCubeState(ate);
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

	updateBattery = async () => {
		const level = await this.giiker.getBatteryLevel();
		this.alertBatteryLevel(level);
	};
}
