import React from 'react';
import { api } from '../../../trpc/react';
import {getSolveDb} from './init';
import {emitEvent} from '../../util/event_handler';
import {clearSolveStatCache} from './stats/solves/caching';
import {toastError} from '../../util/toast';
import {getStore} from '../../../components/store';
import {openModal} from '../../actions/general';
import ConfirmModal from '../../../components/common/confirm_modal/ConfirmModal';
import {checkForPB} from './stats/solves/pb';
import {getSetting} from '../settings/query';
import {Solve} from '@/generated/zod';
import {checkForWorst} from './stats/solves/worst';
import {sanitizeSolve} from '../../../shared/solve';
import {checkForCurrentAverageUpdate} from './stats/solves/cache/average_cache';
import { updateOfflineHash } from "@/lib/util/offline";

export async function createSolveDb(solveInput: Solve) {
	const solveDb = getSolveDb();

	const solve = sanitizeSolve(solveInput);
	solveDb.insert({
		...solve,
	});

	postProcessDbUpdate(solve, true);

	if (!solve.demo_mode) {
		try {
			// Use direct fetch to tRPC endpoint for non-React contexts
			const response = await fetch('/api/trpc/solve.createSolve', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'x-trpc-source': 'react',
				},
				body: JSON.stringify({
					json: {
						time: solve.time,
						raw_time: solve.raw_time,
						cube_type: solve.cube_type,
						scramble: solve.scramble,
						session_id: solve.session_id,
						started_at: solve.started_at?.toString(),
						ended_at: solve.ended_at?.toString(),
						dnf: solve.dnf,
						plus_two: solve.plus_two,
						notes: solve.notes,
						from_timer: solve.from_timer || true,
						trainer_name: solve.trainer_name,
						is_smart_cube: solve.is_smart_cube,
						training_session_id: solve.training_session_id,
						smart_device_id: solve.smart_device_id,
						smart_turn_count: solve.smart_turn_count,
						smart_turns: solve.smart_turns,
						smart_put_down_time: solve.smart_put_down_time,
						inspection_time: solve.inspection_time,
					},
				}),
			});

			if (!response.ok) {
				throw new Error('Failed to create solve');
			}
		} catch (e: unknown) {
			toastError('Could not save solve. Please check your connection.');
		}
	} else {
		await createDemoSolve(solve);
	}
}

async function createDemoSolve(solve: Solve) {
	const browserSessionId = getStore().getState()?.general?.browser_session_id;

	try {
		// Create a direct tRPC client call using the proper format
		const response = await fetch('/api/trpc/demoSolve.create', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'x-trpc-source': 'react',
			},
			body: JSON.stringify({
				json: {
					raw_time: solve.raw_time,
					cube_type: solve.cube_type,
					scramble: solve.scramble,
					started_at: solve.started_at?.toString(),
					ended_at: solve.ended_at?.toString(),
					demo_session_id: browserSessionId,
				},
			}),
		});

		if (!response.ok) {
			throw new Error('Failed to create demo solve');
		}
	} catch (e: unknown) {
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
			await api.solve.deleteSolve.mutate({
				id: solve.id,
			});
		} catch (e: unknown) {
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
			await api.solve.updateSolve.mutate({
				id: solve.id,
				input: {
					...input,
					time: solve.time,
				},
			});
		} catch (e: unknown) {
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
		solve.time = solve.raw_time + 2;
	} else {
		solve.time = solve.raw_time;
	}
}
