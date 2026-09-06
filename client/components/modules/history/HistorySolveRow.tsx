import {Button} from '@/components/ui/button';
import {toggleDnfSolveDb, togglePlusTwoSolveDb} from '@/db/solves/operations';
import {Solve} from '@/types/solve';
import {cn} from '@/util/cn';
import {getTimeString} from '@/util/time';
import {Bluetooth, X} from 'phosphor-react';
import React, {ReactNode} from 'react';

interface Props {
	onOpenSolve: (solve: Solve) => void;
	onDeleteSolve: (solve: Solve) => void;
	index: number;
	disabled?: boolean;
	solve: Solve;
}

export default function HistorySolveRow(props: Props) {
	const {index, solve, disabled} = props;

	function deleteSolve() {
		props.onDeleteSolve(solve);
	}

	function plusTwoSolve() {
		togglePlusTwoSolveDb(solve);
	}

	function dnfSolve() {
		toggleDnfSolveDb(solve);
	}

	function openSolve() {
		props.onOpenSolve(solve);
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

	let actions: ReactNode = null;
	if (!disabled) {
		actions = (
			<>
				<Button
					variant="ghost"
					title="Plus two solve"
					onClick={plusTwoSolve}
					size="sm"
					aria-pressed={plusTwo}
					className={cn({'text-warning': plusTwo})}
				>
					{'+2'}
				</Button>
				<Button
					variant="ghost"
					title="DNF solve"
					onClick={dnfSolve}
					size="sm"
					aria-pressed={dnf}
					className={cn({'text-error': dnf})}
				>
					{'DNF'}
				</Button>
				<Button
					variant="ghost"
					title="Delete solve"
					onClick={deleteSolve}
					size="icon-sm"
					aria-label="Delete solve"
				>
					<X />
				</Button>
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
				<Button
					variant="ghost"
					className={cn(
						'h-auto p-0 font-normal whitespace-normal hover:bg-transparent',
						timeClasses.join(' '),
					)}
					onClick={openSolve}
				>
					<span className="border-b-2 border-solid border-transparent pt-[3px] text-base text-inherit group-hover:border-current">
						{time}
					</span>
					{bluetoothIcon}
				</Button>
			</div>

			<div className="text-text flex w-[calc(100%_-_190px)] flex-row items-center justify-end gap-2.5 pr-[5px] text-right text-base">
				{actions}
			</div>
		</div>
	);
}
