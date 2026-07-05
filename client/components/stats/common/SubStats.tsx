import React, {useContext, useMemo} from 'react';
import {
	WarningOctagon,
	Warning,
	NumberSquareOne,
	Calculator,
	Hash,
	CaretDoubleRight,
	CaretDoubleUp,
} from 'phosphor-react';
import {StatsContext} from '@/components/stats/Stats';
import NumberBlock from '@/components/stats/common/NumberBlock';
import {useSolveDb} from '@/util/hooks/useSolveDb';
import {getSolveStreak} from '@/db/solves/stats/streak';
import {getSubStats} from '@/db/solves/stats/sub-stats';
import dayjs from 'dayjs';

const SUB_STATS_COLOR = '#6D7D90';

export default function SubStats() {
	const context = useContext(StatsContext);
	const {filterOptions} = context;

	const solveUpdate = useSolveDb();

	const streak = useMemo(() => {
		return getSolveStreak(filterOptions);
	}, [filterOptions, solveUpdate]);

	const subStats = useMemo(() => {
		return getSubStats(filterOptions);
	}, [filterOptions, solveUpdate]);

	let firstSolveTime = '-';
	if (subStats.firstSolve) {
		firstSolveTime = dayjs(subStats.firstSolve?.started_at).format('MM/DD/YY');
	}

	let avgSolvesPerSession = '-';
	if (streak.avgSolvesPerSession >= 0) {
		avgSolvesPerSession = String(streak.avgSolvesPerSession);
	}

	return (
		<div className="grid h-full grid-cols-2 grid-rows-3 gap-2.5">
			<NumberBlock
				small
				center
				icon={<CaretDoubleRight weight="bold" />}
				title="Solve Streak"
				value={`${streak.currentStreak} day${streak.currentStreak === 1 ? '' : 's'}`}
				color={SUB_STATS_COLOR}
			/>
			<NumberBlock
				small
				center
				icon={<CaretDoubleUp weight="bold" />}
				title="Highest Streak"
				value={`${streak.highestStreak} day${streak.highestStreak === 1 ? '' : 's'}`}
				color={SUB_STATS_COLOR}
			/>
			<NumberBlock
				small
				center
				icon={<WarningOctagon weight="bold" />}
				title="DNFs"
				value={`${subStats.dnfCount} (${subStats.dnfPercent}%)`}
				color={SUB_STATS_COLOR}
			/>
			<NumberBlock
				small
				center
				icon={<Warning weight="bold" />}
				title="+2s"
				value={`${subStats.plusTwoCount} (${subStats.plusTwoPercent}%)`}
				color={SUB_STATS_COLOR}
			/>
			<NumberBlock
				small
				center
				icon={<Calculator weight="bold" />}
				title="Avg # Solves / Session"
				value={avgSolvesPerSession}
				color={SUB_STATS_COLOR}
			/>
			<NumberBlock
				small
				center
				icon={<NumberSquareOne weight="bold" />}
				title="First Solve"
				value={firstSolveTime}
				color={SUB_STATS_COLOR}
			/>
		</div>
	);
}
