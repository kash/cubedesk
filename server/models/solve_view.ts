import type {Solve, UserAccount} from '@/generated/prisma/client';
import {getPrisma} from '@/server/database';

export function createSolveView(viewer: UserAccount | null | undefined, solve: Solve) {
	return getPrisma().solveView.create({
		data: {
			solve_id: solve.id,
			viewer_id: viewer?.id || null,
			user_id: solve.user_id,
		},
	});
}

export function deleteSolveViewsBySolveId(solveId: string) {
	return getPrisma().solveView.deleteMany({
		where: {
			solve_id: solveId,
		},
	});
}
