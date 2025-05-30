import Empty from '@/components/common/empty/Empty';
import './Pagination.scss';
import HorizontalNav from '@/components/common/horizontal_nav/HorizontalNav';
import { Input } from '@/components/ui/input';
import Loading from '@/components/common/loading/Loading';
import {Button} from '@/components/ui/button';
import {numberWithCommas} from '@/lib/util/strings/util';
import block from '@/styles/bem';
import {MagnifyingGlass} from '@phosphor-icons/react/dist/ssr';
import React, {ReactNode, useEffect, useMemo, useState} from 'react';
// TODO: Convert to tRPC pagination
import {usePathname} from 'next/navigation';

const DEFAULT_PAGE_SIZE = 10;

const b = block('common-pagination');

export interface PaginationOutput<T> {
	hasMore: boolean;
	total: number;
	items: T[];
}

export interface PaginationTab {
	id: string;
	value: string;
	dataQueryName: string;
	queryFragment?: string;
	queryFragmentName: string;
	plural: string;
	link?: string;
}

interface Props {
	itemRow: (data: any, tab: PaginationTab) => ReactNode;
	tabs: PaginationTab[];
	searchable?: boolean;
	searchQuery?: string;
	prefetchData?: (page: number, tab?: PaginationTab) => void;
	customFetchData?: (params: {take: number; skip: number}) => Promise<PaginationOutput<any>>;
}

export default function Pagination<T>(props: Props) {
	const {
		tabs,
		itemRow,
		searchable,
		prefetchData,
		customFetchData,
		searchQuery: parentSearchQuery,
	} = props;

	const [hasMore, setHasMore] = useState(false);
	const [totalResults, setTotalResults] = useState(0);
	const [tabTotals, setTabTotals] = useState(() => null);
	const [page, setPage] = useState(0);
	const [tabId, setTabId] = useState(tabs[0].id);
	const [items, setItems] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');

	const finalSearchQuery = parentSearchQuery ? parentSearchQuery : searchQuery;

	const pathname = usePathname();

	// Sets page count and updates current page data when tab or page changes
	useEffect(() => {
		setPageCounts();

		for (const tab of tabs) {
			if (tabs.length === 1 || tab.link === pathname) {
				setTabId(tab.id);
				updatePage(tab);
				break;
			}
		}
	}, [pathname, page, searchQuery, parentSearchQuery]);

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
			const counts = {};

			for (let i = 0; i < tabs.length; i += 1) {
				const tab = tabs[i];
				counts[tab.id] = data[i].total;
			}

			setTabTotals(counts);
		});
	}

	function fetchData(tab?: PaginationTab): Promise<PaginationOutput<T>> {
		if (!tab) {
			tab = currentTab;
		}

		// If customFetchData is provided, use it instead
		if (customFetchData) {
			return customFetchData({
				take: DEFAULT_PAGE_SIZE,
				skip: page * DEFAULT_PAGE_SIZE,
			});
		}

		// TODO: This component needs to be refactored to use tRPC instead of generic GraphQL queries
		// For now, returning empty data to prevent GraphQL usage
		return new Promise((resolve) => {
			resolve({
				hasMore: false,
				total: 0,
				items: [],
			});
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

	let resultCount = (
		<span>
			{numberWithCommas(totalResults)} result{totalResults === 1 ? '' : 's'}
			{finalSearchQuery ? ` for "${finalSearchQuery}"` : ''}
		</span>
	);

	let body;

	if (items && items.length) {
		body = items.map((item) => itemRow(item, currentTab));
	} else if (items && !items.length) {
		body = <Empty text={`Could not find any ${currentTab.plural}`} />;
	} else {
		body = <Loading />;
		resultCount = null;
	}

	let nav = null;
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

	let inputQuery = null;
	if (searchable) {
		inputQuery = (
			<div className={b('header')}>
				<div className="relative">
					<MagnifyingGlass weight="bold" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
					<Input
						placeholder={`Search for ${currentTab.plural}`}
						className="pl-10"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
				</div>
			</div>
		);
	}

	return (
		<div className={b()}>
			{inputQuery}

			<div className={b('body')}>
				{nav}
				{resultCount}
				<div className={b('list')}>{body}</div>
				<div className={b('pagination')}>
					<Button
						onClick={prevPage}
						disabled={page === 0}
						variant={page > 0 ? 'default' : 'secondary'}
					>
						Prev
					</Button>
					<p>
						Page {page + 1} of {Math.ceil(totalResults / 25) || 1}
					</p>
					<Button
						onClick={nextPage}
						disabled={!hasMore}
						variant={hasMore ? 'default' : 'secondary'}
					>
						Next
					</Button>
				</div>
			</div>
		</div>
	);
}
