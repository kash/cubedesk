import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {fetchSolves, FilterSolvesOptions} from '@/db/solves/query';
import {getChartData} from '@/db/solves/stats/chart';
import {useSolveDb} from '@/util/hooks/useSolveDb';
import {getTimeString} from '@/util/time';
import {ParentSize} from '@visx/responsive';
import React, {useMemo, useState} from 'react';

export default function SessionAnalytics({filterOptions}: {filterOptions: FilterSolvesOptions}) {
	const revision = useSolveDb();
	const [bucketCount, setBucketCount] = useState(6);
	const {progress, buckets} = useMemo(() => {
		const progress = getChartData(filterOptions);
		const solves = fetchSolves({...filterOptions, dnf: false, time: {$gt: 0}});
		const times = solves.map((solve) => solve.time);
		const low = times.reduce((min, time) => Math.min(min, time), Infinity);
		const high = times.reduce((max, time) => Math.max(max, time), 0);
		const start = Math.floor(low);
		const end = Math.max(start + 1, Math.ceil(high));
		const interval = (end - start) / bucketCount;
		const buckets = times.length
			? Array.from({length: bucketCount}, (_, index) => ({
					low: start + index * interval,
					high: start + (index + 1) * interval,
					count: 0,
				}))
			: [];
		for (const time of times) {
			buckets[Math.min(bucketCount - 1, Math.floor((time - start) / interval))].count++;
		}
		return {progress, buckets};
		// The mutable solve database's revision invalidates these queries.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filterOptions, bucketCount, revision]);

	return (
		<div className="sessions-charts">
			<section className="sessions-panel" aria-label="Solve times">
				<div className="sessions-panel-heading">
					<h2>Solve times</h2>
					<p>Completed solves, oldest to newest · Grouped for longer sessions</p>
				</div>
				<div className="sessions-chart">
					{!progress.length ? (
						<div className="sessions-chart-empty">
							Complete a solve to see your progress.
						</div>
					) : (
						<ParentSize>
							{({width, height}) => {
								const peak = Math.max(...progress.map((point) => point.value), 1);
								const ceiling = peak * 1.1;
								const left = 48;
								const plotWidth = Math.max(0, width - left - 12);
								const plotHeight = Math.max(0, height - 32);
								const x = (index: number) =>
									left +
									(progress.length === 1
										? plotWidth / 2
										: (index / (progress.length - 1)) * plotWidth);
								const y = (value: number) => 8 + plotHeight * (1 - value / ceiling);
								return (
									<svg
										width={width}
										height={height}
										role="img"
										aria-label="Solve times in chronological order"
									>
										{[0, ceiling / 2, ceiling].map((value) => (
											<g key={value}>
												<line
													x1={left}
													x2={width - 12}
													y1={y(value)}
													y2={y(value)}
													stroke="var(--sessions-border)"
													strokeDasharray="3 5"
												/>
												<text
													x={left - 8}
													y={y(value) + 4}
													textAnchor="end"
												>
													{getTimeString(value, 1)}
												</text>
											</g>
										))}
										<polyline
											points={progress
												.map(
													(point, index) =>
														`${x(index)},${y(point.value)}`,
												)
												.join(' ')}
											fill="none"
											stroke="#83cbb6"
											strokeWidth={2}
											strokeLinejoin="round"
										/>
										{progress.map((point, index) => (
											<circle
												key={index}
												cx={x(index)}
												cy={y(point.value)}
												r={progress.length < 25 ? 3 : 2}
												fill="#83cbb6"
											>
												<title>{getTimeString(point.value)}</title>
											</circle>
										))}
										<text x={left} y={height - 2}>
											Oldest
										</text>
										<text x={width - 12} y={height - 2} textAnchor="end">
											Latest
										</text>
									</svg>
								);
							}}
						</ParentSize>
					)}
				</div>
			</section>
			<section className="sessions-panel" aria-label="Time distribution">
				<div className="sessions-panel-heading sessions-distribution-heading">
					<div>
						<h2>Time distribution</h2>
						<p>Completed solves by time range</p>
					</div>
					<div className="w-28 shrink-0">
						<Select
							value={String(bucketCount)}
							onValueChange={(value) => setBucketCount(Number(value))}
						>
							<SelectTrigger className="w-full" aria-label="Distribution columns">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								{[4, 5, 6, 7, 8, 9, 10].map((count) => (
									<SelectItem key={count} value={String(count)}>
										{count} bins
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
				</div>
				<div className="sessions-chart">
					{!buckets.length ? (
						<div className="sessions-chart-empty">
							Complete a solve to see your time distribution.
						</div>
					) : (
						<ParentSize>
							{({width, height}) => {
								const max = Math.max(1, ...buckets.map((bucket) => bucket.count));
								const left = 30;
								const slot = Math.max(0, width - left - 8) / buckets.length;
								const plotHeight = Math.max(0, height - 50);
								const tickEvery = Math.max(1, Math.ceil(65 / Math.max(1, slot)));
								return (
									<svg
										width={width}
										height={height}
										role="img"
										aria-label="Number of completed solves in each time range"
									>
										<line
											x1={left}
											x2={width}
											y1={plotHeight + 20}
											y2={plotHeight + 20}
											stroke="var(--sessions-border)"
										/>
										{buckets.map((bucket, index) => {
											const barHeight = (bucket.count / max) * plotHeight;
											const middle = left + (index + 0.5) * slot;
											return (
												<g key={index}>
													<rect
														x={left + (index + 0.15) * slot}
														y={plotHeight + 20 - barHeight}
														width={slot * 0.7}
														height={barHeight}
														rx={3}
														fill="#91b6e8"
													>
														<title>
															{getTimeString(bucket.low, 2)}–
															{getTimeString(bucket.high, 2)}:{' '}
															{bucket.count} solves
														</title>
													</rect>
													{bucket.count > 0 && (
														<text
															x={middle}
															y={plotHeight + 12 - barHeight}
															textAnchor="middle"
														>
															{bucket.count.toLocaleString()}
														</text>
													)}
													{index % tickEvery === 0 && (
														<text
															x={middle}
															y={height - 4}
															textAnchor="middle"
														>
															{getTimeString(bucket.low, 1)}–
															{getTimeString(bucket.high, 1)}
														</text>
													)}
												</g>
											);
										})}
									</svg>
								);
							}}
						</ParentSize>
					)}
				</div>
			</section>
		</div>
	);
}
