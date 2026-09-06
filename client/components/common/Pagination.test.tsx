import Pagination, {PaginationTab} from '@/components/common/Pagination';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {MemoryRouter, Route} from 'react-router-dom';

const tabs: PaginationTab[] = [
	{id: 'friends', value: 'Friends', link: '/community/friends/list', plural: 'friends'},
	{id: 'received', value: 'Received', link: '/community/friends/received', plural: 'requests'},
	{id: 'sent', value: 'Sent', link: '/community/friends/sent', plural: 'requests'},
].map((tab) => ({
	...tab,
	fetchData: async () => ({items: [], total: 0, hasMore: false}),
}));

describe('friend navigation', () => {
	it.each(tabs)('selects $value from the URL on the first render', (tab) => {
		const html = renderToStaticMarkup(
			<MemoryRouter initialEntries={[tab.link!]}>
				<Route path={tab.link}>
					<Pagination tabs={tabs} itemRow={() => null} />
				</Route>
			</MemoryRouter>,
		);
		const selectedLink = html.match(/<a\b[^>]*aria-current="page"[^>]*>/)?.[0];
		expect(selectedLink).toContain(`href="${tab.link}"`);
		expect(html.match(/aria-current="page"/g)).toHaveLength(1);
		for (const otherTab of tabs) {
			expect(html).toContain(`>${otherTab.value}</a>`);
		}
	});
});
