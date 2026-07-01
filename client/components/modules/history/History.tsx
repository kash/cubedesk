import React from 'react';
import ReactListImport from 'react-list';

// esbuild 0.15's CJS interop double-wraps react-list's default export
// (import_react_list.default ends up being the whole module-exports object,
// not the class). Unwrap it here so JSX gets the class.
const ReactList = ((ReactListImport as any).default ?? ReactListImport) as typeof ReactListImport;
import {GlobalHotKeys} from 'react-hotkeys';
import Empty from '@/components/common/empty/Empty';
import {HOTKEY_MAP} from '@/util/timer/hotkeys';
import {FilterSolvesOptions, fetchSolves, fetchLastSolve} from '@/db/solves/query';
import HistorySolveRow from '@/components/modules/history/HistorySolveRow';
import {toggleDnfSolveDb, togglePlusTwoSolveDb, setOkSolveDb} from '@/db/solves/operations';
import {deleteSolveDb} from '@/db/solves/update';
import {useSolveDb} from '@/util/hooks/useSolveDb';
import {Solve} from '@/@types/generated/graphql';
import {useGeneral} from '@/util/hooks/useGeneral';

interface Props {
	solves?: Solve[];
	filterOptions?: FilterSolvesOptions;
	disabled?: boolean;
	reverseOrder?: boolean;
	hotKeysEnabled?: boolean;
	listClassName?: string;
}

// TODO NOW hotkeys for History
export default function History(props: Props) {
	const {solves: parentSolves, reverseOrder, disabled, filterOptions, hotKeysEnabled, listClassName} = props;

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
		return <HistorySolveRow disabled={disabled} key={solve.id} index={displayIndex} solve={solve} />;
	}

	function getLastSolve() {
		return fetchLastSolve(filterOptions);
	}

	// allow hotkey actions only when explicitly enabled and no any modal windows active
	function isHotKeysEnabled() {
		return hotKeysEnabled && (!modals || modals.length == 0);
	}

	function okLastSolve() {
		if (isHotKeysEnabled()) setOkSolveDb(getLastSolve());
	}

	function dnfLastSolve() {
		if (isHotKeysEnabled()) toggleDnfSolveDb(getLastSolve());
	}

	function plusTwoLastSolve() {
		if (isHotKeysEnabled()) togglePlusTwoSolveDb(getLastSolve());
	}

	function deleteLastSolve() {
		if (isHotKeysEnabled()) deleteSolveDb(getLastSolve());
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
					<div className={['max-h-full overflow-auto', listClassName].filter(Boolean).join(' ')}>
						<ReactList itemRenderer={renderSolveRow} length={solves.length} type="uniform" />
					</div>
				</div>
			</div>
		</GlobalHotKeys>
	);
}
