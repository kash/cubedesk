import React, {ReactNode, useEffect, useState} from 'react';
import Empty from '../empty/Empty';
import Loading from '../loading/Loading';
import {numberWithCommas} from '../../../util/strings/util';
import {useHistory, useRouteMatch} from 'react-router-dom';
import Button from '../button/Button';
import {PaginationArgs, PaginationOutput} from '../../../../server/schemas/Pagination.schema';
import {useUrlParamNumber} from '../../../util/hooks/useUrlParam';

const DEFAULT_PAGE_SIZE = 50;

interface Props<T> {
	fetchData: (options: PaginationArgs) => Promise<PaginationOutput<T>>;
	getItemRow: (data: T, index: number) => ReactNode;
	searchQuery?: string;
}

export default function PaginatedList<T>(props: Props<T>) {
	const {getItemRow, fetchData, searchQuery} = props;

	const match = useRouteMatch();
	const history = useHistory();
	const pageUrlParam = useUrlParamNumber('page');
	const queryUrlParam = useUrlParamNumber('query');

	const [query, setQuery] = useState(searchQuery);
	const [hasMore, setHasMore] = useState(false);
	const [totalResults, setTotalResults] = useState(0);
	const [page, setPage] = useState(pageUrlParam || 0);
	const [items, setItems] = useState<T[]>([]);

	useEffect(() => {
		fetchData({
			page,
			searchQuery: searchQuery,
			pageSize: DEFAULT_PAGE_SIZE,
		}).then((result) => {
			setItems(result.items);
			setHasMore(result.hasMore);
			setTotalResults(result.total);
		});
	}, [page, searchQuery]);

	useEffect(() => {
		if (query !== searchQuery) {
			setQuery(searchQuery);
			setPage(0);
		}
	}, [searchQuery]);

	useEffect(() => {
		updatePageUrlParam(page);
	}, [page]);

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

	function updatePageUrlParam(pageNum: number) {
		const urlParams = new URLSearchParams(location.search);
		urlParams.set('page', String(pageNum));

		history.push({
			pathname: match.path,
			search: urlParams.toString(),
		});
	}

	let resultCount = (
		<span className="text-text">
			{numberWithCommas(totalResults)} result{totalResults === 1 ? '' : 's'}
			{searchQuery ? ` for "${searchQuery}"` : ''}
		</span>
	);

	let body;

	if (items && items.length) {
		body = items.map((item, index) => {
			const itemIndex = page * DEFAULT_PAGE_SIZE + index;
			return getItemRow(item, itemIndex);
		});
	} else if (items && !items.length) {
		body = <Empty text={`Could not find any records`} />;
	} else {
		body = <Loading />;
		resultCount = null;
	}

	const totalPages = Math.ceil(totalResults / DEFAULT_PAGE_SIZE);

	return (
		<div className="w-full">
			<div className="w-full">
				{resultCount}
				<div className="">{body}</div>
				<div className="flex flex-row items-center justify-center w-full max-w-36 mx-auto mt-8">
					<Button onClick={prevPage} text="Prev" disabled={page === 0} primary={page > 0} />
					<p className="m-0 mx-3">
						Page {page + 1} of {totalPages}
					</p>
					<Button onClick={nextPage} text="Next" disabled={!hasMore} primary={hasMore} />
				</div>
			</div>
		</div>
	);
}
