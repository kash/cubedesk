import {v4 as uuid} from 'uuid';
import {Prisma} from '@/generated/prisma/client';
import {getPrisma} from '../database';
import uniqid from 'uniqid';
import {publicUserInclude} from './user_account';
import {Solve, SolveInput} from '@/types/solve';
import {UserAccount} from '@/types/user';
import {generateRandomCode} from '../../shared/code';
import {sanitizeSolve} from '../../shared/solve';

export function deleteTrainingSolves(id, user) {
	return getPrisma().solve.deleteMany({
		where: {
			user_id: user.id,
			trainer_name: id,
		},
	});
}

export const trainerExceptions = [
	{
		trainer_name: undefined,
	},
	{
		trainer_name: null,
	},
	{
		trainer_name: '',
	},
];

export function getFilteredSolveList(user, filters, orderBy, offset, limit) {
	return Promise.all([
		getPrisma().solve.count({
			where: {
				user_id: user.id,
				from_timer: true,
				AND: filters,
			},
		}),
		getPrisma().solve.findMany({
			where: {
				user_id: user.id,
				from_timer: true,
				AND: filters,
			},
			skip: offset,
			take: limit,
			orderBy,
		}),
	]);
}

export function deleteAllTrainingSolves(user) {
	return getPrisma().solve.deleteMany({
		where: {
			AND: [{user_id: user.id}],
			NOT: trainerExceptions,
		},
	});
}

export function deleteAllSolvesByCubeType(cubeType, user) {
	return getPrisma().solve.deleteMany({
		where: {
			user_id: user.id,
			cube_type: cubeType,
			from_timer: true,
		},
	});
}

export function getSolveTimesForCubeType(user, cubeType) {
	return getPrisma().solve.deleteMany({
		select: {
			time: true,
		},
		where: {
			user_id: user.id,
			cube_type: cubeType,
			from_timer: true,
		},
	});
}

export function deleteAllSolves(user) {
	return getPrisma().solve.deleteMany({
		where: {
			user_id: user.id,
			from_timer: true,
		},
	});
}

export function getSolveByShareCode(shareCode) {
	return getPrisma().solve.findUnique({
		where: {
			share_code: shareCode,
		},
		include: {
			user: publicUserInclude,
			top_solve: true,
			top_average_1: true,
			top_average_2: true,
			top_average_3: true,
			top_average_4: true,
			top_average_5: true,
			solve_views: true,
			smart_device: true,
			solve_method_steps: true,
		},
	});
}

export function getBasicSolve(id) {
	return getPrisma().solve.findUnique({
		where: {
			id,
		},
	});
}

export function getSolve(id) {
	return getPrisma().solve.findUnique({
		where: {
			id,
		},
		include: {
			user: publicUserInclude,
			top_solve: true,
			top_average_1: true,
			top_average_2: true,
			top_average_3: true,
			top_average_4: true,
			top_average_5: true,
			smart_device: true,
			solve_views: true,
			solve_method_steps: true,
		},
	});
}

export function updateSolveLiteral(id, data) {
	return getPrisma().solve.update({
		where: {
			id,
		},
		data,
	});
}

export function updateSolve(id: string, solve: Partial<SolveInput>) {
	solve = sanitizeSolve(solve);

	if (!solve.plus_two) {
		solve.plus_two = false;
	}

	if (!solve.dnf) {
		solve.dnf = false;
	}

	return getPrisma().solve.update({
		where: {
			id,
		},
		data: {
			...solve,
			id,
		},
	});
}

export function bulkCreateSolves(user: UserAccount, solves: SolveInput[]) {
	const data: Prisma.SolveCreateManyInput[] = [];
	for (let i = 0; i < solves.length; i += 1) {
		let solve = solves[i];
		const id = uuid();
		solve = sanitizeSolve(solve);
		const shareCode = generateRandomCode(8);

		data.push({
			...solve,
			bulk: true,
			id,
			user_id: user.id,
			share_code: shareCode,
		});
	}

	return getPrisma().solve.createMany({
		data,
	});
}

export function addShareCodeToSolve(solve: Solve) {
	if (solve.share_code) {
		return;
	}
	const shareCode = generateRandomCode(8);

	return getPrisma().solve.update({
		where: {
			id: solve.id,
		},
		data: {
			share_code: shareCode,
		},
	});
}

export function createSolve(user: UserAccount, input: SolveInput) {
	const id = input.id || uniqid('s-');

	const solve = sanitizeSolve(input);
	const shareCode = generateRandomCode(8);

	return getPrisma().solve.create({
		data: {
			...solve,
			id,
			share_code: shareCode,
			user_id: user.id,
		},
	});
}

export function deleteSolve(solve: Pick<Solve, 'id'>) {
	return getPrisma().solve.delete({
		where: {
			id: solve.id,
		},
	});
}

export function bulkDeleteSolves(userId: string, solveIds: string[]) {
	return getPrisma().solve.deleteMany({
		where: {
			user_id: userId,
			id: {
				in: solveIds,
			},
		},
	});
}

export function bulkUpdateSolves(userId: string, solveIds: string[], data: Prisma.SolveUncheckedUpdateManyInput) {
	return getPrisma().solve.updateMany({
		where: {
			user_id: userId,
			id: {
				in: solveIds,
			},
		},
		data,
	});
}

export function bulkDnfSolves(userId: string, solveIds: string[]): Promise<number> {
	return getPrisma().$executeRaw`
        UPDATE
            solve
        SET dnf = TRUE, "time" = -1
		WHERE user_id = ${userId}
		  	AND id IN (${Prisma.join(solveIds)})
	`;
}

export async function bulkPlusTwoSolves(userId: string, solveIds: string[]): Promise<number> {
	const plusTwoSolves = getPrisma().$executeRaw`
        UPDATE
            solve
        SET plus_two = TRUE,
            "time" = raw_time + 2
		WHERE user_id = ${userId}
		  	AND id IN (${Prisma.join(solveIds)})
	`;
	const updateTime = getPrisma().$executeRaw`
        UPDATE
            solve
        SET "time" = raw_time + 2
		WHERE user_id = ${userId}
		  	AND id IN (${Prisma.join(solveIds)})
			AND dnf = FALSE
	`;

	const [updated] = await Promise.all([plusTwoSolves, updateTime]);
	return updated;
}

export function bulkOkSolves(userId: string, solveIds: string[]): Promise<number> {
	return getPrisma().$executeRaw`
        UPDATE
            solve
        SET "time" = raw_time,
            dnf = false,
            plus_two = false
		WHERE user_id = ${userId} AND id IN (${Prisma.join(solveIds)})
	`;
}
