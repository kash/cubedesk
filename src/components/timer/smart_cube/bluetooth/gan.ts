import {connectGanCube} from 'gan-web-bluetooth';
import SmartCube from './smart_cube';

interface GanDevice {
	mac: string;
	watchAdvertisements?: () => void;
}

interface GanCubeEvent {
	type: string;
	move?: string;
	hardwareName?: string;
	hardwareVersion?: string;
	softwareVersion?: string;
	productDate?: string;
	gyroSupported?: boolean;
}

interface GanConnection {
	events$: {
		subscribe: (handler: (event: GanCubeEvent) => void) => void;
	};
	sendCubeCommand: (command: {type: string}) => Promise<void>;
}

export default class GAN extends SmartCube {
	device: GanDevice;
	conn?: GanConnection;
	hardwareName?: string;
	hardwareVersion?: string;
	softwareVersion?: string;
	productDate?: string;
	gyroSupported?: boolean;
	batteryLevel?: number;

	constructor(device: GanDevice) {
		super();
		this.device = device;
	}

	customMacAddressProvider = async (
		device: GanDevice,
		isFallbackCall: boolean,
	): Promise<string | null> => {
		if (isFallbackCall) {
			return prompt(
				'Unable do determine cube MAC address!\nPlease enter MAC address manually:',
			);
		} else {
			return typeof device.watchAdvertisements == 'function'
				? null
				: prompt(
						'Seems like your browser does not support Web Bluetooth watchAdvertisements() API. Enable following flag in Chrome:\n\nchrome://flags/#enable-experimental-web-platform-features\n\nor enter cube MAC address manually:',
					);
		}
	};

	init = async (): Promise<void> => {
		this.conn = await connectGanCube(this.customMacAddressProvider, this.device);
		this.conn.events$.subscribe(this.handleCubeEvent);

		await this.conn.sendCubeCommand({type: 'REQUEST_BATTERY'});
		await this.conn.sendCubeCommand({type: 'REQUEST_HARDWARE'});

		const dummyServer = {
			device: {
				name: this.hardwareName || 'GAN Cube',
				id: this.device.mac,
			},
		};
		this.alertConnected(dummyServer);
	};

	handleCubeEvent = (event: GanCubeEvent): void => {
		if (event.type !== 'GYRO' && event.type !== 'FACELETS') {
			console.log('GanCubeEvent', event);
		}

		if (event.type === 'MOVE' && event.move) {
			this.alertTurnCube(event.move);
		} else if (event.type === 'HARDWARE') {
			this.hardwareName = event.hardwareName;
			this.hardwareVersion = event.hardwareVersion;
			this.softwareVersion = event.softwareVersion;
			this.productDate = event.productDate;
			this.gyroSupported = event.gyroSupported;
		} else if (event.type === 'BATTERY') {
			if (this.batteryLevel !== undefined) {
				this.alertBatteryLevel(this.batteryLevel);
			}
		} else if (event.type === 'DISCONNECT') {
			this.alertDisconnected();
		}
	};
}
