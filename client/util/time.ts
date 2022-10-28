import {getSetting} from '../db/settings/query';
import {Solve} from '../../server/schemas/Solve.schema';

export function getNumberToDecimalPoints(number: number, decimalPoints: number): number {
	const pow = Math.pow(10, decimalPoints);
	return Math.floor(number * pow) / pow;
}

// source should be either time number or a Solve object
export function getTimeString(source: number | Solve, decimalPoints?: number, ignoreMaxDepth?: boolean): string {
	if (source === null || source === undefined) {
		return '-';
	}

	const seconds: number = typeof source === 'number' ? source : source.time;

	let dp = 2;
	if (decimalPoints === undefined) {
		decimalPoints = getSetting('timer_decimal_points');
	}

	if (decimalPoints !== undefined) {
		dp = decimalPoints;
	}

	if (typeof seconds !== 'number') {
		return seconds;
	}

	if (seconds < 0) {
		return 'DNF';
	}

	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);
	const months = Math.floor(days / 30.4167);
	const years = Math.floor(months / 12);

	const modSeconds = seconds % 60;
	let secondsStr = modSeconds.toFixed(dp + 1);
	if (dp === 0) {
		secondsStr = secondsStr.replace(/\..+/, '');
	} else {
		secondsStr = secondsStr.slice(0, -1);
	}

	// We only want to show up to a depth of 3 (y, m, d or d, h, m)
	const parts = [];
	if (years) {
		parts.push(`${years}y`);
	}

	if (months) {
		const num = Math.floor(months % 12);
		parts.push(`${num}m`);
	}

	if (days) {
		const num = Math.floor(days % 30.4167);
		parts.push(`${num}d`);
	}

	const lastPart = [];
	if (hours) {
		const num = Math.floor(hours % 24);
		lastPart.push(num);
	}

	if (minutes || hours) {
		const num = Math.floor(minutes % 60);
		let numStr = String(num);
		if (hours && num < 10) {
			numStr = `0${numStr}`;
		}
		lastPart.push(numStr);

		if (modSeconds < 10) {
			secondsStr = `0${secondsStr}`;
		}
	}

	if (lastPart.length > 1) {
		secondsStr = secondsStr.split('.')[0];
	}
	lastPart.push(secondsStr);

	for (let i = 3; i < parts.length + lastPart.length; i++) {
		if (lastPart.length) {
			lastPart.pop();
		} else if (parts.length) {
			parts.pop();
		}
	}

	if (lastPart.length) {
		parts.push(`${lastPart.join(':')}`);
	}

	return parts.join(' ');
}

interface TimeStringOutput {
	timeSeconds: number;
	timeMilli: number;
	plusTwo: boolean;
	dnf: boolean;
}

export function convertTimeStringToSeconds(timeString: string, requirePeriod: boolean = false): TimeStringOutput {
	timeString = timeString.trim().toLowerCase();
	let plusTwo = false;

	if (timeString.includes('dnf')) {
		return {
			timeSeconds: -1,
			timeMilli: -1,
			plusTwo,
			dnf: true,
		};
	}

	if (timeString.indexOf('.') > -1) {
		requirePeriod = true;
	}

	if (timeString.includes('+')) {
		plusTwo = true;
		timeString = timeString.replace(/\+2|\+/g, '');
	}

	let regex = /^(\d{1,2}:)?(\d{1,2}:)?\d{1,2}(\.\d{0,4})?$/;
	if (!requirePeriod) {
		regex = /^(\d{1,2}:)?(\d{1,2}:)?\d{1,4}(\.\d{0,4})?$/;
	}

	const test = regex.test(timeString);
	if (!test) {
		throw new Error();
	}

	let timeSeconds = 0;
	const parts = timeString.split(':');

	for (let i = parts.length - 1; i >= 0; i -= 1) {
		const val = parseFloat(parts[i]);
		switch (i) {
			case parts.length - 1: {
				// Seconds
				if (
					(val >= 60 && (requirePeriod || parts.length > 1)) ||
					(val >= 6000 && !requirePeriod && parts.length === 1)
				) {
					throw new Error();
				}
				timeSeconds += val;
				break;
			}
			case parts.length - 2: {
				// Minutes
				if (val >= 60) {
					throw new Error();
				}
				timeSeconds += val * 60;
				break;
			}
			case parts.length - 3: {
				// Hours
				timeSeconds += val * 60 * 60;
				break;
			}
		}
	}

	if (!requirePeriod && parts.length === 1) {
		timeSeconds /= 100;
	}

	const timeMilli = Math.floor(timeSeconds * 1000);
	timeSeconds = timeMilli / 1000;

	return {
		plusTwo,
		dnf: false,
		timeSeconds,
		timeMilli,
	};
}
