import {Solve} from '../../../../../server/schemas/Solve.schema';
import {checkForAverageWorstUpdate} from './cache/average-cache';
import {checkForSingleWorstUpdate} from './cache/single-cache';

export function checkForWorst(solve: Solve, isNew: boolean) {
	checkForSingleWorstUpdate(solve);
	checkForAverageWorstUpdate(solve, isNew);
}
