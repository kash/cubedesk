'use client';

import {api} from '@/trpc/react';
import '../../components/stats/Stats.scss';
import React, {createContext, useMemo} from 'react';
import HorizontalNav from '../../components/common/horizontal_nav/HorizontalNav';
import PageTitle from '../../components/common/page-title/PageTitle';
import AllStats from '../../components/stats/all/AllStats';
import CubeStats from '../../components/stats/cube_stats/CubeStats';
import {fetchAllCubeTypesSolved, FilterSolvesOptions} from '../../lib/db/solves/query';
import {CubeType} from '../../lib/util/cubes/cube_types';
import {getCubeTypeInfoById} from '../../lib/util/cubes/util';
import {useMe} from '../../lib/util/hooks/useMe';
import {useSolveDb} from '../../lib/util/hooks/useSolveDb';
import block from '../../styles/bem';

const b = block('stats');

const CUBE_TYPE_QUERY_PARAM = 'cubeType';
const ALL_TAB_ID = 'all';

type StatsData = {
	friend_count: number;
	matches_played: number;
	matches_won: number;
	matches_lost: number;
	matches_tied: number;
	profile_views: number;
	match_solve_count: number;
	match_max_win_streak: number;
	solve_views: number;
};

export interface IStatsContext {
	all: boolean;
	cubeType: CubeType;
	stats: StatsData;
	filterOptions: FilterSolvesOptions;
}

export const StatsContext = createContext<IStatsContext>(null);

export default function StatsPage() {
	const me = useMe();

	const {data: statsData} = api.stats.get.useQuery(undefined, {
		enabled: !!me,
	});

	const urlParams = new URLSearchParams(window.location.search);
	const tabId = urlParams.get(CUBE_TYPE_QUERY_PARAM) || ALL_TAB_ID;

	useSolveDb();

	const cubeTypes = useMemo(() => {
		return fetchAllCubeTypesSolved();
	}, []);

	const all = tabId === ALL_TAB_ID;
	const filterOptions: FilterSolvesOptions = {
		from_timer: true,
	};
	if (!all) {
		filterOptions.cube_type = tabId;
	}

	const cubeTypeTabs = cubeTypes.reduce((acc, ct) => {
		const cubeType = getCubeTypeInfoById(ct.cube_type);
		if (!cubeType) {
			return acc;
		}

		acc.push({
			id: cubeType.id,
			value: cubeType.name,
			link: `/stats?${CUBE_TYPE_QUERY_PARAM}=${cubeType.id}`,
		});

		return acc;
	}, []);

	const tabs = [
		{
			id: ALL_TAB_ID,
			value: 'All',
			link: '/stats',
		},
		...cubeTypeTabs,
	];

	let body = <AllStats />;
	if (tabId && tabId !== ALL_TAB_ID) {
		body = <CubeStats />;
	}

	const context: IStatsContext = {
		all,
		cubeType: getCubeTypeInfoById(tabId),
		filterOptions,
		stats: statsData || ({} as StatsData),
	};

	return (
		<StatsContext.Provider value={context}>
			<div className={b()}>
				<PageTitle pageName="Stats">
					<HorizontalNav tabs={tabs} tabId={tabId} />
				</PageTitle>
				{body}
			</div>
		</StatsContext.Provider>
	);
}
