import React, {ReactNode} from 'react';
import {getSolveStepsWithoutParents} from '@/components/solve-info/util/solution';
import {getTimeString} from '@/util/time';
import {STEP_NAME_MAP} from '@/components/solve-info/util/consts';
import {Solve} from '@/types/solve';

interface Props {
	solve: Solve;
}

export default function ExecutionTime(props: Props) {
	const {solve} = props;

	const steps = getSolveStepsWithoutParents(solve);
	const parts: ReactNode[] = [];

	let totalTime = 0;
	for (const step of steps) {
		totalTime += step.recognition_time;
		totalTime += step.total_time;
	}

	for (const step of steps) {
		parts.push(
			<div
				key={step.step_name + 'rec'}
				className="mx-px flex flex-col items-center"
				style={{
					width: `${(step.recognition_time / totalTime) * 100}%`,
				}}
			>
				<p className="m-0 flex min-h-8 items-end text-center text-[0.85rem] opacity-90" />
				<span className="mt-[3px] table h-[5px] w-full rounded-[3px] bg-button" />
				<p className="m-0 mt-[5px] min-h-8 text-center text-[0.85rem] opacity-70" />
			</div>
		);

		parts.push(
			<div
				key={step.step_name}
				className="mx-px flex flex-col items-center"
				style={{
					width: `${(step.total_time / totalTime) * 100}%`,
				}}
			>
				<p className="m-0 flex min-h-8 items-end text-center text-[0.85rem] opacity-90">
					{STEP_NAME_MAP[step.step_name]}
				</p>
				<span className="mt-[3px] table h-[5px] w-full rounded-[3px] bg-primary" />
				<p className="m-0 mt-[5px] min-h-8 text-center text-[0.85rem] opacity-70">
					{getTimeString(step.total_time, 1)}s
				</p>
			</div>
		);
	}

	return (
		<div>
			<h3 className="mb-5 mt-0 text-[1.1rem] font-semibold text-text">Execution Time</h3>
			<div className="flex w-full flex-row items-start">{parts}</div>
		</div>
	);
}
