import React from 'react';
import ReactListImport from 'react-list';

// react-list's default export gets double-wrapped by CJS interop during dev transforms.
// (import_react_list.default ends up being the whole module-exports object,
// not the class). Unwrap it here so JSX gets the class.
const ReactList = ((ReactListImport as any).default ?? ReactListImport) as typeof ReactListImport;
import Empty from '@/components/common/Empty';
import HistorySolveRow from '@/components/modules/history/HistorySolveRow';
import {setOkSolveDb, toggleDnfSolveDb, togglePlusTwoSolveDb} from '@/db/solves/operations';
import {fetchLastSolve, fetchSolves, FilterSolvesOptions} from '@/db/solves/query';
import {deleteSolveDb} from '@/db/solves/update';
import {Serialized} from '@/types/serialized';
import {Solve} from '@/types/solve';
import {useGeneral} from '@/util/hooks/useGeneral';
import {useSolveDb} from '@/util/hooks/useSolveDb';
import {HOTKEY_MAP} from '@/util/timer/hotkeys';
import {GlobalHotKeys} from 'react-hotkeys';

interface Props {
	// Serialized rows come from tRPC payloads (Dates arrive as ISO strings)
	solves?: Solve[] | Serialized<Solve>[];
	filterOptions?: FilterSolvesOptions;
	disabled?: boolean;
	reverseOrder?: boolean;
	hotKeysEnabled?: boolean;
	listClassName?: string;
}

// TODO NOW hotkeys for History
export default function History(props: Props) {
	const {
		solves: parentSolves,
		reverseOrder,
		disabled,
		filterOptions,
		hotKeysEnabled,
		listClassName,
	} = props;

	useSolveDb();
	const modals = useGeneral('modals');

	let solves;
	if (parentSolves) {
		solves = parentSolves;
	} else {
		solves = fetchSolves(filterOptions);
	}

	function renderSolveRow(index: number) {
		let solveIndex = index;
		if (reverseOrder) {
			solveIndex = solves.length - index - 1;
		}

		let displayIndex = solves.length - index - 1;
		if (reverseOrder) {
			displayIndex = index;
		}

		const solve = solves[solveIndex];
		return (
			<HistorySolveRow
				disabled={disabled}
				key={solve.id}
				index={displayIndex}
				solve={solve}
			/>
		);
	}

	function getLastSolve() {
		return fetchLastSolve(filterOptions);
	}

	// allow hotkey actions only when explicitly enabled and no any modal windows active
	function isHotKeysEnabled() {
		return hotKeysEnabled && (!modals || modals.length == 0);
	}

	function okLastSolve() {
		const lastSolve = getLastSolve();
		if (isHotKeysEnabled() && lastSolve) setOkSolveDb(lastSolve);
	}

	function dnfLastSolve() {
		const lastSolve = getLastSolve();
		if (isHotKeysEnabled() && lastSolve) toggleDnfSolveDb(lastSolve);
	}

	function plusTwoLastSolve() {
		const lastSolve = getLastSolve();
		if (isHotKeysEnabled() && lastSolve) togglePlusTwoSolveDb(lastSolve);
	}

	function deleteLastSolve() {
		const lastSolve = getLastSolve();
		if (isHotKeysEnabled() && lastSolve) deleteSolveDb(lastSolve);
	}

	if (!solves.length) {
		return (
			<div className="box-border h-full w-full overflow-visible px-[5px]">
				<Empty text="No solves yet" />
			</div>
		);
	}

	const HOTKEY_HANDLERS = {
		TOGGLE_OK: okLastSolve,
		TOGGLE_DNF: dnfLastSolve,
		DELETE_LAST_TIME: deleteLastSolve,
		TOGGLE_PLUS_TWO: plusTwoLastSolve,
	};

	return (
		<GlobalHotKeys handlers={HOTKEY_HANDLERS} keyMap={HOTKEY_MAP}>
			<div className="box-border h-full w-full overflow-visible px-[5px]">
				<div className="h-full w-full">
					<div
						className={['max-h-full overflow-auto', listClassName]
							.filter(Boolean)
							.join(' ')}
					>
						<ReactList
							itemRenderer={renderSolveRow}
							length={solves.length}
							type="uniform"
						/>
					</div>
				</div>
			</div>
		</GlobalHotKeys>
	);
}
