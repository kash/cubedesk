import {useTranslation} from 'react-i18next';
import NumberBlock from '@/components/stats/common/NumberBlock';
import {useStatsContext} from '@/components/stats/Stats';
import {getSolveStreak} from '@/db/solves/stats/streak';
import {getSubStats} from '@/db/solves/stats/sub-stats';
import {useSolveDb} from '@/util/hooks/useSolveDb';
import dayjs from 'dayjs';
import {
	Calculator,
	CaretDoubleRight,
	CaretDoubleUp,
	NumberSquareOne,
	Warning,
	WarningOctagon,
} from 'phosphor-react';
import React, {useMemo} from 'react';

const SUB_STATS_COLOR = '#6D7D90';

export default function SubStats() {
	const {t} = useTranslation();
	const context = useStatsContext();
	const {filterOptions} = context;

	const solveUpdate = useSolveDb();

	const streak = useMemo(() => {
		return getSolveStreak(filterOptions);
		// The local solve database is mutable; its revision invalidates this query.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filterOptions, solveUpdate]);

	const subStats = useMemo(() => {
		return getSubStats(filterOptions);
		// The local solve database is mutable; its revision invalidates this query.
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
		<div className="stats-details">
			<NumberBlock
				small
				center
				icon={<CaretDoubleRight weight="bold" />}
				title={t('stats.solveStreak')}
				value={t('stats.streakDays', {count: streak.currentStreak})}
				color={SUB_STATS_COLOR}
			/>
			<NumberBlock
				small
				center
				icon={<CaretDoubleUp weight="bold" />}
				title={t('stats.highestStreak')}
				value={t('stats.streakDays', {count: streak.highestStreak})}
				color={SUB_STATS_COLOR}
			/>
			<NumberBlock
				small
				center
				icon={<WarningOctagon weight="bold" />}
				title={t('solves.dnfs')}
				value={`${subStats.dnfCount} (${subStats.dnfPercent}%)`}
				color={SUB_STATS_COLOR}
			/>
			<NumberBlock
				small
				center
				icon={<Warning weight="bold" />}
				title={t('solves.value2s')}
				value={`${subStats.plusTwoCount} (${subStats.plusTwoPercent}%)`}
				color={SUB_STATS_COLOR}
			/>
			<NumberBlock
				small
				center
				icon={<Calculator weight="bold" />}
				title={t('sessions.solvesPerSession')}
				value={avgSolvesPerSession}
				color={SUB_STATS_COLOR}
			/>
			<NumberBlock
				small
				center
				icon={<NumberSquareOne weight="bold" />}
				title={t('stats.firstSolve')}
				value={firstSolveTime}
				color={SUB_STATS_COLOR}
			/>
		</div>
	);
}
