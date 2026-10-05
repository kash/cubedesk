// GAN smart cube connection, adapted from gan-web-bluetooth (MIT) by Andy Fedotov
import {GAN_GEN1_DEVICE_INFO_SERVICE, GAN_GEN1_SERVICE, GanGen1Connection} from '@/util/gan/gen1';
import {
	GanGen2ProtocolDriver,
	GanGen3ProtocolDriver,
	GanGen4ProtocolDriver,
} from '@/util/gan/protocol';
import {
	connectGatt,
	connectSmartCube,
	EncryptionKey,
	SaltedCubeEncrypter,
	SmartCubeProtocol,
} from '@/util/smart-cube/connection';
import {readMacAddress} from '@/util/smart-cube/mac';
import {SmartPuzzle} from '@/util/smart-cube/puzzle';

/** Company Identifier Codes GAN cubes may advertise with, every value from 0x0001 to 0xFF01 */
export const GAN_CIC_LIST = Array.from({length: 256}, (_, i) => (i << 8) | 0x01);

const GAN_ENCRYPTION_KEYS: EncryptionKey[] = [
	{
		key: [
			0x01, 0x02, 0x42, 0x28, 0x31, 0x91, 0x16, 0x07, 0x20, 0x05, 0x18, 0x54, 0x42, 0x11,
			0x12, 0x53,
		],
		iv: [
			0x11, 0x03, 0x32, 0x28, 0x21, 0x01, 0x76, 0x27, 0x20, 0x95, 0x78, 0x14, 0x32, 0x12,
			0x02, 0x43,
		],
	},
	{
		key: [
			0x05, 0x12, 0x02, 0x45, 0x02, 0x01, 0x29, 0x56, 0x12, 0x78, 0x12, 0x76, 0x81, 0x01,
			0x08, 0x03,
		],
		iv: [
			0x01, 0x44, 0x28, 0x06, 0x86, 0x21, 0x22, 0x28, 0x51, 0x05, 0x08, 0x31, 0x82, 0x02,
			0x21, 0x06,
		],
	},
];

// The GAN 251 ui (2x2) speaks the Gen4 protocol with its own key
const GAN_251_ENCRYPTION_KEY: EncryptionKey = {
	key: [
		0x58, 0x98, 0x61, 0xfc, 0x1f, 0xec, 0xd7, 0x60, 0x9f, 0x85, 0xd3, 0x62, 0xbe, 0x37, 0x17,
		0x2c,
	],
	iv: [
		0x7f, 0x61, 0xd0, 0x52, 0x75, 0xc1, 0x39, 0x52, 0x08, 0x2e, 0x54, 0x1d, 0x8a, 0x78, 0x63,
		0x4d,
	],
};

/** GAN 2x2 cubes can only be told apart by name, e.g. gan251ui_ or ganic251_ */
function isGan2x2(device: BluetoothDevice) {
	return /^gan(251ui|ic251)/i.test(device.name ?? '');
}

export function ganPuzzle(device: BluetoothDevice): SmartPuzzle {
	return isGan2x2(device) ? '222' : '333';
}

const GAN_PROTOCOLS: SmartCubeProtocol[] = [
	{
		service: '6e400001-b5a3-f393-e0a9-e50e24dc4179',
		commandCharacteristic: '28be4a4a-cd67-11e9-a32f-2a2ae2dbcce4',
		stateCharacteristic: '28be4cb6-cd67-11e9-a32f-2a2ae2dbcce4',
		// AiCube is the MoYu AI 2023, which uses the GAN Gen2 protocol with its own key
		createEncrypter: (device, mac) =>
			new SaltedCubeEncrypter(
				device.name?.startsWith('AiCube') ? GAN_ENCRYPTION_KEYS[1] : GAN_ENCRYPTION_KEYS[0],
				mac,
			),
		createDriver: () => new GanGen2ProtocolDriver(),
	},
	{
		service: '8653000a-43e6-47b7-9cb0-5fc21d4ae340',
		commandCharacteristic: '8653000c-43e6-47b7-9cb0-5fc21d4ae340',
		stateCharacteristic: '8653000b-43e6-47b7-9cb0-5fc21d4ae340',
		createEncrypter: (_device, mac) => new SaltedCubeEncrypter(GAN_ENCRYPTION_KEYS[0], mac),
		createDriver: () => new GanGen3ProtocolDriver(),
	},
	{
		service: '00000010-0000-fff7-fff6-fff5fff4fff0',
		commandCharacteristic: '0000fff5-0000-1000-8000-00805f9b34fb',
		stateCharacteristic: '0000fff6-0000-1000-8000-00805f9b34fb',
		createEncrypter: (device, mac) =>
			new SaltedCubeEncrypter(
				isGan2x2(device) ? GAN_251_ENCRYPTION_KEY : GAN_ENCRYPTION_KEYS[0],
				mac,
			),
		createDriver: (device) => new GanGen4ProtocolDriver({cornersOnly: isGan2x2(device)}),
	},
];

/** The MAC address is in the first 9 bytes of GAN manufacturer data */
export function readGanMacAddress(device: BluetoothDevice) {
	return readMacAddress(device, GAN_CIC_LIST, 9);
}

export function connectGanCube(device: BluetoothDevice, macAddress: string) {
	return connectSmartCube(device, macAddress, GAN_PROTOCOLS);
}

/**
 * Gen1 cubes don't need their MAC address, so they're checked for first. Resolves null for newer cubes, which
 * are checked for before the Gen1 service like csTimer does.
 */
export async function connectGanGen1Cube(device: BluetoothDevice) {
	const gatt = await connectGatt(device);
	const services = new Set(
		(await gatt.getPrimaryServices()).map((service) => service.uuid.toLowerCase()),
	);
	const isGen1 =
		!GAN_PROTOCOLS.some((protocol) => services.has(protocol.service)) &&
		services.has(GAN_GEN1_SERVICE) &&
		services.has(GAN_GEN1_DEVICE_INFO_SERVICE);
	return isGen1 ? GanGen1Connection.connect(device, gatt) : null;
}
