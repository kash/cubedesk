import SolvesPerDay from '@/components/modules/solves-per-day/SolvesPerDay';
import TimeChart from '@/components/modules/time-chart/TimeChart';
import StatModule from '@/components/stats/common/StatModule';
import StatSection from '@/components/stats/common/StatSection';
import SubStats from '@/components/stats/common/SubStats';
import CubeStatAverages from '@/components/stats/cube-stats/CubeStatAverages';
import CubeStatsFeatured from '@/components/stats/cube-stats/CubeStatsFeatured';
import {useStatsContext} from '@/components/stats/Stats';
import React from 'react';

export default function CubeStats() {
	const context = useStatsContext();
	const filter = context.filterOptions;

	const oneMonth = new Date();
	oneMonth.setDate(oneMonth.getDate() - 60);

	return (
		<div className="grid w-full auto-rows-[350px] grid-cols-[repeat(auto-fill,minmax(500px,1fr))] gap-[30px]">
			<StatSection title="Overview">
				<CubeStatsFeatured />
			</StatSection>
			<StatSection title="Averages">
				<CubeStatAverages />
			</StatSection>
			<StatSection minWidth="400px" title="Solve Times">
				<StatModule>
					<TimeChart filterOptions={filter} />
				</StatModule>
			</StatSection>
			<StatSection title="More Stats">
				<SubStats />
			</StatSection>
			<StatSection colSpan="all" title="Consistency">
				<StatModule>
					<SolvesPerDay filterOptions={filter} days={60} />
				</StatModule>
			</StatSection>
		</div>
	);
}
