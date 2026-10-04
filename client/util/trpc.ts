import type {AppRouter} from '@/server/trpc/router';
import {sessionExpiredLink} from '@/util/auth/session_expired';
import {createTRPCClient, httpBatchLink, httpLink, splitLink} from '@trpc/client';

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

// Sent as requests of their own rather than batched: a batch's response waits for its slowest call, so the full solve
// list would hold up every small query sent alongside it. The trainer catalog needs a stable URL to be HTTP cached.
const UNBATCHED_PATHS = new Set(['solve.list', 'trainer.algorithms']);

export const trpc = createTRPCClient<AppRouter>({
	links: [
		sessionExpiredLink,
		splitLink({
			condition: (op) => UNBATCHED_PATHS.has(op.path),
			true: httpLink({
				url: getTRPCUrl(),
				fetch: getFetch(),
			}),
			false: httpBatchLink({
				url: getTRPCUrl(),
				fetch: getFetch(),
			}),
		}),
	],
});
