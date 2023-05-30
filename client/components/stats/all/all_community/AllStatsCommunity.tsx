import React, {useContext} from 'react';
import {StatsContext} from '../../Stats';
import {CaretDoubleUp, Hash, Eye} from '@phosphor-icons/react';
import StatsGrid from '../../common/stats_grid/StatsGrid';
import MatchStats from '../../common/match_stats/MatchStats';
import NumberBlock from '../../common/number_block/NumberBlock';

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
					proOnly
					icon={<Hash weight="bold" />}
					title="Solves"
					color="#5A81B5"
					value={solvesInMatches.toLocaleString()}
				/>
				<NumberBlock
					proOnly
					icon={<CaretDoubleUp weight="bold" />}
					title="Best win streak"
					color="#5A81B5"
					value={maxWinStreak}
				/>
				<NumberBlock
					proOnly
					colSpan={1}
					rowSpan={1}
					icon={<Eye />}
					title="Solve Views"
					value={stats.solve_views}
					color="#667289"
				/>
				<NumberBlock
					proOnly
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
