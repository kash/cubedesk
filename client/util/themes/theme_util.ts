import {Color} from 'react-color-palette/lib/interfaces/Color.interface';

export function hexToRgb(hex: string) {
	if (hex.includes(',')) {
		return hex; // Already RGB
	}

	if (hex.length === 3) {
		hex += hex;
	}

	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	const r = parseInt(result[1], 16);
	const g = parseInt(result[2], 16);
	const b = parseInt(result[3], 16);

	return `${r}, ${g}, ${b}`;
}

export function getAnyColorStringAsRgb(input: string): Color['rgb'] {
	if (input.includes(',')) {
		const parts = input.split(/,\s*/);
		return {
			r: parseInt(parts[0]),
			g: parseInt(parts[1]),
			b: parseInt(parts[2]),
		};
	} else if (input.includes('#') || input.length === 3 || input.length === 6) {
		return getAnyColorStringAsRgb(hexToRgb(input));
	}

	return null;
}

export function getAnyColorStringAsRawRgbString(input: string | Color): string {
	let rgb: Color['rgb'];
	if (typeof input === 'string') {
		rgb = getAnyColorStringAsRgb(input);
	} else {
		rgb = input.rgb;
	}

	return `${rgb.r}, ${rgb.g}, ${rgb.b}`;
}

export function getAnyColorStringAsRgbString(input: string): string {
	const rgb = getAnyColorStringAsRgb(input);
	return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}
