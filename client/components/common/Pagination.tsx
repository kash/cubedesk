import Button from '@/components/common/Button';
import Empty from '@/components/common/Empty';
import HorizontalNav from '@/components/common/HorizontalNav';
import Input from '@/components/common/inputs/input/Input';
import Loading from '@/components/common/Loading';
import {numberWithCommas} from '@/util/strings/util';
import {MagnifyingGlass} from 'phosphor-react';
import React, {ReactNode, useEffect, useMemo, useState} from 'react';
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
	const {tabs, itemRow, searchable, prefetchData, searchQuery: parentSearchQuery} = props;

	const [hasMore, setHasMore] = useState(false);
	const [totalResults, setTotalResults] = useState(0);
	const [tabTotals, setTabTotals] = useState<Record<string, number> | null>(null);
	const [page, setPage] = useState(0);
	const [tabId, setTabId] = useState(tabs[0].id);
	const [items, setItems] = useState<T[] | null>(null);
	const [searchQuery, setSearchQuery] = useState('');

	const finalSearchQuery = parentSearchQuery ? parentSearchQuery : searchQuery;

	const routeMatch = useRouteMatch();

	// Sets page count and updates current page data when tab or page changes
	useEffect(() => {
		setPageCounts();

		for (const tab of tabs) {
			if (tabs.length === 1 || tab.link === routeMatch.path) {
				setTabId(tab.id);
				updatePage(tab);
				break;
			}
		}
	}, [routeMatch.path, page, searchQuery, parentSearchQuery]);

	// Current tab that the user is on
	const currentTab = useMemo(() => {
		for (const tab of tabs) {
			if (tab.id === tabId) {
				return tab;
			}
		}
		return null;
	}, [tabId]);

	function setPageCounts() {
		const promises: Promise<any>[] = [];

		for (const tab of tabs) {
			promises.push(fetchData(tab));
		}

		Promise.all(promises).then((data) => {
			const counts: Record<string, number> = {};

			for (let i = 0; i < tabs.length; i += 1) {
				const tab = tabs[i];
				counts[tab.id] = data[i].total;
			}

			setTabTotals(counts);
		});
	}

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

	function updatePage(tab?: PaginationTab) {
		setItems(null);
		fetchData(tab).then((output) => {
			setTotalResults(output.total);
			setHasMore(output.hasMore);
			setItems(output.items);
		});
	}

	function prevPage() {
		if (!page) {
			return;
		}

		setPage(page - 1);
		updatePage();
	}

	function nextPage() {
		if (!hasMore) {
			return;
		}

		setPage(page + 1);
		updatePage();
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
				tabId={tabId}
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
				onChange={(t) => setTabId(t)}
			/>
		);
	}

	let inputQuery: ReactNode = null;
	if (searchable && currentTab) {
		inputQuery = (
			<div className="mt-10 mb-2.5 w-full">
				<Input
					placeholder={`Search for ${currentTab.plural}`}
					icon={<MagnifyingGlass weight="bold" />}
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
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
				<div className="mx-auto mt-5 flex flex-row items-center">
					<Button
						onClick={prevPage}
						text="Prev"
						disabled={page === 0}
						primary={page > 0}
					/>
					<p className="mx-5 my-0">
						Page {page + 1} of {Math.ceil(totalResults / 25) || 1}
					</p>
					<Button onClick={nextPage} text="Next" disabled={!hasMore} primary={hasMore} />
				</div>
			</div>
		</div>
	);
}
