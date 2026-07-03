import React, {ReactNode} from 'react';
import {X, Bluetooth} from 'phosphor-react';
import {getTimeString} from '@/util/time';
import {useDispatch} from 'react-redux';
import {openModal} from '@/actions/general';
import SolveInfo from '@/components/solve-info/SolveInfo';
import {deleteSolveDb} from '@/db/solves/update';
import {toggleDnfSolveDb, togglePlusTwoSolveDb} from '@/db/solves/operations';
import Button from '@/components/common/Button';
import {Solve} from '@/types/solve';

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

	let bluetoothIcon: ReactNode = null;
	if (isSmartCube) {
		bluetoothIcon = (
			<Bluetooth className="text-text relative top-px ml-2 text-[0.9rem] opacity-60" />
		);
	}

	function getActionClasses(active: boolean) {
		return [
			'text-base',
			'opacity-30',
			'transition-opacity',
			'duration-100',
			'ease-in-out',
			'hover:opacity-70',
			active ? '!opacity-100' : '',
		]
			.filter(Boolean)
			.join(' ');
	}

	let actions: ReactNode = null;
	if (!disabled) {
		actions = (
			<>
				<Button
					title="Plus two solve"
					className={getActionClasses(plusTwo)}
					text="+2"
					flat
					white
					warning={plusTwo}
					onClick={plusTwoSolve}
				/>
				<Button
					title="DNF solve"
					className={getActionClasses(dnf)}
					flat
					white
					danger={dnf}
					text="DNF"
					onClick={dnfSolve}
				/>
				<Button
					title="Delete solve"
					className={getActionClasses(true)}
					icon={<X />}
					flat
					white
					onClick={deleteSolve}
				/>
			</>
		);
	}

	const timeClasses = [
		'group flex w-full flex-row items-center pt-0 font-semibold',
		dnf ? 'text-error' : plusTwo ? 'text-warning' : 'text-secondary',
	];

	return (
		<div
			className="box-border flex h-9 w-full flex-row items-center justify-between pr-[5px]"
			key={id}
		>
			<div className="text-text min-w-10 pr-[5px] pb-[3px] text-base opacity-60">
				{(index + 1).toLocaleString()}.
			</div>
			<div className="text-text w-[150px] text-base">
				<button className={timeClasses.join(' ')} onClick={openSolve}>
					<span className="border-b-2 border-solid border-transparent pt-[3px] text-base text-inherit group-hover:border-current">
						{time}
					</span>
					{bluetoothIcon}
				</button>
			</div>

			<div className="text-text flex w-[calc(100%_-_190px)] flex-row items-center justify-end gap-2.5 pr-[5px] text-right text-base">
				{actions}
			</div>
		</div>
	);
}
