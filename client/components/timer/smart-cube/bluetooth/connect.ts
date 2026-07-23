import {isChooserCancellation, SmartCubeConnectionError} from '@/components/timer/smart-cube/bluetooth/errors';
import GAN from '@/components/timer/smart-cube/bluetooth/gan';
import {
	GAN_COMPANY_IDENTIFIERS,
	GAN_CUBE_NAME_PREFIXES,
	GAN_CUBE_SERVICES,
	isGanCubeName,
} from '@/components/timer/smart-cube/bluetooth/gan-cube/connect';
import Giiker from '@/components/timer/smart-cube/bluetooth/giiker';
import Particula from '@/components/timer/smart-cube/bluetooth/particula';
import SmartCube from '@/components/timer/smart-cube/bluetooth/smart_cube';

/** Any cube driver we can hand a chosen device to. */
interface CubeDriver {
	init(): Promise<void>;
	disconnect?(): Promise<void>;
}

export default class Connect extends SmartCube {
	device: BluetoothDevice | null = null;
	cube: CubeDriver | null = null;

	connect = async (): Promise<void> => {
		if (typeof navigator === 'undefined' || !navigator.bluetooth) {
			throw new SmartCubeConnectionError(
				'Web Bluetooth is not available in this browser. Try Chrome on desktop or Android, or Bluefy on iOS.'
			);
		}

		let device: BluetoothDevice;
		try {
			device = await navigator.bluetooth.requestDevice({
				filters: [
					{namePrefix: 'Gi'},
					{namePrefix: 'Mi Smart Magic Cube'},
					{namePrefix: 'GoCube'},
					{namePrefix: 'Rubiks'},

					// GAN cubes ship under several brands, in inconsistent casing.
					...GAN_CUBE_NAME_PREFIXES.map((namePrefix) => ({namePrefix})),
					{namePrefix: 'Gan'},
					{namePrefix: 'gan'},

					// Giiker
					{services: ['0000aadb-0000-1000-8000-00805f9b34fb']},
					{services: ['0000aaaa-0000-1000-8000-00805f9b34fb']},
					{services: ['0000fe95-0000-1000-8000-00805f9b34fb']},

					// Match GAN cubes on their advertised service too — not every
					// one presents a name the browser will surface, and without
					// this they never show up in the chooser at all.
					...GAN_CUBE_SERVICES.map((service) => ({services: [service]})),
					{services: ['0000fff0-0000-1000-8000-00805f9b34fb']},
					{services: ['00001805-0000-1000-8000-00805f9b34fb']},
				],
				optionalServices: [
					'0000180a-0000-1000-8000-00805f9b34fb',
					'0000180f-0000-1000-8000-00805f9b34fb',
					'9fa480e0-4967-4542-9390-d343dc5d04ae',
					'00001805-0000-1000-8000-00805f9b34fb',
					'd0611e78-bbb4-4591-a5f8-487910ae4366',
					'f95a48e6-a721-11e9-a2a3-022ae2dbcce4',

					'battery_service',
					'generic_access',
					'device_information',
					...Particula.opServices,

					// GAN. The three protocol generations plus the device
					// information service the cubes report their hardware through.
					...GAN_CUBE_SERVICES,
					'0000fff0-0000-1000-8000-00805f9b34fb',
					'00002a23-0000-1000-8000-00805f9b34fb',
					'00002a28-0000-1000-8000-00805f9b34fb',
					'00001805-0000-1000-8000-00805f9b34fb',
				],
				// GAN encodes the cube's MAC address here, and it is dropped
				// unless the company identifiers are declared at request time.
				// Without it every GAN user is asked to type their MAC by hand.
				optionalManufacturerData: GAN_COMPANY_IDENTIFIERS,
			});
		} catch (err) {
			if (isChooserCancellation(err)) {
				throw new SmartCubeConnectionError('Cube selection was cancelled.', {
					cancelled: true,
					cause: err,
				});
			}
			throw new SmartCubeConnectionError(
				'Could not open the Bluetooth device chooser. Make sure Bluetooth is turned on and this page is served over HTTPS.',
				{cause: err}
			);
		}

		this.device = device;
		this.alertConnecting();

		const name = device.name ?? '';
		let cube: CubeDriver;
		if (name.startsWith('Gi') || name.startsWith('Mi Smart Magic Cube')) {
			cube = new Giiker(device);
		} else if (isGanCubeName(name)) {
			cube = new GAN(device);
		} else if (name.startsWith('GoCube') || name.startsWith('Rubiks')) {
			cube = new Particula(device);
		} else {
			// Previously this returned silently, which left the UI stuck on
			// "Connecting..." with no way out short of a page reload.
			this.device = null;
			throw new SmartCubeConnectionError(
				`CubeDesk does not know how to talk to "${name || 'that device'}". Supported cubes are GAN, GoCube, Rubik's Connected and Giiker.`
			);
		}

		this.cube = cube;

		try {
			await cube.init();
		} catch (err) {
			// A half-finished init can leave a live GATT link behind, and a cube
			// that thinks it is still connected will refuse the next attempt.
			await this.disconnect();

			throw err instanceof SmartCubeConnectionError
				? err
				: new SmartCubeConnectionError(
						`Could not connect to the cube${err instanceof Error && err.message ? `: ${err.message}` : '.'}`,
						{cause: err}
				  );
		}
	};

	/** Never rejects — callers tear down UI state regardless of how this goes. */
	disconnect = async (): Promise<void> => {
		const cube = this.cube;
		const device = this.device;

		this.cube = null;
		this.device = null;

		try {
			await cube?.disconnect?.();
		} catch (err) {
			console.error('[SmartCube] error while disconnecting', err);
		}

		device?.gatt?.disconnect();
	};
}
