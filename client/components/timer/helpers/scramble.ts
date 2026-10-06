import {setTimerParam} from '@/components/timer/helpers/params';
import {ITimerContext} from '@/components/timer/Timer';
import {getEventTypeInfoById, getScrambleTypeById} from '@/util/cubes/util';
import {Scrambow} from 'scrambow';

// One scramble per scramble type, generated ahead of time. Scrambow's first scramble builds lookup tables that take
// over 100ms (much longer on phones), so the first scramble after a page load is taken from here instead, and the tables
// are built while the browser is idle.
const NEXT_SCRAMBLES_KEY = 'cubedesk.nextScrambles';

export function getNewScramble(scrambleTypeId: string, seed?: number) {
	// Seeded scrambles (matches) must be reproducible
	if (seed) {
		return generateScramble(scrambleTypeId, seed);
	}

	const scramble = takeStoredScramble(scrambleTypeId) ?? generateScramble(scrambleTypeId);
	scheduleNextScramble(scrambleTypeId);
	return scramble;
}

function readStoredScrambles(): Record<string, string> {
	try {
		const stored = JSON.parse(localStorage.getItem(NEXT_SCRAMBLES_KEY) ?? '{}');
		return stored && typeof stored === 'object' ? stored : {};
	} catch {
		return {};
	}
}

function writeStoredScrambles(scrambles: Record<string, string>) {
	try {
		localStorage.setItem(NEXT_SCRAMBLES_KEY, JSON.stringify(scrambles));
	} catch {
		// Storage unavailable: scrambles are generated on demand instead
	}
}

function takeStoredScramble(scrambleTypeId: string): string | null {
	if (typeof window === 'undefined') {
		return null;
	}

	const scrambles = readStoredScrambles();
	const scramble = scrambles[scrambleTypeId];
	if (typeof scramble !== 'string' || !scramble) {
		return null;
	}

	// Each stored scramble is used once
	delete scrambles[scrambleTypeId];
	writeStoredScrambles(scrambles);
	return scramble;
}

function scheduleNextScramble(scrambleTypeId: string) {
	if (typeof window === 'undefined') {
		return;
	}

	const generate = () => {
		const scramble = generateScramble(scrambleTypeId);
		if (!scramble) {
			return;
		}

		writeStoredScrambles({...readStoredScrambles(), [scrambleTypeId]: scramble});
	};

	if (typeof window.requestIdleCallback === 'function') {
		window.requestIdleCallback(generate, {timeout: 5000});
	} else {
		setTimeout(generate, 500);
	}
}

function generateScramble(scrambleTypeId: string, seed?: number): string {
	const scrambleType = getScrambleTypeById(scrambleTypeId);

	if (!scrambleType || scrambleType.id === 'none') {
		return '';
	}

	const scrambleLength = scrambleType.length;

	let scrambowType = scrambleType.id;
	let blindThree = false;
	if (scrambowType === '333bl') {
		scrambowType = '333';
		blindThree = true;
	}

	let scrambo = new Scrambow(scrambowType);

	if (!['pyram', 'clock', 'skewb'].includes(scrambowType)) {
		scrambo = scrambo.setLength(scrambleLength);
	}

	if (seed) {
		scrambo = scrambo.setSeed(seed);
	}

	const scrambleOb = scrambo.get();

	let scramble = scrambleOb[0].scramble_string;
	scramble = scramble.replace(/\s+/g, ' ').trim();
	if (scrambowType === '222' && scramble.split(' ').length <= 5) {
		return generateScramble(scrambowType);
	}

	if (blindThree) {
		scramble += ' ' + getBlindWideMove();
	}

	return scramble;
}

function getBlindWideMove() {
	const moves = ['Uw', 'Lw', 'Rw', 'Fw'];
	const move = moves[Math.floor(Math.random() * moves.length)];
	const randState = Math.random();

	if (randState < 0.33) {
		return `${move}'`;
	} else if (randState < 0.66) {
		return `${move}2`;
	}

	return move;
}

export function resetScramble(context: ITimerContext) {
	const {eventType, scrambleLocked, customScrambleFunc} = context;
	const ct = getEventTypeInfoById(eventType ?? '');

	let newScramble;
	if (customScrambleFunc) {
		newScramble = customScrambleFunc(context);
	} else if (scrambleLocked) {
		return;
	} else {
		newScramble = getNewScramble(ct?.scramble ?? eventType ?? '333');
	}

	setTimerParam('scramble', newScramble);
}
