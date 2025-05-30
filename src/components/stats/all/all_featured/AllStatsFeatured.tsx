import {ArrowFatLinesUp, Hash, Timer} from '@phosphor-icons/react/dist/ssr';
import React, {useContext, useMemo} from 'react';
import {fetchAllCubeTypesSolved} from '../../../../lib/db/solves/query';
import {getTotalSolveCount, getTotalSolveTime} from '../../../../lib/db/solves/stats/count';
import {getCubeTypeInfoById} from '../../../../lib/util/cubes/util';
import {useSolveDb} from '../../../../lib/util/hooks/useSolveDb';
import {getTimeString} from '../../../../lib/util/time';
import NumberBlock from '../../common/number_block/NumberBlock';
import StatsGrid from '../../common/stats_grid/StatsGrid';
import {StatsContext} from '../../Stats';

export default function AllStatsFeatured() {
	const context = useContext(StatsContext);

	const solveUpdate = useSolveDb();

	const cubeTypes = useMemo(() => {
		return fetchAllCubeTypesSolved();
	}, []);

	let topCubeType = null;
	if (cubeTypes.length) {
		topCubeType = getCubeTypeInfoById(cubeTypes[0].cube_type);
	}

	const totalSolves = useMemo(() => {
		return getTotalSolveCount();
	}, []);

	const timeSpentCubing = useMemo(() => {
		return getTotalSolveTime();
	}, []);

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
