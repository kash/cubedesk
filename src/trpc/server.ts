import 'server-only';
import {type AppRouter, createCaller} from '@/server/router';
import {createTRPCContext} from '@/server/trpc';
import {createHydrationHelpers} from '@trpc/react-query/rsc';
import {cache} from 'react';
import {createQueryClient} from './query-client';

const createContext = cache(() => {
	return createTRPCContext({} as any);
});

const getQueryClient = cache(createQueryClient);
const caller = createCaller(createContext);

export const api = createHydrationHelpers<AppRouter>(caller, getQueryClient).trpc;
