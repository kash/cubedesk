import {updateSolveDb} from '@/lib/db/solves/update';
import {Solve} from '@/generated/zod';

export function toggleDnfSolveDb(solve: Solve) {
	if (!solve) {
		return;
	}

	solve.dnf = !solve.dnf;
	updateSolveDb(solve, {
		dnf: solve.dnf,
	});
}

export function togglePlusTwoSolveDb(solve: Solve) {
	if (!solve) {
		return;
	}

	solve.plus_two = !solve.plus_two;
	updateSolveDb(solve, {
		plus_two: solve.plus_two,
	});
}

export function setOkSolveDb(solve: Solve) {
	if (!solve) {
		return;
	}

	solve.dnf = false;
	solve.plus_two = false;
	updateSolveDb(solve, {
		dnf: solve.dnf,
		plus_two: solve.plus_two
	});
}
