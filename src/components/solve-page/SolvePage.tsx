import React from 'react';
import './SolvePage.scss';
import {setSsrValue} from '@/lib/actions/ssr';
import SolveInfo from '@/components/solve-info/SolveInfo';
import Header from '@/components/layout/header/Header';
import {getTimeString} from '@/lib/util/time';
import {getCubeTypeInfoById} from '@/lib/util/cubes/util';
import {Store} from 'redux';
import {useSsr} from '@/lib/util/hooks/useSsr';
import {useParams} from 'next/navigation';
import block from '@/styles/bem';
import {Solve} from '@/generated/zod';

const b = block('solve-page');

async function fetchSolveData(shareCode: string) {
	// TODO: Migrate to tRPC endpoint for getting solve by share code
	return null;
}

export async function prefetchSolveData(store: Store<any>, shareCode: string) {
	const solve = await fetchSolveData(shareCode);

	return store.dispatch(setSsrValue(shareCode, solve));
}

export default function SolvePage() {
	const params = useParams();
	const shareCode = params.shareCode as string;
	const [solve] = useSsr<Solve>(shareCode);

	const ct = getCubeTypeInfoById(solve.cube_type);
	const time = getTimeString(solve.time);
	const cubeType = ct.name;
	const user = solve.user.username;

	return (
		<div className={b()}>
			<Header
				path={`/solve/${shareCode}`}
				title={`${getTimeString(solve.time)} Solve for ${ct.name} by ${user} | CubeDesk`}
				description={`View the details of this ${time} ${cubeType} solve by ${user}. CubeDesk is the most advanced speedcubing timer, analytics, and trainer application.`}
			/>
			<div className={b('body')}>
				<SolveInfo disabled solve={solve} solveId={solve?.id} />
			</div>
		</div>
	);
}
