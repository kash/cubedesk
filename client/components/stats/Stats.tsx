import './stats.css';
import HorizontalNav, {HorizontalNavTab} from '@/components/common/HorizontalNav';
import PageTitle from '@/components/common/PageTitle';
import AllStats from '@/components/stats/all/AllStats';
import CubeStats from '@/components/stats/cube-stats/CubeStats';
import {fetchAllEventTypesSolved, FilterSolvesOptions} from '@/db/solves/query';
import {Stats as StatsSchema} from '@/types/stats';
import {EventType} from '@/util/cubes/event_types';
import {getEventTypeInfoById} from '@/util/cubes/util';
import {useMe} from '@/util/hooks/useMe';
import {useSolveDb} from '@/util/hooks/useSolveDb';
import {trpc} from '@/util/trpc';
import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';

const EVENT_TYPE_QUERY_PARAM = 'eventType';
// Links shared before the rename use cubeType
const LEGACY_EVENT_TYPE_QUERY_PARAM = 'cubeType';
const ALL_TAB_ID = 'all';

export interface IStatsContext {
	all: boolean;
	// Undefined on the "all" tab, where no specific event type is selected
	eventType?: EventType;
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
	const loggedIn = !!me;

	const [stats, setStats] = useState<StatsSchema | null>(null);

	useEffect(() => {
		if (!loggedIn) {
			return;
		}

		trpc.stats.overview
			.query()
			.then(setStats)
			.catch((e) => console.error(e));
	}, [loggedIn]);

	const urlParams = new URLSearchParams(window.location.search);
	const tabId = urlParams.get(EVENT_TYPE_QUERY_PARAM) || urlParams.get(LEGACY_EVENT_TYPE_QUERY_PARAM) || ALL_TAB_ID;

	const solveUpdate = useSolveDb();

	const eventTypes = useMemo(() => {
		return fetchAllEventTypesSolved();
		// The local solve database is mutable; its revision invalidates this query.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [solveUpdate]);

	const all = tabId === ALL_TAB_ID;
	const filterOptions: FilterSolvesOptions = {
		from_timer: true,
	};
	if (!all) {
		filterOptions.event_type = tabId;
	}

	const eventTypeTabs = eventTypes.reduce<HorizontalNavTab[]>((acc, ct) => {
		const eventType = getEventTypeInfoById(ct.event_type);
		if (!eventType) {
			return acc;
		}

		acc.push({
			id: eventType.id,
			value: eventType.name,
			link: `/stats?${EVENT_TYPE_QUERY_PARAM}=${eventType.id}`,
		});

		return acc;
	}, []);

	const tabs = [
		{
			id: ALL_TAB_ID,
			value: 'All events',
			link: '/stats',
		},
		...eventTypeTabs,
	];

	let body = <AllStats />;
	if (tabId && tabId !== ALL_TAB_ID) {
		body = <CubeStats />;
	}

	const context: IStatsContext = {
		all,
		eventType: getEventTypeInfoById(tabId),
		filterOptions,
		stats: stats || ({} as StatsSchema),
	};

	return (
		<StatsContext.Provider value={context}>
			<div className="stats-page">
				<PageTitle pageName="Stats">
					<div className="stats-toolbar">
						<HorizontalNav tabs={tabs} tabId={tabId} />
					</div>
				</PageTitle>
				{body}
			</div>
		</StatsContext.Provider>
	);
}
