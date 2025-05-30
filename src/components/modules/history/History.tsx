import React from 'react';
import ReactList from 'react-list';
import {GlobalHotKeys} from 'react-hotkeys';
import './History.scss';
import Empty from '@/components/common/empty/Empty';
import {HOTKEY_MAP} from '@/lib/util/timer/hotkeys';
import {FilterSolvesOptions, fetchSolves, fetchLastSolve} from '@/lib/db/solves/query';
import HistorySolveRow from './solve_row/HistorySolveRow';
import {toggleDnfSolveDb, togglePlusTwoSolveDb, setOkSolveDb} from '@/lib/db/solves/operations';
import {deleteSolveDb} from '@/lib/db/solves/update';
import {useSolveDb} from '@/lib/util/hooks/useSolveDb';
import {Solve} from '@/generated/zod';
import {useGeneral} from '@/lib/util/hooks/useGeneral';

interface Props {
	solves?: Solve[];
	filterOptions?: FilterSolvesOptions;
	disabled?: boolean;
	reverseOrder?: boolean;
	hotKeysEnabled?: boolean;
}

// TODO NOW hotkeys for History
export default function History(props: Props) {
	const {solves: parentSolves, reverseOrder, disabled, filterOptions, hotKeysEnabled} = props;

	useSolveDb();
	const modals = useGeneral('modals');

	let solves: Solve[];
	if (parentSolves) {
		solves = parentSolves;
	} else {
		solves = fetchSolves(filterOptions);
	}

	const renderSolveRow = React.useCallback(
		(index: number) => {
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
		},
		[solves, reverseOrder, disabled],
	);

	const getLastSolve = React.useCallback(() => {
		return fetchLastSolve(filterOptions);
	}, [filterOptions]);

	// allow hotkey actions only when explicitly enabled and no any modal windows active
	const isHotKeysEnabled = React.useCallback(() => {
		return hotKeysEnabled && (!modals || modals.length == 0);
	}, [hotKeysEnabled, modals]);

	const okLastSolve = React.useCallback(() => {
		const lastSolve = getLastSolve();
		if (isHotKeysEnabled() && lastSolve) setOkSolveDb(lastSolve);
	}, [getLastSolve, isHotKeysEnabled]);

	const dnfLastSolve = React.useCallback(() => {
		const lastSolve = getLastSolve();
		if (isHotKeysEnabled() && lastSolve) toggleDnfSolveDb(lastSolve);
	}, [getLastSolve, isHotKeysEnabled]);

	const plusTwoLastSolve = React.useCallback(() => {
		const lastSolve = getLastSolve();
		if (isHotKeysEnabled() && lastSolve) togglePlusTwoSolveDb(lastSolve);
	}, [getLastSolve, isHotKeysEnabled]);

	const deleteLastSolve = React.useCallback(() => {
		const lastSolve = getLastSolve();
		if (isHotKeysEnabled() && lastSolve) deleteSolveDb(lastSolve);
	}, [getLastSolve, isHotKeysEnabled]);

	if (!solves.length) {
		return (
			<div className="cd-history">
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
			<div className="cd-history">
				<div className="cd-history__table">
					<div className="cd-history__list">
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
