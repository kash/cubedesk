import type {Prisma} from '@/generated/prisma/client';
import {PublicUser, publicUserSelect} from './user';

export const reportInclude = {
	created_by: {
		select: publicUserSelect,
	},
	reported_user: {
		select: publicUserSelect,
	},
} satisfies Prisma.ReportInclude;

export type ReportWithUsers = Prisma.ReportGetPayload<{include: typeof reportInclude}>;

// Unresolved reports grouped per reported user
export interface ReportSummary {
	user: PublicUser;
	count: number;
	first_report: Date;
	last_report: Date;
	reports: ReportWithUsers[];
}
