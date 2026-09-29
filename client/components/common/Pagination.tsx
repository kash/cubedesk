import HorizontalNav from '@/components/common/HorizontalNav';
import PaginatedList, {listQueryKey} from '@/components/common/PaginatedList';
import {InputGroup, InputGroupAddon, InputGroupInput} from '@/components/ui/input-group';
import {useQueries} from '@tanstack/react-query';
import {MagnifyingGlass} from 'phosphor-react';
import React, {ReactNode, useEffect, useRef, useState} from 'react';
import {useLocation} from 'react-router-dom';
import type {ListLabels} from '@/components/common/PaginatedList';

export type {PaginationOutput, PaginationArgsInput} from '@/types/pagination';
import {PaginationArgsInput, PaginationOutput} from '@/types/pagination';

export interface PaginationTab {
	id: string;
	value: string;
	emptyText: string;
	link?: string;
	fetchData: (args: PaginationArgsInput) => Promise<PaginationOutput<any>>;
}

interface Props {
	itemRow: (data: any, tab: PaginationTab) => ReactNode;
	tabs: PaginationTab[];
	searchable?: boolean;
	searchQuery?: string;
	prefetchData?: (page: number, tab?: PaginationTab) => void;
	labels: ListLabels;
	searchLabel?: string;
}

export default function Pagination<T>(props: Props) {
	const location = useLocation();
	const currentTab = props.tabs.find((tab) => tab.link === location.pathname) ?? props.tabs[0];
	return <PaginationContent<T> key={currentTab.id} {...props} currentTab={currentTab} />;
}

function PaginationContent<T>({
	tabs,
	itemRow,
	searchable,
	prefetchData,
	searchQuery: parentSearchQuery,
	currentTab,
	labels,
	searchLabel,
}: Props & {currentTab: PaginationTab}) {
	const location = useLocation();
	const [searchQuery, setSearchQuery] = useState('');
	const finalQuery = parentSearchQuery ?? searchQuery;
	const idForTab = (tab: PaginationTab) => tab.link ?? `${location.pathname}:${tab.id}`;
	// Cache the first page of each tab for counts and quick tab changes. Paging only
	// fetches the selected list, instead of fetching every tab again.
	const totals = useQueries({
		queries: tabs.map((tab) => ({
			queryKey: listQueryKey(idForTab(tab), finalQuery, 10, 0),
			queryFn: () => tab.fetchData({page: 0, pageSize: 10, searchQuery: finalQuery}),
			staleTime: 30_000,
			retry: 1,
			refetchOnWindowFocus: false,
		})),
	});
	const prefetch = useRef(prefetchData);
	prefetch.current = prefetchData;
	useEffect(() => {
		// Ancillary trainer likes/downloads are independent of the paginated list.
		void Promise.resolve()
			.then(() => prefetch.current?.(0, currentTab))
			.catch(() => {});
	}, [currentTab]);

	return (
		<div className="mx-auto mt-8 mb-12 w-full max-w-[700px]">
			{searchable && (
				<div className="mb-3">
					<InputGroup>
						<InputGroupAddon>
							<MagnifyingGlass weight="bold" />
						</InputGroupAddon>
						<InputGroupInput
							placeholder={searchLabel}
							value={searchQuery}
							onChange={(event) => setSearchQuery(event.target.value)}
							aria-label={searchLabel}
						/>
					</InputGroup>
				</div>
			)}
			{tabs.length > 1 && (
				<div className="mb-4 flex justify-center">
					<HorizontalNav
						tabId={currentTab.id}
						tabs={tabs.map((tab, index) => ({
							...tab,
							value: totals[index].data
								? `${tab.value} (${totals[index].data.total})`
								: tab.value,
						}))}
					/>
				</div>
			)}
			<PaginatedList<T>
				listId={idForTab(currentTab)}
				pageSize={10}
				searchQuery={finalQuery}
				fetchData={currentTab.fetchData}
				getItemRow={(item) => itemRow(item, currentTab)}
				labels={{...labels, empty: currentTab.emptyText}}
			/>
		</div>
	);
}
