// MoYu smart cube connection, protocol details from csTimer (GPL-3.0) by cs0x7f
import {Moyu32ProtocolDriver} from '@/util/moyu/protocol';
import {connectSmartCube, SmartCubeProtocol} from '@/util/smart-cube/connection';
import {readMacAddress} from '@/util/smart-cube/mac';

/** Bluetooth name prefix of WeiLong V10 AI cubes, WCU_MY32_XXXX or WCU_MY33_XXXX for the standard version */
export const MOYU32_NAME_PREFIX = 'WCU_MY3';
export const MOYU32_SERVICE = '0783b03e-7735-b5a0-1760-a305d2795cb0';

/**
 * Company Identifier Codes MoYu cubes may advertise with. A cube bound to an account in the WCU Cube app
 * uses the high bytes of the account ID, so every value from 0x0100 to 0xFF00, and an unbound one uses
 * 0x0000. Chrome before 130 crashed on advertisements with CIC 0x0000, see crbug.com/356891475.
 */
export const MOYU_CIC_LIST = Array.from({length: 256}, (_, i) => i << 8);

const MOYU32_PROTOCOL: SmartCubeProtocol = {
	service: MOYU32_SERVICE,
	commandCharacteristic: '0783b03e-7735-b5a0-1760-a305d2795cb2',
	stateCharacteristic: '0783b03e-7735-b5a0-1760-a305d2795cb1',
	encryptionKey: () => ({
		key: [
			0x15, 0x77, 0x3a, 0x5c, 0x67, 0x0e, 0x2d, 0x1f, 0x17, 0x67, 0x2a, 0x13, 0x9b, 0x67,
			0x52, 0x57,
		],
		iv: [
			0x11, 0x23, 0x26, 0x25, 0x86, 0x2a, 0x2c, 0x3b, 0x55, 0x06, 0x7f, 0x31, 0x7e, 0x67,
			0x21, 0x57,
		],
	}),
	createDriver: () => new Moyu32ProtocolDriver(),
};

export function readMoyuMacAddress(device: BluetoothDevice) {
	return readMacAddress(device, MOYU_CIC_LIST);
}

/**
 * Likely MAC addresses from the Bluetooth name, which ends with the last 2 bytes. The fourth byte varies
 * by hardware (02 on a V11 AI), so each guess has to be verified by connecting.
 */
export function guessMoyuMacAddresses(device: BluetoothDevice) {
	const match = /^WCU_MY3(\d)_([0-9A-F]{2})([0-9A-F]{2})$/.exec(device.name?.trim() ?? '');
	if (!match) return [];
	const [, model, a, b] = match;
	// Most likely first, as seen on real cubes
	const variants = model === '3' ? ['02', '01', '00'] : ['02', '00', '01'];
	return variants.map((variant) => `CF:30:16:${variant}:${a}:${b}`);
}

export function connectMoyuCube(device: BluetoothDevice, macAddress: string) {
	return connectSmartCube(device, macAddress, [MOYU32_PROTOCOL]);
}
