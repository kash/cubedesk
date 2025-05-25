import React from 'react';
import './ReportSummary.scss';
import block from '../../../../styles/bem';
import Avatar from '../../../common/avatar/Avatar';
import Tag from '../../../common/tag/Tag';
import {getDateFromNow} from '../../../../lib/util/dates';
import Button from '../../../common/button/Button';
import {api} from '@/trpc/react';

const b = block('admin-report-summary');

interface Props {
	reportSummary: any; // Using any for now since we're migrating away from generated types
}

export default function ReportSummary(props: Props) {
	const {reportSummary} = props;

	const resolveReportsMutation = api.report.resolveReports.useMutation();

	const rows = reportSummary.reports?.map((report: any) => <SingleReport key={report.id} report={report} />);
	const count = reportSummary.count;
	const topInfo = (
		<div className={b('top-info')}>
			<Tag backgroundColor="orange" text={`${count} report${count === 1 ? '' : 's'}`} />
			<Tag small text={`Last reported ${getDateFromNow(reportSummary.last_report)}`} />
			<Tag small text={`First reported ${getDateFromNow(reportSummary.first_report)}`} />
		</div>
	);

	function markAsResolved() {
		resolveReportsMutation.mutate({
			userId: reportSummary.user.id,
		});
	}

	if (resolveReportsMutation.isSuccess) {
		return null;
	}

	return (
		<div className={b()}>
			<div className={b('body')}>
				{topInfo}
				<div className={b('user')}>
					<Avatar showOptions user={reportSummary.user} />
				</div>
				<div className={b('rows')}>{rows}</div>
				<div className={b('actions')}>
					<Button
						text="Mark as Resolve"
						loading={resolveReportsMutation.isPending}
						onClick={markAsResolved}
						primary
						glow
					/>
				</div>
			</div>
		</div>
	);
}

interface SingleReportProps {
	report: any;
}

function SingleReport(props: SingleReportProps) {
	const {report} = props;

	const byUsername = report.created_by.username;

	return (
		<div className={b('report')}>
			<p className={b('reason')}>{report.reason}</p>
			<a href={`/user/${byUsername}`} target="_blank" className={b('reporter')}>
				{byUsername}
			</a>
		</div>
	);
}
