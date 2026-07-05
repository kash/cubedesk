import {checkForAverageWorstUpdate} from '@/db/solves/stats/solves/cache/average-cache';
import {checkForSingleWorstUpdate} from '@/db/solves/stats/solves/cache/single-cache';
import {Solve} from '@/types/solve';

export function checkForWorst(solve: Solve, isNew: boolean) {
	checkForSingleWorstUpdate(solve);
	checkForAverageWorstUpdate(solve, isNew);
}
