import React, {useContext} from 'react';
import StatSection from '@/components/stats/common/StatSection';
import StatModule from '@/components/stats/common/StatModule';
import SubStats from '@/components/stats/common/SubStats';
import SolvesPerDay from '@/components/modules/solves-per-day/SolvesPerDay';
import AllStatsFeatured from '@/components/stats/all/AllStatsFeatured';
import AllStatsCommunity from '@/components/stats/all/AllStatsCommunity';
import CubeDistro from '@/components/modules/cube-distro/CubeDistro';
import {StatsContext} from '@/components/stats/Stats';

export default function AllStats() {
	const {filterOptions} = useContext(StatsContext);

	return (
		<div className="grid w-full auto-rows-[350px] grid-cols-[repeat(auto-fill,minmax(500px,1fr))] gap-[30px]">
			<StatSection title="Overview">
				<AllStatsFeatured />
			</StatSection>
			<StatSection rowSpan={2} title="Community">
				<AllStatsCommunity />
			</StatSection>
			<StatSection title="Event Distribution">
				<StatModule>
					<CubeDistro />
				</StatModule>
			</StatSection>
			<StatSection title="Consistency">
				<StatModule>
					<SolvesPerDay filterOptions={filterOptions} days={30} />
				</StatModule>
			</StatSection>
			<StatSection title="More Stats">
				<SubStats />
			</StatSection>
		</div>
	);
}
