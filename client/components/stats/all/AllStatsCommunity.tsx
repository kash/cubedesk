import React, {useContext} from 'react';
import {StatsContext} from '@/components/stats/Stats';
import {CaretDoubleUp, Hash, Eye} from 'phosphor-react';
import StatsGrid from '@/components/stats/common/StatsGrid';
import MatchStats from '@/components/stats/common/MatchStats';
import NumberBlock from '@/components/stats/common/NumberBlock';

export default function AllStatsCommunity() {
	const context = useContext(StatsContext);
	const {stats} = context;

	const solvesInMatches = stats.match_solve_count || 0;
	const maxWinStreak = stats.match_max_win_streak || 0;

	return (
		<StatsGrid rows={2} columns={1}>
			<MatchStats />
			<StatsGrid rows={1} columns={2}>
				<NumberBlock
					icon={<Hash weight="bold" />}
					title="Solves"
					color="#5A81B5"
					value={solvesInMatches.toLocaleString()}
				/>
				<NumberBlock
					icon={<CaretDoubleUp weight="bold" />}
					title="Best win streak"
					color="#5A81B5"
					value={maxWinStreak}
				/>
				<NumberBlock
					colSpan={1}
					rowSpan={1}
					icon={<Eye />}
					title="Solve Views"
					value={stats.solve_views}
					color="#667289"
				/>
				<NumberBlock
					colSpan={1}
					rowSpan={1}
					icon={<Eye />}
					title="Profile Views"
					value={stats.profile_views}
					color="#667289"
				/>
			</StatsGrid>
		</StatsGrid>
	);
}
