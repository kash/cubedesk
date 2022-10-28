import {Arg, Authorized, Ctx, Mutation, Query, Resolver} from 'type-graphql';
import {GraphQLContext} from '../@types/interfaces/server.interface';
import {Role} from '../middlewares/auth';
import {Report, ReportSummary} from '../schemas/Report.schema';
import GraphQLError from '../util/graphql_error';
import {ErrorCode} from '../constants/errors';
import {getUserById, publicUserInclude} from '../models/user_account';

async function getUnresolvedReports(context: GraphQLContext) {
	const {prisma} = context;

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
}

function createReport(context: GraphQLContext, userId: string, reason: string) {
	const {prisma, user} = context;

	return prisma.report.create({
		data: {
			reason,
			reported_user_id: userId,
			created_by_id: user.id,
		},
	});
}

export function resolveReportsOfUserId(context: GraphQLContext, userId: string) {
	const {prisma} = context;

	return prisma.report.updateMany({
		where: {
			reported_user_id: userId,
		},
		data: {
			resolved_at: new Date(),
		},
	});
}

@Resolver()
export class ReportResolver {
	@Authorized([Role.MOD])
	@Query(() => [ReportSummary])
	async reports(@Ctx() context: GraphQLContext) {
		return getUnresolvedReports(context);
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => Report)
	async reportProfile(@Ctx() context: GraphQLContext, @Arg('userId') userId: string, @Arg('reason') reason: string) {
		const user = await getUserById(userId);

		if (!user) {
			throw new GraphQLError(ErrorCode.NOT_FOUND, 'User not found');
		}

		if (user.id === context.user.id) {
			throw new GraphQLError(ErrorCode.FORBIDDEN, 'You cannot report yourself');
		}

		return createReport(context, user.id, reason);
	}

	@Authorized([Role.MOD])
	@Mutation(() => Number)
	async resolveReports(@Ctx() context: GraphQLContext, @Arg('userId') userId: string) {
		const res = await resolveReportsOfUserId(context, userId);
		return res.count;
	}
}
