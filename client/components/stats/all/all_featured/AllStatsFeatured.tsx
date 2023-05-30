import React, {useContext, useMemo} from 'react';
import {ArrowFatLinesUp, Hash, Timer} from '@phosphor-icons/react';
import {StatsContext} from '../../Stats';
import {useSolveDb} from '../../../../util/hooks/useSolveDb';
import {fetchAllCubeTypesSolved} from '../../../../db/solves/query';
import {getCubeTypeInfoById} from '../../../../util/cubes/util';
import {getTotalSolveCount, getTotalSolveTime} from '../../../../db/solves/stats/count';
import NumberBlock from '../../common/number_block/NumberBlock';
import {getTimeString} from '../../../../util/time';
import StatsGrid from '../../common/stats_grid/StatsGrid';

export default function AllStatsFeatured() {
	const context = useContext(StatsContext);

	const solveUpdate = useSolveDb();

	const cubeTypes = useMemo(() => {
		return fetchAllCubeTypesSolved();
	}, [context.filterOptions, solveUpdate]);

	let topCubeType = null;
	if (cubeTypes.length) {
		topCubeType = getCubeTypeInfoById(cubeTypes[0].cube_type);
	}

	const totalSolves = useMemo(() => {
		return getTotalSolveCount(context.filterOptions);
	}, [context.filterOptions, solveUpdate]);

	const timeSpentCubing = useMemo(() => {
		return getTotalSolveTime(context.filterOptions);
	}, [context.filterOptions, solveUpdate]);

	return (
		<StatsGrid rows={2} columns={2}>
			<NumberBlock
				center
				colSpan={1}
				icon={<Timer weight="bold" />}
				title="Time Spent Cubing"
				value={getTimeString(timeSpentCubing)}
				color="#23C586"
			/>
			<NumberBlock
				center
				colSpan={1}
				icon={<Hash weight="bold" />}
				title="Total Solves"
				value={totalSolves}
				color="#54ACE4"
			/>
			<NumberBlock
				center
				colSpan={1}
				icon={<Hash weight="bold" />}
				title="Number of Events"
				value={cubeTypes.length}
				color="#6D7D90"
			/>
			<NumberBlock
				center
				colSpan={1}
				icon={<ArrowFatLinesUp weight="bold" />}
				title="Top Event"
				value={topCubeType?.name || '-'}
				color="#6D7D90"
			/>
		</StatsGrid>
	);
}
