import React from 'react';
import {setSsrValue} from '@/actions/ssr';
import {gql} from '@apollo/client';
import {SOLVE_WITH_USER_FRAGMENT} from '@/util/graphql/fragments';
import {gqlQuery} from '@/components/api';
import SolveInfo from '@/components/solve-info/SolveInfo';
import Header from '@/components/layout/Header';
import {getTimeString} from '@/util/time';
import {getCubeTypeInfoById} from '@/util/cubes/util';
import {Store} from 'redux';
import {Request} from 'express';
import {useSsr} from '@/util/hooks/useSsr';
import {useRouteMatch} from 'react-router-dom';
import {Solve} from '../../../server/schemas/Solve.schema';

interface FetchSolveDataResponse {
	solveByShareCode: Solve;
}

async function fetchSolveData(shareCode: string) {
	const query = gql`
		${SOLVE_WITH_USER_FRAGMENT}
		query Query($shareCode: String) {
			solveByShareCode(shareCode: $shareCode) {
				...SolveWithUserFragment
			}
		}
	`;

	const res = await gqlQuery(
		query,
		{
			shareCode,
		},
		'no-cache'
	);

	return (res.data as unknown as FetchSolveDataResponse).solveByShareCode;
}

export async function prefetchSolveData(store: Store<any>, req: Request) {
	const shareCode: string = req.params.shareCode;
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
