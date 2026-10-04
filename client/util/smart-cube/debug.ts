// TEMPORARY: diagnostics for MoYu connection issues, remove once resolved
export function debugLog(...args: unknown[]) {
	console.info('[Smart cube debug]', ...args);
}

export function toHex(data: Uint8Array | DataView) {
	const bytes =
		data instanceof DataView
			? new Uint8Array(data.buffer, data.byteOffset, data.byteLength)
			: data;
	return Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join(' ');
}
