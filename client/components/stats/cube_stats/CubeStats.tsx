import React, {useContext} from 'react';
import './CubeStats.scss';
import block from '../../../styles/bem';
import CubeStatsFeatured from './featured/CubeStatsFeatured';
import TimeChart from '../../modules/time_chart/TimeChart';
import StatSection from '../common/stat_section/StatSection';
import StatModule from '../common/stat_module/StatModule';
import CubeStatAverages from './averages/CubeStatAverages';
import {StatsContext} from '../Stats';
import SubStats from '../common/sub_stats/SubStats';
import SolvesPerDay from '../../modules/solves_per_day/SolvesPerDay';
import {useMe} from '../../../util/hooks/useMe';
import {isNotPro} from '../../../util/pro';

const b = block('cube-stats');

export default function CubeStats() {
	const me = useMe();
	const context = useContext(StatsContext);
	const filter = context.filterOptions;

	const oneMonth = new Date();
	oneMonth.setDate(oneMonth.getDate() - 60);

	return (
		<div className={b()}>
			<StatSection title="Overview" className={b('featured')}>
				<CubeStatsFeatured />
			</StatSection>
			<StatSection title="Averages" className={b('averages')}>
				<CubeStatAverages />
			</StatSection>
			<StatSection minWidth="400px" title="Solve Times" className={b('solve-times')}>
				<StatModule>
					<TimeChart filterOptions={filter} />
				</StatModule>
			</StatSection>
			<StatSection proOnly title="More Stats" className={b('sub-stats')}>
				<SubStats proOnly />
			</StatSection>
			<StatSection proOnly colSpan="all" title="Consistency" className={b('consistency')}>
				<StatModule>
					<SolvesPerDay proOnly filterOptions={filter} days={60} dummy={isNotPro(me)} />
				</StatModule>
			</StatSection>
		</div>
	);
}
