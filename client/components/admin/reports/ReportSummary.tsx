import Avatar from '@/components/common/avatar/Avatar';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Spinner} from '@/components/ui/spinner';
import {ReportSummary as ReportSummaryData, ReportWithUsers} from '@/types/report';
import {Serialized} from '@/types/serialized';
import {getDateFromNow} from '@/util/dates';
import {trpc} from '@/util/trpc';
import React, {useState} from 'react';

interface Props {
	reportSummary: Serialized<ReportSummaryData>;
}

export default function ReportSummary(props: Props) {
	const {reportSummary} = props;

	const [resolving, setResolving] = useState(false);
	const [resolved, setResolved] = useState(false);

	const rows = reportSummary.reports.map((report, index) => (
		<SingleReport
			key={report.id}
			report={report}
			showBorder={index < reportSummary.reports.length - 1}
		/>
	));
	const count = reportSummary.count;
	const topInfo = (
		<div className="absolute top-0 right-0 flex flex-col items-end gap-1.5">
			<Badge variant="warning">{`${count} report${count === 1 ? '' : 's'}`}</Badge>
			<Badge
				size="sm"
				variant="unfilled"
			>{`Last reported ${getDateFromNow(reportSummary.last_report)}`}</Badge>
			<Badge
				size="sm"
				variant="unfilled"
			>{`First reported ${getDateFromNow(reportSummary.first_report)}`}</Badge>
		</div>
	);

	async function markAsResolved() {
		setResolving(true);
		try {
			await trpc.report.resolve.mutate({
				userId: reportSummary.user.id,
			});
			setResolved(true);
		} finally {
			setResolving(false);
		}
	}

	if (resolved) {
		return null;
	}

	return (
		<div className="border-tmo-module/20 bg-module mb-5 box-border w-full rounded-[3px] border-2 p-[15px]">
			<div className="relative min-h-[150px] w-full">
				{topInfo}
				<div>
					<Avatar showOptions user={reportSummary.user} />
				</div>
				<div className="mt-2.5">{rows}</div>
				<div className="absolute right-0 bottom-0">
					<Button
						variant="default"
						onClick={markAsResolved}
						disabled={resolving}
						aria-busy={resolving}
					>
						{'Mark as Resolve'}
						{resolving ? <Spinner aria-hidden="true" /> : null}
					</Button>
				</div>
			</div>
		</div>
	);
}

interface SingleReportProps {
	report: Serialized<ReportWithUsers>;
	showBorder: boolean;
}

function SingleReport(props: SingleReportProps) {
	const {report, showBorder} = props;

	const byUsername = report.created_by.username;

	return (
		<div
			className={`flex w-full flex-col items-start py-2 ${
				showBorder ? 'border-tmo-module/10 border-b-2' : ''
			}`}
		>
			<p className="m-0 p-0">{report.reason}</p>
			<a
				href={`/user/${byUsername}`}
				target="_blank"
				className="text-text hover:border-text border-b-2 border-transparent text-sm font-semibold opacity-50"
			>
				{byUsername}
			</a>
		</div>
	);
}
