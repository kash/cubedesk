import NumberBlock from '@/components/stats/common/NumberBlock';
import StatsGrid from '@/components/stats/common/StatsGrid';
import {useStatsContext} from '@/components/stats/Stats';
import {fetchAllEventTypesSolved} from '@/db/solves/query';
import {getTotalSolveCount, getTotalSolveTime} from '@/db/solves/stats/count';
import {EventType} from '@/util/cubes/event_types';
import {getEventTypeInfoById} from '@/util/cubes/util';
import {useSolveDb} from '@/util/hooks/useSolveDb';
import {getTimeString} from '@/util/time';
import {ArrowFatLinesUp, Hash, Timer} from 'phosphor-react';
import React, {useMemo} from 'react';

export default function AllStatsFeatured() {
	const context = useStatsContext();

	const solveUpdate = useSolveDb();

	const eventTypes = useMemo(() => {
		return fetchAllEventTypesSolved();
		// The local solve database is mutable; its revision invalidates this query.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [context.filterOptions, solveUpdate]);

	let topEventType: EventType | undefined;
	if (eventTypes.length) {
		topEventType = getEventTypeInfoById(eventTypes[0].event_type);
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
				title="Time spent cubing"
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
				title="Total solves"
				value={totalSolves}
				color="#54ACE4"
			/>
			<NumberBlock
				center
				colSpan={1}
				icon={<Hash weight="bold" />}
				title="Events solved"
				value={eventTypes.length}
				color="#6D7D90"
			/>
			<NumberBlock
				center
				colSpan={1}
				icon={<ArrowFatLinesUp weight="bold" />}
				title="Most solved event"
				value={topEventType?.name || '-'}
				color="#6D7D90"
			/>
		</StatsGrid>
	);
}
