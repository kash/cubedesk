import AllStatsCommunity from '@/components/stats/all/AllStatsCommunity';
import AllStatsFeatured from '@/components/stats/all/AllStatsFeatured';
import ActivityChart from '@/components/stats/common/ActivityChart';
import EventDistribution from '@/components/stats/common/EventDistribution';
import StatModule from '@/components/stats/common/StatModule';
import StatSection from '@/components/stats/common/StatSection';
import SubStats from '@/components/stats/common/SubStats';
import {useStatsContext} from '@/components/stats/Stats';
import React from 'react';

export default function AllStats() {
	const {filterOptions} = useStatsContext();
	return (
		<div className="stats-dashboard">
			<AllStatsFeatured />
			<div className="stats-main-grid">
				<StatSection
					title="Solving activity"
					description="Your daily solves · Last 30 days"
					className="stats-panel"
				>
					<StatModule className="stats-chart">
						<ActivityChart filterOptions={filterOptions} days={30} />
					</StatModule>
				</StatSection>
				<StatSection
					title="Event breakdown"
					description="Where you spend your solves"
					className="stats-panel"
				>
					<EventDistribution />
				</StatSection>
			</div>
			<StatSection
				title="The details"
				description="Habits, milestones, and everything in between"
			>
				<SubStats />
			</StatSection>
			<StatSection title="Community" description="Your results beyond the timer">
				<AllStatsCommunity />
			</StatSection>
		</div>
	);
}
