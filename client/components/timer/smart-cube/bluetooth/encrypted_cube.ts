import {SmartCubeConnectionError} from '@/components/timer/smart-cube/bluetooth/smart_cube';
import TrackedSmartCube from '@/components/timer/smart-cube/bluetooth/tracked_cube';
import {SmartCubeConnection} from '@/util/smart-cube/connection';
import {canReadMacAddress, parseMacAddress} from '@/util/smart-cube/mac';
import {trpc} from '@/util/trpc';

// Cubes answer within a fraction of a second, and a shorter wait keeps wrong guesses from slowing down connecting
const GUESS_TIMEOUT = 2000;

/**
 * Cubes that need their MAC address to communicate, which browsers don't expose, so it has to be found before
 * connecting. GAN and MoYu salt their encryption key with it, QiYi cubes only respond to a hello containing it.
 */
export default abstract class EncryptedSmartCube extends TrackedSmartCube {
	protected abstract connectCube(mac: string): Promise<SmartCubeConnection>;

	/** Read the MAC address from the cube's advertisements, null if the browser can't or it wasn't found */
	protected abstract readAdvertisedMacAddress(): Promise<string | null>;

	/** Likely MAC addresses that don't need advertisements, each only used once connecting with it succeeds */
	protected guessMacAddresses(): string[] {
		return [];
	}

	/**
	 * A wrong MAC address decrypts to garbage, which never forms a valid cube state. The Bluetooth connection
	 * stays open after a failure so the next MAC address can reuse it, reconnecting right away can race.
	 */
	private connectAndVerify = async (mac: string, timeout?: number) =>
		this.verify(await this.connectCube(mac), timeout);

	/**
	 * Try the MAC address saved from a previous connection, then the one from advertisements, then guessed
	 * ones, then ask the user
	 */
	protected async connect() {
		const canRead = canReadMacAddress(this.device);
		const tried = new Set<string>();
		const tryMac = async (mac: string | null, timeout?: number) => {
			if (!mac || tried.has(mac) || !this.callbacks.isActive()) return null;
			tried.add(mac);
			return this.connectAndVerify(mac, timeout);
		};

		// A MAC address that worked before skips waiting for advertisements, the slowest step
		const saved = await tryMac(await this.findSavedMacAddress());
		if (saved) return saved;

		if (canRead) {
			// A connected cube doesn't advertise
			this.releaseDevice();
			const advertised = await tryMac(await this.readAdvertisedMacAddress());
			if (advertised) return advertised;
		}

		for (const mac of this.guessMacAddresses()) {
			const guessed = await tryMac(mac, GUESS_TIMEOUT);
			if (guessed) return guessed;
		}

		while (this.callbacks.isActive()) {
			// The prompt can stay open a while, and a connected cube doesn't advertise for a retry
			this.releaseDevice();
			const response = await this.callbacks.requestMacAddress(
				canRead ? 'detection-failed' : 'unsupported',
			);
			if (response.action === 'cancel') return null;

			if (response.action === 'retry') {
				const mac = await this.readAdvertisedMacAddress();
				if (!mac) continue;
				const verified = await this.connectAndVerify(mac);
				if (verified) return verified;
			} else {
				const verified = await this.connectAndVerify(response.macAddress);
				if (verified) return verified;
				throw new SmartCubeConnectionError(
					"Couldn't read your cube's state. Double-check the MAC address you entered.",
				);
			}
		}

		return null;
	}

	/** Cubes are saved with their MAC address as the device ID, matched by the Bluetooth name */
	private findSavedMacAddress = async () => {
		try {
			const devices = await trpc.smartDevice.list.query();
			const macs = devices
				.filter((device) => device.internal_name === this.device.name)
				.map((device) => parseMacAddress(device.device_id))
				.filter((mac) => mac !== null);
			return new Set(macs).size === 1 ? macs[0] : null;
		} catch {
			return null;
		}
	};
}
