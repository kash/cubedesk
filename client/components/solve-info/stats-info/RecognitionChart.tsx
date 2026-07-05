import {STEP_NAME_MAP} from '@/components/solve-info/util/consts';
import {getSolveStepsWithoutParents} from '@/components/solve-info/util/solution';
import {SolveMethodStep} from '@/types/solve';
import {Solve} from '@/types/solve';
import {getTimeString} from '@/util/time';
import classNames from 'classnames';
import React, {ReactNode} from 'react';

interface Props {
	solve: Solve;
}

export default function RecognitionChart(props: Props) {
	const {solve} = props;
	const rawTime = solve.raw_time ?? solve.time;

	// Accepts the narrow shape this helper reads so both real SolveMethodSteps
	// and the synthetic inspection step can be rendered
	function getChartBar(
		step: Pick<SolveMethodStep, 'step_name' | 'recognition_time'>,
		percent: number,
		gray: boolean = false
	) {
		const recTime = step.recognition_time;
		const percentString = Math.floor((recTime / rawTime) * 1000) / 100;

		return (
			<div key={step.step_name} className="mb-[15px] grid grid-cols-[100px_1fr]">
				<div className="text-[0.9rem] font-semibold text-text">{STEP_NAME_MAP[step.step_name]}</div>
				<div>
					<span
						className={classNames('table h-[5px] min-w-[5px] rounded-[3px]', {
							'bg-primary': !gray,
							'bg-text opacity-30': gray,
						})}
						style={{width: `${percent}%`}}
					/>
					<p className="mt-0.5 text-[0.9rem] italic text-text opacity-80">
						{getTimeString(recTime, 1)}s {gray ? null : `(${percentString}%)`}
					</p>
				</div>
			</div>
		);
	}

	const steps = getSolveStepsWithoutParents(solve);
	const output: ReactNode[] = [];

	let totalRecTime = 0;

	for (const step of steps) {
		totalRecTime += step.recognition_time;
	}

	for (const step of steps) {
		output.push(getChartBar(step, (step.recognition_time / totalRecTime) * 100));
	}

	return (
		<div>
			<h3 className="mb-5 mt-0 text-[1.1rem] font-semibold text-text">Recognition Time</h3>
			{getChartBar(
				{
					step_name: 'inspection',
					recognition_time: solve.inspection_time ?? 0,
				},
				100,
				true
			)}
			{output}
		</div>
	);
}
