import SmartCube from './smart_cube';
import {isEqual} from 'lodash';
import LZString from './lz_string';
import aes128 from './ae128';

import {	
  connectGanCube,
} from 'gan-web-bluetooth';

export default class GAN extends SmartCube {
	device;

	constructor(device) {
		super();

		this.device = device;
	}

	customMacAddressProvider = async (device, isFallbackCall) => {
		if (isFallbackCall) {
			return prompt('Unable do determine cube MAC address!\nPlease enter MAC address manually:');
		} else {
			return typeof device.watchAdvertisements == 'function'
				? null
				: prompt(
						'Seems like your browser does not support Web Bluetooth watchAdvertisements() API. Enable following flag in Chrome:\n\nchrome://flags/#enable-experimental-web-platform-features\n\nor enter cube MAC address manually:'
				  );
		}
	};

	init = async () => {
		this.conn = await connectGanCube(this.customMacAddressProvider, this.device);
		this.conn.events$.subscribe(this.handleCubeEvent);

		await this.conn.sendCubeCommand({ type: "REQUEST_BATTERY" });
		await this.conn.sendCubeCommand({ type: "REQUEST_HARDWARE" });

		const dummyServer = {
			device: {
				name: this.hardwareName,
				id: this.device.mac
			}
		};
		this.alertConnected(dummyServer);
	};

	handleCubeEvent = (event) => {
		if (event.type != 'GYRO' && event.type != 'FACELETS') console.log('GanCubeEvent', event);
		if (event.type == 'MOVE') {
			this.alertTurnCube(event.move);
		}  else if (event.type == 'HARDWARE') {
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
