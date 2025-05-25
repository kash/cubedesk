import React, {useMemo} from 'react';
import {useSolveDb} from '../../../lib/util/hooks/useSolveDb';
import {getSolveCountByDateData} from '../../../lib/db/solves/stats/consistency';
import dummyData from './dummy';
import BarGraph from '../bar_graph/BarGraph';
import jsonStr from 'json-stable-stringify';
import {FilterSolvesOptions} from '../../../lib/db/solves/query';
import {useMe} from '../../../lib/util/hooks/useMe';
import {isNotPro} from '../../../lib/util/pro';

interface Props {
	days: number;
	filterOptions: FilterSolvesOptions;
	dummy?: boolean;
	proOnly?: boolean;
}

export default function SolvesPerDay(props: Props) {
	const {dummy, days, proOnly, filterOptions} = props;

	const me = useMe();
	const solveUpdate = useSolveDb();

	const endDate = new Date();
	const startDate = new Date();
	startDate.setDate(startDate.getDate() - days);

	const memoData = useMemo(() => {
		if (dummy) {
			return dummyData.slice(0, Math.min(dummyData.length, days));
		}

		return getSolveCountByDateData({
			...filterOptions,
			started_at: startDate.getTime(),
			ended_at: endDate.getTime(),
		});
	}, [jsonStr(filterOptions), filterOptions, solveUpdate]);

	if (proOnly && isNotPro(me)) {
		return null;
	}

	return <BarGraph dummy={dummy} data={memoData} />;
}
