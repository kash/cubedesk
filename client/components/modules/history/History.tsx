import React from 'react';
import ReactList from 'react-list';
import {GlobalHotKeys} from 'react-hotkeys';
import './History.scss';
import Empty from '../../common/empty/Empty';
import {HOTKEY_MAP} from '../../../util/timer/hotkeys';
import {FilterSolvesOptions, fetchSolves} from '../../../db/solves/query';
import HistorySolveRow from './solve_row/HistorySolveRow';
import {toggleDnfSolveDb, togglePlusTwoSolveDb} from '../../../db/solves/operations';
import {deleteSolveDb} from '../../../db/solves/update';
import {useSolveDb} from '../../../util/hooks/useSolveDb';
import {Solve} from '../../../@types/generated/graphql';

interface Props {
	solves?: Solve[];
	filterOptions?: FilterSolvesOptions;
	disabled?: boolean;
	reverseOrder?: boolean;
}

// TODO NOW hotkeys for History
export default function History(props: Props) {
	const {solves: parentSolves, reverseOrder, disabled, filterOptions} = props;

	useSolveDb();

	let solves;
	if (parentSolves) {
		solves = parentSolves;
	} else {
		solves = fetchSolves(filterOptions);
	}

	function getLastSolve() {
		if (solves && solves.length) {
			return solves[solves.length - 1];
		}

		return null;
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

	function dnfLastSolve() {
		toggleDnfSolveDb(getLastSolve());
	}

	function plusTwoLastSolve() {
		togglePlusTwoSolveDb(getLastSolve());
	}

	function deleteLastSolve() {
		deleteSolveDb(getLastSolve());
	}

	if (!solves.length) {
		return (
			<div className="cd-history">
				<Empty text="No solves yet" />
			</div>
		);
	}

	const HOTKEY_HANDLERS = {
		TOGGLE_DNF: dnfLastSolve,
		DELETE_LAST_TIME: deleteLastSolve,
		TOGGLE_PLUS_TWO: plusTwoLastSolve,
	};

	return (
		<GlobalHotKeys handlers={HOTKEY_HANDLERS} keyMap={HOTKEY_MAP}>
			<div className="cd-history">
				<div className="cd-history__table">
					<div className="cd-history__list">
						<ReactList itemRenderer={renderSolveRow} length={solves.length} type="uniform" />
					</div>
				</div>
			</div>
		</GlobalHotKeys>
	);
}
