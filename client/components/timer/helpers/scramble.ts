import {getCubeTypeInfoById, getScrambleTypeById} from '../../../util/cubes/util';
import {Scrambow} from 'scrambow';
import {ITimerContext} from '../Timer';
import {setTimerParam} from './params';

export function getNewScramble(scrambleTypeId: string, seed?: number) {
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
		return getNewScramble(scrambowType);
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
	const {cubeType, scrambleLocked, customScrambleFunc} = context;
	const ct = getCubeTypeInfoById(cubeType);

	let newScramble;
	if (customScrambleFunc) {
		newScramble = customScrambleFunc(context);
	} else if (scrambleLocked) {
		return;
	} else {
		newScramble = getNewScramble(ct.scramble);
	}

	setTimerParam('scramble', newScramble);
}
