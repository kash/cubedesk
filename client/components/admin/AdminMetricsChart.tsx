import type {AdminMetricsDay} from '@/types/admin-metrics';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {ParentSize} from '@visx/responsive';
import {scaleLinear, scalePoint} from '@visx/scale';
import {LinePath} from '@visx/shape';
import React, {useId, useState} from 'react';

export type MetricsSeries = {
	key: Exclude<keyof AdminMetricsDay, 'date'>;
	label: string;
	color: string;
};
interface Props {
	title: string;
	days: AdminMetricsDay[];
	series: MetricsSeries[];
}

function Plot({title, days, series, width, height}: Props & {width: number; height: number}) {
	const [selectedDate, setSelectedDate] = useState<string | null>(null);
	const tooltipId = useId();
	const activeIndex = days.findIndex((day) => day.date === selectedDate);
	const active = days[activeIndex];
	const peak = Math.max(1, ...days.flatMap((day) => series.map((item) => day[item.key])));
	const left = Math.max(42, peak.toLocaleString().length * 7 + 12);
	const right = Math.max(left, width - 18);
	const bottom = height - 28;
	const x = scalePoint({domain: days.map((day) => day.date), range: [left, right]});
	const y = scaleLinear({domain: [0, peak], range: [bottom, 10], nice: true});
	const activeX = active ? x(active.date)! : left;
	const tooltipWidth = Math.min(228, Math.max(0, width - 16));
	const tooltipLeft = Math.max(
		8,
		Math.min(
			width - tooltipWidth - 8,
			activeX + tooltipWidth + 24 < width ? activeX + 16 : activeX - tooltipWidth - 16,
		),
	);

	function selectPointer(event: React.PointerEvent<SVGSVGElement>) {
		const bounds = event.currentTarget.getBoundingClientRect();
		const pointerX = ((event.clientX - bounds.left) * width) / Math.max(1, bounds.width);
		const pointerY = ((event.clientY - bounds.top) * height) / Math.max(1, bounds.height);
		if (pointerX < left || pointerX > right || pointerY < 10 || pointerY > bottom) {
			setSelectedDate(null);
			return;
		}
		const index = Math.round(
			((pointerX - left) / Math.max(1, right - left)) * (days.length - 1),
		);
		setSelectedDate(days[index]?.date ?? null);
	}

	return (
		<div className="relative" style={{width, height}}>
			<svg
				width={width}
				height={height}
				role="img"
				tabIndex={0}
				className="focus-visible:outline-text/40 rounded outline-offset-4 focus-visible:outline-2"
				aria-label={`${title}, last ${days.length} UTC days. Use left and right arrow keys to explore daily values.`}
				aria-describedby={active ? tooltipId : undefined}
				onPointerMove={selectPointer}
				onPointerDown={selectPointer}
				onPointerLeave={() => setSelectedDate(null)}
				onPointerCancel={() => setSelectedDate(null)}
				onFocus={(event) => {
					if (event.currentTarget.matches(':focus-visible'))
						setSelectedDate(days.at(-1)?.date ?? null);
				}}
				onBlur={() => setSelectedDate(null)}
				onKeyDown={(event) => {
					let next: number;
					switch (event.key) {
						case 'ArrowLeft':
							next = Math.max(0, (activeIndex < 0 ? days.length : activeIndex) - 1);
							break;
						case 'ArrowRight':
							next = Math.min(days.length - 1, activeIndex + 1);
							break;
						case 'Home':
							next = 0;
							break;
						case 'End':
							next = days.length - 1;
							break;
						case 'Escape':
							setSelectedDate(null);
							return;
						default:
							return;
					}
					event.preventDefault();
					setSelectedDate(days[next]?.date ?? null);
				}}
			>
				{y
					.ticks(3)
					.filter(Number.isInteger)
					.map((tick) => (
						<g key={tick}>
							<line
								x1={left}
								x2={right}
								y1={y(tick)}
								y2={y(tick)}
								stroke="currentColor"
								opacity={0.1}
							/>
							<text
								x={left - 8}
								y={y(tick) + 4}
								textAnchor="end"
								fill="currentColor"
								opacity={0.5}
								fontSize={10}
							>
								{tick.toLocaleString()}
							</text>
						</g>
					))}
				{series.map((item) => (
					<LinePath
						key={item.key}
						data={days}
						x={(day) => x(day.date) ?? left}
						y={(day) => y(day[item.key])}
						stroke={item.color}
						strokeWidth={2}
					/>
				))}
				{active && (
					<g pointerEvents="none">
						<line
							x1={activeX}
							x2={activeX}
							y1={10}
							y2={bottom}
							stroke="currentColor"
							opacity={0.3}
							strokeDasharray="3 4"
						/>
						{series.map((item) => (
							<circle
								key={item.key}
								cx={activeX}
								cy={y(active[item.key])}
								r={4}
								fill={item.color}
								stroke="rgb(var(--module-color))"
								strokeWidth={2}
							/>
						))}
					</g>
				)}
				{days
					.filter(
						(_, i) =>
							i === 0 || i === days.length - 1 || i === Math.floor(days.length / 2),
					)
					.map((day) => (
						<text
							key={day.date}
							x={x(day.date)}
							y={height - 6}
							textAnchor="middle"
							fill="currentColor"
							opacity={0.5}
							fontSize={10}
						>
							{day.date.slice(5)}
						</text>
					))}
				<rect
					x={left}
					y={10}
					width={Math.max(0, right - left)}
					height={Math.max(0, bottom - 10)}
					fill="transparent"
					className="cursor-crosshair"
				/>
			</svg>
			{active && (
				<div
					id={tooltipId}
					role="tooltip"
					className="bg-module border-text/15 pointer-events-none absolute top-3 z-10 rounded-lg border p-3 shadow-xl"
					style={{left: tooltipLeft, width: tooltipWidth}}
				>
					<div className="mb-2 flex items-center justify-between gap-2 text-xs">
						<span className="font-semibold">
							{new Date(`${active.date}T00:00:00Z`).toLocaleDateString(undefined, {
								month: 'short',
								day: 'numeric',
								year: 'numeric',
								timeZone: 'UTC',
							})}
						</span>
						<span className="text-text/50">UTC</span>
					</div>
					<div className="space-y-1.5">
						{series.map((item) => (
							<div
								key={item.key}
								className="flex items-center justify-between gap-3 text-xs"
							>
								<span className="text-text/70 flex min-w-0 items-center gap-2">
									<span
										className="size-2 shrink-0 rounded-full"
										style={{backgroundColor: item.color}}
									/>
									{item.label}
								</span>
								<span className="font-semibold tabular-nums">
									{active[item.key].toLocaleString()}
								</span>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
}

export default function AdminMetricsChart(props: Props) {
	return (
		<Card className="min-w-0 gap-4">
			<CardHeader>
				<CardTitle>{props.title}</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="text-text/65 mb-4 flex flex-wrap gap-x-4 gap-y-2 text-xs">
					{props.series.map((item) => (
						<span key={item.key} className="flex items-center gap-2">
							<span
								className="h-0.5 w-3 rounded-full"
								style={{backgroundColor: item.color}}
							/>
							{item.label}
						</span>
					))}
				</div>
				<div className="h-52 w-full">
					<ParentSize>
						{({width, height}) => <Plot {...props} width={width} height={height} />}
					</ParentSize>
				</div>
			</CardContent>
		</Card>
	);
}
