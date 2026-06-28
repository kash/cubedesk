import React, {useMemo} from 'react';
import {fetchAllCubeTypesSolved} from '@/db/solves/query';
import {PieChart} from 'react-minimal-pie-chart';
import {getCubeTypeInfoById} from '@/util/cubes/util';

const colors = ['#abd1c6', '#f9bc60', '#e16162', '#ff8ba7', '#90b4ce', '#b8c1ec', '#8c7851'];

export default function CubeDistro() {
	const cubeTypes = useMemo(() => {
		return fetchAllCubeTypesSolved();
	}, []);

	const data = cubeTypes.map((ct, i) => ({
		title: getCubeTypeInfoById(ct.cube_type).name,
		value: ct.count,
		color: colors[i],
	}));

	return (
		<div className="h-full">
			<PieChart
				data={data}
				label={({dataEntry}) => dataEntry.title}
				labelStyle={(index) => ({
					fill: 'rgb(var(--text-color))',
					fontSize: '6px',
					fontFamily: 'sans-serif',
				})}
				lineWidth={20}
				radius={42}
				rounded
				labelPosition={112}
			/>
		</div>
	);
}
