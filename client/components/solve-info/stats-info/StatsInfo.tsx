import React from 'react';
import {Timer, ArrowCounterClockwise, ArrowsClockwise} from 'phosphor-react';
import StepPie from '@/components/solve-info/stats-info/StepPie';
import RecognitionChart from '@/components/solve-info/stats-info/RecognitionChart';
import ExecutionTime from '@/components/solve-info/stats-info/ExecutionTime';
import LLTrainer, {getOllAndPllFromSolve} from '@/components/solve-info/stats-info/LLTrainer';
import {Solve} from '../../../../server/schemas/Solve.schema';

interface Props {
	solve: Solve;
}

export default function StatsInfo(props: Props) {
	const {solve} = props;

	const time = solve.raw_time;
	const smartTurnCount = solve.smart_turn_count;
	const smartInspectionTime = solve.inspection_time;
	const tps = Math.floor((smartTurnCount / time) * 10) / 10;

	function getStatCard(icon: JSX.Element, title: string, val: number | string) {
		return (
			<div className="box-border rounded-[13px] bg-module p-[15px] text-text">
				{icon}
				<p className="mt-2.5 text-[0.85rem] text-inherit opacity-70">{title}</p>
				<h4 className="text-[1.9rem] font-bold text-inherit">{val}</h4>
			</div>
		);
	}

	return (
		<div className="w-full">
			<div className="relative box-border w-full rounded-[13px] bg-module p-[15px] text-text">
				{getStatCard(<ArrowsClockwise />, 'Turns Per Second', tps)}
				{getStatCard(<Timer />, 'Inspection Time', smartInspectionTime ? smartInspectionTime + 's' : '-')}
				{getStatCard(<ArrowCounterClockwise />, 'Turns', smartTurnCount)}
			</div>
			<hr className="my-5 h-0.5 w-full border-none bg-button" />
			<div className="relative box-border w-full p-0">
				<StepPie solve={solve} />
			</div>
			<hr className="my-5 h-0.5 w-full border-none bg-button" />
			<div className="relative box-border w-full p-0">
				<ExecutionTime solve={solve} />
			</div>
			<hr className="my-5 h-0.5 w-full border-none bg-button" />
			<div className="relative box-border w-full p-0">
				<RecognitionChart solve={solve} />
			</div>
			{getOllAndPllFromSolve(solve) ? (
				<>
					<hr className="my-5 h-0.5 w-full border-none bg-button" />
					<div className="relative box-border w-full p-0">
						<LLTrainer solve={solve} />
					</div>
				</>
			) : null}
		</div>
	);
}
