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

interface BluetoothRemoteGATTCharacteristic extends EventTarget {
	uuid: string;
	value?: DataView;
	readValue(): Promise<DataView>;
	writeValue(value: BufferSource): Promise<void>;
	startNotifications(): Promise<BluetoothRemoteGATTCharacteristic>;
	stopNotifications(): Promise<BluetoothRemoteGATTCharacteristic>;
}

interface BluetoothRemoteGATTService {
	uuid: string;
	getCharacteristic(characteristic: string): Promise<BluetoothRemoteGATTCharacteristic>;
	getCharacteristics(characteristic?: string): Promise<BluetoothRemoteGATTCharacteristic[]>;
}

interface BluetoothRemoteGATTServer {
	connected: boolean;
	connect(): Promise<BluetoothRemoteGATTServer>;
	disconnect(): void;
	getPrimaryService(service: string): Promise<BluetoothRemoteGATTService>;
	getPrimaryServices(service?: string): Promise<BluetoothRemoteGATTService[]>;
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
