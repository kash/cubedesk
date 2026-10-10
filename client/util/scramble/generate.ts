import {CUBE_SCRAMBLES} from '@/util/cubes/cube_scrambles';
import {Scrambow} from 'scrambow';

// Kept free of app state so it can also run inside the scramble worker
export function generateScramble(scrambleTypeId: string, seed?: number): string {
	const scrambleType = CUBE_SCRAMBLES[scrambleTypeId];

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
