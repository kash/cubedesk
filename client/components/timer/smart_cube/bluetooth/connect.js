import Particula from './particula';
import SmartCube from './smart_cube';
import GAN from './gan';
import Giiker from './giiker';

export default class Connect extends SmartCube {
	device = null;

	connect = () => {
		if (!window.navigator || !window.navigator.bluetooth) {
			throw new Error();
		}

		window.navigator.bluetooth
			.requestDevice({
				filters: [
					{namePrefix: 'Gi'},
					{namePrefix: 'Mi Smart Magic Cube'},
					{namePrefix: 'GAN'},
					{namePrefix: 'Gan'},
					{namePrefix: 'GoCube'},
					{namePrefix: 'Rubiks'},

					// Giiker
					{services: ['0000aadb-0000-1000-8000-00805f9b34fb']},
					{services: ['0000aaaa-0000-1000-8000-00805f9b34fb']},
					{services: ['0000fe95-0000-1000-8000-00805f9b34fb']},

					// Gan
					{services: ['0000fff0-0000-1000-8000-00805f9b34fb']},
					{services: ['00001805-0000-1000-8000-00805f9b34fb']},
				],
				optionalServices: [
					'0000180a-0000-1000-8000-00805f9b34fb',
					'0000180f-0000-1000-8000-00805f9b34fb',
					'9fa480e0-4967-4542-9390-d343dc5d04ae',
					'00001805-0000-1000-8000-00805f9b34fb',
					'd0611e78-bbb4-4591-a5f8-487910ae4366',
					'6e400001-b5a3-f393-e0a9-e50e24dc4179',
					'f95a48e6-a721-11e9-a2a3-022ae2dbcce4',

					'battery_service',
					'generic_access',
					'device_information',
					...Particula.opServices,

					// GAN
					'0000fff0-0000-1000-8000-00805f9b34fb',
					'0000fff5-0000-1000-8000-00805f9b34fb',
					'0000fff7-0000-1000-8000-00805f9b34fb',
					'0000fff2-0000-1000-8000-00805f9b34fb',
					'0000fff3-0000-1000-8000-00805f9b34fb',
					'0000180a-0000-1000-8000-00805f9b34fb',
					'00002a23-0000-1000-8000-00805f9b34fb',
					'00002a28-0000-1000-8000-00805f9b34fb',

					'00001805-0000-1000-8000-00805f9b34fb'
				],
			})
			.then((device) => {
				this.device = device;

				this.alertConnecting();

				if (device.name.startsWith('Gi') || device.name.startsWith('Mi Smart Magic Cube')) {
					const cube = new Giiker(this.device);
					cube.init();
				} else if (device.name.toLowerCase().startsWith('gan')) {
					const cube = new GAN(this.device);
					cube.init();
				} else if (device.name.startsWith('GoCube') || device.name.startsWith('Rubiks')) {
					const cube = new Particula(this.device);
					cube.init();
				} else {
					// HANDLE unsupported cube
					return Promise.resolve();
				}
			});
	};

	disconnect = () => {
		if (!this.device) {
			return;
		}
		this.device.gatt.disconnect();
		this.device = null;
	};
}
