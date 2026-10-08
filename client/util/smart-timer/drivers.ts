import {GAN_TIMER_DRIVER} from '@/util/gan/timer';
import {SmartTimerBrand, SmartTimerDriver} from '@/util/smart-timer/protocol';

export const SMART_TIMER_DRIVERS: Record<SmartTimerBrand, SmartTimerDriver> = {
	gan: GAN_TIMER_DRIVER,
};

const DRIVERS = Object.values(SMART_TIMER_DRIVERS);

/** One picker lists every supported timer, the connected one's name decides which driver talks to it */
export const SMART_TIMER_REQUEST_OPTIONS: RequestDeviceOptions = {
	filters: DRIVERS.flatMap((driver) => driver.namePrefixes.map((namePrefix) => ({namePrefix}))),
	optionalServices: DRIVERS.flatMap((driver) => driver.services),
	optionalManufacturerData: DRIVERS.flatMap((driver) => driver.manufacturerData ?? []),
};

/** The driver with the longest name prefix that matches, so a more specific prefix wins over a shorter one */
export function findSmartTimerDriver(name: string) {
	let match: {driver: SmartTimerDriver; length: number} | null = null;
	for (const driver of DRIVERS) {
		for (const prefix of driver.namePrefixes) {
			if (name.startsWith(prefix) && prefix.length > (match?.length ?? 0)) {
				match = {driver, length: prefix.length};
			}
		}
	}
	return match?.driver ?? null;
}
