import {useTranslation} from 'react-i18next';
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
	const {t} = useTranslation();
	const {filterOptions} = useStatsContext();
	return (
		<div className="stats-dashboard">
			<AllStatsFeatured />
			<div className="stats-main-grid">
				<StatSection
					title={t('stats.solvingActivity')}
					description={t('solves.yourDailySolvesLast30Days')}
					className="stats-panel"
				>
					<StatModule className="stats-chart">
						<ActivityChart filterOptions={filterOptions} days={30} />
					</StatModule>
				</StatSection>
				<StatSection
					title={t('common.eventBreakdown')}
					description={t('solves.whereYouSpendYourSolves')}
					className="stats-panel"
				>
					<EventDistribution />
				</StatSection>
			</div>
			<StatSection title={t('common.theDetails')} description={t('stats.overview.subtitle')}>
				<SubStats />
			</StatSection>
			<StatSection
				title={t('community.community')}
				description={t('timer.yourResultsBeyondTheTimer')}
			>
				<AllStatsCommunity />
			</StatSection>
		</div>
	);
}
