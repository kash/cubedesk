import HorizontalNav, {HorizontalNavTab} from '@/components/common/HorizontalNav';
import PageTitle from '@/components/common/PageTitle';
import AllStats from '@/components/stats/all/AllStats';
import CubeStats from '@/components/stats/cube-stats/CubeStats';
import {fetchAllCubeTypesSolved, FilterSolvesOptions} from '@/db/solves/query';
import {Stats as StatsSchema} from '@/types/stats';
import {CubeType} from '@/util/cubes/cube_types';
import {getCubeTypeInfoById} from '@/util/cubes/util';
import {useMe} from '@/util/hooks/useMe';
import {useSolveDb} from '@/util/hooks/useSolveDb';
import {trpc} from '@/util/trpc';
import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';

const CUBE_TYPE_QUERY_PARAM = 'cubeType';
const ALL_TAB_ID = 'all';

export interface IStatsContext {
	all: boolean;
	// Undefined on the "all" tab, where no specific cube type is selected
	cubeType?: CubeType;
	stats: StatsSchema;
	filterOptions: FilterSolvesOptions;
}

const StatsContext = createContext<IStatsContext | null>(null);

export function useStatsContext(): IStatsContext {
	const ctx = useContext(StatsContext);
	if (!ctx) {
		throw new Error('useStatsContext must be used within StatsContext.Provider');
	}
	return ctx;
}

export default function Stats() {
	const me = useMe();

	const [stats, setStats] = useState<StatsSchema | null>(null);

	useEffect(() => {
		if (!me) {
			return;
		}

		trpc.stats.overview.query().then(setStats);
	}, [!me]);

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

	const cubeTypeTabs = cubeTypes.reduce<HorizontalNavTab[]>((acc, ct) => {
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
		stats: stats || ({} as StatsSchema),
	};

	return (
		<StatsContext.Provider value={context}>
			<div>
				<PageTitle pageName="Stats">
					<HorizontalNav tabs={tabs} tabId={tabId} />
				</PageTitle>
				{body}
			</div>
		</StatsContext.Provider>
	);
}
