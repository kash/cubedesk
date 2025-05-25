import {mean} from 'lodash';
import {fetchSolves, FilterSolvesOptions} from '../query';

interface SolveStreak {
	currentStreak: number;
	currentStreakSolves: number;
	currentStartDate: Date; // No end date. End date would be today
	highestStreak: number;
	highestStreakSolves: number;
	highestStartDate: Date;
	highestEndDate: Date;
	avgSolvesPerSession: number;
}

export function getSolveStreak(filter: FilterSolvesOptions): SolveStreak {
	const solves = fetchSolves(
		{
			...filter,
		},
		{
			sortBy: 'started_at',
		}
	);

	let firstSolveTime;
	if (solves.length) {
		firstSolveTime = solves[0].started_at;
	} else {
		firstSolveTime = new Date().getTime();
	}

	const start = new Date();
	start.setHours(0, 0, 0, 0);
	const end = new Date();
	end.setHours(23, 59, 59, 999);

	let solveIndex = solves.length - 1;
	let currentStreak = 0;
	let currentStreakSolves = 0;
	let currentEnded = false;
	let currentStartDate = new Date(start);

	let highestStreak = 0;
	let highestStreakSolves = 0;
	let highestStartDate = new Date(start);
	let highestEndDate = new Date(end);

	let tempStreak = 0;
	let tempStreakSolves = 0;
	let tempStreakStart = new Date(start);
	let tempStreakEnd = new Date(end);

	const solvesPerSession = [];

	while (end.getTime() > firstSolveTime) {
		let dayCount = 0;
		while (solveIndex > -1) {
			const solve = solves[solveIndex];
			if (solve.started_at > start.getTime() && solve.ended_at < end.getTime()) {
				tempStreakSolves++;
				dayCount++;
				solveIndex--;
			} else {
				break;
			}
		}

		if (dayCount > 0) {
			tempStreakStart = new Date(start);
			if (!tempStreakEnd) {
				tempStreakEnd = new Date(end);
			}

			tempStreak++;
		}

		// No solves on this day
		const tempEnd = new Date(end);
		tempEnd.setDate(tempEnd.getDate() - 1);
		const lastLoop = tempEnd.getTime() < firstSolveTime;
		if (!dayCount || lastLoop) {
			if (!currentEnded) {
				currentStreak = tempStreak;
				currentEnded = true;
				currentStreakSolves = tempStreakSolves;
				currentStartDate = new Date(tempStreakStart);
			}

			if (tempStreak > highestStreak) {
				highestStreak = tempStreak;
				highestStreakSolves = tempStreakSolves;
				highestStartDate = new Date(tempStreakStart);
				highestEndDate = new Date(tempStreakEnd);
			}

			if (tempStreak > 0) {
				solvesPerSession.push(tempStreak);
			}

			tempStreak = 0;
			tempStreakSolves = 0;
			tempStreakStart = null;
			tempStreakEnd = null;
		}

		start.setDate(start.getDate() - 1);
		end.setDate(end.getDate() - 1);
	}

	return {
		currentStreak,
		currentStreakSolves,
		currentStartDate,
		highestStreak,
		highestStreakSolves,
		highestStartDate,
		highestEndDate,
		avgSolvesPerSession: Math.floor(mean(solvesPerSession)),
	};
}
