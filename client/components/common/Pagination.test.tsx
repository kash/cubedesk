import Pagination, {PaginationTab} from '@/components/common/Pagination';
import type {ListLabels} from '@/components/common/PaginatedList';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {MemoryRouter, Route} from 'react-router-dom';

const tabs: PaginationTab[] = [
	{id: 'friends', value: 'Friends', link: '/community/friends/list', emptyText: 'No friends'},
	{
		id: 'received',
		value: 'Received',
		link: '/community/friends/received',
		emptyText: 'No requests',
	},
	{id: 'sent', value: 'Sent', link: '/community/friends/sent', emptyText: 'No requests'},
].map((tab) => ({
	...tab,
	fetchData: async () => ({items: [], total: 0, hasMore: false}),
}));
const labels: ListLabels = {
	loading: 'Loading results',
	error: 'Unable to load results',
	retry: 'Try again',
	empty: '',
	previous: 'Previous',
	next: 'Next',
	results: (count) => `${count} results`,
	page: (page, total) => `Page ${page} of ${total}`,
};

describe('friend navigation', () => {
	it.each(tabs)('selects $value from the URL on the first render', (tab) => {
		const html = renderToStaticMarkup(
			<QueryClientProvider client={new QueryClient()}>
				<MemoryRouter initialEntries={[tab.link!]}>
					<Route path={tab.link}>
						<Pagination tabs={tabs} labels={labels} itemRow={() => null} />
					</Route>
				</MemoryRouter>
			</QueryClientProvider>,
		);
		const selectedLink = html.match(/<a\b[^>]*aria-current="page"[^>]*>/)?.[0];
		expect(selectedLink).toContain(`href="${tab.link}"`);
		expect(html.match(/aria-current="page"/g)).toHaveLength(1);
		for (const otherTab of tabs) {
			expect(html).toContain(`>${otherTab.value}</a>`);
		}
	});
});
