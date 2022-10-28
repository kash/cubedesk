import {v4 as uuid} from 'uuid';
import {getPrisma} from '../database';
import {getProfileById} from './profile';
import {getTopAverage, getTopSolve} from './top_solve';

export const REPORT_TYPE_PROFILE = 'profile';
export const REPORT_TYPE_TOP_SOLVE = 'top_solve';
export const REPORT_TYPE_TOP_AVERAGE = 'top_average';

export function getReport(user, recordId) {
	return getPrisma().report.findMany({
		where: {
			user_id: user.id,
			record_id: recordId,
		},
	});
}

export function getAllReports() {
	return getPrisma().report.findMany({
		where: {
			resolved: false,
		},
	});
}

export async function userHasPendingReportsForRecordId(user, recordId) {
	const res = getPrisma().report.findMany({
		where: {
			user_id: user.id,
			record_id: recordId,
			resolved: false,
		},
	});

	return res?.length || 0;
}

export function resolveAllReportsByRecordId(recordId) {
	return getPrisma().report.updateMany({
		where: {
			record_id: recordId,
			resolved: false,
		},
		data: {
			resolved: true,
		},
	});
}

export async function createReport(user, recordType, recordId, reason) {
	let reportFor = null;

	switch (recordType) {
		case REPORT_TYPE_PROFILE: {
			const profile = await getProfileById(recordId);
			reportFor = profile.user_id;
			break;
		}
		case REPORT_TYPE_TOP_SOLVE: {
			const solve = await getTopSolve(recordId);
			reportFor = solve.user_id;
			break;
		}
		case REPORT_TYPE_TOP_AVERAGE: {
			const solve = await getTopAverage(recordId);
			reportFor = solve.user_id;
			break;
		}
	}

	return getPrisma().report.create({
		data: {
			id: uuid(),
			reason,
			user_id: user.id,
			report_for_user_id: reportFor,
			record_type: recordType,
			record_id: recordId,
		},
	});
}
