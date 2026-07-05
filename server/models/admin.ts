import type {Prisma} from '@/generated/prisma/client';
import {
	AdminUser,
	adminUserSelect,
	UserAccountMatchesSummary,
	UserAccountSolvesSummary,
	UserAccountSummary,
} from '@/types/admin';
import {getPrisma} from '@/server/database';
import {trainerExceptions} from '@/server/models/solve';

export async function getUserAccountForAdmin(userId: string): Promise<AdminUser | null> {
	const summary = await getUserForAdminSummary(userId);
	if (!summary) {
		return null;
	}

	const userRelations = await getPrisma().userAccount.findUnique({
		where: {
			id: userId,
		},
		select: adminUserSelect,
	});

	if (!userRelations) {
		return null;
	}

	return {
		...userRelations,
		summary,
	};
}

async function getUserForAdminSummary(userId: string): Promise<UserAccountSummary | null> {
	const agg = await getPrisma().userAccount.findUnique({
		where: {
			id: userId,
		},
		include: {
			_count: {
				select: {
					solves: true,
					reports_created: true,
					reports_for: true,
					profile_views: true,
					bans: true,
				},
			},
		},
	});

	const timerSolves = await getUserForAdminSolvesSummary(userId, {
		OR: trainerExceptions,
	});

	const matchSolves = await getUserForAdminSolvesSummary(userId, {
		match: null,
	});

	if (!agg || !agg._count) {
		return null;
	}

	const matchesSummary = await getUserForAdminMatchesSummary(userId);

	return {
		...agg._count,
		matches: matchesSummary,
		timer_solves: timerSolves,
		match_solves: matchSolves,
	};
}

async function getUserForAdminSolvesSummary(
	userId: string,
	where: Prisma.SolveWhereInput = {}
): Promise<UserAccountSolvesSummary[]> {
	const sum = await getPrisma().solve.groupBy({
		by: ['cube_type'],
		_avg: {
			time: true,
		},
		_sum: {
			time: true,
		},
		_min: {
			time: true,
		},
		_count: {
			time: true,
		},
		_max: {
			time: true,
		},
		where: {
			user_id: userId,
			dnf: false,
			...where,
		},
	});

	return sum.map((row) => ({
		sum: row._sum.time,
		count: row._count.time,
		average: row._avg.time,
		min_time: row._min.time,
		max_time: row._max.time,
		cube_type: row.cube_type,
	}));
}

async function getUserForAdminMatchesSummary(userId: string): Promise<UserAccountMatchesSummary> {
	const count = getPrisma().matchParticipant.count({
		where: {
			user_id: userId,
		},
	});

	const wins = getPrisma().match.count({
		where: {
			winner_id: userId,
		},
	});

	const res = await Promise.all([count, wins]);

	const total = res[0];
	const winCount = res[1];
	const losses = total - winCount;

	return {
		count: total,
		wins: winCount,
		losses,
	};
}
