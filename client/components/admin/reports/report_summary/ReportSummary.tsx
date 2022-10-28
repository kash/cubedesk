import React from 'react';
import './ReportSummary.scss';
import {Report, ReportSummary as ReportSummarySchema} from '../../../../@types/generated/graphql';
import block from '../../../../styles/bem';
import Avatar from '../../../common/avatar/Avatar';
import Tag from '../../../common/tag/Tag';
import {getDateFromNow} from '../../../../util/dates';
import Button from '../../../common/button/Button';
import {gql, useMutation} from '@apollo/client';

const b = block('admin-report-summary');

const RESOLVE_REPORTS_MUTATION = gql`
	mutation Mutate($userId: String) {
		resolveReports(userId: $userId)
	}
`;

interface Props {
	reportSummary: ReportSummarySchema;
}

export default function ReportSummary(props: Props) {
	const {reportSummary} = props;

	const [resolveReports, resolveReportsData] = useMutation<
		{resolveReports: number},
		{
			userId: string;
		}
	>(RESOLVE_REPORTS_MUTATION);

	const rows = reportSummary.reports.map((report: Report) => <SingleReport key={report.id} report={report} />);
	const count = reportSummary.count;
	const topInfo = (
		<div className={b('top-info')}>
			<Tag backgroundColor="orange" text={`${count} report${count === 1 ? '' : 's'}`} />
			<Tag small text={`Last reported ${getDateFromNow(reportSummary.last_report)}`} />
			<Tag small text={`First reported ${getDateFromNow(reportSummary.first_report)}`} />
		</div>
	);

	function markAsResolved() {
		resolveReports({
			variables: {
				userId: reportSummary.user.id,
			},
		});
	}

	if (resolveReportsData?.data?.resolveReports) {
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
						loading={resolveReportsData?.loading}
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
	report: Report;
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
