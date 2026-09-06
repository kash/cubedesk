import Empty from '@/components/common/Empty';
import dummyData from '@/components/modules/time-chart/dummy-data';
import {FilterSolvesOptions} from '@/db/solves/query';
import {getChartData} from '@/db/solves/stats/chart';
import {useSolveDb} from '@/util/hooks/useSolveDb';
import {getTimeString} from '@/util/time';
import {ParentSize} from '@visx/responsive';
import {scaleLinear} from '@visx/scale';
import {LinePath} from '@visx/shape';
import jsonStr from 'json-stable-stringify';
import React, {useMemo} from 'react';

interface Props {
	dummy?: boolean;
	filterOptions: FilterSolvesOptions;
}

export default function TimeChart({filterOptions, dummy}: Props) {
	const filterStr = jsonStr(filterOptions);
	const solveUpdate = useSolveDb();
	const data = useMemo(() => {
		return dummy
			? dummyData.map((point) => ({
					...point,
					timestamp: new Date(2026, 0, point.index + 1).getTime(),
				}))
			: getChartData(filterOptions).filter(
					(point): point is typeof point & {timestamp: number} =>
						point.timestamp !== null && Number.isFinite(point.timestamp),
				);
		// Serialized filters and the mutable database revision invalidate the query.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dummy, filterStr, filterOptions, solveUpdate]);

	if (!data.length) {
		return <Empty text="No dated completed solves yet" centered />;
	}

	const low = Math.min(...data.map((point) => point.value));
	const high = Math.max(...data.map((point) => point.value));
	const padding = Math.max((high - low) * 0.15, high * 0.05, 0.1);
	const muted = 'rgba(var(--text-color), 0.65)';
	const border = 'rgba(var(--text-color), 0.15)';
	const accent = '#83cbb6';
	const firstDate = data[0].timestamp;
	const lastDate = data[data.length - 1].timestamp;
	const sameDay = new Date(firstDate).toDateString() === new Date(lastDate).toDateString();
	const dateFormat = new Intl.DateTimeFormat(
		undefined,
		sameDay
			? {
					hour: 'numeric',
					minute: '2-digit',
					...(lastDate - firstDate < 60000 ? {second: '2-digit' as const} : {}),
				}
			: {
					month: 'short',
					day: 'numeric',
					...(new Date(firstDate).getFullYear() !== new Date(lastDate).getFullYear()
						? {year: 'numeric' as const}
						: {}),
				},
	);

	return (
		<div className="h-full w-full min-w-0" style={{opacity: dummy ? 0.35 : 1}}>
			<ParentSize>
				{({width, height}) => {
					const left = width < 360 ? 48 : 60;
					const right = 18;
					const top = 26;
					const bottom = 38;
					const plotWidth = Math.max(0, width - left - right);
					const plotHeight = Math.max(0, height - top - bottom);
					if (!plotWidth || !plotHeight) return null;

					const x = scaleLinear({
						domain: [firstDate, lastDate === firstDate ? firstDate + 1 : lastDate],
						range: [left, left + plotWidth],
					});
					const y = scaleLinear({
						domain: [Math.max(0, low - padding), high + padding],
						range: [top + plotHeight, top],
						nice: true,
					});
					const ticks = y.ticks(plotHeight < 150 ? 3 : 4);
					const pointX = (index: number) =>
						firstDate === lastDate ? left + plotWidth / 2 : x(data[index].timestamp);
					const dateTickCount = Math.max(
						2,
						Math.min(6, Math.floor(plotWidth / (sameDay ? 120 : 110))),
					);
					const dateTicks =
						firstDate === lastDate
							? [firstDate]
							: Array.from(
									{length: dateTickCount},
									(_, index) =>
										firstDate +
										((lastDate - firstDate) * index) / (dateTickCount - 1),
								);

					return (
						<svg
							width={width}
							height={height}
							role="img"
							aria-label="Solve times by date, with duration on the vertical axis. Longer histories are grouped into mean times."
							style={{
								display: 'block',
								fontFamily: 'inherit',
								fontSize: 11,
								fontVariantNumeric: 'tabular-nums',
							}}
						>
							<text x={left} y={12} fill={muted}>
								Time
							</text>
							{ticks.map((value) => (
								<g key={value}>
									<line
										x1={left}
										x2={left + plotWidth}
										y1={y(value)}
										y2={y(value)}
										stroke={border}
										strokeDasharray="2 4"
									/>
									<text
										x={left - 10}
										y={y(value)}
										dy="0.32em"
										textAnchor="end"
										fill={muted}
									>
										{getTimeString(value, high - low < 1 ? 2 : 1)}
									</text>
								</g>
							))}
							<line
								x1={left}
								x2={left}
								y1={top}
								y2={top + plotHeight}
								stroke={border}
							/>
							<line
								x1={left}
								x2={left + plotWidth}
								y1={top + plotHeight}
								y2={top + plotHeight}
								stroke={border}
							/>
							<LinePath
								data={data}
								x={(_, index) => pointX(index)}
								y={(point) => y(point.value)}
								stroke={accent}
								strokeWidth={2}
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							{data.map((point, index) => (
								<circle
									key={point.index}
									cx={pointX(index)}
									cy={y(point.value)}
									r={data.length === 1 ? 4 : 2.5}
									fill={accent}
								>
									<title>
										{new Date(point.timestamp).toLocaleString()} ·{' '}
										{getTimeString(point.value)}
									</title>
								</circle>
							))}
							{dateTicks.map((timestamp, index) => (
								<text
									key={timestamp}
									x={firstDate === lastDate ? left + plotWidth / 2 : x(timestamp)}
									y={height - 12}
									textAnchor={
										dateTicks.length === 1
											? 'middle'
											: index === 0
												? 'start'
												: index === dateTicks.length - 1
													? 'end'
													: 'middle'
									}
									fill={muted}
								>
									{dateFormat.format(timestamp)}
								</text>
							))}
						</svg>
					);
				}}
			</ParentSize>
		</div>
	);
}
