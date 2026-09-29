import {useTranslation} from 'react-i18next';
import MatchStats from '@/components/stats/common/MatchStats';
import NumberBlock from '@/components/stats/common/NumberBlock';
import StatsGrid from '@/components/stats/common/StatsGrid';
import {useStatsContext} from '@/components/stats/Stats';
import {CaretDoubleUp, Eye, Hash} from 'phosphor-react';
import React from 'react';

export default function AllStatsCommunity() {
	const {t, i18n} = useTranslation();
	const context = useStatsContext();
	const {stats} = context;

	const solvesInMatches = stats.match_solve_count || 0;
	const maxWinStreak = stats.match_max_win_streak || 0;

	return (
		<div className="stats-community">
			<MatchStats />
			<StatsGrid rows={2} columns={2}>
				<NumberBlock
					icon={<Hash weight="bold" />}
					title={t('stats.matchSolves')}
					color="#5A81B5"
					value={solvesInMatches.toLocaleString(i18n.language)}
				/>
				<NumberBlock
					icon={<CaretDoubleUp weight="bold" />}
					title={t('stats.bestWinStreak')}
					color="#5A81B5"
					value={maxWinStreak}
				/>
				<NumberBlock
					colSpan={1}
					rowSpan={1}
					icon={<Eye />}
					title={t('stats.solveViews')}
					value={stats.solve_views ?? 0}
					color="#667289"
				/>
				<NumberBlock
					colSpan={1}
					rowSpan={1}
					icon={<Eye />}
					title={t('stats.profileViews')}
					value={stats.profile_views ?? 0}
					color="#667289"
				/>
			</StatsGrid>
		</div>
	);
}
