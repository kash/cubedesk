import HorizontalNav from '@/components/common/HorizontalNav';
import {STEP_NAME_MAP} from '@/components/solve-info/util/consts';
import {getSolveStepsWithoutParents} from '@/components/solve-info/util/solution';
import {Solve} from '@/types/solve';
import {getTimeString} from '@/util/time';
import {Group} from '@visx/group';
import {ParentSize} from '@visx/responsive';
import {scaleOrdinal} from '@visx/scale';
import {Pie} from '@visx/shape';
import React, {useState} from 'react';

const CHART_TYPES = [
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

interface Props {
	solve: Solve;
}

interface StepPieDatum {
	value: string;
	frequency: number;
	label: string | number;
}

export default function StepPie(props: Props) {
	const {solve} = props;

	const [chartType, setChartType] = useState('time');

	function changeChartType(chartType) {
		setChartType(chartType);
	}

	function toSinglePrecision(num: number) {
		return Math.floor(num * 10) / 10;
	}

	const data: StepPieDatum[] = [];
	const steps = getSolveStepsWithoutParents(solve);

	for (const step of steps) {
		let frequency = 0;
		let label: string | number = 0;
		switch (chartType) {
			case 'time': {
				frequency = step.total_time || 0;
				label = getTimeString(frequency, 1);
				break;
			}
			case 'tps': {
				frequency = toSinglePrecision(step.tps || 0);
				label = frequency;
				break;
			}
			case 'turns': {
				frequency = step.turn_count || 0;
				label = frequency;
				break;
			}
		}

		data.push({
			value: STEP_NAME_MAP[step.step_name || ''] || '',
			frequency,
			label,
		});
	}

	const getLetterFrequencyColor = scaleOrdinal({
		domain: ['222', '333', '444', '555', '666', '777', '111'],
		range: ['#f4d35e', '#457b9d', '#f4a261', '#66bb6a', '#6d597a', '#2ec4b6', '#8093f1'],
	});

	return (
		<div className="flex flex-col items-center justify-center pb-10">
			<HorizontalNav onChange={changeChartType} tabs={CHART_TYPES} tabId={chartType} />

			<ParentSize
				className="mt-[50px]"
				parentSizeStyles={{
					minHeight: '200px',
					height: 190,
					width: 190,
				}}
			>
				{(parent) => {
					const radius = Math.min(parent.height, parent.width) / 2;

					return (
						<svg
							width={parent.width}
							height={parent.height}
							style={{overflow: 'visible'}}
						>
							<Group top={parent.height / 2} left={parent.width / 2}>
								<Pie
									data={data}
									cornerRadius={7}
									padAngle={0.05}
									pieValue={(d) => d.frequency}
									outerRadius={radius}
									innerRadius={radius - 40}
								>
									{(pie) =>
										pie.arcs.map((arc, index) => {
											const {value} = arc.data;
											const [centroidX, centroidY] = pie.path.centroid(arc);
											const hasSpaceForLabel =
												arc.endAngle - arc.startAngle >= 0.1;
											const arcPath = pie.path(arc) || undefined;
											const arcFill = getLetterFrequencyColor(value);
											return (
												<g key={`arc-${value}-${index}`}>
													<defs>
														<filter id={`arc-${index}`} x="0" y="0">
															<feGaussianBlur
																in="SourceAlpha"
																stdDeviation="5"
																result="blur"
															/>
															<feOffset
																in="blur"
																dx="0"
																dy="0"
																result="offsetBlur"
															/>
															<feFlood
																floodColor="white"
																floodOpacity="1"
																result="offsetColor"
															/>
															<feComposite
																in="offsetColor"
																in2="offsetBlur"
																operator="in"
																result="offsetBlur"
															/>
															<feMerge>
																<feMergeNode />
																<feMergeNode in="SourceGraphic" />
															</feMerge>
														</filter>
													</defs>
													<path d={arcPath} fill={arcFill} />
													{hasSpaceForLabel && (
														<g>
															<text
																x={centroidX * 1.6}
																y={centroidY * 1.6}
																dy="0"
																fill="rgb(var(--text-color))"
																fontSize={13}
																textAnchor="middle"
																pointerEvents="none"
															>
																{arc.data.value}
															</text>
															<text
																x={centroidX * 1.6}
																y={centroidY * 1.6 + 17}
																dy="0"
																fill="rgb(var(--text-color))"
																fontSize={13}
																textAnchor="middle"
																pointerEvents="none"
															>
																({arc.data.label}
																{chartType === 'time' ? 's' : ''})
															</text>
														</g>
													)}
												</g>
											);
										})
									}
								</Pie>
							</Group>
						</svg>
					);
				}}
			</ParentSize>
		</div>
	);
}
