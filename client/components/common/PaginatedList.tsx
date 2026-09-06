import Empty from '@/components/common/Empty';
import Loading from '@/components/common/Loading';
import PageControls from '@/components/common/PageControls';
import {PaginationArgs, PaginationOutput} from '@/types/pagination';
import {useUrlParamNumber} from '@/util/hooks/useUrlParam';
import {numberWithCommas} from '@/util/strings/util';
import React, {ReactNode, useEffect, useState} from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom';

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
			searchQuery: searchQuery ?? '',
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

	let resultCount: ReactNode = (
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

	const totalPages = Math.max(1, Math.ceil(totalResults / DEFAULT_PAGE_SIZE));

	return (
		<div className="w-full">
			<div className="w-full">
				{resultCount}
				<div className="">{body}</div>
				<PageControls
					className="mt-6"
					page={page}
					totalPages={totalPages}
					hasMore={hasMore}
					onPrevious={prevPage}
					onNext={nextPage}
				/>
			</div>
		</div>
	);
}
