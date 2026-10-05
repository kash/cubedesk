import EncryptedSmartCube from '@/components/timer/smart-cube/bluetooth/encrypted_cube';
import {connectGanCube, connectGanGen1Cube, readGanMacAddress} from '@/util/gan/cube';

export default class GAN extends EncryptedSmartCube {
	protected async connect() {
		const gen1 = await connectGanGen1Cube(this.device);
		if (gen1) return this.verifyOrThrow(gen1);
		return super.connect();
	}

	protected connectCube(mac: string) {
		return connectGanCube(this.device, mac);
	}

	protected readAdvertisedMacAddress() {
		return readGanMacAddress(this.device);
	}
}
