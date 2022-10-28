import React from 'react';
import './UserSummary.scss';
import block from '../../../../styles/bem';
import {UserAccountSolvesSummary, UserAccountSummary} from '../../../../../server/schemas/UserAccount.schema';
import {getCubeTypeInfoById} from '../../../../util/cubes/util';
import {getTimeString} from '../../../../util/time';

const b = block('manage-user-summary');

interface Props {
	summary: UserAccountSummary;
}

export default function UserSummary(props: Props) {
	const {summary} = props;

	function getPill(title: string, value: string) {
		return (
			<div className={b('pill')}>
				<span className={b('pill-title')}>{title}</span>
				<span className={b('pill-value')}>{value}</span>
			</div>
		);
	}

	function getSummarySection(summaryType: string, cubeTypes: UserAccountSolvesSummary[]) {
		const list = [];

		if (!cubeTypes || !cubeTypes.length) {
			return (
				<div className={b('solve-cubetype')}>
					<span>No data</span>
				</div>
			);
		}

		for (const ct of cubeTypes) {
			const cubeType = getCubeTypeInfoById(ct.cube_type);

			list.push(
				<div key={`${summaryType}-ss-${cubeType.id}`} className={b('solve-cubetype')}>
					<h4>{cubeType.name}</h4>
					<div className={b('pills')}>
						{getPill('Solves', ct.count.toLocaleString())}
						{getPill('Total Time', getTimeString(ct.sum, 2))}
						{getPill('Average', getTimeString(ct.average, 2))}
						{getPill('Min Time', getTimeString(ct.min_time, 2))}
						{getPill('Max Time', getTimeString(ct.max_time, 2))}
					</div>
				</div>
			);
		}

		return list;
	}

	const matchWinPercent = 100 - Math.floor((summary.matches.losses / summary.matches.count) * 100) / 10;

	return (
		<div className={b()}>
			<div className={b('section')}>
				<h3>Overview</h3>
				<div className={b('pills')}>
					{getPill('Solves', summary.solves.toLocaleString())}
					{getPill('Bans', summary.bans.toLocaleString())}
					{getPill('Reports Received', summary.reports_for.toLocaleString())}
					{getPill('Reports Created', summary.reports_created.toLocaleString())}
					{getPill('Matches Played', summary.matches.count.toLocaleString())}
					{getPill('Matches Won', summary.matches.wins.toLocaleString())}
					{getPill('Matches Lost', summary.matches.losses.toLocaleString())}
					{getPill('Match Win %', matchWinPercent + '%')}
				</div>
			</div>
			<div className={b('section')}>
				<h3>Timer Solves</h3>
				{getSummarySection('match', summary.timer_solves)}
			</div>
			<div className={b('section')}>
				<h3>1v1 Solves</h3>
				{getSummarySection('timer', summary.match_solves)}
			</div>
		</div>
	);
}
