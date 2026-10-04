import EncryptedSmartCube from '@/components/timer/smart-cube/bluetooth/encrypted_cube';
import {connectGanCube, readGanMacAddress} from '@/util/gan/cube';

export default class GAN extends EncryptedSmartCube {
	protected connectCube(mac: string) {
		return connectGanCube(this.device, mac);
	}

	protected readAdvertisedMacAddress() {
		return readGanMacAddress(this.device);
	}
}
