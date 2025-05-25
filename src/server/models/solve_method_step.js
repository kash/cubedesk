import {getPrisma} from '../database';
import {generateUUID} from '../../shared/code';

export function deleteSolveMethodSteps(solve) {
	return getPrisma().solveMethodStep.deleteMany({
		where: {
			solve_id: solve.id,
		},
	});
}

export function createSolveMethodSteps(solve, steps) {
	const data = [];

	for (const step of Object.keys(steps)) {
		const method = steps[step];

		data.push({
			id: generateUUID(),
			solve_id: solve.id,
			turn_count: method.turnCount || 0,
			turns: method.turnsString,
			total_time: method.time,
			parent_name: method.parentName,
			tps: method.tps,
			skipped: method.skipped,
			recognition_time: method.recognitionTime,
			oll_case_key: method.ollCaseKey || null,
			pll_case_key: method.pllCaseKey || null,
			method_name: 'cfop', // TODO change this
			step_index: method.index,
			step_name: step,
		});
	}

	return getPrisma().solveMethodStep.createMany({
		data,
	});
}
