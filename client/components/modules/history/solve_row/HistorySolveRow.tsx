import React from 'react';
import {X, Bluetooth} from '@phosphor-icons/react';
import './HistorySolveRow.scss';
import block from '../../../../styles/bem';
import {getTimeString} from '../../../../util/time';
import {useDispatch} from 'react-redux';
import {openModal} from '../../../../actions/general';
import SolveInfo from '../../../solve_info/SolveInfo';
import {deleteSolveDb} from '../../../../db/solves/update';
import {toggleDnfSolveDb, togglePlusTwoSolveDb} from '../../../../db/solves/operations';
import Button from '../../../common/button/Button';
import {Solve} from '../../../../../server/schemas/Solve.schema';

const b = block('history-solve-row');

interface Props {
	index: number;
	disabled?: boolean;
	solve: Solve;
}

export default function HistorySolveRow(props: Props) {
	const {index, solve, disabled} = props;

	const dispatch = useDispatch();

	function deleteSolve() {
		deleteSolveDb(solve);
	}

	function plusTwoSolve() {
		togglePlusTwoSolveDb(solve);
	}

	function dnfSolve() {
		toggleDnfSolveDb(solve);
	}

	function openSolve() {
		dispatch(openModal(<SolveInfo solve={solve} solveId={solve.id} disabled={disabled} />));
	}

	const solveTime = solve.time;
	const dnf = solve.dnf;
	const plusTwo = solve.plus_two;
	const id = solve.id;
	const isSmartCube = solve.is_smart_cube;

	const time = getTimeString(solveTime);

	let bluetoothIcon = null;
	if (isSmartCube) {
		bluetoothIcon = <Bluetooth />;
	}

	let actions = null;
	if (!disabled) {
		actions = (
			<>
				<Button
					title="Plus two solve"
					className={b('action', {active: plusTwo})}
					text="+2"
					flat
					white
					warning={plusTwo}
					onClick={plusTwoSolve}
				/>
				<Button
					title="DNF solve"
					className={b('action', {active: dnf})}
					flat
					white
					danger={dnf}
					text="DNF"
					onClick={dnfSolve}
				/>
				<Button
					title="Delete solve"
					className={b('action', {active: true})}
					icon={<X />}
					flat
					white
					onClick={deleteSolve}
				/>
			</>
		);
	}

	return (
		<div className={b()} key={id}>
			<div className={b('index')}>{(index + 1).toLocaleString()}.</div>
			<div>
				<button className={b('time', {plusTwo, dnf})} onClick={openSolve}>
					<span>{time}</span>
					{bluetoothIcon}
				</button>
			</div>

			<div className={b('actions')}>{actions}</div>
		</div>
	);
}
