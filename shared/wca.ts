// WCA event IDs differ from some CubeDesk practice event IDs (e.g. 333bf vs 333bl).
export const WCA_EVENTS: Record<string, string> = {
	'333': '3×3',
	'222': '2×2',
	'444': '4×4',
	'555': '5×5',
	'666': '6×6',
	'777': '7×7',
	'333bf': '3×3 Blindfolded',
	'333fm': 'Fewest Moves',
	'333oh': '3×3 One-Handed',
	clock: 'Clock',
	minx: 'Megaminx',
	pyram: 'Pyraminx',
	skewb: 'Skewb',
	sq1: 'Square-1',
	'444bf': '4×4 Blindfolded',
	'555bf': '5×5 Blindfolded',
	'333mbf': 'Multi-Blind',
	'333ft': '3×3 With Feet (retired)',
	magic: 'Magic (retired)',
	mmagic: 'Master Magic (retired)',
	'333mbo': 'Multi-Blind (old format)',
};

// Explicit order: JavaScript enumerates integer object keys numerically.
export const WCA_EVENT_ORDER = [
	'333',
	'222',
	'444',
	'555',
	'666',
	'777',
	'333bf',
	'333fm',
	'333oh',
	'clock',
	'minx',
	'pyram',
	'skewb',
	'sq1',
	'444bf',
	'555bf',
	'333mbf',
	'333ft',
	'magic',
	'mmagic',
	'333mbo',
];

function formatSeconds(seconds: number): string {
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	const remaining = String(seconds % 60).padStart(2, '0');
	return hours
		? `${hours}:${String(minutes).padStart(2, '0')}:${remaining}`
		: `${minutes}:${remaining}`;
}

export function formatWcaResult(eventId: string, value: number | null, average = false): string {
	if (value === null || !Number.isSafeInteger(value) || value === 0) return '—';
	if (value === -1) return 'DNF';
	if (value === -2) return 'DNS';
	if (value < 0) return '—';
	if (eventId === '333fm') return average ? (value / 100).toFixed(2) : String(value);
	if (eventId === '333mbf' || eventId === '333mbo') {
		const old = eventId === '333mbo';
		const seconds = old ? value % 100000 : Math.floor(value / 100) % 100000;
		const missed = value % 100;
		const solved = old
			? 99 - (Math.floor(value / 10000000) % 100)
			: 99 - Math.floor(value / 10000000) + missed;
		const attempted = old ? Math.floor(value / 100000) % 100 : solved + missed;
		return `${solved}/${attempted} (${seconds === 99999 ? 'time unknown' : formatSeconds(seconds)})`;
	}
	const seconds = Math.floor(value / 100);
	const fraction = String(value % 100).padStart(2, '0');
	return `${seconds < 60 ? seconds : formatSeconds(seconds)}.${fraction}`;
}
