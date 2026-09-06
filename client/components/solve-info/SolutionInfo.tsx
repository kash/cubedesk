import CopyText from '@/components/common/CopyText';
import {STEP_NAME_MAP} from '@/components/solve-info/util/consts';
import {getSolveStepsWithChildren} from '@/components/solve-info/util/solution';
import {Separator} from '@/components/ui/separator';
import {SolveMethodStep} from '@/types/solve';
import {Solve} from '@/types/solve';
import {processSmartTurns} from '@/util/smart_scramble';
import {getTimeString} from '@/util/time';
import classNames from 'classnames';
import React, {ReactNode} from 'react';

interface Props {
	solve: Solve;
}

export default function SolutionInfo(props: Props) {
	const {solve} = props;
	const steps = getSolveStepsWithChildren(solve);

	// Solution info only renders for smart-cube solves, which always carry these
	const smartTurnCount = solve.smart_turn_count ?? 0;
	const rawTime = solve.raw_time ?? solve.time;

	function getTps() {
		return Math.floor((smartTurnCount / rawTime) * 100) / 100;
	}

	// Accepts the narrow shape this helper reads so both real SolveMethodSteps
	// and the synthetic "full solve" summary step can be rendered
	function getStep(
		step: Pick<SolveMethodStep, 'step_name' | 'tps' | 'turn_count' | 'total_time' | 'turns'>,
		isChild: boolean,
		children?: ReactNode[],
	) {
		return (
			<div
				key={step.step_name}
				className={classNames('border-button box-border w-full rounded border-2 p-2.5', {
					'mt-[5px] mb-2.5 ml-2.5': isChild,
				})}
			>
				<div className="flex w-full flex-row items-start justify-between">
					<div className="flex flex-col items-start">
						<span className="text-text mb-0 w-auto font-bold">
							{STEP_NAME_MAP[step.step_name] ?? step.step_name}
						</span>
						<div className="mt-1.5 flex flex-row flex-wrap">
							<span className="border-info text-text mr-3 table border-t-[3px] pt-0.5 text-[0.9rem] font-medium opacity-70">
								{getTimeString(step.total_time ?? 0)}s
							</span>
							<span className="border-success text-text mr-3 table border-t-[3px] pt-0.5 text-[0.9rem] font-medium opacity-70">
								{step.turn_count} Turns
							</span>
							<span className="border-warning text-text mr-3 table border-t-[3px] pt-0.5 text-[0.9rem] font-medium opacity-70">
								{step.tps} TPS
							</span>
						</div>
					</div>

					<CopyText
						text={step.turns ?? ''}
						buttonProps={{
							children: 'Copy moves',
						}}
					/>
				</div>
				{children ? (
					<div className="mt-[15px] mr-5 mb-2.5">{children}</div>
				) : (
					<p className="text-text mt-1.5 mb-[7px] font-mono">{step.turns}</p>
				)}
			</div>
		);
	}

	const turns = JSON.parse(solve.smart_turns ?? '[]');
	const solution = processSmartTurns(
		turns.map((turn) => turn.turn),
		true,
	).join(' ');

	const stepsBody: ReactNode[] = [];
	for (const step of steps) {
		let children: ReactNode[] | undefined;
		if (step.children.length) {
			children = step.children.map((child) => getStep(child, true));
		}

		stepsBody.push(getStep(step.step, false, children));
	}

	return (
		<div className="relative flex min-h-[150px] w-full flex-col items-start pb-[45px]">
			<div className="flex w-full flex-col gap-[15px]">{stepsBody}</div>
			<Separator className="my-6" />
			{getStep(
				{
					step_name: 'full',
					tps: getTps(),
					turn_count: smartTurnCount,
					total_time: solve.time,
					turns: solution,
				},
				false,
			)}
		</div>
	);
}
