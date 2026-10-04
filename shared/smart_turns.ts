// Smart cube turns are stored as space-separated "<ms since previous turn><move>" tokens, e.g. "0R 182U' 95R2".
// This is ~10x smaller than the original JSON of {turn, completedAt} objects, which is still accepted when decoding.
// Only the gaps between turns are kept: step times, TPS and recognition never needed the absolute times.

export interface RecordedSmartTurn {
	turn: string;
	// Milliseconds, relative to any fixed point. Only differences between turns are meaningful.
	completedAt: number;
}

const TOKEN = /^(\d+)(\D\S*)$/;

export function encodeSmartTurns(turns: {turn: string; completedAt: Date | string | number}[]): string {
	let previous: number | null = null;

	return turns
		.map(({turn, completedAt}) => {
			const time = new Date(completedAt).getTime();
			if (Number.isNaN(time)) throw new Error(`Invalid smart turn time: ${completedAt}`);
			if (!/^\D\S*$/.test(turn)) throw new Error(`Invalid smart turn: ${turn}`);

			// Clamped so clock adjustments mid-solve can't produce a negative gap that wouldn't parse
			const gap: number = previous === null ? 0 : Math.max(0, Math.round(time - previous));
			previous = time;

			return `${gap}${turn}`;
		})
		.join(' ');
}

export function decodeSmartTurns(encoded: string): RecordedSmartTurn[] {
	if (encoded.startsWith('[')) return decodeLegacySmartTurns(encoded);
	if (!encoded) return [];

	let time = 0;
	return encoded.split(' ').map((token) => {
		const match = TOKEN.exec(token);
		if (!match) throw new Error(`Invalid smart turn token: ${token}`);

		time += Number(match[1]);
		return {turn: match[2], completedAt: time};
	});
}

function decodeLegacySmartTurns(json: string): RecordedSmartTurn[] {
	const turns: unknown = JSON.parse(json);
	if (!Array.isArray(turns)) throw new Error('Smart turns must be an array');

	return turns.map((turn: {turn?: unknown; completedAt?: unknown}) => {
		const completedAt = new Date(turn.completedAt as string).getTime();
		if (typeof turn.turn !== 'string' || Number.isNaN(completedAt)) {
			throw new Error('Invalid legacy smart turn');
		}

		return {turn: turn.turn, completedAt};
	});
}
