import type {Solve} from '@/generated/prisma/client';
import {Prisma} from '@/generated/prisma/client';
import {publicUserSelect} from '@/types/user';
import {v4 as uuid} from 'uuid';
import {getAverage} from '@/db/solves/stats/solves/average/average';
import {getPrisma} from '@/server/database';

export async function deleteAllPublishedSolves(user) {
	return Promise.all([deleteAllTopSolves(user), deleteAllTopAverages(user)]);
}

export function deleteTopSolve(cubeType, user) {
	return getPrisma().topSolve.deleteMany({
		where: {
			user_id: user.id,
			cube_type: cubeType,
		},
	});
}

export function deleteAllTopSolves(user) {
	return getPrisma().topSolve.deleteMany({
		where: {
			user_id: user.id,
		},
	});
}

export function deleteAllTopAverages(user) {
	return getPrisma().topAverage.deleteMany({
		where: {
			user_id: user.id,
		},
	});
}

export function deleteTopSolveById(id) {
	return getPrisma().topSolve.delete({
		where: {
			id,
		},
	});
}

export function deleteTopAverage(cubeType, user) {
	return getPrisma().topAverage.deleteMany({
		where: {
			user_id: user.id,
			cube_type: cubeType,
		},
	});
}

export function deleteTopAverageById(id) {
	return getPrisma().topAverage.delete({
		where: {
			id,
		},
	});
}

export function submitTopSolve(user, solve) {
	return getPrisma().topSolve.create({
		data: {
			id: uuid(),
			user_id: user.id,
			time: solve.time,
			solve_id: solve.id,
			cube_type: solve.cube_type,
		},
	});
}

export function submitTopAverage(user: {id: string}, solves: Array<Pick<Solve, 'id' | 'time' | 'cube_type'>>) {
	const avg = getAverage(solves);

	const data = {
		user_id: user.id,
		time: avg,
		cube_type: solves[0].cube_type,
	};

	for (let i = 0; i < solves.length; i += 1) {
		data[`solve_${i + 1}_id`] = solves[i].id;
	}

	return getPrisma().topAverage.create({
		data: data as Prisma.TopAverageUncheckedCreateInput,
	});
}

export function getUserTopSolves(user) {
	return getPrisma().topSolve.findMany({
		where: {
			user_id: user.id,
		},
		orderBy: {
			time: 'asc',
		},
		include: topSolveInclude,
	});
}

// user must stay a safe select — tRPC has no schema masking, and the old full
// include leaked password hashes and integration OAuth tokens
const topSolveInclude = {
	solve: true,
	user: {
		select: publicUserSelect,
	},
};

const topAverageInclude = {
	solve_1: true,
	solve_2: true,
	solve_3: true,
	solve_4: true,
	solve_5: true,
	user: {
		select: publicUserSelect,
	},
};

export function getUserTopAverages(user) {
	return getPrisma().topAverage.findMany({
		where: {
			user_id: user.id,
		},
		orderBy: {
			time: 'asc',
		},
		include: topAverageInclude,
	});
}
