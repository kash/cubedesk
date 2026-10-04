import HorizontalNav from '@/components/common/HorizontalNav';
import {STEP_NAME_MAP} from '@/components/solve-info/util/consts';
import {getSolveStepsWithoutParents} from '@/components/solve-info/util/solution';
import {Solve} from '@/types/solve';
import {cn} from '@/util/cn';
import {getTimeString} from '@/util/time';
import {Group} from '@visx/group';
import {Pie} from '@visx/shape';
import React, {useState} from 'react';

type ChartType = 'time' | 'tps' | 'turns';

const CHART_TYPES: {id: ChartType; value: string}[] = [
	{
		id: 'time',
		value: 'Time',
	},
	{
		id: 'tps',
		value: 'TPS',
	},
	{
		id: 'turns',
		value: 'Turns',
	},
];

const STEP_COLORS = ['#f4d35e', '#457b9d', '#f4a261', '#66bb6a', '#6d597a', '#2ec4b6', '#8093f1'];

const SIZE = 168;
const THICKNESS = 26;

interface Props {
	solve: Solve;
}

interface StepPieDatum {
	name: string;
	frequency: number;
	label: string;
	color: string;
}

function toSinglePrecision(num: number) {
	return Math.floor(num * 10) / 10;
}

function formatValue(chartType: ChartType, value: number) {
	if (chartType === 'time') return `${getTimeString(value, 1)}s`;
	return String(value);
}

export default function StepPie(props: Props) {
	const {solve} = props;

	const [chartType, setChartType] = useState<ChartType>('time');
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	const steps = getSolveStepsWithoutParents(solve);

	const data: StepPieDatum[] = steps.map((step, index) => {
		let frequency = 0;
		switch (chartType) {
			case 'time': {
				frequency = step.total_time || 0;
				break;
			}
			case 'tps': {
				frequency = toSinglePrecision(step.tps || 0);
				break;
			}
			case 'turns': {
				frequency = step.turn_count || 0;
				break;
			}
		}

		return {
			name: STEP_NAME_MAP[step.step_name || ''] || '',
			frequency,
			label: formatValue(chartType, frequency),
			color: STEP_COLORS[index % STEP_COLORS.length],
		};
	});

	const totalTime = steps.reduce((sum, step) => sum + (step.total_time || 0), 0);
	const totalTurns = steps.reduce((sum, step) => sum + (step.turn_count || 0), 0);

	// The center shows the hovered step, or the whole solve otherwise. TPS isn't additive, so its total is the overall rate
	const hovered = hoveredIndex === null ? null : data[hoveredIndex];
	let centerValue: string;
	let centerCaption: string;
	if (hovered) {
		centerValue = hovered.label;
		centerCaption = hovered.name;
	} else if (chartType === 'time') {
		centerValue = formatValue('time', totalTime);
		centerCaption = 'Total';
	} else if (chartType === 'tps') {
		centerValue = formatValue('tps', totalTime ? toSinglePrecision(totalTurns / totalTime) : 0);
		centerCaption = 'Overall';
	} else {
		centerValue = formatValue('turns', totalTurns);
		centerCaption = 'Total';
	}

	const radius = SIZE / 2;

	return (
		<div className="flex flex-col gap-5">
			<div className="flex flex-row flex-wrap items-center justify-between gap-3">
				<h3 className="text-text m-0 text-[1.1rem] font-semibold">Steps</h3>
				<HorizontalNav
					onChange={(id) => setChartType(id as ChartType)}
					tabs={CHART_TYPES}
					tabId={chartType}
				/>
			</div>

			<div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-10">
				<div className="relative shrink-0" style={{width: SIZE, height: SIZE}}>
					<svg width={SIZE} height={SIZE}>
						<Group top={radius} left={radius}>
							<Pie
								data={data}
								cornerRadius={4}
								padAngle={0.03}
								pieValue={(d) => d.frequency}
								pieSort={null}
								outerRadius={radius}
								innerRadius={radius - THICKNESS}
							>
								{(pie) =>
									pie.arcs.map((arc, index) => (
										<path
											key={`arc-${arc.data.name}-${index}`}
											d={pie.path(arc) || undefined}
											fill={arc.data.color}
											className={cn('transition-opacity duration-150', {
												'opacity-30':
													hoveredIndex !== null && hoveredIndex !== index,
											})}
											onMouseEnter={() => setHoveredIndex(index)}
											onMouseLeave={() => setHoveredIndex(null)}
										/>
									))
								}
							</Pie>
						</Group>
					</svg>
					<div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
						<span className="text-text text-xl font-bold tabular-nums">
							{centerValue}
						</span>
						<span className="text-text/60 text-xs">{centerCaption}</span>
					</div>
				</div>

				<ul className="m-0 flex w-full list-none flex-col gap-0.5 p-0 sm:w-auto sm:min-w-48">
					{data.map((datum, index) => (
						<li
							key={`${datum.name}-${index}`}
							className={cn(
								'flex flex-row items-center gap-2.5 rounded-md px-2 py-1 text-sm transition-opacity duration-150',
								{
									'opacity-40': hoveredIndex !== null && hoveredIndex !== index,
								},
							)}
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
						>
							<span
								className="size-2.5 shrink-0 rounded-full"
								style={{backgroundColor: datum.color}}
							/>
							<span className="text-text/80 flex-1">{datum.name}</span>
							<span className="text-text font-medium tabular-nums">
								{datum.label}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
