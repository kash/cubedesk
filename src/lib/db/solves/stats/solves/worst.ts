import {Solve} from '@/generated/zod';
import {checkForAverageWorstUpdate} from './cache/average_cache';
import {checkForSingleWorstUpdate} from './cache/single_cache';

export function checkForWorst(solve: Solve, isNew: boolean) {
	checkForSingleWorstUpdate(solve);
	checkForAverageWorstUpdate(solve, isNew);
}
