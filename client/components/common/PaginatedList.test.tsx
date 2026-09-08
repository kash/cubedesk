import PaginatedList, {listQueryKey} from '@/components/common/PaginatedList';
import {PaginationOutput} from '@/types/pagination';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {MemoryRouter} from 'react-router-dom';

const path = '/community/leaderboards';
const clients: QueryClient[] = [];
function client() {
	const value = new QueryClient({defaultOptions: {queries: {retry: false}}});
	clients.push(value);
	return value;
}
afterEach(() => clients.splice(0).forEach((value) => value.clear()));

function render(queryClient: QueryClient, url = path, searchQuery = '') {
	return renderToStaticMarkup(
		<QueryClientProvider client={queryClient}>
			<MemoryRouter initialEntries={[url]}>
				<PaginatedList<string>
					searchQuery={searchQuery}
					fetchData={async () => ({items: [], total: 0, hasMore: false})}
					getItemRow={(item, index) => (
						<div key={item}>
							{index + 1}: {item}
						</div>
					)}
				/>
			</MemoryRouter>
		</QueryClientProvider>,
	);
}

it('shows a skeleton before the first response, never a premature empty state', () => {
	const html = render(client());
	expect(html).toContain('Loading results');
	expect(html).not.toContain('Could not find any records');
	expect(html).not.toContain('0 results');
});

it('shows the empty state only after a successful empty response', () => {
	const cache = client();
	cache.setQueryData(listQueryKey(path, '', 50, 0), {items: [], total: 0, hasMore: false});
	expect(render(cache)).toContain('Could not find any records');
	expect(render(cache)).not.toContain('Loading results');
});

it('does not label the previous page’s rows with the new page’s ranks', () => {
	const cache = client();
	cache.setQueryData(listQueryKey(path, '', 50, 0), {
		items: ['old user'],
		total: 100,
		hasMore: true,
	});
	const html = render(cache, `${path}?page=1`);
	expect(html).toContain('Loading results');
	expect(html).not.toContain('old user');
	cache.setQueryData(listQueryKey(path, '', 50, 1), {
		items: ['next user'],
		total: 100,
		hasMore: false,
	});
	expect(render(cache, `${path}?page=1`)).toContain('51: next user');
	expect(render(cache, `${path}?page=0`)).toContain('1: old user');
});

it('starts a changed search at page zero even when the URL still has an old page', () => {
	const cache = client();
	cache.setQueryData(listQueryKey(path, 'new', 50, 0), {
		items: ['new user'],
		total: 1,
		hasMore: false,
	});
	expect(render(cache, `${path}?page=7&listQuery=old`, 'new')).toContain('1: new user');
});

it.each(['-1', '1.5', 'NaN', 'Infinity'])('normalizes invalid page %s', (page) => {
	const cache = client();
	cache.setQueryData(listQueryKey(path, '', 50, 0), {
		items: ['first user'],
		total: 1,
		hasMore: false,
	});
	expect(render(cache, `${path}?page=${page}`)).toContain('1: first user');
});

it('keeps a late response from overwriting the currently selected page', async () => {
	const cache = client();
	let resolveOld!: (value: PaginationOutput<string>) => void;
	const oldRequest = cache.fetchQuery({
		queryKey: listQueryKey(path, '', 50, 0),
		queryFn: () =>
			new Promise<PaginationOutput<string>>((resolve) => {
				resolveOld = resolve;
			}),
	});
	await cache.fetchQuery({
		queryKey: listQueryKey(path, '', 50, 1),
		queryFn: async () => ({items: ['new page'], total: 100, hasMore: false}),
	});
	resolveOld({items: ['late old page'], total: 100, hasMore: true});
	await oldRequest;
	const html = render(cache, `${path}?page=1`);
	expect(html).toContain('51: new page');
	expect(html).not.toContain('late old page');
});

it('shows a retry state after a failed request', async () => {
	const cache = client();
	// Keep the settled error visible when the SSR test mounts a fresh observer.
	cache.setQueryDefaults(listQueryKey(path, '', 50, 0), {retryOnMount: false});
	await cache
		.fetchQuery({
			queryKey: listQueryKey(path, '', 50, 0),
			queryFn: async () => {
				throw new Error('Unavailable');
			},
		})
		.catch(() => {});
	const html = render(cache);
	expect(html).toContain('Try again');
	expect(html).not.toContain('Could not find any records');
});
