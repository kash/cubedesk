import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {httpBatchLink} from '@trpc/client';
import {createTRPCReact} from '@trpc/react-query';
import React, {useState} from 'react';
import type {AppRouter} from '../../server/trpc/router';

// React hooks client — use inside components: api.user.me.useQuery(),
// api.auth.logIn.useMutation(), etc. For non-React code (redux actions, the
// solve db, class helpers), use the raw client in client/util/trpc.ts.
export const api = createTRPCReact<AppRouter>();

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

export function TRPCProvider({children}: {children: React.ReactNode}) {
	const [queryClient] = useState(() => new QueryClient());
	const [trpcClient] = useState(() =>
		api.createClient({
			links: [
				httpBatchLink({
					url: getTRPCUrl(),
					fetch: getFetch(),
				}),
			],
		})
	);

	return (
		<api.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</api.Provider>
	);
}
