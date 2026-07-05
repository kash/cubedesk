import {createTRPCClient, httpBatchLink} from '@trpc/client';
import type {AppRouter} from '@/server/trpc/router';

type FetchType = (url: RequestInfo | URL, init?: RequestInit) => Promise<Response>;

function getTRPCUrl() {
	if (typeof window === 'undefined') {
		return `${process.env.BASE_URI || ''}/trpc`;
	}

	return `${window.location.origin}/trpc`;
}

function getFetch(): FetchType {
	if (typeof window === 'undefined') {
		return fetch as FetchType;
	}

	return (url, init) =>
		fetch(url, {
			...init,
			credentials: 'same-origin',
		});
}

export const trpc = createTRPCClient<AppRouter>({
	links: [
		httpBatchLink({
			url: getTRPCUrl(),
			fetch: getFetch(),
		}),
	],
});
