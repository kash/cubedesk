import React from 'react';
import {useDispatch} from 'react-redux';
import {Info} from 'phosphor-react';
import {openModal} from '@/actions/general';
import SolveInfo from '@/components/solve-info/SolveInfo';
import Scramble from '@/components/modules/scramble/ScrambleVisual';
import {getTimeString} from '@/util/time';
import {fetchLastSolve, fetchSolve, FilterSolvesOptions} from '@/db/solves/query';
import {toggleDnfSolveDb, togglePlusTwoSolveDb} from '@/db/solves/operations';
import {deleteSolveDb} from '@/db/solves/update';
import {useSolveDb} from '@/util/hooks/useSolveDb';
import {getCubeTypeInfoById} from '@/util/cubes/util';
import Button from '@/components/common/button/Button';

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

	const timeClasses = ['text-[2.3rem]', 'font-bold', dnf ? 'text-error' : plusTwo ? 'text-warning' : 'text-text'];

	return (
		<div className="relative flex h-full justify-center">
			<div className="box-border flex w-full flex-row items-start justify-between">
				<div className="mb-[15px]">
					<h5 className="text-[0.9rem] font-medium text-text opacity-70">Last Solve</h5>
					<h4 className={timeClasses.join(' ')}>{time}</h4>
					<h6 className="text-base font-medium text-text opacity-70">{cubeTypeName}</h6>
				</div>
				<div>
					<Scramble frontFace width="70px" scramble={scramble} cubeType={cubeType} />
				</div>
			</div>

			<div className="absolute bottom-0 left-0 flex w-full flex-row items-center justify-between">
				<div className="flex flex-row gap-[5px]">
					<Button gray icon={<Info weight="bold" />} onClick={showSolveInfo} />
					<Button gray text="+2" onClick={plusTwoAction} warning={plusTwo} />
					<Button gray text="DNF" onClick={dnfAction} danger={dnf} />
				</div>
				<div className="flex flex-row gap-[5px]">
					<Button danger flat title="Delete solve" text="Delete" onClick={deleteAction} />
				</div>
			</div>
		</div>
	);
}

export default LastSolve;
