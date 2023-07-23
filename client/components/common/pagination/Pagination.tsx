import React, {ReactNode, useEffect, useMemo, useState} from 'react';
import './Pagination.scss';
import HorizontalNav from '../horizontal_nav/HorizontalNav';
import Empty from '../empty/Empty';
import Loading from '../loading/Loading';
import {MagnifyingGlass} from 'phosphor-react';
import {numberWithCommas} from '../../../util/strings/util';
import {DocumentNode, gql} from '@apollo/client';
import {gqlQuery} from '../../api';
import {useRouteMatch} from 'react-router-dom';
import block from '../../../styles/bem';
import Input from '../inputs/input/Input';
import Button from '../button/Button';

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
	queryFragment: DocumentNode;
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
}

export default function Pagination<T>(props: Props) {
	const {tabs, itemRow, searchable, prefetchData, searchQuery: parentSearchQuery} = props;

	const [hasMore, setHasMore] = useState(false);
	const [totalResults, setTotalResults] = useState(0);
	const [tabTotals, setTabTotals] = useState(() => null);
	const [page, setPage] = useState(0);
	const [tabId, setTabId] = useState(tabs[0].id);
	const [items, setItems] = useState([]);
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

		return new Promise((resolve) => {
			if (prefetchData) {
				prefetchData(page, tab);
			}

			const dataQueryName = tab.dataQueryName;
			const queryFragment = tab.queryFragment;
			const queryFragmentName = tab.queryFragmentName;

			const query = gql`
                ${queryFragment}

                query Query($page: Int!, $pageSize: Int!, $searchQuery: String) {
                    ${dataQueryName}(pageSize: $pageSize, page: $page, searchQuery: $searchQuery) {
                        hasMore
						total
                        items {
                            ...${queryFragmentName}
                        }
                    }
                }
			`;

			gqlQuery(query, {
				page,
				pageSize: DEFAULT_PAGE_SIZE,
				searchQuery: finalSearchQuery,
			}).then(({data}) => {
				resolve(data[dataQueryName]);
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
		<div className={b()}>
			{inputQuery}

			<div className={b('body')}>
				{nav}
				{resultCount}
				<div className={b('list')}>{body}</div>
				<div className={b('pagination')}>
					<Button onClick={prevPage} text="Prev" disabled={page === 0} primary={page > 0} />
					<p>
						Page {page + 1} of {Math.ceil(totalResults / 25) || 1}
					</p>
					<Button onClick={nextPage} text="Next" disabled={!hasMore} primary={hasMore} />
				</div>
			</div>
		</div>
	);
}
