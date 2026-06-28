import React, {useContext} from 'react';
import CubeStatsFeatured from '@/components/stats/cube-stats/CubeStatsFeatured';
import TimeChart from '@/components/modules/time-chart/TimeChart';
import StatSection from '@/components/stats/common/StatSection';
import StatModule from '@/components/stats/common/StatModule';
import CubeStatAverages from '@/components/stats/cube-stats/CubeStatAverages';
import {StatsContext} from '@/components/stats/Stats';
import SubStats from '@/components/stats/common/SubStats';
import SolvesPerDay from '@/components/modules/solves-per-day/SolvesPerDay';
import {useMe} from '@/util/hooks/useMe';
import {isNotPro} from '@/util/pro';

export default function CubeStats() {
	const me = useMe();
	const context = useContext(StatsContext);
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
			<StatSection proOnly title="More Stats">
				<SubStats proOnly />
			</StatSection>
			<StatSection proOnly colSpan="all" title="Consistency">
				<StatModule>
					<SolvesPerDay proOnly filterOptions={filter} days={60} dummy={isNotPro(me)} />
				</StatModule>
			</StatSection>
		</div>
	);
}
