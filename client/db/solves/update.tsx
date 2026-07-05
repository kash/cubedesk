import ConfirmModal from '@/components/common/ConfirmModal';
import {Solve} from '@/types/solve';
import React from 'react';
import {sanitizeSolve} from '../../../shared/solve';
import {openModal} from '../../actions/general';
import {updateOfflineHash} from '../../components/layout/offline';
import {getStore} from '../../components/store';
import {emitEvent} from '../../util/event_handler';
import {toastError} from '../../util/toast';
import {trpc} from '../../util/trpc';
import {getSetting} from '../settings/query';
import {getSolveDb} from './init';
import {checkForCurrentAverageUpdate} from './stats/solves/cache/average-cache';
import {clearSolveStatCache} from './stats/solves/caching';
import {checkForPB} from './stats/solves/pb';
import {checkForWorst} from './stats/solves/worst';

export async function createSolveDb(solveInput: Solve) {
	const solveDb = getSolveDb();

	const solve = sanitizeSolve(solveInput);
	solveDb.insert({
		...solve,
	});

	postProcessDbUpdate(solve, true);

	if (!solve.demo_mode) {
		try {
			await trpc.solve.create.mutate(solve);
		} catch (e) {
			toastError('Could not save solve. Please check your connection.');
		}
	} else {
		await createDemoSolve(solve);
	}
}

async function createDemoSolve(solve: Solve) {
	const browserSessionId = getStore().getState()?.general?.browser_session_id;

	try {
		await trpc.demoSolve.create.mutate({
			raw_time: solve.raw_time,
			cube_type: solve.cube_type,
			scramble: solve.scramble,
			started_at: solve.started_at,
			ended_at: solve.ended_at,
			demo_session_id: browserSessionId,
		});
	} catch (e) {
		toastError('Could not save solve. Please check your connection.');
	}
}

export async function deleteSolveDb(solve: Solve, confirmed: boolean = false) {
	const store = getStore();

	const confirmDelete = getSetting('confirm_delete_solve');
	if (confirmDelete && !confirmed) {
		store.dispatch(
			openModal(
				<ConfirmModal
					description="Are you sure you want to delete this solve?"
					buttonText="Delete solve"
					hideInput
					title="Delete solve"
					triggerAction={() => deleteSolveDb(solve, true)}
				/>
			)
		);
		return;
	}

	const solveDb = getSolveDb();

	solveDb.remove(solve);
	postProcessDbUpdate(solve, false);

	if (!solve.demo_mode) {
		try {
			await trpc.solve.delete.mutate({
				id: solve.id,
			});
		} catch (e) {
			toastError('Could not delete solve. Please check your connection.');
		}
	}
}

export async function updateSolveDb(solve: Solve, input: Partial<Solve> = {}, updateLocalDb = true) {
	updateSolveTime(solve);
	const solveDb = getSolveDb();

	if (updateLocalDb) {
		solveDb.update({
			...solve,
			...input,
		});

		postProcessDbUpdate(solve, false);
	}

	if (!solve.demo_mode) {
		try {
			await trpc.solve.update.mutate({
				id: solve.id,
				input: {
					...input,
					time: solve.time,
				},
			});
		} catch (e) {
			toastError('Could not update solve. Please check your connection.');
		}
	}
}

function postProcessDbUpdate(solve: Solve, isNew: boolean) {
	clearSolveStatCache({
		solve: {
			id: solve.id,
		},
	});

	// ORDER MATTERS!
	checkForPB(solve, isNew);
	checkForWorst(solve, isNew);
	checkForCurrentAverageUpdate(solve, isNew);

	if (!solve.demo_mode) {
		updateOfflineHash();
	}

	emitEvent('solveDbUpdatedEvent', solve);
}

export function updateSolveTime(solve: Solve) {
	if (solve.dnf) {
		solve.time = -1;
	} else if (solve.plus_two) {
		solve.time = (solve.raw_time ?? 0) + 2;
	} else {
		solve.time = solve.raw_time ?? 0;
	}
}
