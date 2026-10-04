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
			<div className="bg-button/60 text-text flex flex-col gap-1.5 rounded-xl p-3.5">
				<div className="text-text/60 flex flex-row items-center gap-1.5 text-xs">
					{icon}
					<span className="truncate">{title}</span>
				</div>
				<span className="text-2xl font-bold tabular-nums">{val}</span>
			</div>
		);
	}

	return (
		<div className="w-full">
			<div className="grid grid-cols-3 gap-2.5">
				{getStatCard(<ArrowsClockwise className="shrink-0" />, 'TPS', tps)}
				{getStatCard(
					<Timer className="shrink-0" />,
					'Inspection',
					smartInspectionTime ? smartInspectionTime + 's' : '-',
				)}
				{getStatCard(
					<ArrowCounterClockwise className="shrink-0" />,
					'Turns',
					smartTurnCount,
				)}
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
