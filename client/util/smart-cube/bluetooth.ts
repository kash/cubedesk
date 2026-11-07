export function watchAdvertisements(device: BluetoothDevice, signal: AbortSignal) {
	try {
		return Promise.resolve(device.watchAdvertisements({signal}));
	} catch (error) {
		return Promise.reject(error);
	}
}

export async function isBluetoothAvailable() {
	if (!navigator.bluetooth) return false;
	if (typeof navigator.bluetooth.getAvailability !== 'function') return true;
	return navigator.bluetooth.getAvailability().catch(() => false);
}
