import {z} from 'zod';
import {createTRPCRouter, modProcedure, userProcedure} from '@/server/trpc';
import {TRPCError} from '@trpc/server';
import {getUserById, publicUserInclude} from '@/server/models/user_account';
import {getPrismaClient} from '@/server/services/database';

// Zod schemas matching the GraphQL types
const PublicUserAccountSchema = z.object({
	id: z.string(),
	username: z.string(),
	verified: z.boolean(),
	created_at: z.date(),
	banned_forever: z.boolean(),
	is_pro: z.boolean(),
	banned_until: z.date().nullable(),
	admin: z.boolean(),
	mod: z.boolean(),
});

const ReportSchema = z.object({
	id: z.string(),
	created_by_id: z.string(),
	reason: z.string(),
	reported_user_id: z.string(),
	resolved_at: z.date().nullable(),
	created_at: z.date(),
	created_by: PublicUserAccountSchema.optional(),
	reported_user: PublicUserAccountSchema.optional(),
});

const ReportSummarySchema = z.object({
	user: PublicUserAccountSchema.optional(),
	count: z.number(),
	first_report: z.date(),
	last_report: z.date(),
	reports: z.array(ReportSchema).optional(),
});

type Report = z.infer<typeof ReportSchema>;
type ReportSummary = z.infer<typeof ReportSummarySchema>;

async function getUnresolvedReports(): Promise<ReportSummary[]> {
	const prisma = getPrismaClient();

	const reports = await prisma.report.findMany({
		where: {
			resolved_at: null,
		},
		include: {
			created_by: publicUserInclude,
			reported_user: publicUserInclude,
		},
		orderBy: {
			created_at: 'asc',
		},
	});

	// Create report summary
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

		userMap[userId].reports!.push(report as any);
		userMap[userId].count++;

		if (userMap[userId].first_report > report.created_at) {
			userMap[userId].first_report = report.created_at;
		}
		if (userMap[userId].last_report < report.created_at) {
			userMap[userId].last_report = report.created_at;
		}
	}

	return Object.values(userMap).sort((a, b) => b.count - a.count);
}

function createReport(userId: string, reason: string, createdById: string): Promise<Report> {
	const prisma = getPrismaClient();

	return prisma.report.create({
		data: {
			reason,
			reported_user_id: userId,
			created_by_id: createdById,
		},
	}) as any;
}

export function resolveReportsOfUserId(userId: string) {
	const prisma = getPrismaClient();

	return prisma.report.updateMany({
		where: {
			reported_user_id: userId,
		},
		data: {
			resolved_at: new Date(),
		},
	});
}

export const reportRouter = createTRPCRouter({
	reports: modProcedure
		.output(z.array(ReportSummarySchema))
		.query(async () => {
			return getUnresolvedReports();
		}),

	reportProfile: userProcedure
		.input(z.object({
			userId: z.string(),
			reason: z.string(),
		}))
		.output(ReportSchema)
		.mutation(async ({ctx, input}) => {
			const user = await getUserById(input.userId);

			if (!user) {
				throw new TRPCError({code: 'NOT_FOUND', message: 'User not found'});
			}

			if (user.id === ctx.me.id) {
				throw new TRPCError({code: 'FORBIDDEN', message: 'You cannot report yourself'});
			}

			return createReport(user.id, input.reason, ctx.me.id);
		}),

	resolveReports: modProcedure
		.input(z.object({
			userId: z.string(),
		}))
		.output(z.number())
		.mutation(async ({input}) => {
			const res = await resolveReportsOfUserId(input.userId);
			return res.count;
		}),
});