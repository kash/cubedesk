import {useTranslation} from 'react-i18next';
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
	const {t} = useTranslation();
	const {filterOptions} = useStatsContext();
	return (
		<div className="stats-dashboard">
			<div className="stats-main-grid">
				<StatSection
					title={t('common.personalOverview')}
					description={t('stats.bestSolveAndTotals')}
					className="stats-overview"
				>
					<CubeStatsFeatured />
				</StatSection>
				<StatSection
					title={t('stats.averages')}
					description={t('stats.recentSolves')}
					className="stats-panel"
				>
					<CubeStatAverages />
				</StatSection>
			</div>
			<StatSection
				title={t('solves.solveTimes')}
				description={t('stats.completedSolveHistory')}
				className="stats-panel"
			>
				<StatModule className="stats-chart">
					<TimeChart filterOptions={filterOptions} />
				</StatModule>
			</StatSection>
			<StatSection title={t('common.theDetails')} description={t('stats.overview.subtitle')}>
				<SubStats />
			</StatSection>
			<StatSection
				title={t('stats.solvingActivity')}
				description={t('stats.dailySolves60Days')}
				className="stats-panel"
			>
				<StatModule className="stats-chart">
					<ActivityChart filterOptions={filterOptions} days={60} />
				</StatModule>
			</StatSection>
		</div>
	);
}
