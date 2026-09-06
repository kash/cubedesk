import {FilterSolvesOptions} from '@/db/solves/query';
import {getTotalSolveCount, getTotalSolveTime} from '@/db/solves/stats/count';
import {getCurrentAverage} from '@/db/solves/stats/solves/average/average';
import {getSinglePB} from '@/db/solves/stats/solves/single/single-pb';
import {useSolveDb} from '@/util/hooks/useSolveDb';
import {getTimeString} from '@/util/time';
import {ChartLine, Hash, Timer, Trophy} from 'phosphor-react';
import React from 'react';

export default function SessionSummary({filterOptions}: {filterOptions: FilterSolvesOptions}) {
	useSolveDb();
	const duration = getTotalSolveTime(filterOptions);
	const metrics = [
		{
			label: 'Total solves',
			value: getTotalSolveCount(filterOptions).toLocaleString(),
			icon: <Hash />,
		},
		{
			label: 'Best single',
			value: getTimeString(getSinglePB(filterOptions)?.time),
			icon: <Trophy />,
		},
		{
			label: 'Current ao5',
			value: getTimeString(getCurrentAverage(filterOptions, 5)?.time),
			icon: <ChartLine />,
		},
		{
			label: 'Time spent',
			value: duration < 60 ? `${getTimeString(duration)}s` : getTimeString(duration),
			icon: <Timer />,
		},
	];
	return (
		<dl className="sessions-summary">
			{metrics.map((metric) => (
				<div key={metric.label}>
					<dt>
						<span aria-hidden="true">{metric.icon}</span>
						{metric.label}
					</dt>
					<dd>{metric.value}</dd>
				</div>
			))}
		</dl>
	);
}
