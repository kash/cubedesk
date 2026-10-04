// GAN smart cube connection, adapted from gan-web-bluetooth (MIT) by Andy Fedotov
import {
	GanGen2ProtocolDriver,
	GanGen3ProtocolDriver,
	GanGen4ProtocolDriver,
} from '@/util/gan/protocol';
import {connectSmartCube, EncryptionKey, SmartCubeProtocol} from '@/util/smart-cube/connection';
import {readMacAddress} from '@/util/smart-cube/mac';

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

const GAN_PROTOCOLS: SmartCubeProtocol[] = [
	{
		service: '6e400001-b5a3-f393-e0a9-e50e24dc4179',
		commandCharacteristic: '28be4a4a-cd67-11e9-a32f-2a2ae2dbcce4',
		stateCharacteristic: '28be4cb6-cd67-11e9-a32f-2a2ae2dbcce4',
		// AiCube is the MoYu AI 2023, which uses the GAN Gen2 protocol with its own key
		encryptionKey: (device) =>
			device.name?.startsWith('AiCube') ? GAN_ENCRYPTION_KEYS[1] : GAN_ENCRYPTION_KEYS[0],
		createDriver: () => new GanGen2ProtocolDriver(),
	},
	{
		service: '8653000a-43e6-47b7-9cb0-5fc21d4ae340',
		commandCharacteristic: '8653000c-43e6-47b7-9cb0-5fc21d4ae340',
		stateCharacteristic: '8653000b-43e6-47b7-9cb0-5fc21d4ae340',
		encryptionKey: () => GAN_ENCRYPTION_KEYS[0],
		createDriver: () => new GanGen3ProtocolDriver(),
	},
	{
		service: '00000010-0000-fff7-fff6-fff5fff4fff0',
		commandCharacteristic: '0000fff5-0000-1000-8000-00805f9b34fb',
		stateCharacteristic: '0000fff6-0000-1000-8000-00805f9b34fb',
		encryptionKey: () => GAN_ENCRYPTION_KEYS[0],
		createDriver: () => new GanGen4ProtocolDriver(),
	},
];

/** The MAC address is in the first 9 bytes of GAN manufacturer data */
export function readGanMacAddress(device: BluetoothDevice) {
	return readMacAddress(device, GAN_CIC_LIST, 9);
}

export function connectGanCube(device: BluetoothDevice, macAddress: string) {
	return connectSmartCube(device, macAddress, GAN_PROTOCOLS);
}
