declare module '*.png' {
	const content: any;
	export default content;
}

interface Window {
	[key: string]: any;
}

interface Bluetooth {
	getAvailability(): Promise<boolean>;
}

interface Navigator {
	bluetooth?: Bluetooth;
}
