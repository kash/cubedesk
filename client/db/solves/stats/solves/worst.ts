import {Solve} from '@/types/solve';
import {checkForAverageWorstUpdate} from './cache/average-cache';
import {checkForSingleWorstUpdate} from './cache/single-cache';

export function checkForWorst(solve: Solve, isNew: boolean) {
	checkForSingleWorstUpdate(solve);
	checkForAverageWorstUpdate(solve, isNew);
}
