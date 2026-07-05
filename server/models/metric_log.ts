import {UserAccount} from '@/types/user';
import {v4 as uuid} from 'uuid';
import {MetricLogType} from '../@types/enums';
import {getPrisma} from '../database';

export function createMetricLog(
	user: UserAccount,
	actionType: MetricLogType,
	metricValue: number | null = null,
	actionsDetails: string = ''
) {
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
