import React from 'react';
import './LastSolve.scss';
import {useDispatch} from 'react-redux';
import {Info} from '@phosphor-icons/react';
import {openModal} from '../../../actions/general';
import SolveInfo from '../../solve_info/SolveInfo';
import Scramble from '../scramble/ScrambleVisual';
import {getTimeString} from '../../../util/time';
import {fetchLastSolve, fetchSolve, FilterSolvesOptions} from '../../../db/solves/query';
import {toggleDnfSolveDb, togglePlusTwoSolveDb} from '../../../db/solves/operations';
import {deleteSolveDb} from '../../../db/solves/update';
import block from '../../../styles/bem';
import {useSolveDb} from '../../../util/hooks/useSolveDb';
import {getCubeTypeInfoById} from '../../../util/cubes/util';
import Button from '../../common/button/Button';

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

	function plusTwoAction() {
		const dbSolve = fetchSolve(lastSolve.id);
		togglePlusTwoSolveDb(dbSolve);
	}

	function dnfAction() {
		const dbSolve = fetchSolve(lastSolve.id);
		toggleDnfSolveDb(dbSolve);
	}

	function showSolveInfo() {
		dispatch(openModal(<SolveInfo solveId={lastSolve.id} />));
	}

	function deleteAction() {
		const dbSolve = fetchSolve(lastSolve.id);
		deleteSolveDb(dbSolve);
	}

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
					<Button gray icon={<Info weight="bold" />} onClick={showSolveInfo} />
					<Button gray text="+2" onClick={plusTwoAction} warning={plusTwo} />
					<Button gray text="DNF" onClick={dnfAction} danger={dnf} />
				</div>
				<div>
					<Button danger flat title="Delete solve" text="Delete" onClick={deleteAction} />
				</div>
			</div>
		</div>
	);
}

export default LastSolve;
