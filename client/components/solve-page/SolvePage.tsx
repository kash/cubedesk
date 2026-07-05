import {setSsrValue} from '@/actions/ssr';
import Header from '@/components/layout/Header';
import SolveInfo from '@/components/solve-info/SolveInfo';
import {Solve} from '@/types/solve';
import {getCubeTypeInfoById} from '@/util/cubes/util';
import {useSsr} from '@/util/hooks/useSsr';
import {getTimeString} from '@/util/time';
import {trpc} from '@/util/trpc';
import {Request} from 'express';
import React from 'react';
import {useRouteMatch} from 'react-router-dom';
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

export default function SolvePage() {
	const match = useRouteMatch<{shareCode: string}>();
	const shareCode = match.params.shareCode;
	const [solve] = useSsr<Solve>(shareCode);

	const ct = getCubeTypeInfoById(solve.cube_type);
	const time = getTimeString(solve.time);
	const cubeType = ct.name;
	const user = solve.user?.username;

	return (
		<div className="box-border flex min-h-screen w-full items-start justify-center bg-background py-[100px]">
			<Header
				path={`/solve/${shareCode}`}
				title={`${getTimeString(solve.time)} Solve for ${ct.name} by ${user} | CubeDesk`}
				description={`View the details of this ${time} ${cubeType} solve by ${user}. CubeDesk is the most advanced speedcubing timer, analytics, and trainer application.`}
			/>
			<div className="box-border w-full max-w-[600px] rounded-md bg-module px-5 py-[25px]">
				<SolveInfo disabled solve={solve} solveId={solve?.id} />
			</div>
		</div>
	);
}
