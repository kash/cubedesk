import EncryptedSmartCube from '@/components/timer/smart-cube/bluetooth/encrypted_cube';
import {connectMoyuCube, guessMoyuMacAddresses, readMoyuMacAddress} from '@/util/moyu/cube';

/** MoYu32 cubes (WeiLong V10 AI), MoYu AI 2023 cubes use the GAN protocol instead */
export default class MoYu extends EncryptedSmartCube {
	protected batteryPollInterval = 60_000;

	protected connectCube(mac: string) {
		return connectMoyuCube(this.device, mac);
	}

	protected readAdvertisedMacAddress() {
		return readMoyuMacAddress(this.device);
	}

	protected guessMacAddresses() {
		return guessMoyuMacAddresses(this.device);
	}
}
