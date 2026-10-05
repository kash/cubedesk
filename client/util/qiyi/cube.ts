// QiYi smart cube connection, protocol details from csTimer (GPL-3.0) by cs0x7f and qiyi_smartcube_protocol by Flying-Toast
import {QiyiProtocolDriver} from '@/util/qiyi/protocol';
import Aes128 from '@/util/smart-cube/aes';
import {connectSmartCube, MessageEncrypter, SmartCubeProtocol} from '@/util/smart-cube/connection';
import {readMacAddress} from '@/util/smart-cube/mac';

/** Bluetooth name prefixes, QY-QYSC-S-XXXX for the QiYi AI and XMD-TornadoV4-i-XXXX for the X-Man Tornado V4 AI */
export const QIYI_NAME_PREFIXES = ['QY-QYSC', 'XMD-TornadoV4-i'];
export const QIYI_SERVICE = '0000fff0-0000-1000-8000-00805f9b34fb';
export const QIYI_CIC_LIST = [0x0504];

const QIYI_CHARACTERISTIC = '0000fff6-0000-1000-8000-00805f9b34fb';
const QIYI_KEY = new Uint8Array([
	0x57, 0xb1, 0xf9, 0xab, 0xcd, 0x5a, 0xe8, 0xa7, 0x9c, 0xb9, 0x8c, 0xe7, 0x57, 0x8c, 0x51, 0x08,
]);

/** Every 16 byte block is encrypted on its own with AES-128 and a fixed key, messages are zero padded to fit */
class QiyiEncrypter implements MessageEncrypter {
	private aes = new Aes128(QIYI_KEY);

	encrypt(data: Uint8Array) {
		const res = new Uint8Array(Math.ceil(data.length / 16) * 16);
		res.set(data);
		for (let i = 0; i < res.length; i += 16) {
			res.set(this.aes.encryptBlock(res.subarray(i, i + 16)), i);
		}
		return res;
	}

	decrypt(data: Uint8Array) {
		const res = new Uint8Array(data.length - (data.length % 16));
		for (let i = 0; i < res.length; i += 16) {
			res.set(this.aes.decryptBlock(data.subarray(i, i + 16)), i);
		}
		return res;
	}
}

// Commands and state are both sent over the same characteristic
const QIYI_PROTOCOL: SmartCubeProtocol = {
	service: QIYI_SERVICE,
	commandCharacteristic: QIYI_CHARACTERISTIC,
	stateCharacteristic: QIYI_CHARACTERISTIC,
	createEncrypter: () => new QiyiEncrypter(),
	createDriver: (_device, mac) => new QiyiProtocolDriver(mac),
};

export function isQiyiCube(name: string) {
	return QIYI_NAME_PREFIXES.some((prefix) => name.startsWith(prefix));
}

/** The MAC address is in the first 6 bytes of QiYi manufacturer data */
export function readQiyiMacAddress(device: BluetoothDevice) {
	return readMacAddress(device, QIYI_CIC_LIST, 6);
}

const MAC_PREFIXES: Record<string, string[]> = {
	'QY-QYSC-A': ['CC:A2:00:00'],
	'QY-QYSC-S': ['CC:A3:00:00', 'CC:A3:00:01'],
	'XMD-TornadoV4-i': ['CC:A6:00:00'],
};

/**
 * Likely MAC addresses from the Bluetooth name, which ends with the last 2 bytes. The first 4 bytes depend on
 * the model, so each guess has to be verified by connecting.
 */
export function guessQiyiMacAddresses(device: BluetoothDevice) {
	// Tornado names end with a space
	const match = /^(QY-QYSC-A|QY-QYSC-S|XMD-TornadoV4-i)-([0-9A-Fa-f]{4})$/.exec(
		device.name?.trim() ?? '',
	);
	if (!match) return [];
	const [, model, suffix] = match;
	const hex = suffix.toUpperCase();
	return MAC_PREFIXES[model].map((prefix) => `${prefix}:${hex.slice(0, 2)}:${hex.slice(2)}`);
}

export function connectQiyiCube(device: BluetoothDevice, macAddress: string) {
	return connectSmartCube(device, macAddress, [QIYI_PROTOCOL]);
}
