import {v4 as uuid} from 'uuid';
import {getPrisma} from '../database';
import {UserAccount} from '@/types/user';

export const REPORT_TYPE_PROFILE = 'profile';
export const REPORT_TYPE_TOP_SOLVE = 'top_solve';
export const REPORT_TYPE_TOP_AVERAGE = 'top_average';

export function getReport(user: UserAccount, reportedUserId: string) {
	return getPrisma().report.findMany({
		where: {
			created_by_id: user.id,
			reported_user_id: reportedUserId,
		},
	});
}

export function getAllReports() {
	return getPrisma().report.findMany({
		where: {
			resolved_at: null,
		},
	});
}

export async function userHasPendingReportsForRecordId(user: UserAccount, reportedUserId: string) {
	const res = await getPrisma().report.findMany({
		where: {
			created_by_id: user.id,
			reported_user_id: reportedUserId,
			resolved_at: null,
		},
	});

	return res?.length || 0;
}

export function resolveAllReportsByRecordId(reportedUserId: string) {
	return getPrisma().report.updateMany({
		where: {
			reported_user_id: reportedUserId,
			resolved_at: null,
		},
		data: {
			resolved_at: new Date(),
		},
	});
}

export async function createReport(
	user: UserAccount,
	_recordType: string,
	reportedUserId: string,
	reason: string
) {
	return getPrisma().report.create({
		data: {
			id: uuid(),
			reason,
			created_by_id: user.id,
			reported_user_id: reportedUserId,
		},
	});
}
