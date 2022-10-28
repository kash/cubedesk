import React from 'react';
import './Reports.scss';
import block from '../../../styles/bem';
import {gql, useQuery} from '@apollo/client';
import {REPORT_SUMMARY_FRAGMENT} from '../../../util/graphql/fragments';
import {ReportSummary as ReportSummarySchema} from '../../../@types/generated/graphql';
import Loading from '../../common/loading/Loading';
import Empty from '../../common/empty/Empty';
import ReportSummary from './report_summary/ReportSummary';

const b = block('admin-report-list');

const REPORTS_QUERY = gql`
	${REPORT_SUMMARY_FRAGMENT}

	query Query {
		reports {
			...ReportSummaryFragment
		}
	}
`;

export default function Reports() {
	const {data, loading} = useQuery<{reports: ReportSummarySchema[]}>(REPORTS_QUERY, {
		fetchPolicy: 'no-cache',
	});

	if (loading) {
		return (
			<div className={b({loading})}>
				<Loading />
			</div>
		);
	} else if (!data?.reports || !data?.reports?.length) {
		return (
			<div className={b({empty: true})}>
				<Empty text="No reports to review" />
			</div>
		);
	}

	const reports = data.reports.map((report) => <ReportSummary reportSummary={report} key={report.last_report} />);

	return <div className={b()}>{reports}</div>;
}
