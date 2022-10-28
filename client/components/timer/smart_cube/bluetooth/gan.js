import SmartCube from './smart_cube';
import {isEqual} from 'lodash';
import LZString from './lz_string';
import aes128 from './ae128';

export default class GAN extends SmartCube {
	device;
	decoder;
	lastMoves;
	moveInterval;
	_chrct_f7;

	constructor(device) {
		super();

		this.device = device;
	}

	init = async () => {
		const GAN_ENCRYPTION_KEYS = [
			'NoRgnAHANATADDWJYwMxQOxiiEcfYgSK6Hpr4TYCs0IG1OEAbDszALpA',
			'NoNg7ANATFIQnARmogLBRUCs0oAYN8U5J45EQBmFADg0oJAOSlUQF0g',
		];

		const GAN_SERVICE_UUID = '0000fff0-0000-1000-8000-00805f9b34fb';
		const GAN_CHARACTERISTIC_UUID = '0000fff5-0000-1000-8000-00805f9b34fb';
		// const GAN_BATTERY_UUID = 'af0badb1-5b99-43cd-917a-a77bc549e3cc';
		const GAN_SERVICE_UUID_META = '0000180a-0000-1000-8000-00805f9b34fb';
		const GAN_CHARACTERISTIC_VERSION = '00002a28-0000-1000-8000-00805f9b34fb';
		const GAN_CHARACTERISTIC_UUID_HARDWARE = '00002a23-0000-1000-8000-00805f9b34fb';

		this.device.addEventListener('gattserverdisconnected', (event) => {
			this.alertDisconnected();
		});

		this.decoder = null;

		const server = await this.device.gatt.connect();
		const meta = await server.getPrimaryService(GAN_SERVICE_UUID_META);
		const versionCharacteristic = await meta.getCharacteristic(GAN_CHARACTERISTIC_VERSION);
		// this._chrct_f7 = await meta.getCharacteristic(GAN_BATTERY_UUID);
		const versionValue = await versionCharacteristic.readValue();

		const version = (versionValue.getUint8(0) << 16) | (versionValue.getUint8(1) << 8) | versionValue.getUint8(2);
		if (version > 0x010007 && (version & 0xfffe00) === 0x010000) {
			const hardwareCharacteristic = await meta.getCharacteristic(GAN_CHARACTERISTIC_UUID_HARDWARE);
			const hardwareValue = await hardwareCharacteristic.readValue();
			let key = GAN_ENCRYPTION_KEYS[(version >> 8) & 0xff];
			if (!key) throw 'Unsupported GAN cube with unknown encryption key.';
			key = JSON.parse(LZString.decompressFromEncodedURIComponent(key));
			for (let i = 0; i < 6; i++) {
				key[i] = (key[i] + hardwareValue.getUint8(5 - i)) & 0xff;
			}
			this.decoder = new aes128(key);
		}

		const service = await server.getPrimaryService(GAN_SERVICE_UUID);
		const characteristic = await service.getCharacteristic(GAN_CHARACTERISTIC_UUID);

		setTimeout(async () => {
			this.alertConnected(server);
			this.pollCharacteristic(characteristic);
		}, 250);
	};

	getBatteryLevel = async () => {
		return this._chrct_f7.readValue().then((value) => {
			value = this.decode(value);
			return new Promise((resolve) => {
				resolve([value[7], 'Gan 356i']);
			});
		});
	};

	pollCharacteristic = async (cubeCharacteristic) => {
		const value = this.decode(await cubeCharacteristic.readValue());

		let turns = [];
		const twists = ['U', '?', "U'", 'R', '?', "R'", 'F', '?', "F'", 'D', '?', "D'", 'L', '?', "L'", 'B', '?', "B'"];
		for (let i = 13; i < 19; i++) {
			turns.push(twists[value.getUint8(i)]);
		}

		if (this.lastMoves) {
			this.findAndAlertMoves(turns);
		}

		this.lastMoves = turns;

		setTimeout(async () => {
			await this.pollCharacteristic(cubeCharacteristic);
		}, 80);
	};

	findAndAlertMoves = (currentMoves) => {
		if (isEqual(currentMoves, this.lastMoves)) {
			return;
		}

		let moveCounter = 0;
		const current = [...currentMoves];
		const last = [...this.lastMoves];

		for (let i = 0; i < currentMoves.length; i += 1) {
			current.pop();
			last.shift();

			moveCounter += 1;

			if (isEqual(current, last)) {
				break;
			}
		}

		const moves = currentMoves.slice(currentMoves.length - moveCounter);

		for (const move of moves) {
			this.alertTurnCube(move);
		}
	};
	decode = (value) => {
		if (this.decoder === null) return value;
		let decoded = [];
		for (let i = 0; i < value.byteLength; i++) {
			decoded[i] = value.getUint8(i);
		}

		if (decoded.length > 16) {
			decoded = decoded
				.slice(0, decoded.length - 16)
				.concat(this.decoder.decrypt(decoded.slice(decoded.length - 16)));
		}
		this.decoder.decrypt(decoded);
		return new DataView(new Uint8Array(decoded).buffer);
	};
}
