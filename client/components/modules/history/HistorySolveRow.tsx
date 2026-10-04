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

const textButtonClass =
	'inline-flex shrink-0 cursor-pointer items-center bg-transparent p-0 text-base outline-none';

// Inactive actions are dimmed and brighten on hover. Only an active +2/DNF gets its color.
const dimmedActionClass = 'opacity-60 hover:opacity-100 focus-visible:opacity-100';

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
				<button
					type="button"
					title="Plus two solve"
					onClick={plusTwoSolve}
					aria-pressed={plusTwo}
					className={cn(textButtonClass, {
						[dimmedActionClass]: !plusTwo,
						'text-warning': plusTwo,
					})}
				>
					{'+2'}
				</button>
				<button
					type="button"
					title="DNF solve"
					onClick={dnfSolve}
					aria-pressed={dnf}
					className={cn(textButtonClass, {
						[dimmedActionClass]: !dnf,
						'text-error': dnf,
					})}
				>
					{'DNF'}
				</button>
				<button
					type="button"
					title="Delete solve"
					onClick={deleteSolve}
					className={cn(
						textButtonClass,
						dimmedActionClass,
						// Larger hit area without changing the layout
						"relative after:absolute after:-inset-2 after:content-['']",
					)}
					aria-label="Delete solve"
				>
					<X weight="bold" className="size-4" />
				</button>
			</>
		);
	}

	return (
		<div
			className="box-border flex h-9 w-full flex-row items-center gap-2.5 pr-[5px]"
			key={id}
		>
			<div className="text-text min-w-10 shrink-0 text-base opacity-60">
				{(index + 1).toLocaleString()}.
			</div>
			<button
				type="button"
				className={cn(
					textButtonClass,
					'font-semibold underline-offset-4 hover:underline focus-visible:underline',
					{
						'text-error': dnf,
						'text-warning': !dnf && plusTwo,
						'text-secondary': !dnf && !plusTwo,
					},
				)}
				onClick={openSolve}
			>
				{time}
				{bluetoothIcon}
			</button>

			<div className="text-text ml-auto flex shrink-0 flex-row items-center gap-2.5 pr-[5px] text-base">
				{actions}
			</div>
		</div>
	);
}
