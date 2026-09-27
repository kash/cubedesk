// @ts-nocheck
import SmartCube, {SmartCubeCallbacks} from '@/components/timer/smart-cube/bluetooth/smart_cube';
import {connectGanCube} from 'gan-web-bluetooth';

export default class GAN extends SmartCube {
	device;

	constructor(device, callbacks: SmartCubeCallbacks) {
		super(callbacks);

		this.device = device;
	}

	customMacAddressProvider = async (device, isFallbackCall) => {
		if (isFallbackCall) {
			return prompt(this.callbacks.translate('timer.smartCube.macAddressFallback'));
		} else {
			return typeof device.watchAdvertisements == 'function'
				? null
				: prompt(this.callbacks.translate('timer.smartCube.browserMacAddress'));
		}
	};

	init = async () => {
		this.conn = await connectGanCube(this.customMacAddressProvider, this.device);
		this.conn.events$.subscribe(this.handleCubeEvent);

		await this.conn.sendCubeCommand({type: 'REQUEST_BATTERY'});
		await this.conn.sendCubeCommand({type: 'REQUEST_HARDWARE'});

		const dummyServer = {
			device: {
				name: this.hardwareName,
				id: this.device.mac,
			},
		};
		this.alertConnected(dummyServer);
	};

	handleCubeEvent = (event) => {
		if (event.type != 'GYRO' && event.type != 'FACELETS') console.log('GanCubeEvent', event);
		if (event.type == 'MOVE') {
			this.alertTurnCube(event.move);
		} else if (event.type == 'HARDWARE') {
			this.hardwareName = event.hardwareName;
			this.hardwareVersion = event.hardwareVersion;
			this.softwareVersion = event.softwareVersion;
			this.productDate = event.productDate;
			this.gyroSupported = event.gyroSupported;
		} else if (event.type == 'BATTERY') {
			this.alertBatteryLevel(this.batteryLevel);
		} else if (event.type == 'DISCONNECT') {
			this.alertDisconnected();
		}
	};
}
