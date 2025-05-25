import {getPrisma} from '../database';

export function createSolveView(viewer, solve) {
	return getPrisma().solveView.create({
		data: {
			solve_id: solve.id,
			viewer_id: viewer?.id || null,
			user_id: solve.user_id,
		},
	});
}

export function deleteSolveViewsBySolveId(solveId) {
	return getPrisma().solveView.deleteMany({
		where: {
			solve_id: solveId,
		},
	});
}
