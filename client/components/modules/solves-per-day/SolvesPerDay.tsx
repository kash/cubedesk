import BarGraph from '@/components/modules/bar-graph/BarGraph';
import {FilterSolvesOptions} from '@/db/solves/query';
import {getSolveCountByDateData} from '@/db/solves/stats/consistency';
import {useSolveDb} from '@/util/hooks/useSolveDb';
import jsonStr from 'json-stable-stringify';
import React, {useMemo} from 'react';

interface Props {
	days: number;
	filterOptions: FilterSolvesOptions;
}

export default function SolvesPerDay(props: Props) {
	const {days, filterOptions} = props;

	const solveUpdate = useSolveDb();

	const endDate = new Date();
	const startDate = new Date();
	startDate.setDate(startDate.getDate() - days);

	const memoData = useMemo(() => {
		return getSolveCountByDateData({
			...filterOptions,
			started_at: startDate.getTime(),
			ended_at: endDate.getTime(),
		});
	}, [jsonStr(filterOptions), filterOptions, solveUpdate]);

	return <BarGraph data={memoData} />;
}
