'use client';

import {type AppRouter} from '@/server/router';
import {type QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {httpBatchLink} from '@trpc/client';
import {createTRPCReact} from '@trpc/react-query';
import {ReactNode, useState} from 'react';
import SuperJSON from 'superjson';
import {createQueryClient} from './query-client';

let clientQueryClientSingleton: QueryClient | undefined = undefined;
const getQueryClient = () => {
	if (typeof window === 'undefined') {
		return createQueryClient();
	}
	return (clientQueryClientSingleton ??= createQueryClient());
};

export const api = createTRPCReact<AppRouter>();

export function TRPCReactProvider(props: {children: ReactNode}) {
	const queryClient = getQueryClient();

	const [trpcClient] = useState(() =>
		api.createClient({
			links: [
				httpBatchLink({
					transformer: SuperJSON,
					url: getBaseUrl() + '/api/trpc',
					headers: () => {
						const headers = new Headers();
						headers.set('x-trpc-source', 'nextjs-react');
						return headers;
					},
				}),
			],
		}),
	);

	return (
		<QueryClientProvider client={queryClient}>
			<api.Provider client={trpcClient} queryClient={queryClient}>
				{props.children}
			</api.Provider>
		</QueryClientProvider>
	);
}

function getBaseUrl() {
	if (typeof window !== 'undefined') {
		return window.location.origin;
	}

	return `https://${process.env.NEXT_PUBLIC_DOMAIN_NAME}`;
}
