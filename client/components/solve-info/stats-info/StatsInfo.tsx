import ExecutionTime from '@/components/solve-info/stats-info/ExecutionTime';
import LLTrainer, {getOllAndPllFromSolve} from '@/components/solve-info/stats-info/LLTrainer';
import RecognitionChart from '@/components/solve-info/stats-info/RecognitionChart';
import StepPie from '@/components/solve-info/stats-info/StepPie';
import {Separator} from '@/components/ui/separator';
import {Solve} from '@/types/solve';
import {ArrowCounterClockwise, ArrowsClockwise, Timer} from 'phosphor-react';
import React, {ReactNode} from 'react';

interface Props {
	solve: Solve;
}

export default function StatsInfo(props: Props) {
	const {solve} = props;

	const time = solve.raw_time ?? solve.time;
	const smartTurnCount = solve.smart_turn_count ?? 0;
	const smartInspectionTime = solve.inspection_time;
	const tps = Math.floor((smartTurnCount / time) * 10) / 10;

	function getStatCard(icon: ReactNode, title: string, val: number | string) {
		return (
			<div className="bg-module text-text box-border rounded-[13px] p-[15px]">
				{icon}
				<p className="mt-2.5 text-[0.85rem] text-inherit opacity-70">{title}</p>
				<h4 className="text-[1.9rem] font-bold text-inherit">{val}</h4>
			</div>
		);
	}

	return (
		<div className="w-full">
			<div className="bg-module text-text relative box-border w-full rounded-[13px] p-[15px]">
				{getStatCard(<ArrowsClockwise />, 'Turns Per Second', tps)}
				{getStatCard(
					<Timer />,
					'Inspection Time',
					smartInspectionTime ? smartInspectionTime + 's' : '-',
				)}
				{getStatCard(<ArrowCounterClockwise />, 'Turns', smartTurnCount)}
			</div>
			<Separator className="my-6" />
			<div className="relative box-border w-full p-0">
				<StepPie solve={solve} />
			</div>
			<Separator className="my-6" />
			<div className="relative box-border w-full p-0">
				<ExecutionTime solve={solve} />
			</div>
			<Separator className="my-6" />
			<div className="relative box-border w-full p-0">
				<RecognitionChart solve={solve} />
			</div>
			{getOllAndPllFromSolve(solve) ? (
				<>
					<Separator className="my-6" />
					<div className="relative box-border w-full p-0">
						<LLTrainer solve={solve} />
					</div>
				</>
			) : null}
		</div>
	);
}
