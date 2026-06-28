import React from 'react';
import AvgRow from '@/components/stats/common/AvgRow';
import StatModule from '@/components/stats/common/StatModule';

export default function CubeStatAverages() {
	return (
		<StatModule className="grid auto-rows-fr">
			<AvgRow count={50} className="bg-tmo-background/5" />
			<AvgRow count={100} />
			<AvgRow count={500} className="bg-tmo-background/5" />
			<AvgRow count={1000} />
			<AvgRow count={2000} className="bg-tmo-background/5" />
		</StatModule>
	);
}
