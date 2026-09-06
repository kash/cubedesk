import AvgRow from '@/components/stats/common/AvgRow';
import StatModule from '@/components/stats/common/StatModule';
import React from 'react';

export default function CubeStatAverages() {
	return (
		<StatModule className="stats-averages">
			<AvgRow count={50} />
			<AvgRow count={100} />
			<AvgRow count={500} />
			<AvgRow count={1000} />
			<AvgRow count={2000} />
		</StatModule>
	);
}
