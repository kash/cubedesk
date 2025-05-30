import React, {useCallback} from 'react';
import {X, Bluetooth} from '@phosphor-icons/react/dist/ssr';
import './HistorySolveRow.scss';
import block from '../../../../styles/bem';
import {getTimeString} from '../../../../lib/util/time';
import {useDispatch} from 'react-redux';
import {openModal} from '../../../../lib/actions/general';
import SolveInfo from '../../../solve-info/SolveInfo';
import {deleteSolveDb} from '../../../../lib/db/solves/update';
import {toggleDnfSolveDb, togglePlusTwoSolveDb} from '../../../../lib/db/solves/operations';
import {Button} from '@/components/ui/button';
import {Solve} from '@/generated/zod';

const b = block('history-solve-row');

interface Props {
	index: number;
	disabled?: boolean;
	solve: Solve;
}

export default function HistorySolveRow(props: Props) {
	const {index, solve, disabled} = props;

	const dispatch = useDispatch();

	const deleteSolve = useCallback(() => {
		deleteSolveDb(solve);
	}, [solve])

	const plusTwoSolve = useCallback(() => {
		togglePlusTwoSolveDb(solve);
	}, [solve])

	const dnfSolve = useCallback(() => {
		toggleDnfSolveDb(solve);
	}, [solve])

	const openSolve = useCallback(() => {
		dispatch(openModal(<SolveInfo solve={solve} solveId={solve.id} disabled={disabled} />));
	}, [dispatch, solve, disabled])

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
					variant={plusTwo ? "destructive" : "outline"}
					size="sm"
					onClick={plusTwoSolve}
				>
					+2
				</Button>
				<Button
					title="DNF solve"
					className={b('action', {active: dnf})}
					variant={dnf ? "destructive" : "outline"}
					size="sm"
					onClick={dnfSolve}
				>
					DNF
				</Button>
				<Button
					title="Delete solve"
					className={b('action', {active: true})}
					variant="outline"
					size="icon"
					onClick={deleteSolve}
				>
					<X weight="bold" />
				</Button>
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
