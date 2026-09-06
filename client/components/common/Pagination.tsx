import Empty from '@/components/common/Empty';
import HorizontalNav from '@/components/common/HorizontalNav';
import Loading from '@/components/common/Loading';
import PageControls from '@/components/common/PageControls';
import {InputGroup, InputGroupAddon, InputGroupInput} from '@/components/ui/input-group';
import {numberWithCommas} from '@/util/strings/util';
import {MagnifyingGlass} from 'phosphor-react';
import React, {ReactNode, useEffect, useState} from 'react';
import {useRouteMatch} from 'react-router-dom';

const DEFAULT_PAGE_SIZE = 10;

export interface PaginationOutput<T> {
	hasMore: boolean;
	total: number;
	items: T[];
}

export interface PaginationArgsInput {
	page: number;
	pageSize: number;
	searchQuery: string;
}

export interface PaginationTab {
	id: string;
	value: string;
	plural: string;
	link?: string;
	fetchData: (args: PaginationArgsInput) => Promise<PaginationOutput<any>>;
}

interface Props {
	itemRow: (data: any, tab: PaginationTab) => ReactNode;
	tabs: PaginationTab[];
	searchable?: boolean;
	searchQuery?: string;
	prefetchData?: (page: number, tab?: PaginationTab) => void;
}

export default function Pagination<T>(props: Props) {
	const routeMatch = useRouteMatch();
	const currentTab = props.tabs.find((tab) => tab.link === routeMatch.path) ?? props.tabs[0];

	return <PaginationContent<T> key={currentTab.id} {...props} currentTab={currentTab} />;
}

function PaginationContent<T>(props: Props & {currentTab: PaginationTab}) {
	const {tabs, itemRow, searchable, prefetchData, searchQuery: parentSearchQuery} = props;
	const {currentTab} = props;

	const [hasMore, setHasMore] = useState(false);
	const [totalResults, setTotalResults] = useState(0);
	const [tabTotals, setTabTotals] = useState<Record<string, number> | null>(null);
	const [page, setPage] = useState(0);
	const [items, setItems] = useState<T[] | null>(null);
	const [searchQuery, setSearchQuery] = useState('');

	const finalSearchQuery = parentSearchQuery ? parentSearchQuery : searchQuery;

	// Sets page count and updates current page data when tab or page changes
	useEffect(() => {
		let active = true;
		setItems(null);
		const requests = tabs.map((tab) => {
			const request = fetchData(tab);
			if (tab.id === currentTab.id) {
				request.then((output) => {
					if (!active) return;
					setTotalResults(output.total);
					setHasMore(output.hasMore);
					setItems(output.items);
				});
			}
			return request;
		});

		Promise.all(requests).then((data) => {
			if (!active) return;
			const counts: Record<string, number> = {};

			for (let i = 0; i < tabs.length; i += 1) {
				const tab = tabs[i];
				counts[tab.id] = data[i].total;
			}

			setTabTotals(counts);
		});
		return () => {
			active = false;
		};
	}, [currentTab.id, page, searchQuery, parentSearchQuery]);

	function fetchData(tab?: PaginationTab): Promise<PaginationOutput<T>> {
		const resolvedTab = tab ?? currentTab;
		if (!resolvedTab) {
			return Promise.resolve({hasMore: false, total: 0, items: []});
		}

		if (prefetchData) {
			prefetchData(page, resolvedTab);
		}

		return resolvedTab.fetchData({
			page,
			pageSize: DEFAULT_PAGE_SIZE,
			searchQuery: finalSearchQuery,
		});
	}

	function prevPage() {
		if (!page) {
			return;
		}

		setPage(page - 1);
	}

	function nextPage() {
		if (!hasMore) {
			return;
		}

		setPage(page + 1);
	}

	let resultCount: ReactNode = (
		<span className="text-text mb-2 table w-full text-left text-sm opacity-60">
			{numberWithCommas(totalResults)} result{totalResults === 1 ? '' : 's'}
			{finalSearchQuery ? ` for "${finalSearchQuery}"` : ''}
		</span>
	);

	let body;

	if (items && items.length && currentTab) {
		body = items.map((item) => itemRow(item, currentTab));
	} else if (items && !items.length && currentTab) {
		body = <Empty text={`Could not find any ${currentTab.plural}`} />;
	} else {
		body = <Loading />;
		resultCount = null;
	}

	let nav: ReactNode = null;
	if (tabs.length > 1) {
		nav = (
			<HorizontalNav
				tabId={currentTab.id}
				tabs={tabs.map((tab) => {
					if (!tabTotals) {
						return tab;
					}

					// Add the total to the tab
					return {
						...tab,
						value: `${tab.value} (${tabTotals[tab.id]})`,
					};
				})}
			/>
		);
	}

	let inputQuery: ReactNode = null;
	if (searchable && currentTab) {
		inputQuery = (
			<div className="mt-10 mb-2.5 w-full">
				<InputGroup className="mb-2">
					<InputGroupAddon>
						<MagnifyingGlass weight="bold" />
					</InputGroupAddon>
					<InputGroupInput
						placeholder={`Search for ${currentTab.plural}`}
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						aria-label={`Search for ${currentTab.plural}`}
					/>
				</InputGroup>
			</div>
		);
	}

	return (
		<div className="mx-auto mt-8 mb-12 w-full max-w-[700px]">
			{inputQuery}

			<div className="flex flex-col items-center">
				{nav}
				{resultCount}
				<div className="flex w-full flex-col">{body}</div>
				<PageControls
					className="mt-6"
					page={page}
					totalPages={Math.ceil(totalResults / DEFAULT_PAGE_SIZE)}
					hasMore={hasMore}
					onPrevious={prevPage}
					onNext={nextPage}
				/>
			</div>
		</div>
	);
}
