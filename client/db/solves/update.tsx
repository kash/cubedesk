import {getStore} from '@/components/store';
import {beginOp, LocalOp} from '@/db/persist/writes';
import {getSolveDb} from '@/db/solves/init';
import {checkForCurrentAverageUpdate} from '@/db/solves/stats/solves/cache/average-cache';
import {clearAllSolveStatCache, clearSolveStatCache} from '@/db/solves/stats/solves/caching';
import {checkForPB} from '@/db/solves/stats/solves/pb';
import {checkForWorst} from '@/db/solves/stats/solves/worst';
import {sanitizeSolve} from '@/shared/solve';
import {Solve} from '@/types/solve';
import {emitEvent} from '@/util/event_handler';
import {toastError} from '@/util/toast';
import {trpc} from '@/util/trpc';

export async function createSolveDb(solveInput: Solve) {
	const solve = sanitizeSolve(solveInput);
	const stored = getSolveDb().insert({
		...solve,
	});

	postProcessDbUpdate(solve, true);

	if (solve.demo_mode) {
		await createDemoSolve(solve);
		return;
	}

	const op = beginOp('solve.create', {putSolves: [stored]});
	await op.durable;

	try {
		await trpc.solve.create.mutate(solve);
		op.confirm();
	} catch (e) {
		op.fail();
		toastError('Could not save solve. Please check your connection.');
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

/**
 * Removes the solve right away, then deletes it on the server in the background. Restores it if the server fails.
 */
export function deleteSolveDb(solve: Solve) {
	getSolveDb().remove(solve.id);
	postProcessDbUpdate(solve, false);

	if (!solve.demo_mode) {
		void deleteSolveOnServer(solve);
	}
}

async function deleteSolveOnServer(solve: Solve) {
	const op = beginOp('solve.delete', {deleteSolveIds: [solve.id]});
	await op.durable;

	try {
		await trpc.solve.delete.mutate({id: solve.id});
		op.confirm();
	} catch (error) {
		getSolveDb().put(solve);
		// The restored solve may belong in any cached stat, not just the ones it was removed from
		clearAllSolveStatCache();
		emitEvent('solveDbUpdatedEvent', solve);

		op.fail({putSolves: [solve]});
		toastError('Could not delete solve. Please check your connection.');
	}
}

export async function updateSolveDb(solve: Solve, input: Partial<Solve> = {}, updateLocalDb = true) {
	updateSolveTime(solve);

	let op: LocalOp | null = null;
	if (updateLocalDb) {
		const updated = getSolveDb().update({
			...solve,
			...input,
		});

		postProcessDbUpdate(solve, false);

		if (!solve.demo_mode && updated) {
			op = beginOp('solve.update', {putSolves: [updated]});
			await op.durable;
		}
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
			op?.confirm();
		} catch (e) {
			op?.fail();
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

	emitEvent('solveDbUpdatedEvent', solve);
}

function updateSolveTime(solve: Solve) {
	if (solve.dnf) {
		solve.time = -1;
	} else if (solve.plus_two) {
		solve.time = (solve.raw_time ?? 0) + 2;
	} else {
		solve.time = solve.raw_time ?? 0;
	}
}
