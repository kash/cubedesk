import CopyText from '@/components/common/CopyText';
import {STEP_NAME_MAP} from '@/components/solve-info/util/consts';
import {getSolveStepsWithChildren} from '@/components/solve-info/util/solution';
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

	function getTps() {
		return Math.floor((solve.smart_turn_count / solve.raw_time) * 100) / 100;
	}

	function getStep(step: SolveMethodStep, isChild: boolean, children?: ReactNode[]) {
		return (
			<div
				key={step.step_name}
				className={classNames('box-border w-full rounded border-2 border-button p-2.5', {
					'mb-2.5 ml-2.5 mt-[5px]': isChild,
				})}
			>
				<div className="flex w-full flex-row items-start justify-between">
					<div className="flex flex-col items-start">
						<legend className="mb-0 w-auto font-bold text-text">{STEP_NAME_MAP[step.step_name] ?? step.step_name}</legend>
						<div className="mt-1.5 flex flex-row flex-wrap">
							<span className="mr-3 table border-t-[3px] border-info pt-0.5 text-[0.9rem] font-medium text-text opacity-70">
								{getTimeString(step.total_time ?? 0)}s
							</span>
							<span className="mr-3 table border-t-[3px] border-success pt-0.5 text-[0.9rem] font-medium text-text opacity-70">
								{step.turn_count} Turns
							</span>
							<span className="mr-3 table border-t-[3px] border-warning pt-0.5 text-[0.9rem] font-medium text-text opacity-70">
								{step.tps} TPS
							</span>
						</div>
					</div>

					<CopyText
						text={step.turns ?? ''}
						buttonProps={{
							text: 'Copy moves',
						}}
					/>
				</div>
				{children ? (
					<div className="mb-2.5 mr-5 mt-[15px]">{children}</div>
				) : (
					<p className="mb-[7px] mt-1.5 font-mono text-text">{step.turns}</p>
				)}
			</div>
		);
	}

	const turns = JSON.parse(solve.smart_turns);
	const solution = processSmartTurns(
		turns.map((turn) => turn.turn),
		true
	).join(' ');

	const stepsBody: ReactNode[] = [];
	for (const step of steps) {
		let children: ReactNode = null;
		if (step.children.length) {
			children = step.children.map((child) => getStep(child, true));
		}

		stepsBody.push(getStep(step.step, false, children));
	}

	return (
		<div className="relative flex min-h-[150px] w-full flex-col items-start pb-[45px]">
			<div className="flex w-full flex-col gap-[15px]">{stepsBody}</div>
			<hr className="my-5 h-0.5 w-full border-none bg-button" />
			{getStep(
				{
					step_name: 'full',
					tps: getTps(),
					turn_count: solve.smart_turn_count,
					total_time: solve.time,
					turns: solution,
				},
				false
			)}
		</div>
	);
}
