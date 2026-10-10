import {setSsrValue} from '@/actions/ssr';
import {Solve} from '@/types/solve';
import {trpc} from '@/util/trpc';
import {Request} from 'express';
import {Store} from 'redux';

async function fetchSolveData(shareCode: string) {
	// Raw client (not hooks): this also runs server-side for SSR prefetch
	const solve = await trpc.solve.getByShareCode.query({shareCode});

	return solve as unknown as Solve;
}

export async function prefetchSolveData(store: Store<any>, req: Request) {
	const shareCode = String(req.params.shareCode);
	const solve = await fetchSolveData(shareCode);

	return store.dispatch(setSsrValue(shareCode, solve));
}
