/* eslint-disable */

export default class Stackmat {
	//========== Hardware Part ==========
	audio_context;
	audio_stream;
	source;
	node;
	sample_rate;
	bitAnalyzer;
	curTimer;
	last_power = 1;
	agc_factor = 0.0001;

	//========== Audio2Bits Part ==========
	lastVal = [];
	lastSgn = 0;
	THRESHOLD_SCHM = 0.2;
	THRESHOLD_EDGE = 0.7;
	lenVoltageKeep = 0;
	distortionStat = 0;

	//========== Bits Analyzer ==========
	bitBuffer = [];
	byteBuffer = [];
	idle_val = 0;
	last_bit = 0;
	last_bit_length = 0;
	no_state_length = 0;

	last_suc_time = 0;

	stackmat_state = {
		time_milli: 0,
		unit: 10,
		on: false,
		greenLight: false,
		leftHand: false,
		rightHand: false,
		running: false,
		unknownRunning: true,
		signalHeader: 'I',
		noise: 1,
		power: 1,
	};

	callback = () => null;

	updateInputDevices = () => {
		const devices = [];
		const retobj = new Promise((resolve, reject) => {
			resolve(devices);
		});
		if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
			return retobj;
		}

		return navigator.mediaDevices.enumerateDevices().then((deviceInfos) => {
			for (let i = 0; i < deviceInfos.length; i += 1) {
				const deviceInfo = deviceInfos[i];
				if (deviceInfo.kind === 'audioinput') {
					devices.push([deviceInfo.deviceId, deviceInfo.label || 'microphone ' + (devices.length + 1)]);
				}
			}
			return retobj;
		});
	};

	init = (timer, deviceId, force, cb) => {
		this.curTimer = timer;
		this.callback = cb;

		if (navigator.mediaDevices === undefined) {
			navigator.mediaDevices = {};
		}

		if (navigator.mediaDevices.getUserMedia === undefined) {
			navigator.mediaDevices.getUserMedia = (constraints) => {
				const getUserMedia =
					navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
				if (!getUserMedia) {
					return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
				}
				return new Promise((resolve, reject) => {
					getUserMedia.call(navigator, constraints, resolve, reject);
				});
			};
		}

		const AudioContext = window.AudioContext || window.webkitAudioContext;

		this.audio_context = new AudioContext();

		if (this.curTimer === 'm') {
			this.sample_rate = this.audio_context.sampleRate / 8000;
			this.bitAnalyzer = this.appendBitMoyu;
		} else {
			this.sample_rate = this.audio_context.sampleRate / 1200;
			this.bitAnalyzer = this.appendBit;
		}
		this.agc_factor = 0.001 / this.sample_rate;
		this.lastVal.length = Math.ceil(this.sample_rate / 6);
		this.bitBuffer = [];
		this.byteBuffer = [];

		const selectObj = {
			echoCancellation: false,
			noiseSuppression: false,
		};

		if (deviceId) {
			selectObj['deviceId'] = {
				exact: deviceId,
			};
		}

		if (this.audio_stream === undefined) {
			return navigator.mediaDevices
				.getUserMedia({
					audio: selectObj,
				})
				.then((stream) => {
					if (this.audio_context.state === 'suspended' && !force) {
						return Promise.reject();
					}
					this.success(stream);
				});
		} else {
			return Promise.resolve();
		}
	};

	stop = () => {
		if (this.audio_stream !== undefined) {
			this.source.disconnect(this.node);
			this.node.disconnect(this.audio_context.destination);
			this.audio_stream.stop && this.audio_stream.stop();
			this.audio_stream = undefined;
		}
	};

	success = (stream) => {
		this.audio_stream = stream;
		this.source = this.audio_context.createMediaStreamSource(stream);
		this.node = this.audio_context.createScriptProcessor(1024, 1, 1);

		this.node.onaudioprocess = (e) => {
			const input = e.inputBuffer.getChannelData(0);

			//AGC
			for (let i = 0; i < input.length; i += 1) {
				const power = input[i] * input[i];
				this.last_power = Math.max(0.0001, this.last_power + (power - this.last_power) * this.agc_factor);
				const gain = 1 / Math.sqrt(this.last_power);
				this.procSignal(input[i] * gain);
				// output[i] = input[i] * gain / 500;
			}
			return;
		};
		this.source.connect(this.node);
		this.node.connect(this.audio_context.destination);
	};

	procSignal = (signal) => {
		// signal = Math.max(Math.min(signal, 1), -1);
		// Schmidt trigger

		this.lastVal.unshift(signal);
		const isEdge =
			(this.lastVal.pop() - signal) * (this.lastSgn ? 1 : -1) > this.THRESHOLD_EDGE &&
			Math.abs(signal - (this.lastSgn ? 1 : -1)) - 1 > this.THRESHOLD_SCHM &&
			this.lenVoltageKeep > this.sample_rate * 0.6;

		if (isEdge) {
			for (let i = 0; i < Math.round(this.lenVoltageKeep / this.sample_rate); i += 1) {
				this.bitAnalyzer(this.lastSgn);
			}
			this.lastSgn ^= 1;
			this.lenVoltageKeep = 0;
		} else if (this.lenVoltageKeep > this.sample_rate * 2) {
			this.bitAnalyzer(this.lastSgn);
			this.lenVoltageKeep -= this.sample_rate;
		}
		this.lenVoltageKeep += 1;

		//note: signal power has already been normalized. So distortionStat will tends to zero ideally.
		if (this.last_bit_length < 10) {
			this.distortionStat = Math.max(
				0.0001,
				this.distortionStat +
					(Math.pow(signal - (this.lastSgn ? 1 : -1), 2) - this.distortionStat) * this.agc_factor
			);
		} else if (this.last_bit_length > 100) {
			this.distortionStat = 1;
		}
	};

	appendBit = (bit) => {
		this.bitBuffer.push(bit);
		if (bit !== this.last_bit) {
			this.last_bit = bit;
			this.last_bit_length = 1;
		} else {
			this.last_bit_length += 1;
		}
		this.no_state_length += 1;
		if (this.last_bit_length > 10) {
			//IDLE
			this.idle_val = bit;
			this.bitBuffer = [];

			if (this.byteBuffer.length !== 0) {
				this.byteBuffer = [];
			}

			if (this.last_bit_length > 100 && this.stackmat_state.on) {
				this.stackmat_state.on = false;
				this.stackmat_state.noise = Math.min(1, this.distortionStat) || 0;
				this.stackmat_state.power = this.last_power;
				this.callback(this.stackmat_state);
			} else if (this.no_state_length > 700) {
				this.no_state_length = 100;
				this.stackmat_state.noise = Math.min(1, this.distortionStat) || 0;
				this.stackmat_state.power = this.last_power;
				this.callback(this.stackmat_state);
			}
		} else if (this.bitBuffer.length === 10) {
			if (this.bitBuffer[0] === this.idle_val || this.bitBuffer[9] !== this.idle_val) {
				this.bitBuffer = this.bitBuffer.slice(1);
			} else {
				let val = 0;
				for (let i = 8; i > 0; i -= 1) {
					val = (val << 1) | (this.bitBuffer[i] === this.idle_val ? 1 : 0);
				}
				this.byteBuffer.push(String.fromCharCode(val));
				this.decode(this.byteBuffer);
				this.bitBuffer = [];
			}
		}
	};

	decode = (byteBuffer) => {
		if (byteBuffer.length !== 9 && byteBuffer.length !== 10) {
			return;
		}
		const re_head = /[ SILRCA]/;
		const re_number = /[0-9]/;
		const head = byteBuffer[0];
		if (!re_head.exec(head)) {
			return;
		}
		let checksum = 64;
		for (let i = 1; i < byteBuffer.length - 3; i += 1) {
			if (!re_number.exec(byteBuffer[i])) {
				return;
			}
			checksum += ~~byteBuffer[i];
		}
		if (checksum !== byteBuffer[byteBuffer.length - 3].charCodeAt(0)) {
			return;
		}
		let time_milli =
			~~byteBuffer[1] * 60000 +
			~~(byteBuffer[2] + byteBuffer[3]) * 1000 +
			~~(byteBuffer[4] + byteBuffer[5] + (byteBuffer.length === 10 ? byteBuffer[6] : '0'));

		this.pushNewState(head, time_milli, byteBuffer.length === 9 ? 10 : 1);
	};

	pushNewState = (head, time_milli, unit) => {
		const suc_time = new Date();
		this.last_suc_time = suc_time;
		const new_state = {};
		new_state.time_milli = time_milli;
		new_state.unit = unit;
		new_state.on = true;
		const is_time_inc =
			unit === this.stackmat_state.unit
				? new_state.time_milli > this.stackmat_state.time_milli
				: Math.floor(new_state.time_milli / 10) > Math.floor(this.stackmat_state.time_milli / 10);
		new_state.greenLight = head === 'A';
		new_state.leftHand = head === 'L' || head === 'A' || head === 'C';
		new_state.rightHand = head === 'R' || head === 'A' || head === 'C';
		new_state.running = (head !== 'S' || this.stackmat_state.signalHeader === 'S') && (head === ' ' || is_time_inc);
		new_state.signalHeader = head;
		new_state.unknownRunning = !this.stackmat_state.on;
		new_state.noise = Math.min(1, this.distortionStat) || 0;
		new_state.power = this.last_power;

		this.stackmat_state = new_state;

		this.no_state_length = 0;
		this.callback(this.stackmat_state);
	};

	appendBitMoyu = (bit) => {
		if (this.last_bit !== this.idle_val && this.last_bit_length === 1) {
			this.bitBuffer.push(bit);
			if (this.bitBuffer.length === 24) {
				let time_milli = 0;
				for (let i = 5; i >= 0; i -= 1) {
					time_milli *= 10;
					for (let j = 0; j < 4; j += 1) {
						time_milli += this.bitBuffer[i * 4 + j] << j;
					}
				}
				this.bitBuffer = [];
				this.pushNewState('S', time_milli, 1);
			}
		}
		if (bit !== this.last_bit) {
			this.last_bit = bit;
			this.last_bit_length = 1;
		} else {
			this.last_bit_length += 1;
		}
		if (this.last_bit_length > 10) {
			//IDLE
			this.idle_val = bit;
			this.bitBuffer = [];
			this.byteBuffer = [];
			if (this.last_bit_length > 1000 && this.stackmat_state.on) {
				this.stackmat_state.on = false;
				this.stackmat_state.noise = Math.min(1, this.distortionStat) || 0;
				this.stackmat_state.power = this.last_power;
				this.callback(this.stackmat_state);
			} else if (this.last_bit_length > 4000) {
				this.last_bit_length = 1000;
				this.stackmat_state.noise = Math.min(1, this.distortionStat) || 0;
				this.stackmat_state.power = this.last_power;
				this.callback(this.stackmat_state);
			}
		}
	};
}
