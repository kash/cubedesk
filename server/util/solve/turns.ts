import {SmartTurn} from '@/util/smart_scramble';
import Cube from 'cubejs';

function getReverseTurns(moves: (SmartTurn | string)[] | string) {
	let turns;
	const output: string[] = [];

	if (typeof moves === 'string') {
		turns = moves.replace(/\(|\)/g, '').split(' ');
	} else {
		turns = [...moves];
	}

	for (let i = turns.length - 1; i > -1; i -= 1) {
		const m = turns[i];
		let turn = `${typeof m === 'string' ? m : m.turn}`;

		if (turn.indexOf("'") > -1) {
			turn = turn.replace("'", '');
		} else if (turn.indexOf('2') < 0) {
			turn += "'";
		}

		output.push(turn);
	}

	return output;
}

export function reverseTurns(cubejs: Cube, moves: (SmartTurn | string)[] | string) {
	for (const turn of getReverseTurns(moves)) {
		cubejs.move(turn);
	}
}

export function getLLState(moves: (SmartTurn | string)[] | string) {
	const cubejs = new Cube();
	reverseTurns(cubejs, moves);

	return cubejs.asString();
}
