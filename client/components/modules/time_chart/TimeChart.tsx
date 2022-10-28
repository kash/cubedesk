import React, {useMemo} from 'react';
import {max, min} from 'd3-array';
import * as allCurves from '@visx/curve';
import {Group} from '@visx/group';
import hexToRgba from 'hex-to-rgba';
import {ParentSize} from '@visx/responsive';
import {AxisLeft} from '@visx/axis';
import {Area} from '@visx/shape';
import {scaleLinear, scaleTime} from '@visx/scale';
import './TimeChart.scss';
import {getTimeString} from '../../../util/time';
import dummyData from './dummy_data';
import {getChartData} from '../../../db/solves/stats/chart';
import {FilterSolvesOptions} from '../../../db/solves/query';
import jsonStr from 'json-stable-stringify';
import {useSolveDb} from '../../../util/hooks/useSolveDb';
import block from '../../../styles/bem';
import {useTheme} from '../../../util/hooks/useTheme';

const b = block('time-chart');

interface Props {
	dummy?: boolean;
	filterOptions: FilterSolvesOptions;
}

export default function TimeChart(props: Props) {
	const {filterOptions, dummy} = props;
	const filterStr = jsonStr(filterOptions);

	const primaryColor = useTheme('primary_color');
	const moduleColor = useTheme('module_color');
	let chartColor = primaryColor.hex;
	let chartColorOpacity = 1;

	useSolveDb();

	const memoData = useMemo(() => {
		return getChartData(filterOptions);
	}, [filterStr, filterOptions]);

	let data = [...memoData];
	if (dummy || !data || !data.length) {
		data = dummyData;
		chartColor = moduleColor.themeHexOpposite;
		chartColorOpacity = 0.1;
	}

	// data accessors
	const getX = (d) => d.index;
	const getY = (d) => d.value;

	const minY = min(data, getY);
	const maxY = max(data, getY);

	// scales
	const xScale = scaleTime({
		domain: [0, max(data, getX)],
	});

	const yScale = scaleLinear<number>({
		domain: [Math.max(minY * 0.95, 0), maxY * 1.05],
	});

	return (
		<div className={b()}>
			<ParentSize>
				{(parent) => {
					// update scale output ranges
					xScale.range([0, parent.width]);
					yScale.range([parent.height, 0]);

					return (
						<svg width={parent.width} height={parent.height}>
							<filter id="dropshadow" height="150%">
								<feGaussianBlur in="SourceAlpha" stdDeviation="5" result="blur" />
								<feOffset in="blur" dx="0" dy="0" result="offsetBlur" />
								<feFlood
									floodColor={hexToRgba(chartColor, Math.max(chartColorOpacity * 0.6, 0.6))}
									floodOpacity="1"
									result="offsetColor"
								/>
								<feComposite in="offsetColor" in2="offsetBlur" operator="in" result="offsetBlur" />
								<feMerge>
									<feMergeNode />
									<feMergeNode in="SourceGraphic" />
								</feMerge>
							</filter>

							<AxisLeft
								scale={yScale}
								tickLabelProps={() => ({
									fill: 'rgb(var(--text-color))',
									opacity: 0.6,
									fontSize: 11,
									fontWeight: 400,
									textAnchor: 'middle',
								})}
								tickFormat={(d) => getTimeString(d as number, d > 10 ? 0 : undefined)}
								left={-17}
								top={10}
								strokeWidth={0}
								tickLength={0}
								stroke={hexToRgba(chartColor, chartColorOpacity)}
							/>

							<Group>
								<Area
									height={parent.height}
									curve={allCurves.curveNatural}
									data={data}
									x={(d) => xScale(getX(d)) || (0 as any)}
									y={(d) => yScale(getY(d)) || (0 as any)}
									strokeLinecap="round"
									style={{filter: 'url(#dropshadow)'}}
									stroke={hexToRgba(chartColor, chartColorOpacity)}
									strokeWidth={5}
								/>
							</Group>
						</svg>
					);
				}}
			</ParentSize>
		</div>
	);
}
