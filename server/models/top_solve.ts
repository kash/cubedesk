import {v4 as uuid} from 'uuid';
import {getPrisma} from '../database';
import {Prisma} from '@prisma/client';
import {getAverage} from '../../client/db/solves/stats/solves/average/average';
import {UserAccount} from '../schemas/UserAccount.schema';
import {Solve as SolveClientType} from '../schemas/Solve.schema';

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

export function submitTopAverage(user: UserAccount, solves: SolveClientType[]) {
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

const topSolveInclude = {
	solve: true,
	user: {
		include: {
			badges: {
				include: {
					badge_type: true,
				},
			},
			integrations: true,
			profile: {
				include: {
					pfp_image: true,
				},
			},
		},
	},
};

const topAverageInclude = {
	solve_1: true,
	solve_2: true,
	solve_3: true,
	solve_4: true,
	solve_5: true,
	user: {
		include: {
			badges: {
				include: {
					badge_type: true,
				},
			},
			integrations: true,
			profile: {
				include: {
					pfp_image: true,
				},
			},
		},
	},
};

export function getTopSolve(id) {
	return getPrisma().topSolve.findUnique({
		where: {
			id,
		},
		include: topSolveInclude,
	});
}

const notBannedWhere = {
	user: {
		banned_forever: false,
	},
	OR: [
		{
			user: {
				banned_until: null,
			},
		},
		{
			user: {
				banned_until: {
					lt: new Date(),
				},
			},
		},
	],
};

export function getTopSolves(cubeType, page) {
	const pageSize = 50;

	return getPrisma().topSolve.findMany({
		where: {
			cube_type: cubeType,
			...notBannedWhere,
		},
		orderBy: {
			time: 'asc',
		},
		include: topSolveInclude,
		skip: page * pageSize,
		take: pageSize,
	});
}

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

export function getTopAverage(id) {
	return getPrisma().topAverage.findUnique({
		where: {
			id,
		},
		include: topAverageInclude,
	});
}

export function getTopAverages(cubeType, page) {
	const pageSize = 50;

	return getPrisma().topAverage.findMany({
		where: {
			cube_type: cubeType,
			...notBannedWhere,
		},
		orderBy: {
			time: 'asc',
		},
		include: topAverageInclude,
		skip: page * pageSize,
		take: pageSize,
	});
}
