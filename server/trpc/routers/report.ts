import {getPrisma} from '@/server/database';
import {getUserById} from '@/server/models/user_account';
import {adminProcedure, protectedProcedure, router} from '@/server/trpc/trpc';
import {reportInclude, ReportSummary} from '@/types/report';
import {TRPCError} from '@trpc/server';
import {z} from 'zod';

export function resolveReportsOfUserId(userId: string) {
	return getPrisma().report.updateMany({
		where: {
			reported_user_id: userId,
		},
		data: {
			resolved_at: new Date(),
		},
	});
}

export const reportRouter = router({
	// Unresolved reports, grouped per reported user
	list: adminProcedure.query(async () => {
		const reports = await getPrisma().report.findMany({
			where: {
				resolved_at: null,
			},
			include: reportInclude,
			orderBy: {
				created_at: 'asc',
			},
		});

		const userMap: Record<string, ReportSummary> = {};
		for (const report of reports) {
			const userId = report.reported_user_id;

			if (!userMap[userId]) {
				userMap[userId] = {
					user: report.reported_user,
					count: 0,
					first_report: report.created_at,
					last_report: report.created_at,
					reports: [],
				};
			}

			userMap[userId].reports.push(report);
			userMap[userId].count++;

			if (userMap[userId].first_report > report.created_at) {
				userMap[userId].first_report = report.created_at;
			}
			if (userMap[userId].last_report < report.created_at) {
				userMap[userId].last_report = report.created_at;
			}
		}

		return Object.values(userMap).sort((a, b) => b.count - a.count);
	}),

	reportProfile: protectedProcedure
		.input(
			z.object({
				userId: z.string(),
				reason: z.string(),
			})
		)
		.mutation(async ({ctx, input}) => {
			const user = await getUserById(input.userId);

			if (!user) {
				throw new TRPCError({code: 'NOT_FOUND', message: 'User not found'});
			}

			if (user.id === ctx.user.id) {
				throw new TRPCError({code: 'FORBIDDEN', message: 'You cannot report yourself'});
			}

			const report = await ctx.prisma.report.create({
				data: {
					reason: input.reason,
					reported_user_id: user.id,
					created_by_id: ctx.user.id,
				},
			});

			return {id: report.id};
		}),

	resolve: adminProcedure
		.input(
			z.object({
				userId: z.string(),
			})
		)
		.mutation(async ({input}) => {
			const res = await resolveReportsOfUserId(input.userId);
			return res.count;
		}),
});
