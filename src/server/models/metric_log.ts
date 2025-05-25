import {getPrisma} from '../database';
import {MetricLog} from '@prisma/client';
import {v4 as uuid} from 'uuid';
import {MetricLogType} from '../@types/enums';
import {UserAccount} from '../schemas/UserAccount.schema';

export function createMetricLog(user: UserAccount, actionType: MetricLogType, metricValue: number = null, actionsDetails: string = '') {
	return getPrisma().metricLog.create({
		data: {
			id: uuid(),
			user_email: user.email,
			metric_type: actionType,
			metric_value: metricValue,
			metric_details: actionsDetails,
		},
	});
}

export async function deleteMetricLog(metricLog: MetricLog) {
	return getPrisma().metricLog.delete({
		where: {
			id: metricLog.id,
		},
	});
}
