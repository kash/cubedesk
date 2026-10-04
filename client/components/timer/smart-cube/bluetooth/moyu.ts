import EncryptedSmartCube from '@/components/timer/smart-cube/bluetooth/encrypted_cube';
import {connectMoyuCube, guessMoyuMacAddress, readMoyuMacAddress} from '@/util/moyu/cube';

/** MoYu32 cubes (WeiLong V10 AI), MoYu AI 2023 cubes use the GAN protocol instead */
export default class MoYu extends EncryptedSmartCube {
	protected connectCube(mac: string) {
		return connectMoyuCube(this.device, mac);
	}

	protected readAdvertisedMacAddress() {
		return readMoyuMacAddress(this.device);
	}

	protected guessMacAddress() {
		return guessMoyuMacAddress(this.device);
	}
}
