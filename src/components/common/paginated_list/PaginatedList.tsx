import Empty from '@/components/common/empty/Empty';
import Loading from '@/components/common/loading/Loading';
import {Button} from '@/components/ui/button';
import {useUrlParamNumber} from '@/lib/util/hooks/useUrlParam';
import {numberWithCommas} from '@/lib/util/strings/util';
import {PaginationResult} from '@/types/pagination';
import {usePathname, useRouter} from 'next/navigation';
import React, {ReactNode, useCallback, useEffect, useState} from 'react';

const DEFAULT_PAGE_SIZE = 50;

interface Props<T> {
	fetchData: (options: {
		page: number;
		searchQuery?: string;
		pageSize: number;
	}) => Promise<PaginationResult<T> & {total: number}>;
	getItemRow: (data: T, index: number) => ReactNode;
	searchQuery?: string;
}

export default function PaginatedList<T>(props: Props<T>) {
	const {getItemRow, fetchData, searchQuery} = props;

	const router = useRouter();
	const pathname = usePathname();
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
	}, [page, searchQuery, fetchData]);

	useEffect(() => {
		if (query !== searchQuery) {
			setQuery(searchQuery);
			setPage(0);
		}
	}, [searchQuery, query]);

	useEffect(() => {
		updatePageUrlParam(page);
	}, [page, updatePageUrlParam]);

	const prevPage = useCallback(() => {
		if (!page) {
			return;
		}

		setPage(page - 1);
	}, [page]);

	const nextPage = useCallback(() => {
		if (!hasMore) {
			return;
		}

		setPage(page + 1);
	}, [hasMore]);

	const updatePageUrlParam = useCallback((pageNum: number) => {
		const urlParams = new URLSearchParams(window.location.search);
		urlParams.set('page', String(pageNum));

		router.push(`${pathname}?${urlParams.toString()}`);
	}, [router, pathname]);

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
				<div className="mx-auto mt-8 flex w-full max-w-36 flex-row items-center justify-center">
					<Button
						onClick={prevPage}
						disabled={page === 0}
						variant={page > 0 ? 'default' : 'secondary'}
					>
						Prev
					</Button>
					<p className="m-0 mx-3">
						Page {page + 1} of {totalPages}
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
