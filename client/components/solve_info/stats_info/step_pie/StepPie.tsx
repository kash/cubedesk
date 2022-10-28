import React, {useState} from 'react';
import './StepPie.scss';
import {ParentSize} from '@visx/responsive';
import {Group} from '@visx/group';
import {Pie} from '@visx/shape';
import {getSolveStepsWithoutParents} from '../../util/solution';
import {STEP_NAME_MAP} from '../../util/consts';
import {scaleOrdinal} from '@visx/scale';
import HorizontalNav from '../../../common/horizontal_nav/HorizontalNav';
import {getTimeString} from '../../../../util/time';
import block from '../../../../styles/bem';
import {Solve} from '../../../../../server/schemas/Solve.schema';

const b = block('solve-info-step-pie');

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

export default function StepPie(props: Props) {
	const {solve} = props;

	const [chartType, setChartType] = useState('time');

	function changeChartType(chartType) {
		setChartType(chartType);
	}

	function toSinglePrecision(num: number) {
		return Math.floor(num * 10) / 10;
	}

	const data = [];
	const steps = getSolveStepsWithoutParents(solve);

	for (const step of steps) {
		let frequency;
		switch (chartType) {
			case 'time': {
				frequency = getTimeString(step.total_time, 1);
				break;
			}
			case 'tps': {
				frequency = toSinglePrecision(step.tps);
				break;
			}
			case 'turns': {
				frequency = step.turn_count;
				break;
			}
		}

		data.push({
			value: STEP_NAME_MAP[step.step_name],
			frequency,
		});
	}

	const getLetterFrequencyColor = scaleOrdinal({
		domain: ['222', '333', '444', '555', '666', '777', '111'],
		range: ['#f4d35e', '#457b9d', '#f4a261', '#66bb6a', '#6d597a', '#2ec4b6', '#8093f1'],
	});

	return (
		<div className={b()}>
			<HorizontalNav onChange={changeChartType} tabs={CHART_TYPES} tabId={chartType} />

			<ParentSize
				className={b('pie')}
				parentSizeStyles={{
					minHeight: '200px',
					height: 190,
					width: 190,
				}}
			>
				{(parent) => {
					const radius = Math.min(parent.height, parent.width) / 2;

					return (
						<svg width={parent.width} height={parent.height} style={{overflow: 'visible'}}>
							<Group top={0} left={0}>
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
											const hasSpaceForLabel = arc.endAngle - arc.startAngle >= 0.1;
											const arcPath = pie.path(arc);
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
															<feOffset in="blur" dx="0" dy="0" result="offsetBlur" />
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
																({arc.data.frequency}
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
