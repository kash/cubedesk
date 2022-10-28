import React from 'react';
import './CubeStatAverages.scss';
import block from '../../../../styles/bem';
import AvgRow from '../../common/avg_row/AvgRow';
import StatModule from '../../common/stat_module/StatModule';

const b = block('cube-stat-avg');

export default function CubeStatAverages() {
	return (
		<StatModule className={b()}>
			<AvgRow count={50} />
			<AvgRow count={100} />
			<AvgRow count={500} />
			<AvgRow count={1000} />
			<AvgRow count={2000} />
		</StatModule>
	);
}
