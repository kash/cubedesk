import TrackedSmartCube from '@/components/timer/smart-cube/bluetooth/tracked_cube';
import {MhcConnection} from '@/util/moyu/mhc';

/** The original MoYu AI, which doesn't need its MAC address */
export default class MoYuMhc extends TrackedSmartCube {
	protected batteryPollInterval = 60_000;

	protected async connect() {
		return this.verifyOrThrow(await MhcConnection.connect(this.device));
	}
}
