import React, {createContext, useMemo} from 'react';
import './Stats.scss';
import block from '../../styles/bem';
import {useSolveDb} from '../../util/hooks/useSolveDb';
import PageTitle from '../common/page_title/PageTitle';
import HorizontalNav from '../common/horizontal_nav/HorizontalNav';
import CubeStats from './cube_stats/CubeStats';
import {fetchAllCubeTypesSolved, FilterSolvesOptions} from '../../db/solves/query';
import {getCubeTypeInfoById} from '../../util/cubes/util';
import {CubeType} from '../../util/cubes/cube_types';
import AllStats from './all/AllStats';
import {gql, useQuery} from '@apollo/client';
import {Stats as StatsSchema} from '../../@types/generated/graphql';
import {STATS_FRAGMENT} from '../../util/graphql/fragments';
import {useMe} from '../../util/hooks/useMe';

const b = block('stats');

const CUBE_TYPE_QUERY_PARAM = 'cubeType';
const ALL_TAB_ID = 'all';

interface StatsQueryData {
	stats: StatsSchema;
}

export interface IStatsContext {
	all: boolean;
	cubeType: CubeType;
	stats: StatsSchema;
	filterOptions: FilterSolvesOptions;
}

const STATS_QUERY = gql`
	${STATS_FRAGMENT}

	query Query {
		stats {
			...StatsFragment
		}
	}
`;

export const StatsContext = createContext<IStatsContext>(null);

export default function Stats() {
	const me = useMe();

	const {data: statsData} = useQuery<StatsQueryData>(STATS_QUERY, {
		fetchPolicy: 'no-cache',
		skip: !me,
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
		stats: statsData?.stats || {},
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
