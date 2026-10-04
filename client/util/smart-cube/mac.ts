import {debugLog, toHex} from '@/util/smart-cube/debug';

// Encrypted smart cubes salt their encryption key with their MAC address, which browsers don't expose directly

/** Normalize a MAC address to the AA:BB:CC:DD:EE:FF format, or null if it isn't a valid one */
export function parseMacAddress(input: string) {
	const hex = input.replace(/[:\-\s]/g, '').toUpperCase();
	if (!/^[0-9A-F]{12}$/.test(hex)) return null;
	return hex.replace(/(..)(?!$)/g, '$1:');
}

/** Manufacturer data bytes after the Company Identifier Code, limited to dataLength bytes if given */
function getManufacturerDataBytes(
	manufacturerData: BluetoothManufacturerData,
	cics: number[],
	dataLength?: number,
) {
	let data: DataView | undefined;
	// Bluefy browser returns a raw DataView that still starts with the 2 byte CIC instead of a Map
	if (manufacturerData instanceof DataView) {
		if (manufacturerData.byteLength > 2) {
			data = new DataView(
				manufacturerData.buffer,
				manufacturerData.byteOffset + 2,
				manufacturerData.byteLength - 2,
			);
		}
	} else {
		data = cics.map((id) => manufacturerData.get(id)).find((value) => value !== undefined);
	}
	if (!data) return null;

	const length = Math.min(data.byteLength, dataLength ?? data.byteLength);
	return new DataView(data.buffer, data.byteOffset, length);
}

/** MAC address is stored in reverse byte order in the last 6 bytes of manufacturer data */
function extractMac(data: DataView) {
	if (data.byteLength < 6) return null;

	const mac: string[] = [];
	for (let i = 1; i <= 6; i++) {
		mac.push(
			data
				.getUint8(data.byteLength - i)
				.toString(16)
				.toUpperCase()
				.padStart(2, '0'),
		);
	}
	return mac.join(':');
}

/**
 * Reading advertisements is behind a Chrome flag, either the new Web Bluetooth permissions backend or
 * experimental web platform features
 */
export function canReadMacAddress(device: BluetoothDevice) {
	return typeof device.watchAdvertisements === 'function';
}

/**
 * Read the MAC address from advertisements, requires the device to be requested with the CICs it may
 * advertise under in optionalManufacturerData
 */
export function readMacAddress(
	device: BluetoothDevice,
	cics: number[],
	dataLength?: number,
): Promise<string | null> {
	if (!canReadMacAddress(device)) return Promise.resolve(null);

	debugLog('Watching advertisements for', device.name);
	return new Promise((resolve) => {
		const abortController = new AbortController();
		const finish = (mac: string | null) => {
			clearTimeout(timeout);
			device.removeEventListener('advertisementreceived', onAdvertisement);
			abortController.abort();
			resolve(mac);
		};
		// Manufacturer data is only in some advertising packets, which Windows delivers as separate events
		const onAdvertisement = (event: BluetoothAdvertisingEvent) => {
			const data = getManufacturerDataBytes(event.manufacturerData, cics, dataLength);
			const mac = data && extractMac(data);
			const entries =
				event.manufacturerData instanceof DataView
					? [`raw: ${toHex(event.manufacturerData)}`]
					: [...event.manufacturerData].map(
							([cic, value]) =>
								`0x${cic.toString(16).padStart(4, '0')}: ${toHex(value)}`,
						);
			debugLog('Advertisement', {
				rssi: event.rssi,
				uuids: event.uuids,
				manufacturerData: entries,
				mac,
			});
			if (mac) finish(mac);
		};
		const timeout = setTimeout(() => {
			debugLog('No MAC address in advertisements after 10s');
			finish(null);
		}, 10000);

		device.addEventListener('advertisementreceived', onAdvertisement);
		device.watchAdvertisements({signal: abortController.signal}).catch((error) => {
			debugLog('watchAdvertisements failed', error);
			finish(null);
		});
	});
}
