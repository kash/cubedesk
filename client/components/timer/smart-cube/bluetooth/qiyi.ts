import EncryptedSmartCube from '@/components/timer/smart-cube/bluetooth/encrypted_cube';
import {connectQiyiCube, guessQiyiMacAddresses, readQiyiMacAddress} from '@/util/qiyi/cube';

/** QiYi AI and X-Man Tornado V4 AI */
export default class QiYi extends EncryptedSmartCube {
	protected connectCube(mac: string) {
		console.info('[QiYi debug] trying MAC', mac);
		return connectQiyiCube(this.device, mac);
	}

	protected async readAdvertisedMacAddress() {
		const mac = await readQiyiMacAddress(this.device);
		console.info(
			'[QiYi debug] advertised MAC',
			mac,
			'guesses',
			guessQiyiMacAddresses(this.device),
		);
		return mac;
	}

	protected guessMacAddresses() {
		return guessQiyiMacAddresses(this.device);
	}
}
