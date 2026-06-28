import React from 'react';
import {UserAccountSolvesSummary, UserAccountSummary} from '../../../../server/schemas/UserAccount.schema';
import {getCubeTypeInfoById} from '@/util/cubes/util';
import {getTimeString} from '@/util/time';

interface Props {
	summary: UserAccountSummary;
}

export default function UserSummary(props: Props) {
	const {summary} = props;

	function getPill(title: string, value: string) {
		return (
			<div className="rounded-[23px] border-[3px] border-tmo-button/10 bg-button py-[15px] pl-[15px] pr-2.5">
				<span className="text-[1.1rem] text-tmo-button">{title}</span>
				<span className="ml-2.5 rounded-[15px] bg-secondary px-[13px] py-1.5 text-[1.1rem] text-tmo-secondary">
					{value}
				</span>
			</div>
		);
	}

	function getSummarySection(summaryType: string, cubeTypes: UserAccountSolvesSummary[]) {
		if (!cubeTypes || !cubeTypes.length) {
			return (
				<div>
					<span className="mb-2.5 mt-[5px] text-[1.1rem] italic text-text/80">No data</span>
				</div>
			);
		}

		return cubeTypes.map((ct, index) => {
			const cubeType = getCubeTypeInfoById(ct.cube_type);

			return (
				<div
					key={`${summaryType}-ss-${cubeType.id}`}
					className={index < cubeTypes.length - 1 ? 'mb-[15px]' : ''}
				>
					<h4>{cubeType.name}</h4>
					<div className="flex flex-row flex-wrap gap-2.5">
						{getPill('Solves', ct.count.toLocaleString())}
						{getPill('Total Time', getTimeString(ct.sum, 2))}
						{getPill('Average', getTimeString(ct.average, 2))}
						{getPill('Min Time', getTimeString(ct.min_time, 2))}
						{getPill('Max Time', getTimeString(ct.max_time, 2))}
					</div>
				</div>
			);
		});
	}

	const matchWinPercent = 100 - Math.floor((summary.matches.losses / summary.matches.count) * 100) / 10;

	return (
		<div className="col-span-2">
			<div className="border-b-2 border-tmo-module/20 p-[15px]">
				<h3>Overview</h3>
				<div className="flex flex-row flex-wrap gap-2.5">
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
			<div className="border-b-2 border-tmo-module/20 p-[15px]">
				<h3>Timer Solves</h3>
				{getSummarySection('match', summary.timer_solves)}
			</div>
			<div className="p-[15px]">
				<h3>1v1 Solves</h3>
				{getSummarySection('timer', summary.match_solves)}
			</div>
		</div>
	);
}
