import React, {useContext, useMemo} from 'react';
import './SubStats.scss';
import block from '../../../../styles/bem';
import {StatsContext} from '../../Stats';
import NumberBlock from '../number_block/NumberBlock';
import {useSolveDb} from '../../../../util/hooks/useSolveDb';
import {getSolveStreak} from '../../../../db/solves/stats/streak';
import {getSubStats} from '../../../../db/solves/stats/sub_stats';
import dayjs from 'dayjs';

const b = block('sub-stats');

const SUB_STATS_COLOR = '#6D7D90';

interface Props {
	proOnly?: boolean;
}

export default function SubStats(props: Props) {
	const {proOnly} = props;

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
		<div className={b()}>
			<NumberBlock
				small
				center
				proOnly={proOnly}
				icon="ph-caret-double-right-bold"
				title="Solve Streak"
				value={`${streak.currentStreak} day${streak.currentStreak === 1 ? '' : 's'}`}
				color={SUB_STATS_COLOR}
			/>
			<NumberBlock
				small
				center
				proOnly={proOnly}
				icon="ph-caret-double-up-bold"
				title="Highest Streak"
				value={`${streak.highestStreak} day${streak.highestStreak === 1 ? '' : 's'}`}
				color={SUB_STATS_COLOR}
			/>
			<NumberBlock
				small
				center
				proOnly={proOnly}
				icon="ph-warning-octagon-bold"
				title="DNFs"
				value={`${subStats.dnfCount} (${subStats.dnfPercent}%)`}
				color={SUB_STATS_COLOR}
			/>
			<NumberBlock
				small
				center
				proOnly={proOnly}
				icon="ph-warning-bold"
				title="+2s"
				value={`${subStats.plusTwoCount} (${subStats.plusTwoPercent}%)`}
				color={SUB_STATS_COLOR}
			/>
			<NumberBlock
				small
				center
				proOnly={proOnly}
				icon="ph-calculator-bold"
				title="Avg # Solves / Session"
				value={avgSolvesPerSession}
				color={SUB_STATS_COLOR}
			/>
			<NumberBlock
				small
				center
				proOnly={proOnly}
				icon="ph-number-square-one-bold"
				title="First Solve"
				value={firstSolveTime}
				color={SUB_STATS_COLOR}
			/>
		</div>
	);
}
