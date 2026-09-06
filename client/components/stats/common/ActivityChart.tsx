import {FilterSolvesOptions} from '@/db/solves/query';
import {getSolveCountByDateData} from '@/db/solves/stats/consistency';
import {useSolveDb} from '@/util/hooks/useSolveDb';
import {ParentSize} from '@visx/responsive';
import React, {useMemo} from 'react';

interface Props {
	days: number;
	filterOptions: FilterSolvesOptions;
}

export default function ActivityChart({days, filterOptions}: Props) {
	const solveUpdate = useSolveDb();
	const data = useMemo(() => {
		const start = new Date();
		start.setDate(start.getDate() - days + 1);
		return getSolveCountByDateData({
			...filterOptions,
			started_at: start.getTime(),
			ended_at: Date.now(),
		});
		// The local solve database is mutable; its revision invalidates this query.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [days, filterOptions, solveUpdate]);
	const total = data.reduce((sum, day) => sum + day.y, 0);
	const activeDays = data.filter((day) => day.y > 0).length;
	const peak = Math.max(1, ...data.map((day) => day.y));
	const step = Math.max(1, Math.ceil(peak / 3));
	const ceiling = step * 3;

	return (
		<figure className="stats-activity">
			<figcaption>
				<span>
					<strong>{total.toLocaleString()}</strong> solves
				</span>
				<span>
					<strong>{activeDays}</strong> active {activeDays === 1 ? 'day' : 'days'}
				</span>
			</figcaption>
			<div className="stats-activity-plot">
				<ParentSize>
					{({width, height}) => {
						const left = String(ceiling).length * 7 + 12;
						const plotWidth = Math.max(0, width - left - 12);
						const plotHeight = Math.max(0, height - 30);
						const slot = plotWidth / Math.max(1, data.length);
						const tickEvery = Math.max(
							1,
							Math.ceil(data.length / Math.max(2, Math.floor(plotWidth / 65))),
						);
						return (
							<svg
								width={width}
								height={height}
								role="img"
								aria-label={`${total} solves over the last ${days} days. ${activeDays} active days.`}
							>
								{[0, step, step * 2, ceiling].map((value) => {
									const y = 5 + plotHeight * (1 - value / ceiling);
									return (
										<g key={value}>
											<line
												x1={left}
												x2={width}
												y1={y}
												y2={y}
												stroke="var(--stats-border)"
												strokeDasharray={value ? '3 5' : undefined}
											/>
											<text
												x={left - 8}
												y={y + 4}
												textAnchor="end"
												fill="var(--stats-muted)"
												fontSize={10}
											>
												{value.toLocaleString()}
											</text>
										</g>
									);
								})}
								{data.map((day, index) => {
									const barHeight = (day.y / ceiling) * plotHeight;
									const x = left + index * slot;
									return (
										<g key={day.x}>
											<rect
												x={x + slot * 0.15}
												y={5 + plotHeight - barHeight}
												width={Math.max(0, slot * 0.7)}
												height={barHeight}
												rx={Math.min(3, slot * 0.2)}
												fill="#83cbb6"
											>
												<title>
													{day.x}: {day.y.toLocaleString()}{' '}
													{day.y === 1 ? 'solve' : 'solves'}
												</title>
											</rect>
											{index % tickEvery === 0 && (
												<text
													x={x + slot / 2}
													y={height - 3}
													textAnchor="middle"
													fill="var(--stats-muted)"
													fontSize={10}
												>
													{day.x}
												</text>
											)}
										</g>
									);
								})}
								{!total && (
									<text
										x={left + plotWidth / 2}
										y={plotHeight / 2}
										textAnchor="middle"
										fill="var(--stats-muted)"
										fontSize={12}
									>
										No solves in this period
									</text>
								)}
							</svg>
						);
					}}
				</ParentSize>
			</div>
		</figure>
	);
}
