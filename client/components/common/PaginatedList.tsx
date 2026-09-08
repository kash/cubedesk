import Empty from '@/components/common/Empty';
import ListSkeleton from '@/components/common/ListSkeleton';
import PageControls from '@/components/common/PageControls';
import {Button} from '@/components/ui/button';
import {PaginationArgs, PaginationOutput} from '@/types/pagination';
import {numberWithCommas} from '@/util/strings/util';
import {useQuery} from '@tanstack/react-query';
import React, {ReactNode, useEffect, useRef} from 'react';
import {useHistory, useLocation} from 'react-router-dom';

interface Props<T> {
	fetchData: (options: PaginationArgs) => Promise<PaginationOutput<T>>;
	getItemRow: (data: T, index: number) => ReactNode;
	searchQuery?: string;
	pageSize?: number;
	listId?: string;
	emptyText?: string;
}

export const listQueryKey = (id: string, searchQuery: string, pageSize: number, page: number) =>
	['paginated-list', id, searchQuery, pageSize, page] as const;

export default function PaginatedList<T>({
	fetchData,
	getItemRow,
	searchQuery = '',
	pageSize = 50,
	listId,
	emptyText = 'Could not find any records',
}: Props<T>) {
	const history = useHistory();
	const location = useLocation();
	const root = useRef<HTMLDivElement>(null);
	const params = new URLSearchParams(location.search);
	// Associate the URL page with its search, so a new search never requests the old page.
	const queryMatches = (params.get('listQuery') || '') === searchQuery;
	const requestedPage = Number(params.get('page') || 0);
	const page =
		queryMatches && Number.isSafeInteger(requestedPage) && requestedPage >= 0
			? requestedPage
			: 0;
	const id = listId ?? location.pathname;
	const request = useQuery({
		queryKey: listQueryKey(id, searchQuery, pageSize, page),
		queryFn: () => fetchData({page, pageSize, searchQuery}),
		staleTime: 30_000,
		retry: 1,
		refetchOnWindowFocus: false,
	});
	const navigationKey = JSON.stringify([id, searchQuery, page]);
	const previousNavigation = useRef(navigationKey);

	useEffect(() => {
		if (queryMatches) return;
		const next = new URLSearchParams(location.search);
		next.set('page', '0');
		if (searchQuery) next.set('listQuery', searchQuery);
		else next.delete('listQuery');
		history.replace({...location, search: next.toString()});
	}, [queryMatches, searchQuery, history, location]);

	useEffect(() => {
		if (previousNavigation.current !== navigationKey) {
			root.current?.scrollIntoView({block: 'start', behavior: 'instant'});
			previousNavigation.current = navigationKey;
		}
	}, [navigationKey]);

	function changePage(nextPage: number) {
		const next = new URLSearchParams(location.search);
		next.set('page', String(nextPage));
		history.push({...location, search: next.toString()});
	}

	const data = request.data;
	return (
		<div ref={root} className="w-full scroll-mt-4" aria-busy={request.isPending}>
			{request.isPending ? (
				<ListSkeleton />
			) : request.isError ? (
				<div
					role="alert"
					className="border-text/15 bg-module rounded border p-8 text-center"
				>
					<p className="text-text mb-4">Unable to load results. Please try again.</p>
					<Button variant="outline" onClick={() => void request.refetch()}>
						Try again
					</Button>
				</div>
			) : (
				data && (
					<>
						<p role="status" className="text-text/60 mt-0 mb-2 text-sm">
							{numberWithCommas(data.total)} result{data.total === 1 ? '' : 's'}
							{searchQuery ? ` for "${searchQuery}"` : ''}
						</p>
						{data.items.length ? (
							data.items.map((item, index) =>
								getItemRow(item, page * pageSize + index),
							)
						) : (
							<Empty text={emptyText} />
						)}
						{(data.total > 0 || page > 0) && (
							<PageControls
								className="mt-6"
								page={page}
								totalPages={Math.ceil(data.total / pageSize)}
								hasMore={data.hasMore}
								onPrevious={() => changePage(Math.max(0, page - 1))}
								onNext={() => changePage(page + 1)}
							/>
						)}
					</>
				)
			)}
		</div>
	);
}
