import SmartCube from './smart_cube';

export default class Particula extends SmartCube {
	device;
	batteryInterval;

	_server;
	_service;
	_read;
	_write;

	WRITE_BATTERY = 50;
	WRITE_STATE = 51;

	static UUID_SUFFIX = '-b5a3-f393-e0a9-e50e24dcca9e';
	static SERVICE_UUID = '6e400001' + Particula.UUID_SUFFIX;
	static opServices = [Particula.SERVICE_UUID];

	CHRCT_UUID_WRITE = '6e400002' + Particula.UUID_SUFFIX;
	CHRCT_UUID_READ = '6e400003' + Particula.UUID_SUFFIX;

	axisPerm = [5, 2, 0, 3, 1, 4];
	facePerm = [0, 1, 2, 5, 8, 7, 6, 3];
	faceOffset = [0, 0, 6, 2, 0, 0];

	batteryIntervalStarted = false;
	getStateTimeout = null;

	curBatteryLevel = -1;
	batteryResolveList = [];

	constructor(device) {
		super();

		this.device = device;
	}

	init = async () => {
		this._server = await this.device.gatt.connect();
		this._service = await this._server.getPrimaryService(Particula.SERVICE_UUID);
		this._write = await this._service.getCharacteristic(this.CHRCT_UUID_WRITE);
		this._read = await this._service.getCharacteristic(this.CHRCT_UUID_READ);

		await this._read.startNotifications();
		await this._read.addEventListener('characteristicvaluechanged', this.onStateChanged);
		await this._write.writeValue(new Uint8Array([this.WRITE_STATE]).buffer);

		this.device.addEventListener('gattserverdisconnected', (event) => {
			if (this.batteryInterval) {
				clearInterval(this.batteryInterval);
				this.batteryInterval = null;
			}

			this.alertDisconnected();
		});

		await this.alertConnected(this._server);

		this.batteryInterval = setInterval(async () => {
			this.batteryIntervalStarted = true;
			const battery = await this.getBatteryLevel();
			this.alertBatteryLevel(battery);
		}, 10000);
	};

	parseData = (value) => {
		if (value.byteLength < 4) return;

		if (
			value.getUint8(0) != 0x2a ||
			value.getUint8(value.byteLength - 2) != 0x0d ||
			value.getUint8(value.byteLength - 1) != 0x0a
		) {
			return;
		}

		const msgType = value.getUint8(2);
		const msgLen = value.byteLength - 6;

		if (msgType === 1) {
			// Turn
			for (let i = 0; i < msgLen; i += 2) {
				const axis = this.axisPerm[value.getUint8(3 + i) >> 1];
				const power = [0, 2][value.getUint8(3 + i) & 1];
				const move = 'URFDLB'.charAt(axis) + " 2'".charAt(power);
				this.alertTurnCube(move);
			}

			if (this.getStateTimeout) {
				clearTimeout(this.getStateTimeout);
				this.getStateTimeout = null;
			}

			this.getStateTimeout = setTimeout(() => {
				this.updateState();
			}, 750);
		} else if (msgType === 2) {
			// Cube state
			const faces = this.getCubeState(value);
			this.alertCubeState(faces);

			if (!this.batteryIntervalStarted) {
				this.getBatteryLevel().then((level) => {
					this.alertBatteryLevel(level);
				});
			}
		} else if (msgType === 3) {
			// Gyroscope (not needed yet)
		} else if (msgType === 5) {
			// Battery level
			this.curBatteryLevel = value.getUint8(3);
			while (this.batteryResolveList.length !== 0) {
				this.batteryResolveList.shift()(this.curBatteryLevel);
			}
		}
	};

	getCubeState = (value) => {
		const facelet = [];
		for (let a = 0; a < 6; a++) {
			const axis = this.axisPerm[a] * 9;
			const aoff = this.faceOffset[a];
			facelet[axis + 4] = 'BFUDRL'.charAt(value.getUint8(3 + a * 9));
			for (let i = 0; i < 8; i++) {
				facelet[axis + this.facePerm[(i + aoff) % 8]] = 'BFUDRL'.charAt(value.getUint8(3 + a * 9 + i + 1));
			}
		}

		return facelet.join('');
	};

	onStateChanged = (event) => {
		const value = event.target.value;
		this.parseData(value);
	};

	toHexVal = (value) => {
		const valhex = [];
		for (let i = 0; i < value.byteLength; i++) {
			valhex.push((value.getUint8(i) >> 4) & 0xf);
			valhex.push(value.getUint8(i) & 0xf);
		}
		return valhex;
	};

	updateState = () => {
		this._write.writeValue(new Uint8Array([this.WRITE_STATE]).buffer);
	};

	getBatteryLevel = async () => {
		this._write.writeValue(new Uint8Array([this.WRITE_BATTERY]).buffer);
		return new Promise((resolve) => {
			this.batteryResolveList.push(resolve);
		});
	};
}
