import Cube from 'cubejs';
import {chunk} from 'lodash';
import algorithms from '../../../client/util/algorithms/algorithms';
import {reverseTurns} from './turns';

const OLL_KEY = '3_oll';
const PLL_KEY = '3_pll';

const olls = [];
const plls = [];

function addCaseToOutput(mainKey: string, keys, output) {
	for (const key of keys) {
		const cubejs = new Cube();
		const llCase = algorithms[mainKey][key];

		const solution = llCase.noRotationSolution || llCase.defaultSolution;
		reverseTurns(cubejs, solution);

		const options = [];

		for (let i = 0; i < 4; i += 1) {
			cubejs.move('U');
			options.push(cubejs.asString());
		}

		output.push({
			options,
			key,
			name: llCase.name,
		});
	}
}

export function initLLStates() {
	const ollKeys = Object.keys(algorithms[OLL_KEY]);
	const pllKeys = Object.keys(algorithms[PLL_KEY]);

	addCaseToOutput(OLL_KEY, ollKeys, olls);
	addCaseToOutput(PLL_KEY, pllKeys, plls);
}

function getMatchingState(state: string, cases) {
	for (const c of cases) {
		for (const option of c.options) {
			const pattern = new RegExp(option.replace(/[^U]/g, '.'));
			if (pattern.test(state)) {
				return c;
			}
		}
	}

	return null;
}

function getMatchingPllState(state: string, cases) {
	for (const c of cases) {
		for (const option of c.options) {
			const pllState = option.replace(/[U|D]/g, 'X');

			const source = getTopRowLayerFromState(pllState);
			const target = getTopRowLayerFromState(state);

			if (llSimilar(source, target)) {
				return c;
			}
		}
	}

	return null;
}

function llSimilar(ll1: string, ll2: string) {
	const sides = ['U', 'R', 'F', 'D', 'L', 'B'];

	let encodedL2 = ll2;
	for (let i = 0; i < sides.length; i += 1) {
		const side = sides[i];

		encodedL2 = encodedL2.replace(new RegExp(side, 'g'), String(i));
	}

	for (let i = 0; i < ll1.length; i += 1) {
		const source = ll1[i];

		const target = encodedL2[i];
		encodedL2 = encodedL2.replace(new RegExp(target, 'g'), source);
	}

	return ll1 === encodedL2;
}

function getTopRowLayerFromState(state: string) {
	const parts = chunk(state.replace(/X/g, ''), 9);

	const output = parts.map((part) => {
		return part.slice(0, 3).join('');
	});

	return output.join('');
}

export function getMatchingOLLState(state: string) {
	return getMatchingState(state, olls);
}

export function getMatchingPLLState(state: string) {
	return getMatchingPllState(state, plls);
}
