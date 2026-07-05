declare module '*.png' {
	const content: any;
	export default content;
}

interface Window {
	[key: string]: any;
}

interface BluetoothRequestDeviceFilter {
	services?: string[];
	name?: string;
	namePrefix?: string;
}

interface BluetoothRemoteGATTServer {
	connected: boolean;
	connect(): Promise<BluetoothRemoteGATTServer>;
	disconnect(): void;
}

interface BluetoothDevice extends EventTarget {
	id: string;
	name?: string;
	gatt?: BluetoothRemoteGATTServer;
}

interface Bluetooth {
	getAvailability(): Promise<boolean>;
	requestDevice(options?: {
		filters?: BluetoothRequestDeviceFilter[];
		optionalServices?: string[];
		acceptAllDevices?: boolean;
	}): Promise<BluetoothDevice>;
}

interface Navigator {
	bluetooth?: Bluetooth;
}
