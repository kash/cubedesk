import React, {useCallback} from 'react';
import './LastSolve.scss';
import {useDispatch} from 'react-redux';
import {Info} from '@phosphor-icons/react/dist/ssr';
import {openModal} from '@/lib/actions/general';
import SolveInfo from '@/components/solve-info/SolveInfo';
import Scramble from '@/components/modules/scramble/ScrambleVisual';
import {getTimeString} from '@/lib/util/time';
import {fetchLastSolve, fetchSolve, FilterSolvesOptions} from '@/lib/db/solves/query';
import {toggleDnfSolveDb, togglePlusTwoSolveDb} from '@/lib/db/solves/operations';
import {deleteSolveDb} from '@/lib/db/solves/update';
import block from '@/styles/bem';
import {useSolveDb} from '@/lib/util/hooks/useSolveDb';
import {getCubeTypeInfoById} from '@/lib/util/cubes/util';
import {Button} from '@/components/ui/button';

const b = block('last-solve');

interface Props {
	filterOptions: FilterSolvesOptions;
}

function LastSolve(props: Props) {
	const dispatch = useDispatch();

	useSolveDb();

	const {filterOptions} = props;
	const lastSolve = fetchLastSolve(filterOptions);

	if (!lastSolve) {
		return null;
	}

	const dnf = lastSolve.dnf;
	const plusTwo = lastSolve.plus_two;
	const cubeType = lastSolve.cube_type;
	const scramble = lastSolve.scramble;

	const time = getTimeString(lastSolve.time);
	const cubeTypeName = getCubeTypeInfoById(cubeType).name;

	const plusTwoAction = useCallback(() => {
		const dbSolve = fetchSolve(lastSolve.id);
		togglePlusTwoSolveDb(dbSolve);
	}, [lastSolve?.id])

	const dnfAction = useCallback(() => {
		const dbSolve = fetchSolve(lastSolve.id);
		toggleDnfSolveDb(dbSolve);
	}, [lastSolve?.id])

	const showSolveInfo = useCallback(() => {
		dispatch(openModal(<SolveInfo solveId={lastSolve.id} />));
	}, [dispatch, lastSolve?.id])

	const deleteAction = useCallback(() => {
		const dbSolve = fetchSolve(lastSolve.id);
		deleteSolveDb(dbSolve);
	}, [lastSolve?.id])

	return (
		<div className={b()}>
			<div className={b('top')}>
				<div className={b('time', {dnf, plusTwo})}>
					<h5>Last Solve</h5>
					<h4>{time}</h4>
					<h6>{cubeTypeName}</h6>
				</div>
				<div className={b('scramble')}>
					<Scramble frontFace width="70px" scramble={scramble} cubeType={cubeType} />
				</div>
			</div>

			<div className={b('actions')}>
				<div>
					<Button variant="secondary" size="icon" onClick={showSolveInfo}>
						<Info weight="bold" />
					</Button>
					<Button variant={plusTwo ? "destructive" : "secondary"} onClick={plusTwoAction}>
						+2
					</Button>
					<Button variant={dnf ? "destructive" : "secondary"} onClick={dnfAction}>
						DNF
					</Button>
				</div>
				<div>
					<Button variant="destructive" size="sm" title="Delete solve" onClick={deleteAction}>
						Delete
					</Button>
				</div>
			</div>
		</div>
	);
}

export default LastSolve;
