import {setTimerParam} from '@/components/timer/helpers/params';
import {ITimerContext} from '@/components/timer/Timer';
import {getEventTypeInfoById} from '@/util/cubes/util';
import {generateScramble} from '@/util/scramble/generate';
import {generateScrambleInWorker} from '@/util/scramble/worker';

// One scramble per scramble type, generated ahead of time in a worker. Scrambow's first scramble builds lookup tables
// that take over a second on phones, so scrambles are taken from here instead of being generated during a tap.
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

/**
 * Makes sure a scramble for this type is stored, so the next getNewScramble doesn't have to generate one. Call it when
 * a timer shows a scramble that didn't come from getNewScramble, like the one rendered by the server.
 */
export function prepareScramble(scrambleTypeId: string) {
	if (typeof window === 'undefined' || readStoredScrambles()[scrambleTypeId]) {
		return;
	}

	scheduleNextScramble(scrambleTypeId);
}

function storeScramble(scrambleTypeId: string, scramble: string) {
	if (scramble) {
		writeStoredScrambles({...readStoredScrambles(), [scrambleTypeId]: scramble});
	}
}

function scheduleNextScramble(scrambleTypeId: string) {
	if (typeof window === 'undefined') {
		return;
	}

	void generateScrambleInWorker(scrambleTypeId).then((scramble) => {
		if (scramble !== null) {
			storeScramble(scrambleTypeId, scramble);
			return;
		}

		// No worker, so build it on the main thread while the browser is idle
		const generate = () => storeScramble(scrambleTypeId, generateScramble(scrambleTypeId));
		if (typeof window.requestIdleCallback === 'function') {
			window.requestIdleCallback(generate, {timeout: 5000});
		} else {
			setTimeout(generate, 500);
		}
	});
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
