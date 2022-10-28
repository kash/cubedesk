import React from 'react';
import './SolvePage.scss';
import {setSsrValue} from '../../actions/ssr';
import {gql} from '@apollo/client';
import {SOLVE_WITH_USER_FRAGMENT} from '../../util/graphql/fragments';
import {gqlQuery} from '../api';
import SolveInfo from '../solve_info/SolveInfo';
import Header from '../layout/header/Header';
import {getTimeString} from '../../util/time';
import {getCubeTypeInfoById} from '../../util/cubes/util';
import {Store} from 'redux';
import {Request} from 'express';
import {useSsr} from '../../util/hooks/useSsr';
import {useRouteMatch} from 'react-router-dom';
import block from '../../styles/bem';
import {Solve} from '../../../server/schemas/Solve.schema';
import {QuerySolveByShareCodeArgs} from '../../@types/generated/graphql';

const b = block('solve-page');

async function fetchSolveData(shareCode: string) {
	const query = gql`
		${SOLVE_WITH_USER_FRAGMENT}
		query Query($shareCode: String) {
			solveByShareCode(shareCode: $shareCode) {
				...SolveWithUserFragment
			}
		}
	`;

	const res = await gqlQuery<QuerySolveByShareCodeArgs>(
		query,
		{
			shareCode,
		},
		'no-cache'
	);

	return res.data.solveByShareCode;
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
