import {useTranslation} from 'react-i18next';
import NumberBlock from '@/components/stats/common/NumberBlock';
import StatsGrid from '@/components/stats/common/StatsGrid';
import {useStatsContext} from '@/components/stats/Stats';
import {fetchAllCubeTypesSolved} from '@/db/solves/query';
import {getTotalSolveCount, getTotalSolveTime} from '@/db/solves/stats/count';
import {CubeType} from '@/util/cubes/cube_types';
import {getCubeTypeInfoById} from '@/util/cubes/util';
import {useSolveDb} from '@/util/hooks/useSolveDb';
import {getTimeString} from '@/util/time';
import {ArrowFatLinesUp, Hash, Timer} from 'phosphor-react';
import React, {useMemo} from 'react';

export default function AllStatsFeatured() {
	const {t} = useTranslation();
	const context = useStatsContext();

	const solveUpdate = useSolveDb();

	const cubeTypes = useMemo(() => {
		return fetchAllCubeTypesSolved();
		// The local solve database is mutable; its revision invalidates this query.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [context.filterOptions, solveUpdate]);

	let topCubeType: CubeType | undefined;
	if (cubeTypes.length) {
		topCubeType = getCubeTypeInfoById(cubeTypes[0].cube_type);
	}

	const totalSolves = useMemo(() => {
		return getTotalSolveCount(context.filterOptions);
		// The local solve database is mutable; its revision invalidates this query.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [context.filterOptions, solveUpdate]);

	const timeSpentCubing = useMemo(() => {
		return getTotalSolveTime(context.filterOptions);
		// The local solve database is mutable; its revision invalidates this query.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [context.filterOptions, solveUpdate]);

	return (
		<StatsGrid rows={1} columns={4} className="stats-featured">
			<NumberBlock
				center
				colSpan={1}
				icon={<Timer weight="bold" />}
				title={t('solves.timeSpentCubing')}
				value={
					timeSpentCubing < 60
						? `${getTimeString(timeSpentCubing)}s`
						: getTimeString(timeSpentCubing)
				}
				color="#23C586"
			/>
			<NumberBlock
				center
				colSpan={1}
				icon={<Hash weight="bold" />}
				title={t('solves.totalSolves')}
				value={totalSolves}
				color="#54ACE4"
			/>
			<NumberBlock
				center
				colSpan={1}
				icon={<Hash weight="bold" />}
				title={t('stats.eventsSolved')}
				value={cubeTypes.length}
				color="#6D7D90"
			/>
			<NumberBlock
				center
				colSpan={1}
				icon={<ArrowFatLinesUp weight="bold" />}
				title={t('stats.mostSolvedEvent')}
				value={topCubeType?.name || '-'}
				color="#6D7D90"
			/>
		</StatsGrid>
	);
}
