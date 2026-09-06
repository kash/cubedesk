import TimeChart from '@/components/modules/time-chart/TimeChart';
import ActivityChart from '@/components/stats/common/ActivityChart';
import StatModule from '@/components/stats/common/StatModule';
import StatSection from '@/components/stats/common/StatSection';
import SubStats from '@/components/stats/common/SubStats';
import CubeStatAverages from '@/components/stats/cube-stats/CubeStatAverages';
import CubeStatsFeatured from '@/components/stats/cube-stats/CubeStatsFeatured';
import {useStatsContext} from '@/components/stats/Stats';
import React from 'react';

export default function CubeStats() {
	const {filterOptions} = useStatsContext();
	return (
		<div className="stats-dashboard">
			<div className="stats-main-grid">
				<StatSection
					title="Personal overview"
					description="Your best solve and lifetime totals"
					className="stats-overview"
				>
					<CubeStatsFeatured />
				</StatSection>
				<StatSection
					title="Averages"
					description="Your most recent solves"
					className="stats-panel"
				>
					<CubeStatAverages />
				</StatSection>
			</div>
			<StatSection
				title="Solve times"
				description="Completed solves, oldest to latest · Grouped means for longer histories"
				className="stats-panel"
			>
				<StatModule className="stats-chart">
					<TimeChart filterOptions={filterOptions} />
				</StatModule>
			</StatSection>
			<StatSection
				title="The details"
				description="Habits, milestones, and everything in between"
			>
				<SubStats />
			</StatSection>
			<StatSection
				title="Solving activity"
				description="Your daily solves · Last 60 days"
				className="stats-panel"
			>
				<StatModule className="stats-chart">
					<ActivityChart filterOptions={filterOptions} days={60} />
				</StatModule>
			</StatSection>
		</div>
	);
}
