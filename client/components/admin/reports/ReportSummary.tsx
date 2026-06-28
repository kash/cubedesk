import React from 'react';
import {Report, ReportSummary as ReportSummarySchema} from '@/@types/generated/graphql';
import Avatar from '@/components/common/avatar/Avatar';
import Tag from '@/components/common/tag/Tag';
import {getDateFromNow} from '@/util/dates';
import Button from '@/components/common/button/Button';
import {gql, useMutation} from '@apollo/client';

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

	const rows = reportSummary.reports.map((report: Report, index) => (
		<SingleReport key={report.id} report={report} showBorder={index < reportSummary.reports.length - 1} />
	));
	const count = reportSummary.count;
	const topInfo = (
		<div className="absolute right-0 top-0 flex flex-col items-end gap-1.5">
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
		<div className="mb-5 box-border w-full rounded-[3px] border-2 border-tmo-module/20 bg-module p-[15px]">
			<div className="relative min-h-[150px] w-full">
				{topInfo}
				<div>
					<Avatar showOptions user={reportSummary.user} />
				</div>
				<div className="mt-2.5">{rows}</div>
				<div className="absolute bottom-0 right-0">
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
	showBorder: boolean;
}

function SingleReport(props: SingleReportProps) {
	const {report, showBorder} = props;

	const byUsername = report.created_by.username;

	return (
		<div
			className={`flex w-full flex-col items-start py-2 ${
				showBorder ? 'border-b-2 border-tmo-module/10' : ''
			}`}
		>
			<p className="m-0 p-0">{report.reason}</p>
			<a
				href={`/user/${byUsername}`}
				target="_blank"
				className="border-b-2 border-transparent text-sm font-semibold text-text opacity-50 hover:border-text"
			>
				{byUsername}
			</a>
		</div>
	);
}
