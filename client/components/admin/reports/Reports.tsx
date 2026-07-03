import React, {useEffect, useState} from 'react';
import Loading from '@/components/common/Loading';
import Empty from '@/components/common/Empty';
import ReportSummary from '@/components/admin/reports/ReportSummary';
import {trpc} from '@/util/trpc';
import {ReportSummary as ReportSummaryData} from '@/types/report';
import {Serialized} from '@/types/serialized';

export default function Reports() {
	const [reports, setReports] = useState<Serialized<ReportSummaryData>[] | null>(null);

	useEffect(() => {
		trpc.report.list.query().then((res) => {
			setReports(res);
		});
	}, []);

	if (!reports) {
		return (
			<div className="mx-auto w-full max-w-[700px]">
				<Loading />
			</div>
		);
	} else if (!reports.length) {
		return (
			<div className="mx-auto w-full max-w-[700px]">
				<Empty text="No reports to review" />
			</div>
		);
	}

	const rows = reports.map((report) => (
		<ReportSummary reportSummary={report} key={report.last_report} />
	));

	return <div className="mx-auto w-full max-w-[700px]">{rows}</div>;
}
