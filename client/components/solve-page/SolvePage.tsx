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
import {useTranslation} from 'react-i18next';
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
	const {t} = useTranslation();
	const match = useRouteMatch<{shareCode: string}>();
	const shareCode = match.params.shareCode;
	const [solve] = useSsr<Solve>(shareCode);
	if (!solve) {
		return null;
	}

	const ct = getCubeTypeInfoById(solve.cube_type);
	const time = getTimeString(solve.time);
	const cubeType = ct?.name ?? solve.cube_type;
	const user = solve.user?.username;

	return (
		<div className="bg-background box-border flex min-h-screen w-full items-start justify-center py-[100px]">
			<Header
				path={`/solve/${shareCode}`}
				title={t('solves.sharedPageTitle', {
					time,
					cubeType,
					user: user ?? t('common.user'),
				})}
				description={t('solves.sharedPageDescription', {
					time,
					cubeType,
					user: user ?? t('common.user'),
				})}
			/>
			<div className="bg-module box-border w-full max-w-[600px] rounded-md px-5 py-[25px]">
				<SolveInfo disabled solve={solve} solveId={solve.id} />
			</div>
		</div>
	);
}
