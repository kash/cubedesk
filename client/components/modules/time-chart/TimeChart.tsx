import dummyData from '@/components/modules/time-chart/dummy-data';
import {FilterSolvesOptions} from '@/db/solves/query';
import {getChartData} from '@/db/solves/stats/chart';
import {useSolveDb} from '@/util/hooks/useSolveDb';
import {useTheme} from '@/util/hooks/useTheme';
import {getTimeString} from '@/util/time';
import {AxisLeft} from '@visx/axis';
import * as allCurves from '@visx/curve';
import {Group} from '@visx/group';
import {ParentSize} from '@visx/responsive';
import {scaleLinear, scaleTime} from '@visx/scale';
import {Area} from '@visx/shape';
import {max, min} from 'd3-array';
import hexToRgba from 'hex-to-rgba';
import jsonStr from 'json-stable-stringify';
import React, {useMemo} from 'react';

interface ChartDatum {
	index: number;
	value: number;
}

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

	let data: ChartDatum[] = [...memoData];
	if (dummy || !data || !data.length) {
		data = dummyData;
		chartColor = moduleColor.themeHexOpposite;
		chartColorOpacity = 0.1;
	}

	// data accessors
	const getX = (d: ChartDatum) => d.index;
	const getY = (d: ChartDatum) => d.value;

	const minY = min(data, getY) || 0;
	const maxY = max(data, getY) || 0;
	const maxX = max(data, getX) || 0;

	// scales
	const xScale = scaleTime({
		domain: [0, maxX],
	});

	const yScale = scaleLinear<number>({
		domain: [Math.max(minY * 0.95, 0), maxY * 1.05],
	});

	return (
		<div className="box-border h-full max-h-full w-full pl-5 transition-all duration-100 ease-in-out">
			<ParentSize>
				{(parent) => {
					// update scale output ranges
					xScale.range([0, parent.width]);
					yScale.range([parent.height, 0]);

					return (
						<svg className="overflow-visible" width={parent.width} height={parent.height}>
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
								tickFormat={(d) => {
									const value = Number(d);
									return getTimeString(value, value > 10 ? 0 : undefined);
								}}
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
