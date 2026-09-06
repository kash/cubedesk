import {fetchAllCubeTypesSolved} from '@/db/solves/query';
import {getCubeTypeInfoById} from '@/util/cubes/util';
import {useSolveDb} from '@/util/hooks/useSolveDb';
import {Cube} from 'phosphor-react';
import React, {useMemo} from 'react';
import {PieChart} from 'react-minimal-pie-chart';

const COLORS = ['#83cbb6', '#91b6e8', '#e8ba7c', '#c3a0de', '#e69baf', '#87cbd5', '#acbc8d'];

export default function EventDistribution() {
	const solveUpdate = useSolveDb();
	// The local solve database is mutable; its revision invalidates this query.
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const cubeTypes = useMemo(() => fetchAllCubeTypesSolved(), [solveUpdate]);
	const data = cubeTypes.map((ct, index) => ({
		title: getCubeTypeInfoById(ct.cube_type)?.name ?? ct.cube_type,
		value: ct.count,
		color: COLORS[index % COLORS.length],
	}));
	const total = data.reduce((sum, event) => sum + event.value, 0);

	if (!total) {
		return (
			<div className="stats-distribution-empty">
				<Cube size={32} />
				<p>Complete a solve to see your event breakdown.</p>
			</div>
		);
	}

	return (
		<div className="stats-distribution">
			<div
				className="stats-ring"
				role="img"
				aria-label={`Completed solves across ${data.length} events. Breakdown listed below.`}
			>
				<PieChart
					data={data}
					lineWidth={14}
					startAngle={-90}
					paddingAngle={data.length > 1 ? 3 : 0}
				/>
				<div className="stats-ring-label">
					<strong>{data.length}</strong>
					<span>{data.length === 1 ? 'event' : 'events'}</span>
				</div>
			</div>
			<ul className="stats-legend">
				{data.map((event) => (
					<li key={event.title}>
						<span>
							<i style={{background: event.color}} />
							{event.title}
						</span>
						<strong>
							{event.value.toLocaleString()}{' '}
							<small>{Math.round((event.value / total) * 100)}%</small>
						</strong>
					</li>
				))}
			</ul>
		</div>
	);
}
