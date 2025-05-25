import React from 'react';
import './Reports.scss';
import block from '../../../styles/bem';
import Loading from '../../common/loading/Loading';
import Empty from '../../common/empty/Empty';
import ReportSummary from './report_summary/ReportSummary';
import {api} from '@/trpc/react';

const b = block('admin-report-list');

export default function Reports() {
	const {data, isLoading: loading} = api.report.reports.useQuery();

	if (loading) {
		return (
			<div className={b({loading})}>
				<Loading />
			</div>
		);
	} else if (!data || !data?.length) {
		return (
			<div className={b({empty: true})}>
				<Empty text="No reports to review" />
			</div>
		);
	}

	const reports = data.map((report) => <ReportSummary reportSummary={report} key={report.last_report.toString()} />);

	return <div className={b()}>{reports}</div>;
}
